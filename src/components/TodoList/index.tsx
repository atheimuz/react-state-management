import { todoStore } from "../../lib/store";

function Todo() {
    const list = todoStore((state) => state.list);

    return (
        <ul>
            {list.map((text, index) => (
                <li key={index}>{text}</li>
            ))}
        </ul>
    );
}

export default Todo;
