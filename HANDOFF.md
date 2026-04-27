# Nathan's Nathan's Famous Hot Dog Eating Contest - Website Handoff

## 🚀 Deployment Status
✅ **LIVE:** https://swimnerdtim.github.io/nathans-nathans/

## 📁 Repository
https://github.com/swimnerdtim/nathans-nathans

## 🎨 What Was Built

A legit competitive eating championship website with:

### Pages
1. **Home** - Hero image, countdown to July 4, 2026, current champions showcase
2. **Champions** - Hall of Fame, world records, belt holders, career stats
3. **History** - Year-by-year timeline (2019-2025) with winners and records
4. **Rules** - Official regulations, categories, prizes, how to enter
5. **Gallery** - All 39 high-res photos with lightbox viewer
6. **Sign Up** - Registration instructions, contest details, FAQ

### Key Features
- ⏱️ Live countdown timer to next contest
- 🏆 Current belt holders (Men's Mustard Belt, Women's Pink Pepto-Bismol Belt)
- 📊 World records prominently displayed
- 📸 Photo gallery with 39 images, click to enlarge
- 📧 Registration via email (nathansnathansfamous@gmail.com)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Red & gold championship theme
- ⚡ Fast loading, hosted on GitHub Pages

## 📊 Current Data

**Men's World Record:** Jimmy the Shark - 10 dogs & buns (2025)
**Women's World Record:** Sam the Sausage Slayer - 4.5 dogs & buns (2020)

**2025 Champions:**
- Men's: Jimmy the Shark (1st title, new world record)
- Women's: Sam the Sausage Slayer & Jillian Batchelor (tie)

**Historical Dominance:**
- Peter "Cookie" Jaeckel: 5x Men's Champion (2019-2024)
- Sam the Sausage Slayer: 6x Women's Champion (2019-2025)

## 🔧 How to Update

### Adding/Editing Photos
1. Add images to `/public` folder
2. Name them sequentially: `contest_40.jpeg`, `contest_41.jpeg`, etc.
3. Update number in `src/pages/Gallery.jsx` line 7:
   ```javascript
   const photos = Array.from({ length: 42 }, (_, i) => ({  // Change 39 to 42
   ```
4. Commit + push

### Updating Contest Results
Edit `/src/data/history.json`:
```json
{
  "year": 2026,
  "date": "July 4, 2026",
  "mensWinner": {
    "name": "Winner Name",
    "count": 12,
    "isRecord": true,
    "previousChamp": false
  },
  "womensWinner": {
    "name": "Winner Name",
    "count": 5,
    "isRecord": false,
    "previousChamp": true
  }
}
```

### Updating Records/Champions
Also in `/src/data/history.json`, update the `records` and `championships` sections at the bottom.

### Changing Countdown Date
Edit `src/pages/Home.jsx` line 14:
```javascript
const eventDate = new Date('2027-07-04T12:00:00')  // Change year
```

## 🎯 Auto-Deploy
Every time you push to GitHub, the site auto-deploys in ~2 minutes.

## 📝 To-Do / Future Enhancements
- [ ] Add video highlights (if you have footage)
- [ ] Create printable "Tale of the Tape" competitor profiles
- [ ] Add live results/scoreboard feature for contest day
- [ ] Email signup integration (collect registrations in database)
- [ ] Social media share buttons
- [ ] "Predict the Winner" poll feature

## 🌐 Domain Setup (Optional)
To point `nathansnathans.com` to this site:

1. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add A records pointing to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Add CNAME record: `www` → `swimnerdtim.github.io`

2. In GitHub repo settings → Pages:
   - Set custom domain: `nathansnathans.com`
   - Enable "Enforce HTTPS"

3. Update `vite.config.js` base to `/` instead of `/nathans-nathans/`

## 📧 Email Setup
Current registration goes to: nathansnathansfamous@gmail.com

All "Sign Up" buttons link to this email with pre-filled subject line.

## 🎨 Theme Colors
- Primary Red: `#c41e3a`
- Dark Red: `#8b0000`
- Gold: `#ffd700`
- Pink (Women's): `#ff69b4`

## 🏗️ Tech Stack
- React + Vite
- React Router (client-side routing)
- GitHub Pages (free hosting)
- No backend needed (static site)

## 📂 Key Files
- `/src/pages/*.jsx` - All page components
- `/src/data/history.json` - Contest data (edit this!)
- `/public/contest_*.jpeg` - All photos
- `/vite.config.js` - Build config
- `/.github/workflows/deploy.yml` - Auto-deploy setup

## 🚀 Next Steps
1. ✅ Site is live and ready to use
2. Share the URL: https://swimnerdtim.github.io/nathans-nathans/
3. Start promoting for 2026 registration
4. Update with 2026 results after July 4th
5. (Optional) Point custom domain

---

Built with competitive eating excellence 🌭🏆

**Questions?** Check the README.md or repo issues.
