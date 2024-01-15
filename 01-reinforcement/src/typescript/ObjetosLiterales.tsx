interface Person {
  name: string;
  age: number;
  address: Address;
}

interface Address {
  city: string;
  houseNumber: number;
}

export const ObjetosLiterales = () => {

  const person: Person = {
    name: 'Fernando',
    age: 35,
    address: {
      city: 'Canada',
      houseNumber: 615
    }
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {JSON.stringify(person, null, 2)}
        </pre>
      </code>
    </>
  )
}
