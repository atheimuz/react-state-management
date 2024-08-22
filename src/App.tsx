import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { queryClient } from "./lib/client";
import "./App.css";

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <PostList />
                <TodoForm />
                <TodoList />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default App;
