# Let-s-split-our-bill 
is a simple and fun restaurant bill calculator that allows users to quickly and visually split a check among multiple people — including tips. The project combines utility with playful design and smooth animations to create an engaging user experience.

## Features

- Input total bill amount
- Input number of people
- Select tip percentage (0%, 10%, 20%, 30%)
- Dynamic calculation of:
  - Amount per person
  - Tip per person
  - Total per person
- Animated rotating dishes using **GSAP (GreenSock Animation Platform)** for a lively touch

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **GSAP** for visual effects and animations

## How It Works

1. User enters the total bill amount.
2. Selects how many people are splitting the bill.
3. Chooses a tip percentage.
4. Upon clicking "Calculate", the script:
   - Computes the tip based on the percentage
   - Divides the tip and bill evenly among people
   - Displays the result in three separate fields

## Folder Structure

- `index.html` — markup
- `style.css` — layout and design
- `script.js` — logic for input, calculation and rendering
- `assets/` — icons and GSAP-animated dish graphics
