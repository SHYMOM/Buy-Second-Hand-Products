# Buy Second Hand Products — Pre-Purchase Inspection Hub 📱🔍

> 🔗 **Live Website**: [https://shymom.github.io/Buy-Second-Hand-Products/](https://shymom.github.io/Buy-Second-Hand-Products/)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-teal?style=for-the-badge&logo=github)](https://shymom.github.io/Buy-Second-Hand-Products/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20Vanilla)-success?style=for-the-badge)](index.html)
[![Offline First](https://img.shields.io/badge/Storage-LocalStorage%20Offline%20First-orange?style=for-the-badge)](#features)

Field-tested, interactive pre-purchase inspection checklists designed to be pulled up right at the meetup before buying used smartphones, laptops, and gadgets. Test systematically, detect scams and hidden hardware flaws, and get real-time verdicts (**BUY**, **NEGOTIATE**, or **WALK AWAY**) before you hand over any money.

---

## 🌟 Why This Exists

The second-hand consumer electronics market is filled with hidden pitfalls:
- **Tampered or Modified ROMs**: Sellers flashing vendor ROMs to fake storage, spoof model numbers, or mask blacklisted IMEIs.
- **Disguised Screen & Component Replacements**: Cheap third-party LCD/OLED panels replacing original 120Hz LTPO panels, losing biometric functionality (like ultrasonic fingerprint scanners) and color accuracy.
- **Compromised Camera Seals & OIS Failure**: Drops causing loose telephoto prism mounts, broken optical image stabilization (OIS), and compromised dust/water seals.
- **Account & Anti-Theft Locks**: Hidden FRP locks, Mi Accounts, or Vivo accounts that lock you out permanently after the seller disappears.
- **IMEI Blacklisting & NEIR De-Registration Issues**: Stolen devices or unregistered gray-market imports being blocked on national carrier networks (e.g., Bangladesh BTRC NEIR compliance).

**Buy Second Hand Products** solves this by providing structured, phone-optimized checklists that you can follow step-by-step during a 15–30 minute in-person inspection.

---

## 📱 Available Inspection Sheets

| Brand | Model | Target Versions | Key Specialized Checks | Inspection Sheet |
| :--- | :--- | :--- | :--- | :--- |
| **Xiaomi** | **Xiaomi 14 Ultra** | Global (`24030PN60G`) & China (`24031PN0DC`) | Leica 1-inch variable aperture seals, display color uniformity/burn-in, Fastboot ROM & bootloader lock verification, Mi Account de-linking, Band 20/global 5G checks. | [Open Sheet](phones/xiaomi/xiaomi-14-ultra-inspection-sheet.html) |
| **Vivo** | **Vivo X100 Ultra** | China-only (`V2366GA` / `V2366HA`) | Zeiss 200MP APO periscope & gimbal OIS stability, OriginOS China power management & push notification delay test, Google Services sideload check, Widevine L1, ultrasonic fingerprint, BTRC NEIR de-registration. | [Open Sheet](phones/vivo/vivo-x100-ultra-inspection-sheet.html) |

---

## ⚡ Key Features

- **🎯 Real-Time Decision Verdict Bar**:
  As you mark items **Pass** or **Problem**, a fixed bottom status bar continuously recalculates your recommendation:
  - 🟢 **BUY**: All required checks passed cleanly.
  - 🟡 **NEGOTIATE**: Core checks passed, but important secondary defects exist that justify asking for a cash discount.
  - 🔴 **WALK AWAY**: A critical deal-breaker failed (e.g., account lock, moisture in camera lenses, dead OLED pixels, BTRC/IMEI blacklisting).
- **💾 Offline-First LocalStorage Persistence**:
  Check states, seller notes, IMEI numbers, and agreed prices are automatically persisted to `localStorage`. You won't lose your progress if you switch apps, take test photos, or refresh your browser.
- **🌗 Synchronized Dark/Light Mode**:
  High-contrast, outdoor-ready dark and light themes that synchronize seamlessly across the main Hub, 404 page, and individual inspection sheets.
- **📋 One-Click Problem Reporter**:
  Generates a clean, formatted plain-text summary of all failed items, seller details, and remaining open checks. Easily copied to your clipboard to paste into notes or send to an advisor.
- **🔍 Fast Search & Category Filtering**:
  Instant client-side fuzzy search across sheet titles, brands, model codes, and descriptions, with instant keyboard shortcut access (`/`).
- **🪶 Zero Dependencies & Ultra Lightweight**:
  Built with pure HTML5, modern CSS3 (Custom Properties & Flexbox/Grid), and Vanilla JavaScript. Runs on any mobile browser without heavy frameworks, build steps, or tracking scripts.

---

## 🔬 The Phased Inspection Framework

Every inspection sheet follows a standardized, chronological methodology:

```
[Phase 1: Pre-Meetup Prep]
         │ (Tools, SIM cards, written return trial agreement)
         ▼
[Phase 2: Identity & Paperwork]
         │ (IMEI *#06*, box label matching, NEIR / carrier database checks)
         ▼
[Phase 3: Body & Display]
         │ (Torch inspection for lens fog, screen tint, 120Hz refresh rate)
         ▼
[Phase 4: Locks & Factory Reset]
         │ (Seller logs out of accounts; perform factory reset together)
         ▼
[Phase 5: Software & ROM Verification]
         │ (Stock China/Global ROM check, official OTA updates, SoC specs)
         ▼
[Phase 6: Connectivity & Notifications]
         │ (Dual SIM call test, VoLTE, background notification idle test)
         ▼
[Phase 7: Hardware & Sensors]
         │ (Ultrasonic fingerprint, microphones, fast wired & wireless charging)
         ▼
[Phase 8: Camera System]
         │ (All lens switching, periscope zoom, sensor dust, gimbal rattle)
         ▼
[Phase 9: Performance & Battery]
         │ (Stress test, heat dissipation, battery health, dual reboot test)
         ▼
[Phase 10: Close Deal or Walk Away]
         │ (Final green verdict, signed receipt, official de-registration)
         ▼
[Deal Finalized / Walk Away]
```

### Problem Classification Tags
Each check is categorized by severity:
- **`100% Required` (Red)**: Deal-breaker. If failed, you should walk away immediately.
- **`Important` (Yellow)**: Significant flaw (e.g. slight battery degradation, missing original charger, minor scratch). Negotiate a price discount.
- **`Nice to Have` (Blue)**: Minor or cosmetic wear. Does not affect day-to-day functionality.

---

## 📂 Repository Structure

```text
Buy-Second-Hand-Products/
├── index.html                   # Central Inspection Hub with search & filters
├── sheets.json                  # JSON registry catalog of all inspection sheets
├── 404.html                     # Custom 404 error page with quick links
├── README.md                    # Comprehensive documentation & guidelines
├── assets/
│   └── theme.css                # Shared design system, CSS variables & typography
└── phones/
    ├── xiaomi/
    │   └── xiaomi-14-ultra-inspection-sheet.html   # Xiaomi 14 Ultra guide
    └── vivo/
        └── vivo-x100-ultra-inspection-sheet.html   # Vivo X100 Ultra guide
```

---

## 🚀 Getting Started

### Option 1: Live Online
Visit the live hosted site on GitHub Pages:
👉 **[https://shymom.github.io/Buy-Second-Hand-Products/](https://shymom.github.io/Buy-Second-Hand-Products/)**

### Option 2: Local Offline Usage
You can run the hub completely offline directly on your laptop or phone:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shymom/Buy-Second-Hand-Products.git
   cd Buy-Second-Hand-Products
   ```

2. **Serve locally** (using any static HTTP server):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Or using Node / npx
   npx serve .
   ```

3. Open `http://localhost:8000` in your browser.

> [!TIP]
> The hub also includes built-in fallback data so that individual sheets and the index page can be opened directly as `file:///` URLs on mobile or desktop without a local web server.

---

## ✍️ Adding a New Inspection Sheet

We welcome contributions of new sheets for popular smartphones, tablets, handheld consoles, and laptops!

### Step 1: Create the HTML Sheet
Place your file under the appropriate folder hierarchy:
`phones/<brand>/<brand>-<model>-inspection-sheet.html`

Use existing sheets (such as [`phones/vivo/vivo-x100-ultra-inspection-sheet.html`](phones/vivo/vivo-x100-ultra-inspection-sheet.html)) as a template. Make sure to define:
- `KEY`: Unique storage key (e.g. `s24u-inspection-v1`).
- `PH`: Array of inspection phases with specific checks, instructions, pass conditions, and red flags.
- Genuine hardware specifications table.
- Top breadcrumbs and `#theme-toggle` button.

### Step 2: Register in `sheets.json`
Add the metadata object to `sheets.json`:

```json
{
  "id": "samsung-s24-ultra",
  "title": "Samsung Galaxy S24 Ultra Inspection Sheet",
  "category": "Phones",
  "brand": "Samsung",
  "url": "phones/samsung/samsung-s24-ultra-inspection-sheet.html",
  "date": "2026-10-24",
  "description": "Pre-purchase inspection checklist: Titanium frame check, anti-reflective Gorilla Armor glass, 5x telephoto OIS, Knox status 0x0, and regional carrier CSC.",
  "model": "SM-S928B / SM-S928U"
}
```

### Step 3: Update `DEFAULT_SHEETS` Fallback
Add the same entry to `DEFAULT_SHEETS` in `index.html` to guarantee offline `file://` compatibility.

---

## 🗺️ Roadmap

- [x] Initial Xiaomi 14 Ultra inspection sheet (Global & China variants)
- [x] Inspection Hub with instant fuzzy search, category filter chips & responsive cards
- [x] Cross-page synchronized light/dark theme toggle
- [x] Vivo X100 Ultra inspection sheet (OriginOS, 200MP Zeiss telephoto, NEIR verification)
- [ ] Apple iPhone 15 Pro / 16 Pro Max inspection sheet (Battery health cycle count, 3uTools hardware serialization, TrueTone & FaceID swap detection)
- [ ] Samsung Galaxy S24 Ultra inspection sheet (Knox trip counter `0x0`, CSC carrier locks, anti-reflective display coating)
- [ ] Apple MacBook Pro (Apple Silicon M-series: MDM enrollment, Activation Lock, battery cycle count, display flexgate)
- [ ] Export inspection reports to PDF / Image summary for proof of condition

---

## ⚠️ Disclaimer

These inspection sheets provide technical guidelines based on community experience and manufacturer specifications. However, buying used products always carries inherent risks. Always prioritize personal safety at in-person meetups, meet in daylight inside public monitored venues (banks, shopping malls, police station parking zones), and never transfer funds before completing the inspection.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and share. Contributions and suggestions are always welcome!
