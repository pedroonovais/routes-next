import { Menu } from "../../../components/menu/Menu";

export default function Detalhes({ params: { id } }) {
    return (
        <div>
            <h1>Detalhes</h1>
            <Menu />

            <h2>{id}</h2>
        </div>
    )
}