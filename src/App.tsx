import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Post from "./components/Post";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { queryClient } from "./lib/client";
import "./App.css";

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Post />
                <TodoForm />
                <TodoList />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default App;
