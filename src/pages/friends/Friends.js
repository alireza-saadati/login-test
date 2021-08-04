import Container from "../../components/container/Container";
import Test from "../../components/test/Test";

const persons = [
  { name: "mahzad", age: "25", city: "tehran" },
  { name: "aida", age: "24", city: "karaj" },
  { name: "melika", age: "23", city: "rasht" },
];

// 1: const person = { name, age, city },

const Friends = () => {
  return (
    <Container>
      Friends
      <hr />
      {/* <without map>  */}
      <Test
        name={persons[0].name}
        age={persons[0].age}
        city={persons[0].city}
      />
      <hr />
      <Test
        name={persons[1].name}
        age={persons[1].age}
        city={persons[1].city}
      />
      <hr />
      <Test
        name={persons[2].name}
        age={persons[2].age}
        city={persons[2].city}
      />
      <hr />
      <hr />
      <hr />
      {/* </ without map>  */}
      {persons.map((person) => (
        <>
          <Test name={person.name} age={person.age} city={person.city} />
          <hr />
        </>
      ))}
      <hr />
      {persons.map((person) => {
        const { name, age, city } = person;
        return (
          <>
            <Test name={name} age={age} city={city} />
            <hr />
          </>
        );
      })}
    </Container>
  );
};
export default Friends;
