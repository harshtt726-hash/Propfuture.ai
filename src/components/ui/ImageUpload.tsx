import React, { useState, useRef } from 'react';
import { Upload, X, Check, Image as ImageIcon, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface ImageUploadProps {
  onUpload?: (url: string) => void;
  currentImage?: string;
  className?: string;
  label?: string;
}

export default function ImageUpload({ onUpload, currentImage, className, label }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState(currentImage || '');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = (file: File) => {
    setIsUploading(true);
    setProgress(0);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      
      // Simulate progress
      let p = 0;
      const interval = setInterval(() => {
        p += Math.random() * 30;
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          setPreview(result);
          setIsUploading(false);
          if (onUpload) onUpload(result);
        }
        setProgress(p);
      }, 300);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => {
    setPreview('');
    if (onUpload) onUpload('');
  };

  return (
    <div className={cn("space-y-4", className)}>
      {label && <label className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-4">{label}</label>}
      
      <div 
        className={cn(
          "relative h-48 rounded-3xl border-2 border-dashed transition-all flex items-center justify-center overflow-hidden",
          preview ? "border-brand-neon/30 bg-brand-neon/[0.02]" : "border-white/10 hover:border-brand-neon/30 bg-white/[0.02]",
          dragActive && "border-brand-neon bg-brand-neon/10",
          isUploading && "border-brand-cyan/30"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !preview && !isUploading && fileInputRef.current?.click()}
      >
        <input 
          ref={fileInputRef}
          type="file" 
          className="hidden" 
          accept="image/*"
          onChange={handleFileChange}
        />

        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div 
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 group"
            >
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                 <button 
                  onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all"
                 >
                    <Upload size={20} className="text-white" />
                 </button>
                 <button 
                  onClick={(e) => { e.stopPropagation(); removeImage(); }}
                  className="w-12 h-12 bg-red-500/20 hover:bg-red-500/40 rounded-xl flex items-center justify-center transition-all"
                 >
                    <X size={20} className="text-red-500" />
                 </button>
              </div>
            </motion.div>
          ) : isUploading ? (
            <motion.div 
              key="uploading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <Loader2 size={32} className="text-brand-cyan animate-spin" />
              <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-cyan"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">PROPAGATING_BYTES... {Math.round(progress)}%</span>
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4 text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center border border-white/5 mb-2 group-hover:scale-110 transition-transform">
                <ImageIcon size={24} className="text-white/20" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Push Image Node</p>
                <p className="text-[8px] text-white/20 uppercase font-medium tracking-widest">Drag and drop or click to synchronize</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
