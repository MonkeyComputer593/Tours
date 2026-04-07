import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, Download, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAllPermisos, urlFor } from "../lib/sanity";

interface Permiso {
  _id: string;
  titulo: string;
  tituloEn: string;
  tipo: string;
  documento: any;
}

interface PermisosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PermisosModal({ isOpen, onClose }: PermisosModalProps) {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const [permisos, setPermisos] = useState<Permiso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getAllPermisos()
        .then((data) => {
          setPermisos(data || []);
        })
        .catch((err) => {
          console.error("Error fetching permisos:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen]);

  const getTitulo = (permiso: Permiso) => {
    return isEnglish && permiso.tituloEn ? permiso.tituloEn : permiso.titulo;
  };

  const getTipoLabel = (tipo: string) => {
    const labels: Record<string, string> = {
      bomberos: "Bomberos",
      compania: "Compañía",
      viceministerio: "Viceministerio de Turismo",
      ruc: "RUC",
      licencia: "Licencia Única de Funcionamiento",
      otro: "Otro",
    };
    return labels[tipo] || tipo;
  };

  const getDocumentoUrl = (documento: any) => {
    if (!documento?.asset) return null;
    return documento.asset.url || urlFor(documento).url();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F27D26]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#F27D26]" />
                  </div>
                  <h2 className="text-lg font-black uppercase tracking-wide text-gray-900">
                    {isEnglish ? "Legal Permits" : "Permisos Legales"}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 overflow-y-auto max-h-[60vh]">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-[#F27D26] animate-spin" />
                  </div>
                ) : permisos.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">
                      {isEnglish
                        ? "No permits available yet."
                        : "No hay permisos disponibles aún."}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {permisos.map((permiso) => (
                      <div
                        key={permiso._id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-1">
                          <p className="font-bold text-gray-900">
                            {getTitulo(permiso)}
                          </p>
                          <p className="text-xs text-[#F27D26] font-medium uppercase tracking-wider mt-1">
                            {getTipoLabel(permiso.tipo)}
                          </p>
                        </div>
                        {getDocumentoUrl(permiso.documento) && (
                          <a
                            href={getDocumentoUrl(permiso.documento)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#F27D26] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-orange-600 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            {isEnglish ? "Download" : "Descargar"}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
