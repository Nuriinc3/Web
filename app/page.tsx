
export default function Home() 
{
  return (
    <>
    <div className="parallax-bg"></div>
    <div className="parallax-overlay"></div>
      <nav>
        <span className="logo">Nuri.dev</span>
        <ul className="nav-links">
          <li><a href="#hakkimda">Hakkımda</a></li>
          <li><a href="#yetenekler">Yetenekler</a></li>
          <li><a href="#projeler">Projeler</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
        <a href="#iletisim" className="nav-cta">İletişime Geç</a>
      </nav>

      <section id="hero">
        <div className="hero-eyebrow"><span className="hero-dot"></span> Müh. Öğrencisi · Havacılık Tutkunu</div>
        <h1 className="hero-title">
          <span className="line-name">Nuri.</span>
          <span className="line-sub">Elektrik &amp; Elektronik Mühendisliği<br/>öğrencisi, web geliştirmeye meraklı.</span>
        </h1>
        <div className="hero-badges">
          <span className="badge badge-blue">⚡ EEE Öğrencisi</span>
          <span className="badge badge-cyan">✈️ Havacılık Tutkunu</span>
          <span className="badge badge-purple">💻 Next.js · React</span>
        </div>
        <p className="hero-desc">Devre tasarımından aviyonik sistemlere, web uygulamalarından gömülü sistemlere — her alanda merak ederek öğreniyorum ve inşa ediyorum.</p>
        <div className="hero-actions">
          <a href="#projeler" className="btn-glow">Projelerimi Keşfet ↓</a>
          <a href="#iletisim" className="btn-ghost">Benimle Konuş</a>
        </div>
        <div className="hero-scroll"><div className="scroll-line"></div> Aşağı kaydır</div>
        <div className="hero-stats">
          <div className="stat-item"><div className="stat-num">3+</div><div className="stat-label">Proje</div></div>
          <div className="stat-item"><div className="stat-num">∞</div><div className="stat-label">Merak</div></div>
          <div className="stat-item"><div className="stat-num">1</div><div className="stat-label">Hedef</div></div>
        </div>
      </section>

      <div className="section" id="hakkimda">
        <div className="sec-label">01 — Hakkımda</div>
        <h2 className="sec-title">Merhaba, ben Nuri 👋</h2>
        <div className="sec-line" style={{background:"linear-gradient(90deg,#4D96FF,#00D4FF)"}}></div>
        <div className="about-wrap">
          <div className="about-body">
            <p>Elektrik ve Elektronik Mühendisliği okuyan, havacılığa tutkuyla bağlı bir öğrenciyim.</p>
            <p>Havacılık alanı benim için sadece bir ilgi değil — aviyonik sistemler, insansız hava araçları ve uçuş kontrol sistemleri mühendislik ile havacılığı buluşturan tutkum.</p>
            <p>Web geliştirmeye de yakın zamanda ilgi duymaya başladım. Next.js ve React öğrenerek kendi projelerimi hayata geçiriyorum.</p>
            <div className="about-quote">Hedefim: Havacılık sektöründe ses getiren bir profesyonel olmak.</div>
            <div className="about-chips">
              <span className="chip">Devre Tasarımı</span>
              <span className="chip">Aviyonik</span>
              <span className="chip">React</span>
              <span className="chip">Next.js</span>
              <span className="chip">Python</span>
              <span className="chip">Gömülü Sistemler</span>
              <span className="chip">UAV</span>
            </div>
          </div>
          <div className="about-right">
            <div className="info-card"><div className="info-card-icon" style={{background:"rgba(77,150,255,0.1)"}}>🎓</div><div><div className="info-card-title">Eğitim</div><div className="info-card-sub">Elektrik &amp; Elektronik Müh.</div></div></div>
            <div className="info-card"><div className="info-card-icon" style={{background:"rgba(0,212,255,0.1)"}}>✈️</div><div><div className="info-card-title">Tutku</div><div className="info-card-sub">Havacılık &amp; Aviyonik Sistemler</div></div></div>
            <div className="info-card"><div className="info-card-icon" style={{background:"rgba(107,203,119,0.1)"}}>💡</div><div><div className="info-card-title">Öğrendiklerim</div><div className="info-card-sub">React · Next.js · Elektronik</div></div></div>
            <div className="info-card"><div className="info-card-icon" style={{background:"rgba(199,125,255,0.1)"}}>🌍</div><div><div className="info-card-title">Konum</div><div className="info-card-sub">Türkiye</div></div></div>
            <div style={{marginTop:"1rem"}}>
              <div className="tl-section-label">Yolculuk</div>
              <div className="timeline">
                <div className="tl-item"><div className="tl-year">2021</div><div className="tl-title">Üniversiteye Başladım</div><div className="tl-desc">EEE bölümüne kabul aldım</div></div>
                <div className="tl-item"><div className="tl-year">2026</div><div className="tl-title">Web&apos;e İlgi Duymaya Başladım</div><div className="tl-desc">React ve Next.js öğrenmeye başladım</div></div>
                <div className="tl-item"><div className="tl-year">2026</div><div className="tl-title">İlk Projeler</div><div className="tl-desc">Portfolyo sitemi yayınladım</div></div>
              <div className="tl-item"><div className="tl-year">2026</div><div className="tl-title">Ahmetin pavyon macerası</div><div className="tl-desc">Pavyona Götürcek Barışta gelicek Çağrı belki</div></div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="yetenekler">
        <div className="sec-label">02 — Yetenekler</div>
        <h2 className="sec-title">Neler biliyorum?</h2>
        <div className="sec-line" style={{background:"linear-gradient(90deg,#6BCB77,#4D96FF)"}}></div>
        <div className="skills-wrap">
          <div>
            <div className="skill-group-title">Mühendislik</div>
            {[
              {name:"Devre Analizi",pct:70},
              {name:"Elektronik Tasarım",pct:55},
              {name:"Gömülü Sistemler",pct:40},
              {name:"MATLAB / Simulink",pct:35},
              {name:"PX4",pct:35},
              {name:"Ardo Pilot",pct:35},
              {name:"MATRİX",pct:100},
            ].map(s=>(
              <div className="skill-row" key={s.name}>
                <div className="skill-row-top"><span className="skill-row-name">{s.name}</span><span className="skill-row-pct">{s.pct}%</span></div>
                <div className="skill-track"><div className="skill-fill" style={{width:`${s.pct}%`,background:"linear-gradient(90deg,#4D96FF,#00D4FF)"}}></div></div>
              </div>
            ))}
          </div>
          <div>
            <div className="skill-group-title">Yazılım &amp; Web</div>
            {[
              {name:"C++",pct:60},
              {name:"React",pct:30},
              {name:"Next.js",pct:25},
              {name:"Python",pct:40},
              {name:"JavaScript",pct:30},
            ].map(s=>(
              <div className="skill-row" key={s.name}>
                <div className="skill-row-top"><span className="skill-row-name">{s.name}</span><span className="skill-row-pct">{s.pct}%</span></div>
                <div className="skill-track"><div className="skill-fill" style={{width:`${s.pct}%`,background:"linear-gradient(90deg,#C77DFF,#FF6B6B)"}}></div></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{marginTop:"3rem"}}>
          <div className="skill-group-title" style={{marginBottom:"1rem"}}>Araçlar &amp; Teknolojiler</div>
          <div className="skill-tools">
            {[
              {icon:"⚛️",name:"React"},{icon:"▲",name:"Next.js"},{icon:"🐍",name:"Python"},
              {icon:"🔧",name:"Arduino"},{icon:"📐",name:"MATLAB"},{icon:"🐙",name:"Git"},
              {icon:"💻",name:"VS Code"},{icon:"🎨",name:"Figma"},
            ].map(t=>(
              <div className="tool-pill" key={t.name}>
                <div className="tool-pill-icon">{t.icon}</div>
                <div className="tool-pill-name">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section" id="projeler">
        <div className="sec-label">03 — Projeler</div>
        <h2 className="sec-title">Neler yaptım?</h2>
        <div className="sec-line" style={{background:"linear-gradient(90deg,#FFD93D,#FF6B6B)"}}></div>
        <div className="projects-grid">
          <div className="proj-card">
            <div className="proj-cover" style={{background:"linear-gradient(135deg,rgba(77,150,255,0.15),rgba(199,125,255,0.2))"}}>🌐<span className="proj-cover-label" style={{background:"rgba(77,150,255,0.2)",color:"#4D96FF"}}>Web</span></div>
            <div className="proj-body">
              <div className="proj-title">Portfolyo Sitesi</div>
              <div className="proj-desc">Next.js ve React ile yaptığım kişisel portfolyo sitesi.</div>
              <div className="proj-stack"><span className="proj-tech">Next.js</span><span className="proj-tech">React</span><span className="proj-tech">CSS</span></div>
              <div className="proj-links"><a href="#" className="proj-btn primary">Demo →</a><a href="#" className="proj-btn">GitHub</a></div>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-cover" style={{background:"linear-gradient(135deg,rgba(255,215,0,0.1),rgba(255,107,107,0.15))"}}>✈️<span className="proj-cover-label" style={{background:"rgba(0,212,255,0.15)",color:"#00D4FF"}}>Havacılık</span></div>
            <div className="proj-body">
              <div className="proj-title">UAV Uçuş Simülatörü</div>
              <div className="proj-desc">Python ile yapılmış basit bir insansız hava aracı simülasyonu.</div>
              <div className="proj-stack"><span className="proj-tech">Python</span><span className="proj-tech">NumPy</span><span className="proj-tech">Matplotlib</span></div>
              <div className="proj-links"><a href="#" className="proj-btn primary">Demo →</a><a href="#" className="proj-btn">GitHub</a></div>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-cover" style={{background:"linear-gradient(135deg,rgba(107,203,119,0.1),rgba(0,212,255,0.15))"}}>🔌<span className="proj-cover-label" style={{background:"rgba(107,203,119,0.15)",color:"#6BCB77"}}>Elektronik</span></div>
            <div className="proj-body">
              <div className="proj-title">Arduino Sensör Sistemi</div>
              <div className="proj-desc">Sıcaklık ve nem verilerini ölçen Arduino tabanlı sensör projesi.</div>
              <div className="proj-stack"><span className="proj-tech">Arduino</span><span className="proj-tech">C++</span><span className="proj-tech">DHT11</span></div>
              <div className="proj-links"><a href="#" className="proj-btn primary">Demo →</a><a href="#" className="proj-btn">GitHub</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="havacilik">
        <div className="sec-label">04 — Havacılık</div>
        <h2 className="sec-title">Neden havacılık? ✈️</h2>
        <div className="sec-line" style={{background:"linear-gradient(90deg,#00D4FF,#C77DFF)"}}></div>
        <div className="aviation-grid">
          <div className="av-card"><div className="av-card-icon">🛫</div><div className="av-card-title">Aviyonik Sistemler</div><div className="av-card-desc">Uçak elektroniği, navigasyon ve iletişim sistemleri.</div></div>
          <div className="av-card"><div className="av-card-icon">🚁</div><div className="av-card-title">İnsansız Hava Araçları</div><div className="av-card-desc">UAV/drone teknolojisi ve otonom navigasyon.</div></div>
          <div className="av-card"><div className="av-card-icon">📡</div><div className="av-card-title">Uçuş Kontrol</div><div className="av-card-desc">PID kontrol, IMU sensörler ve uçuş bilgisayarları.</div></div>
          <div className="av-card"><div className="av-card-icon">⚡</div><div className="av-card-title">Elektrik Sistemleri</div><div className="av-card-desc">Uçak güç sistemleri ve elektrikli uçuş teknolojileri.</div></div>
        </div>
      </div>

      <div className="section" id="sertifikalar">
        <div className="sec-label">05 — Sertifikalar</div>
        <h2 className="sec-title">Öğrendiklerimin kanıtı</h2>
        <div className="sec-line" style={{background:"linear-gradient(90deg,#FFD93D,#FF6B6B)"}}></div>
        <div className="cert-grid">
          <div className="cert-card"><div className="cert-icon">🏆</div><div><div className="cert-title">React Temelleri</div><div className="cert-org">Eklenecek...</div><div className="cert-date">2025</div></div></div>
          <div className="cert-card"><div className="cert-icon">🏆</div><div><div className="cert-title">Python Programlama</div><div className="cert-org">Eklenecek...</div><div className="cert-date">2024</div></div></div>
          <div className="cert-card"><div className="cert-icon">🏆</div><div><div className="cert-title">Devre Analizi</div><div className="cert-org">Üniversite Dersi</div><div className="cert-date">2024</div></div></div>
          <div className="cert-card" style={{borderStyle:"dashed",borderColor:"rgba(255,255,255,0.08)"}}><div className="cert-icon" style={{opacity:0.4}}>➕</div><div><div className="cert-title" style={{color:"#5A6A8A"}}>Yeni sertifika ekle</div><div className="cert-org" style={{color:"#5A6A8A"}}>Yakında...</div></div></div>
        </div>
      </div>

      <div className="section" id="blog">
        <div className="sec-label">06 — Blog</div>
        <h2 className="sec-title">Düşüncelerimi yazıyorum</h2>
        <div className="sec-line" style={{background:"linear-gradient(90deg,#C77DFF,#4D96FF)"}}></div>
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-cover" style={{background:"linear-gradient(135deg,rgba(0,212,255,0.1),rgba(77,150,255,0.15))"}}>✈️</div>
            <div className="blog-body">
              <div className="blog-cat">Havacılık</div>
              <div className="blog-title">Neden havacılık mühendisliğine ilgi duyuyorum?</div>
              <div className="blog-excerpt">EEE okurken havacılığa nasıl yöneldim.</div>
              <div className="blog-meta"><span className="blog-date">Nisan 2025</span><span className="blog-read">5 dk →</span></div>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-cover" style={{background:"linear-gradient(135deg,rgba(199,125,255,0.1),rgba(77,150,255,0.15))"}}>⚛️</div>
            <div className="blog-body">
              <div className="blog-cat">Web Geliştirme</div>
              <div className="blog-title">Mühendis olarak Next.js öğrenmek</div>
              <div className="blog-excerpt">Kod yazmayı nasıl öğrendim?</div>
              <div className="blog-meta"><span className="blog-date">Mart 2025</span><span className="blog-read">4 dk →</span></div>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-cover" style={{background:"linear-gradient(135deg,rgba(107,203,119,0.1),rgba(255,215,0,0.1))"}}>🔌</div>
            <div className="blog-body">
              <div className="blog-cat">Elektronik</div>
              <div className="blog-title">Arduino ile ilk sensör projem</div>
              <div className="blog-excerpt">Sıfırdan bir sensör sistemi kurmak.</div>
              <div className="blog-meta"><span className="blog-date">Şubat 2025</span><span className="blog-read">6 dk →</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{paddingTop:"0"}}>
        <div className="cv-banner">
          <div className="cv-text">
            <h3>CV&apos;mi indir 📄</h3>
            <p>Eğitim, projeler ve yeteneklerimin tam listesi için CV&apos;mi indirebilirsin.</p>
          </div>
          <a href="#" className="btn-glow">CV İndir →</a>
        </div>
      </div>

      <div className="section" id="iletisim">
        <div className="sec-label">07 — İletişim</div>
        <h2 className="sec-title">Selamlaşalım! 👋</h2>
        <div className="sec-line" style={{background:"linear-gradient(90deg,#4D96FF,#C77DFF)"}}></div>
        <div className="contact-wrap">
          <div>
            <p className="contact-intro">Havacılık, elektronik ya da web geliştirme hakkında konuşmak ister misin? Her zaman buradayım.</p>
            <div className="social-grid">
              <a href="#" className="social-btn"><div className="social-icon" style={{background:"rgba(255,107,107,0.1)"}}>✉️</div><div><div style={{fontWeight:500,fontSize:13}}>E-posta</div><div style={{fontSize:11,color:"#5A6A8A"}}>email@...</div></div></a>
              <a href="#" className="social-btn"><div className="social-icon" style={{background:"rgba(107,203,119,0.1)"}}>🐙</div><div><div style={{fontWeight:500,fontSize:13}}>GitHub</div><div style={{fontSize:11,color:"#5A6A8A"}}>github.com/nuri</div></div></a>
              <a href="#" className="social-btn"><div className="social-icon" style={{background:"rgba(77,150,255,0.1)"}}>🐦</div><div><div style={{fontWeight:500,fontSize:13}}>Twitter</div><div style={{fontSize:11,color:"#5A6A8A"}}>@nuri</div></div></a>
              <a href="#" className="social-btn"><div className="social-icon" style={{background:"rgba(199,125,255,0.1)"}}>💼</div><div><div style={{fontWeight:500,fontSize:13}}>LinkedIn</div><div style={{fontSize:11,color:"#5A6A8A"}}>linkedin.com/in/nuri</div></div></a>
            </div>
          </div>
           <div className="form-wrap">
             <div className="form-row">
              <div className="form-group"><label>İSİM</label><input type="text" name="from_name" placeholder="Adın"/></div>
              <div className="form-group"><label>E-POSTA</label><input type="email" name="from_email" placeholder="mail@..." required/></div>
            </div>
            <div className="form-group"><label>KONU</label>
              <select name="subject">
                <option>Genel</option>
                <option>İş Birliği</option>
                <option>Havacılık</option>
                <option>Web Proje</option>
              </select>
            </div>
            <div className="form-group"><label>MESAJ</label><textarea name="message" placeholder="Merhaba Nuri..." required></textarea></div>
            <a href="mailto:emailjs.inc3@gmail.com" className="form-submit" style={{display:"block",textAlign:"center",textDecoration:"none"}}>Mesaj Gönder →</a>
          </div>
        </div>
      </div>

      <footer>
        <span className="footer-logo">Nuri.dev</span>
        <p>© 2025 Nuri · Sevgiyle kodlandı ✈️</p>
        <div className="footer-links">
          <a href="#hakkimda">Hakkımda</a>
          <a href="#projeler">Projeler</a>
          <a href="#iletisim">İletişim</a>
        </div>
      </footer>
    </>
  );
}