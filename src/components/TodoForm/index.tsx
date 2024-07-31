import { useState } from "react";
import { todoStore } from "../../lib/store";

function Todo() {
    // 아래 방식은 list가 추가되면 리렌더링 일어남
    // const { addList } = todoStore();

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
