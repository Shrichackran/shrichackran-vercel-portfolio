import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function AssetModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="modal-backdrop asset-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="asset-modal glass-card" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close assets modal"><X size={20} /></button>
        <span className="eyebrow">Project Assets</span>
        <h3>{project.title}</h3>
        <p className="asset-intro">Output screenshots and architecture visuals from this project.</p>
        {project.assets.length > 0 ? (
          <div className="asset-grid">
            {project.assets.map((asset, index) => (
              <figure key={asset.src}>
                <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} asset ${index + 1}`}>
                  <img src={asset.src} alt={asset.caption || `${project.title} output ${index + 1}`} loading="lazy" />
                </a>
                {asset.caption && <figcaption>{index + 1}. {asset.caption}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <div className="empty-assets">
            <p>No output images are available for this project yet.</p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
