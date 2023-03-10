import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, query, where } from "firebase/firestore"
import { db } from "../firebase";


// Contexto
const dataContext = createContext();

// Hook personalizado para usar useContext
export const useData = () => {
    const context = useContext(dataContext);
    if (!context) throw new Error("There is no Data provider");
    return context;
}

export function DataProvider({ children }) {
    /*     const [data, setData] = useState({})// Estado de los datos
     *//*     const [loading, setLoading] = useState(true)// Estado de carga
  */
    const [dbFirestore, setDbFirestore] = useState([])
    // Creamos una variable de estado adicional para almacenar la información actualizada
    const [updatedDbFirestore, setUpdatedDbFirestore] = useState([]);

    const saveData = async (data) => {
        try {
            await addDoc(collection(db, "delivery"), data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async (id, data) => {
        try {
            await setDoc(doc(db, "delivery", id), data);
        } catch (error) {
            console.log(error);
        }
    }

    const encontrarCategoria = async (categoria) => {
        // Create a reference to the delivery collection
        const deliveryRef = collection(db, "delivery");
      
        // Create a query against the collection
        const q = query(deliveryRef, where("food-categories", "array-contains", categoria));
      
        // Get the documents that match the query
        const querySnapshot = await getDocs(q);
      
        // Return an array with the documents data
        return querySnapshot.docs.map((doc) => doc.data());
      }


        useEffect(() => {
            console.log("Primer paso antes AWAIT");
            const getDbFirestore = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "delivery"));
                    const docs = []
                    console.log("Segundo paso despues AWAIT");
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id })
                    });
                    setDbFirestore(docs)
                    setUpdatedDbFirestore(docs) // Inicializamos la variable actualizada con la información original
                } catch (error) {
                    console.log(error);
                }
            }
            getDbFirestore()
        }, []);


        return (
            <dataContext.Provider
                value={{
                    saveData,
                    updatedDbFirestore,
                    encontrarCategoria,
                }}
            >
                {children}
            </dataContext.Provider>
        );
    }