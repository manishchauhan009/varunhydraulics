## 🏗️ **Varun Hydraulics – Forklift & Hydraulic Repair Website**

A modern, responsive, and SEO-optimized website for **Varun Hydraulics**, a professional forklift and hydraulic repair service provider based in **Vapi, Gujarat**.
The site showcases services, company details, contact/booking form (powered by EmailJS), client logos, and integrated Google Maps for easy location access.

---

### 🌐 **Live Demo**

> 🔗 [https://www.varunhydraulics.in](https://www.varunhydraulics.in)

---

### ⚙️ **Tech Stack**

| Tool                            | Purpose                                            |
| ------------------------------- | -------------------------------------------------- |
| **React.js (Create React App)** | Frontend framework                                 |
| **Tailwind CSS**                | Styling and responsive design                      |
| **EmailJS**                     | Email service integration for contact/booking form |
| **Framer Motion**               | Smooth animations                                  |
| **Lucide React Icons**          | Modern and clean icons                             |
| **ShadCN UI Components**        | Accessible and reusable UI blocks                  |
| **Google Maps Embed**           | Interactive business location                      |
| **SEO & Open Graph Tags**       | Improved discoverability and social sharing        |

---

### 📁 **Project Structure**

```
Varun-Hydraulics/
│
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── social-share.jpg
│   ├── manifest.json
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── sections/     # Hero, ServicesGrid, Clients, ContactForm
│   │   ├── ui/           # Reusable UI components
│   │   └── services/     # Modals, utilities
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── services/
│   │   ├── emailjs.js    # Handles EmailJS API calls
│   │
│   ├── utils/
│   │   └── validators.js # Validation functions for contact form
│   │
│   ├── App.js
│   └── index.js
│
└── package.json
```

---

### ⚡ **Setup Instructions**

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/varun-hydraulics.git
cd varun-hydraulics
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Configure Environment Variables

Create a file named **`.env`** in the root directory (same level as `package.json`)
and add your **EmailJS** credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_public_key
```

You can get these from your [EmailJS Dashboard](https://www.emailjs.com/).

---

### 💬 **Contact Form Email Template (EmailJS)**

Example HTML template you can use in EmailJS:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px">
  <div>A message by {{name}} has been received. Please respond soon.</div>
  <div style="margin-top: 20px; padding: 15px 0; border-top: 1px dashed lightgrey; border-bottom: 1px dashed lightgrey;">
    <strong>Name:</strong> {{name}} <br />
    <strong>Email:</strong> {{email}} <br />
    <strong>Phone:</strong> {{phone}} <br />
    <strong>Service:</strong> {{service}} <br />
    <strong>Message:</strong> {{message}}
  </div>
</div>
```

---

### 🧩 **Running the Project**

#### Development mode:

```bash
npm start
```

Then open → [http://localhost:3000](http://localhost:3000)

#### Production build:

```bash
npm run build
```

Build files will be generated in the `/build` folder.

---

### 🚀 **Deployment**

You can deploy easily on:

* **Vercel** → zero-config for CRA
* **Netlify** → connect GitHub repo and auto-deploy
* **GitHub Pages** → using `npm run build && npm run deploy`

Make sure to set your environment variables in the platform’s dashboard.

---

### 🗺️ **Google Maps Integration**

Your business location (Vapi, Gujarat) is embedded directly using Google Maps:

```html
<iframe
  title="Varun Hydraulics Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXXXXXX... (your actual link)"
  width="100%"
  height="350"
  style="border:0;"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
```

---

### 🧠 **SEO Optimizations**

✅ Meta tags for title, description, and keywords
✅ Open Graph & Twitter Card tags for social preview
✅ JSON-LD structured data for Local Business
✅ Mobile-first & responsive layout
✅ Canonical link for clean indexing

---

### 👨‍🔧 **About Varun Hydraulics**

Founded initially as **Lucky Motors (2006)** for two-wheeler repair, we gradually expanded to four-wheelers and later specialized in **Forklift Repair** and **Hydraulic System Services**.
In **2020**, the brand was renamed **Varun Hydraulics**, marking our evolution into a full-scale service provider offering **Hydraulic Pump & Cylinder Repair**, **Maintenance Contracts**, and **Emergency On-site Support** across **Vapi and nearby industrial areas**.

---

### 📞 **Contact**

**Varun Hydraulics**
📍 Amar Nagar, Chanod, Vapi, Gujarat – 396195
📱 +91 999 874 8236
✉️ [support@varunhydraulics.in](mailto:support@varunhydraulics.in)
🌍 [https://www.varunhydraulics.in](https://www.varunhydraulics.in)

---

### 📜 **License**

This project is licensed under the **MIT License** — you’re free to use and modify it with proper attribution.
