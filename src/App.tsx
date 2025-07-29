import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { CalendarProvider } from './contexts/CalendarContext';
import { ClientsProvider } from './contexts/ClientsContext';
import { BookingsProvider } from './contexts/BookingsContext';
import { CalendarDayView } from './components/layout/CalendarDayView';

import { populateClientsInFirebase } from '../src/constants/index';

// Add this useEffect inside your App component (before the return statement

function App() {

  useEffect(() => {
  const initializeClients = async () => {
    try {
      // Check if clients already exist to avoid duplicates
      const { getDocsTyped } = await import('./services/firestore');
      const existingClients = await getDocsTyped('clients');
      
      if (existingClients.length === 0) {
        console.log('🔄 No clients found, populating Firebase...');
        await populateClientsInFirebase();
        console.log('✅ Client population complete!');
      } else {
        console.log('✅ Clients already exist in Firebase');
      }
    } catch (error) {
      console.error('❌ Error initializing clients:', error);
    }
  };

  initializeClients();
}, []);

  return (
    <ClientsProvider>
      <CalendarProvider>
        <BookingsProvider>
          <main className="min-h-screen bg-background text-text">
            <CalendarDayView/>
          </main>

          <Toaster
            position="bottom-right"
            theme="dark"
            richColors
          />
        </BookingsProvider>
      </CalendarProvider>
    </ClientsProvider>
  );
}

export default App;


// Add these imports to the top of App.tsx
