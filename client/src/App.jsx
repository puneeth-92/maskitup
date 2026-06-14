import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [maskedText, setMaskedText] = useState("");
  const [stats, setStats] = useState({});
  const [loading, setLoading] =useState(false);

  const handleMask = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:6969/mask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
        }),
      });

      const data = await response.json();

      setMaskedText(data.maskedText);
      setStats(data.stats);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to server");
    }finally{
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setMaskedText("");
    setStats({});
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(maskedText);
      alert("Copied to clipboard");
    } catch (err) {
      console.error(err);
    }
  };

  const totalDetections =
    (stats.emails || 0) +
    (stats.phones || 0) +
    (stats.cards || 0) +
    (stats.aadhaar || 0) +
    (stats.pan || 0) +
    (stats.upi || 0) +
    (stats.url || 0) +
    (stats.ips || 0)+
    (stats.persons || 0)+
    (stats.organizations || 0)+
    (stats.locations || 0);

  return (
    <div className="container">
      <h1 className="title">
        <span className="gradient-text">MaskItUp</span>
      </h1>

      <p className="subtitle">
        Detect and mask sensitive information instantly
      </p>

      <div className="stats-grid" style={{ marginBottom: "25px"}}>
        <div className="stat-card">
          <h4>Total Sensitive Items Found</h4>
          <p>{totalDetections}</p>
        </div>
      </div>

      <div className="main-grid">
        <div className="card">
          <h3 className="card-title">Input Text</h3>

          <textarea
            className="textbox"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste text containing emails, phone numbers, PAN, Aadhaar, URLs, UPI IDs..."
          />

          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={handleMask}
              disabled={loading}
            >
              {loading? "Masking...": "Mask Data"}
            </button>

            <button
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Masked Output</h3>

          <textarea
            className="textbox"
            value={maskedText}
            readOnly
            placeholder="Masked output will appear here..."
          />

          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={handleCopy}
              disabled={!maskedText}
            >
              Copy Output
            </button>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2 className="stats-title">
          Detection Summary
        </h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h4>📧 Emails</h4>
            <p>{stats.emails || 0}</p>
          </div>

          <div className="stat-card">
            <h4>📱 Phones</h4>
            <p>{stats.phones || 0}</p>
          </div>

          <div className="stat-card">
            <h4>💳 Cards</h4>
            <p>{stats.cards || 0}</p>
          </div>

          <div className="stat-card">
            <h4>🪪 Aadhaar</h4>
            <p>{stats.aadhaar || 0}</p>
          </div>

          <div className="stat-card">
            <h4>🆔 PAN</h4>
            <p>{stats.pan || 0}</p>
          </div>

          <div className="stat-card">
            <h4>💸 UPI</h4>
            <p>{stats.upi || 0}</p>
          </div>

          <div className="stat-card">
            <h4>🌐 URLs</h4>
            <p>{stats.url || 0}</p>
          </div>

          <div className="stat-card">
            <h4>🖥️ IPs</h4>
            <p>{stats.ips || 0}</p>
          </div>
          <div className="stat-card">
            <h4>👤 Persons</h4>
            <p>{stats.persons || 0}</p>
          </div>

          <div className="stat-card">
            <h4>🏢 Organizations</h4>
            <p>{stats.organizations || 0}</p>
          </div>

          <div className="stat-card">
            <h4>📍 Locations</h4>
            <p>{stats.locations || 0}</p>
          </div>
        </div>
      </div>

      <p className="footer">
        Built with React • Express • Regex Detection Engine
      </p>
    </div>
  );
}

export default App;