import Link from "next/link";
import Image  from "next/image";
import { Menu } from "../../components/menu/Menu";

export default function Produtos() {
  const burgers = [
    {
      id: 1,
      image: [
        "https://files.menudino.com/cardapios/37486/222.jpg",
        "https://files.menudino.com/cardapios/37486/211.jpg",
      ],
      title: "DARK",
      description:
        "Um delicioso smash 100gr, blue cheese, cebola crispy, melado de cana e maionese especial. Tudo isso dentro de um pão Australiano.",
      values: {
        single: 28,
        combo: 43,
      },
    },
    {
      id: 2,
      image: [
        "https://files.menudino.com/cardapios/37486/212.jpg",
        "https://files.menudino.com/cardapios/37486/79.jpg",
      ],
      title: "DOUBLE CHEESE",
      description:
        "Um delicioso smash 100gr, mussarela empanada, Requeijão cremoso, Bacon em cubos e maionese especial. Tudo isso dentro de um pão Australiano.",
      values: {
        single: 35,
        combo: 50,
      },
    },
    {
      id: 3,
      image: [
        "https://files.menudino.com/cardapios/37486/123.jpg",
        "https://files.menudino.com/cardapios/37486/47.jpg",
      ],
      title: "BURGER",
      description:
        "Um delicioso smash 100g, maionese especial e fatias de queijo prato. Tudo isso dentro de um pão bem fofinho! :)",
      values: {
        single: 18,
        combo: 33,
      },
    },
    {
      id: 4,
      image: [
        "https://files.menudino.com/cardapios/37486/5.jpg",
        "https://files.menudino.com/cardapios/37486/47.jpg",
      ],
      title: "HOME",
      description:
        "Um delicioso smash 100gr, molho verde magnífico, fatias de queijo prato, alface e tomate frescos. Tudo isso dentro de um pão bem fofinho. :)",
      values: {
        single: 23,
        combo: 38,
      },
    },
    {
      id: 5,
      image: [
        "https://files.menudino.com/cardapios/37486/15.jpg",
        "https://files.menudino.com/cardapios/37486/78.jpg",
      ],
      title: "CHEDDAR",
      description:
        "Um delicioso smash 100g, fatias de queijo cheddar e cubinhos de bacon. Tudo isso dentro de um pão bem fofinho! :)",
      values: {
        single: 22,
        combo: 37,
      },
    },
    {
      id: 6,
      image: [
        "https://files.menudino.com/cardapios/37486/117.jpg",
        "https://files.menudino.com/cardapios/37486/80.jpg",
      ],
      title: "LEMON CHICKEN",
      description:
        "Um delicioso frango empanado bem crocante, molho tropical e alface fresca. Tudo isso dentro de um pão bem fofinho! :)",
      values: {
        single: 22,
        combo: 37,
      },
    },
    {
      id: 7,
      image: [
        "https://files.menudino.com/cardapios/37486/16.jpg",
        "https://files.menudino.com/cardapios/37486/82.jpg",
      ],
      title: "DUCHEF",
      description:
        "Um delicioso smash 100g, maionese especial, requeijão cremoso, cubinhos de calabresa e cebolas bem grelhadinhas, alface e tomate frescos. Tudo isso dentro de um pão bem fofinho! :)",
      values: {
        single: 27,
        combo: 42,
      },
    },
    {
      id: 8,
      image: [
        "https://files.menudino.com/cardapios/37486/17.jpg",
        "https://files.menudino.com/cardapios/37486/83.jpg",
      ],
      title: "ONION",
      description:
        "Um delicioso smash 100g, maionese especial, fatias queijo cheddar, cebolas empanadas bem crocantes com barbecue, alface e tomate frescos. Tudo isso dentro de um pão bem fofinho! :)",
      values: {
        single: 26,
        combo: 41,
      },
    },
  ];

  return (
    <div>
      <h1>Produtos</h1>
      <Menu />
      {burgers.map((burger) => (
        <div key={burger.id}>
            <h3>{burger.title}</h3> 
            <Image src={burger.image[0]} alt={burger.description} width={300} height={300}/>
            <p>{burger.values.single}</p>
            <Link href={`/produtos/${burger.id}`}>Detalhes</Link>
        </div>
      ))}
    </div>
  );
}
