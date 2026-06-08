import { useEffect, useState } from 'react';

const bootLines = [
  'whoami',
  'Shrichackran K M  •  Full-Stack Developer',
  'cat stack.json',
  '{ "ai": ["LLMs", "RAG", "TensorFlow", "PyTorch"], "web": ["React", "Node.js"] }',
  'launch --portfolio --clean-ui --recruiter-ready'
];

export default function BootScreen({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((current) => Math.min(current + 1, bootLines.length - 1));
    }, 230);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1750);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="boot-screen" role="status" aria-label="Opening portfolio">
      <div className="boot-aurora" />
      <div className="boot-stars" />
      <div className="boot-terminal-window">
        <div className="terminal-dots"><span /><span /><span /></div>
        <div className="boot-title-row">
          <span className="boot-brand-mark">S</span>
          <div>
            <p>Opening developer workspace</p>
            <h1>Shrichackran K M</h1>
          </div>
        </div>
        <div className="boot-command-list">
          {bootLines.slice(0, lineIndex + 1).map((line, index) => (
            <p key={`${line}-${index}`} className={index % 2 === 0 ? 'command' : 'output'}>
              <span>{index % 2 === 0 ? '$' : '→'}</span> {line}
            </p>
          ))}
          <i />
        </div>
        <div className="boot-progress"><span /></div>
      </div>
    </div>
  );
}
