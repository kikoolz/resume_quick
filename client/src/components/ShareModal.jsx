import { motion, AnimatePresence } from "framer-motion";
import { Copy, X } from "lucide-react";
import { Linkedin, Twitter, Facebook, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const ShareModal = ({ isOpen, onClose, url, isPublic = true }) => {
  const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      name: "Copy Link",
      action: () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      color: "text-green-500",
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(url)}`,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      color: "text-blue-600",
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      color: "text-sky-400",
      name: "Twitter",
      href: `https://twitter.com/share?url=${encodeURIComponent(url)}`,
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      color: "text-blue-700",
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      color: "text-red-500",
      name: "Email",
      href: `mailto:?subject=My Resume&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="backdrop-blur-lg bg-white/30 border border-white/30 rounded-2xl p-6 w-full max-w-md shadow-xl relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Share Resume</h2>
              <button onClick={onClose}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {shareOptions.map((opt, i) =>
                opt.href ? (
                  <a
                    key={i}
                    href={opt.href}
                    target="_blank"
                    className={`border rounded-xl p-3 text-center hover:bg-neutral-100 ${
                      !isPublic ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    {opt.icon && (
                      <span className="flex items-center gap-2">
                        <span className={`${opt.color}`}>{opt.icon}</span>
                        <span>{opt.name}</span>
                      </span>
                    )}
                  </a>
                ) : (
                  <button
                    key={i}
                    onClick={opt.action}
                    disabled={!isPublic}
                    className={`border rounded-xl p-3 text-center hover:bg-neutral-100 flex items-center justify-center gap-2 ${
                      !isPublic ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    <Copy className="w-4 h-4" /> {opt.name}
                  </button>
                )
              )}
            </div>

            {/* QR Code */}
            {isPublic && url && (
              <div className="flex justify-center mb-4">
                <QRCodeCanvas value={url} size={128} />
              </div>
            )}

            {/* Toast for copied */}
            {copied && (
              <div className="absolute top-2 right-2 bg-green-100 text-green-500 px-4 py-2 rounded-md shadow-md animate-fade">
                Link Copied!
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
