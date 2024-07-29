import { todoStore } from "../../lib/store";

function Todo() {
    const { count, increaseCount, decreaseCount } = todoStore();

    return (
        <div>
            <button onClick={decreaseCount}>-</button>
            {count}
            <button onClick={increaseCount}>+</button>
        </div>
    );
}

export default Todo;
