// firebase/activitiesService.js
import { db } from './config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Función para agregar una nueva actividad
export const addActivity = async (activity) => {
  try {
    const docRef = await addDoc(collection(db, 'activities'), activity);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

// Función para obtener todas las actividades
export const getActivities = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'activities'));
    const activities = [];
    querySnapshot.forEach((doc) => {
      activities.push({ id: doc.id, ...doc.data() });
    });
    return activities;
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
};
