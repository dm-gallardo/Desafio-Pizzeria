import { useState, useEffect } from 'react';

export default function usePizzaMap() {

  const [pizzas , setPizzas] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();

        //le agrega un campo count a cada pizza para poder trabajarlo en el carrito

        const pizzasConCount = data.map(pizza => ({
          ...pizza,
          count: 0,
        }));

        setPizzas(pizzasConCount); 
        return pizzasConCount;

      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    }

    getData();
  }, []);

  return { pizzas };
}