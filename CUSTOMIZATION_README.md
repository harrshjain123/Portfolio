# Harsh Jain — Portfolio (vCard Template, Customized)

This is the [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)
template, fully customized with your real data from your resume: bio, experience at PixellKey,
education, skills, and a new **Campaign Dashboard** page (replacing the original Blog page) with
KPI cards and charts.

No build tools needed — pure HTML/CSS/JS. Just open `index.html` in a browser, or use Cursor's
Live Server.

---

## 🚀 How to Run

**Option A — Open directly:**
Double-click `index.html` — it works standalone, no server required.

**Option B — In Cursor / VS Code:**
1. Open this folder in Cursor
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

---

## 📁 What Was Customized

| Section | What Changed |
|---|---|
| Sidebar | Name → Harsh Jain, title → Performance Marketer, real email/phone, current role, Nagpur location |
| Social links | LinkedIn, Email, Phone (update LinkedIn URL — see below) |
| About | Bio rewritten around Meta Ads / Google Ads / PixellKey |
| Services (4 cards) | Meta Ads Management, Google Ads & GA4, App Marketing & Lead Gen, Reporting & Strategy |
| Testimonials | 3 placeholder cards marked "Edit this with a real client quote" — replace once you have client feedback |
| Tools & Platforms | Replaced generic "Clients" logos with text badges: Meta Ads Manager, Google Ads, GA4, AppsFlyer, Meta Pixel, Excel, WATI |
| Resume → Education | Your real B.Tech, HSC, SSC details |
| Resume → Experience | PixellKey role + DeltaClause internship + College Forum leadership |
| Resume → Skills | Meta Ads (92%), Google Ads (85%), Campaign Optimization (88%), GA4 (80%), Lead Gen (85%), Client Management (90%) |
| Portfolio | 6 marketing project cards (Lead Gen, E-commerce, Awareness, App Install, Seasonal, Funnel Optimization) — filterable by Meta Ads / Google Ads / App Marketing |
| **Blog → Dashboard** | Brand-new page: 4 KPI cards (ROAS, Spend, Leads, CPC), a pure-CSS monthly bar chart, and a platform-split breakdown bar |
| Contact | Map centered on Nagpur; form wired toward Formspree (needs your form ID — see below) |

---

## ⭐ Things You Still Need To Do

### 1. Update your LinkedIn URL
In `index.html`, search for `linkedin.com/in/harshjain` and replace with your real LinkedIn profile URL (2 places: sidebar social icon).

### 2. Replace your avatar photo
Replace `assets/images/my-avatar.png` with an actual photo of yourself (square image, ~300x300px works best).

### 3. Connect the contact form (so messages actually arrive in your inbox)
1. Go to https://formspree.io and sign up free
2. Create a new form, copy your Form ID
3. In `index.html`, find:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="form" data-form>
   ```
4. Replace `YOUR_FORM_ID` with your real ID

### 4. Update real testimonials
Search for `"Edit this with a real client quote"` in `index.html` (3 places) and swap in real
feedback from clients/managers once you have it, along with real names.

### 5. Update Dashboard numbers
The Campaign Dashboard page (KPI cards + bar chart + platform split) currently uses
representative numbers based on your resume. Search for `class="dashboard"` in `index.html` and
update the numbers in:
- `.kpi-value` (ROAS, Spend, Leads, CPC)
- `.bar-chart-value` (monthly conversion numbers, 6 months)
- `.platform-split-pct` (Meta vs Google vs Other % split)

### 6. Add real project case studies (optional but powerful)
Each portfolio card currently links to `#`. If you write up case studies (even a simple Google
Doc or a 1-pager image) for 2-3 of your best campaigns, link them here — this is what makes a
performance marketer's portfolio stand out vs a generic web dev one.

---

## 🎨 Customize Colors

All colors are CSS custom properties at the top of `assets/css/style.css`:

```css
:root {
  --orange-yellow-crayola: hsl(45, 100%, 72%);  /* primary accent */
  --vegas-gold: hsl(45, 54%, 58%);               /* secondary accent */
  --eerie-black-1: hsl(240, 2%, 13%);            /* main background */
  --jet: hsl(0, 0%, 22%);                        /* borders */
}
```

---

## 🌐 Deploy for Free

**GitHub Pages (easiest):**
```bash
git init
git add .
git commit -m "My portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
Then enable GitHub Pages in repo Settings → Pages → deploy from `main` branch.

**Or Netlify:** drag-and-drop this whole folder at https://app.netlify.com/drop

---

Built on the vCard template by codewithsadee, customized for Harsh Jain · Performance Marketer & Brand Manager
