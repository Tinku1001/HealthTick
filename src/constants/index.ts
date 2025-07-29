// import { addDocTyped } from '../services/firestore';

// export const clientsData = [
//   {  name: "Priya Sharma", phone: "+91-9876543201" },
//   {  name: "Rahul Gupta", phone: "+91-9876543302" },
//   {  name: "Ananya Patel", phone: "+91-9876543403" },
//   {  name: "Vikram Singh", phone: "+91-9876543504" },
//   {  name: "Isha Nair", phone: "+91-9876543605" },
//   {  name: "Aarav Malhotra", phone: "+91-9876543706" },
//   {  name: "Neha Kapoor", phone: "+91-9876543807" },
//   {  name: "Arjun Reddy", phone: "+91-9876543908" },
//   {  name: "Diya Verma", phone: "+91-9876544009" },
//   {  name: "Kabir Sharma", phone: "+91-9876544110" },
//   {  name: "Sanjana Iyer", phone: "+91-9876544211" },
//   {  name: "Aditya Joshi", phone: "+91-9876544312" },
//   {  name: "Meera Chatterjee", phone: "+91-9876544413" },
//   {  name: "Rohan Mehta", phone: "+91-9876544514" },
//   {  name: "Shreya Kapoor", phone: "+91-9876544615" },
//   {  name: "Amit Kumar", phone: "+91-9876544716" },
//   {  name: "Lakshmi Nandini", phone: "+91-9876544817" },
//   {  name: "Rajat Choudhary", phone: "+91-9876544918" },
//   {  name: "Kavya Bhatia", phone: "+91-9876545019" },
//   {  name: "Siddharth Sharma", phone: "+91-9876545120" },
// ];


// export const onboardingBookings = [
//   {
//     clientId: '8yFe8VisZGryPULsdvP8',
//     date: '2025-07-28',
//     startTime: '11:10',
//     durationMins: 40,
//     type: 'onboarding',
//     isRecurring: false,
//   },
//   {
//     clientId: 'AAKldz4XrGm0kZShBTHB',
//     date: '2025-07-29',
//     startTime: '14:30',
//     durationMins: 40,
//     type: 'onboarding',
//     isRecurring: false,
//   },
//   {
//     clientId: 'AOb0c6lmsk50e9zi9gl7',
//     date: '2025-07-30',
//     startTime: '15:10',
//     durationMins: 40,
//     type: 'onboarding',
//     isRecurring: false,
//   },
//   {
//     clientId: 'D6blLf4EIqEWDPdeousX',
//     date: '2025-07-31',
//     startTime: '16:50',
//     durationMins: 40,
//     type: 'onboarding',
//     isRecurring: false,
//   },
//   {
//     clientId: 'FjwJC4YM5xR6LLrDi4ZM',
//     date: '2025-08-01',
//     startTime: '12:10',
//     durationMins: 40,
//     type: 'onboarding',
//     isRecurring: false,
//   },
//   {
//     clientId: 'HxnJrFk0iiPZAvvLrudo',
//     date: '2025-08-02',
//     startTime: '17:30',
//     durationMins: 40,
//     type: 'onboarding',
//     isRecurring: false,
//   },
// ];


// export const followupBookings = [
//   {
//     clientId: '8yFe8VisZGryPULsdvP8',
//     startTime: '13:50',
//     durationMins: 20,
//     startDate: "2205-07-24",
//     type: 'followup',
//     isRecurring: true,
//     recurrence: {
//       freq: 'WEEKLY',
//       day: 'MON',
//       endDate: '2025-08-11',
//     },
//   },
//   {
//     clientId: 'AOb0c6lmsk50e9zi9gl7',
//     startTime: '10:30',
//     durationMins: 20,
//     type: 'followup',
//     startDate: "2205-07-28",
//     isRecurring: true,
//     recurrence: {
//       freq: 'WEEKLY',
//       day: 'THU',
//       endDate: '2025-08-01',
//     },
//   },
//   {
//     clientId: 'FjwJC4YM5xR6LLrDi4ZM',
//     startTime: '16:20',
//     durationMins: 20,
//     type: 'followup',
//     isRecurring: true,
//     recurrence: {
//       freq: 'WEEKLY',
//       day: 'MON',
//       endDate: '2025-08-11',
//     },
//   },
// ];


// utils/populateFirebase.ts - Run this once to populate Firebase with clients
import { addDocTyped } from '../services/firestore';

const clientsData = [
  { name: "Tinku kumar", phone: "+91-9555597514" },
  { name: "Shivendra pratap Singh", phone: "+91-9988421345" },
  { name: "Aman Singh", phone: "+91-8881587432" },
  { name: "Shubham Mani Tripathi", phone: "+91-7876543412" },
  { name: "Aditi", phone: "+91-9876543603" },
  { name: "Arnav", phone: "+91-9876543798" },
  { name: "Neha", phone: "+91-8876543807" },
  { name: "Arvind kumar", phone: "+91-7976543908" },
  { name: "Shivam Verma", phone: "+91-9966544009" },
  { name: "Rahul Sharma", phone: "+91-8806544110" },
  { name: "Adarsh parihar", phone: "+91-78806544211" },
  { name: "Aditya gupta", phone: "+91-8876543312" },
  { name: "Om chaturvedi", phone: "+91-9800544413" },
  { name: "Rohan titus", phone: "+91-9876114514" },
  { name: "Aditya pratap singh", phone: "+91-9877654615" },
  { name: "Amit singh", phone: "+91-9899764716" },
  { name: "Omi vaish", phone: "+91-898744817" },
  { name: "Atul singh", phone: "+91-7890880098" },
  // { name: "Kavya Bhatia", phone: "+91-9876545019" },
  // { name: "Siddharth Sharma", phone: "+91-9876545120" },
];

export async function populateClientsInFirebase() {
  console.log('🚀 Starting to populate Firebase with clients...');
  
  try {
    const promises = clientsData.map(async (client, index) => {
      const id = await addDocTyped('clients', {
        name: client.name,
        phone: client.phone,
        createdAt: new Date().toISOString(),
      });
      console.log(`✅ Added client ${index + 1}/20: ${client.name} (ID: ${id})`);
      return id;
    });

    await Promise.all(promises);
    console.log('🎉 All 20 clients successfully added to Firebase!');
    return true;
  } catch (error) {
    console.error('❌ Error populating clients:', error);
    return false;
  }
}