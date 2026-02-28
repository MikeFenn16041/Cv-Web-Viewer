export const DownloadButton = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className="no-print fixed bottom-6 right-6 bg-terminal-bg-light text-terminal-text px-4 py-2 border border-terminal-border hover:bg-terminal-border hover:text-terminal-white transition-colors flex items-center gap-2 font-mono text-sm z-50"
      aria-label="Print CV"
    >
      <span>[</span>
      <span>print</span>
      <span>]</span>
    </button>
  );
};
