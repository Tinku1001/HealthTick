# HealthTick's Calendar

A professional calendar booking solution created for health coaches. This platform features an easy-to-use daily view that streamlines appointment scheduling, enhanced by a polished interface and dependable Firebase infrastructure.

**Deployed Link**: `https://health-tick-mu.vercel.app/`

---

## Key Features

*   **Single-Day Timeline View**: Clean, single-column scrollable interface for comprehensive daily schedule management.
*   **Real-Time Booking**: Create, view, and delete appointments with instant synchronization via Firestore.
*   **Dual Call Types**:
    *   **Onboarding Calls**: 40-minute sessions that visually span two time slots for comprehensive client intake.
    *   **Follow-up Calls**: 20-minute sessions with recurring scheduling capabilities for ongoing client support.
*   **Recurring Appointments**: Schedule follow-up calls that automatically repeat weekly on the selected day.
*   **Intelligent Scheduling Logic**:
    *   Automatically prevents booking appointments in past time slots.
    *   Recurring series display only on or after their designated start date.
    *   Advanced overlap detection prevents double-booking conflicts.
*   **Client Management**: Searchable dropdown interface for quick and easy client selection during booking.
*   **Professional User Interface**:
    *   Modern, cohesive color palette with professional styling.
    *   Custom-designed scrollbar for a clean, minimalist aesthetic.
    *   Fully responsive design optimized for both desktop and mobile devices.

---

## Technology Stack

*   **Frontend**: React with TypeScript, built using Vite for optimal performance
*   **Styling**: Tailwind CSS for modern, utility-first styling
*   **Icons**: Lucide React for consistent iconography
*   **Database**: Firebase Firestore for real-time data synchronization
*   **Notifications**: Sonner for elegant toast notifications
*   **Date Management**: date-fns and react-day-picker for robust date handling

---

## Firebase Data Architecture

The application utilizes two primary Firestore collections for data management:

### 1. Clients Collection
```json
{
  "id": "string",
  "name": "string", 
  "phone": "string"
}
```

### 2. Bookings Collection

**One-Time Booking Structure (Onboarding Calls)**
```json
{
  "id": "string",
  "clientId": "string",
  "type": "string",
  "startTime": "string",
  "durationMins": "number",
  "isRecurring": "boolean",
  "date": "string"
}
```

**Recurring Booking Structure (Follow-up Calls)**
```json
{
  "id": "string",
  "clientId": "string", 
  "type": "string",
  "startTime": "string",
  "durationMins": "number",
  "isRecurring": "boolean",
  "startDate": "string",
  "recurrence": {
    "freq": "string",
    "day": "string",
    "endDate": "string"
  }
}
```

---

## Getting Started
### 1. Clone the Repository

```bash
git clone <your-repositoryURL>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add your Firebase configuration. **Note: Use the `VITE_` prefix for all environment variables.**

```env
# .env
VITE_FIREBASE_API_KEY="your_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_auth_domain"
VITE_FIREBASE_PROJECT_ID="your_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"
VITE_FIREBASE_APP_ID="your_app_id"
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

