# MaskItUp

MaskItUp is a full-stack AI-powered data masking application that detects and redacts sensitive information from text before it is shared.

The application combines regex-based pattern matching and Google Gemini AI to identify and mask personally identifiable information (PII), organizations, locations, and other sensitive entities.

## Live Demo

Frontend: https://maskitup.vercel.app

Backend API: https://maskitup.onrender.com

## Features

### Regex-Based Detection

The application detects and masks:

- Email Addresses
- Phone Numbers
- Credit Card Numbers
- Aadhaar Numbers
- PAN Numbers
- UPI IDs
- URLs
- IP Addresses

### AI-Powered Detection

Using Google Gemini AI, the application identifies and masks:

- Person Names
- Organizations
- Locations
- Addresses

### User Features

- Responsive User Interface
- Real-Time Detection Statistics
- Copy Masked Output
- Loading Indicators
- Secure API-Based Processing

## Architecture

```text
User Input
    ↓
React Frontend
    ↓
Express Backend
    ↓
Regex Engine
    ↓
Gemini AI Processing
    ↓
Masked Output
    ↓
Frontend Display
```

## Technology Stack

### Frontend

- React
- Vite
- CSS

### Backend

- Node.js
- Express.js

### AI

- Google Gemini API

### Deployment

- Vercel (Frontend)
- Render (Backend)

## Detection Categories

| Information Type   | Detection Method    |
| ------------------ | ------------------- |
| Email Address      | Regular Expressions |
| Phone Number       | Regular Expressions |
| Credit Card Number | Regular Expressions |
| Aadhaar Number     | Regular Expressions |
| PAN Number         | Regular Expressions |
| UPI ID             | Regular Expressions |
| URL                | Regular Expressions |
| IP Address         | Regular Expressions |
| Person Name        | Google Gemini AI    |
| Organization       | Google Gemini AI    |
| Location           | Google Gemini AI    |
| Address            | Google Gemini AI    |

## Example

### Input

```text
Hello,

My name is Puneeth Jagadeesha.

Email: puneethj5298@gmail.com

Phone: +919036566999

I study at BMS College of Engineering in Bangalore.

Regards,
Puneeth
```

### Output

```text
Hello,

My name is [PERSON].

Email: [EMAIL]

Phone: [PHONE]

I study at [ORGANIZATION] in [LOCATION].

Regards,
[PERSON]
```

## Local Setup

### Clone Repository

```bash
git clone https://github.com/puneeth-92/maskitup.git
cd maskitup
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Future Improvements

- PDF Upload and Masking
- DOCX Upload and Masking
- Download Sanitized Files
- Drag and Drop Upload
- Multi-Language Support
- AI Confidence Scores
- Processing History
- Batch File Processing
- OCR-Based Image Masking

## Author

**Puneeth J**

Computer Science and Engineering Student

MaskItUp was built to explore full-stack development, AI integration, privacy-focused applications, and real-world text processing systems.
