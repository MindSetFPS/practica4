'use client'
import { useEffect, useState } from "react";
export default function Home() {
  const [cars, setCars] = useState([])
  const [nombre, setNombre] = useState("")
  const [tonelaje, setTonelaje] = useState("")
  const [placas, setPlacas] = useState("")
  const [marca, setMarca] = useState("")
  const [renderCars, setRenderCars] = useState([])

  useEffect(() => {
    if (cars) {
      setRenderCars(cars)
    }
  }, [cars])

  useEffect(() => {
    console.log(nombre)
    console.log(tonelaje)
    console.log(placas)
    console.log(marca)

    if(nombre.length == 0 && tonelaje.length ==0 && placas.length == 0 && marca.length == 0){
      setRenderCars(cars)
    } else {
      console.log("filtering")
      setRenderCars(
        cars.filter(
          car => car.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
                 car.placas.toLowerCase().includes(placas.toLowerCase()) &&
                 car.marca.toLowerCase().includes(marca.toLowerCase())
        )
      )
    }

  }, [nombre, tonelaje, placas, marca])


  useEffect(() => {
    fetch('/api/camiones')
      .then(res => res.json())
      .then(c => setCars(c))
  }, [])

  return (
    <>
      <input onChange={(e) => setNombre(e.target.value)} placeholder="nombre" value={nombre} />
      <input onChange={(e) => setTonelaje(e.target.value)} placeholder="tonelaje" value={tonelaje} />
      <input onChange={(e) => setMarca(e.target.value)} placeholder="marca" value={marca} />
      <input onChange={(e) => setPlacas(e.target.value)} placeholder="placas" value={placas} />
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>tonelaje</th>
            <th>marca</th>
            <th>placas</th>
          </tr>
          {
            cars && cars.length > 0 ?
              renderCars.map(car => (
                <tr key={`${car.id}`}>
                  <th>{car.id}</th>
                  <th>{car.nombre}</th>
                  <th>{car.totalalmacenaje}</th>
                  <th>{car.marca}</th>
                  <th>{car.placas}</th>
                </tr>
              ))
              : <tr>
              </tr>
          }
        </tbody>
      </table>
    </>
  );
}
