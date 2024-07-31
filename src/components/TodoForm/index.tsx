import { useState } from "react";
import { todoStore } from "../../lib/store";

function Todo() {
    const addList = todoStore((state) => state.addList);

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                type="button"
                onClick={() => addList(inputValue)}
                disabled={!inputValue}
            >
                추가
            </button>
        </div>
    );
}

export default Todo;
