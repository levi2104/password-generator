# 🔐 Password Generator App

A simple, interactive Password Generator built using React and Tailwind CSS. It allows users to generate strong and customizable passwords with options for length, inclusion of numbers, and special characters. The app also includes clipboard copy functionality.

---

## 💡 Motivation

This project was built to sharpen my React and Tailwind CSS skills while creating something useful and practical. Password security is a common requirement, and building a password generator provided a great opportunity to work on state management, UI components, and conditional rendering in React.

---

## 🛠️ Build Status

✅ Fully functional and stable  
⚠️ No known bugs or errors  
🧪 Future improvements may include:  
- Password strength meter  
- Theme switcher  
- Persistent settings with localStorage  

---

## ✍️ Code Style

- JavaScript (ES6+)  
- Functional Components with Hooks  
- Tailwind CSS for styling  
- ESLint configured for consistent formatting  

---

## 📸 Screenshots

### 1
![image](https://github.com/user-attachments/assets/5bb33e9d-66ef-46a6-b470-066c386e41fd)

---

### 2
![image](https://github.com/user-attachments/assets/a33c6606-c17c-4037-ac05-945c390e4471)

---

### 3
![image](https://github.com/user-attachments/assets/46b60070-9566-4c11-aace-357bdcda025b)

---

### 4
![image](https://github.com/user-attachments/assets/1541f538-8568-45a3-895d-2c224e148e2d)

---

## Live Link

- [Go to Website](https://password-generator-swart-two.vercel.app/)

---

## 🧱 Tech/Framework Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

---

## 🚀 Features

- Password generation with customizable length (6 to 50)
- Option to include numbers
- Option to include special characters
- Clipboard copy feature with dynamic icon toggle (✔️)
- Minimal UI using Tailwind CSS

---

## 📄 Code Example

Here's the main password generation function:

```
const setPassword = () => {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let nums = "0123456789"
  let specialChars = "!@#$%*"
  let password = ""

  if (isNumChecked) {
    chars += nums
    password += nums[Math.floor(Math.random() * nums.length)]
  }

  if (isCharChecked) {
    chars += specialChars
    password += specialChars[Math.floor(Math.random() * specialChars.length)]
  }

  for (let i = password.length; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)]
  }

  setPass(password)
}
```

---

## 🧩 Installation

Clone and run the project locally:

### Clone the repo
```
git clone https://github.com/yourusername/pwdgenerator.git
```

### Navigate to project folder
```
cd pwdgenerator
```

### Install dependencies
```
npm install
```

### Run the development server
```
npm run dev
```

---

## 📚 API Reference

This project does not use any external APIs.
It uses the **Clipboard API** for copy-to-clipboard functionality:
```
window.navigator.clipboard.writeText(pass)
```

---

## 🧪 Tests

### Manual Testing Done:
- Password updates correctly based on length and options

- Copy button works with feedback (check icon)

- Edge cases for length (min: 6, max: 50)

- Checkbox toggling updates state correctly

### Automated Tests:
- Not yet implemented

---

## 🧭 How to Use?
- Set the desired password length using the slider.

- Toggle checkboxes to include:

- Numbers (0-9)

- Special characters (!@#$%*)

- Click the Generate button.

- Copy the password using the copy icon (changes to a check icon once copied).

---

## 🤝 Contribute
- Contributions are welcome!

- Fork this repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add your message')

- Push to the branch (git push origin feature-name)

- Open a Pull Request

---

## 🙌 Credits

- [React](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Inspired by various online password tools and frontend UI patterns

---

## 📜 License

- This project is licensed under the MIT License – feel free to use and modify.
