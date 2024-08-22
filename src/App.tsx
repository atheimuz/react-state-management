import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostList from "./components/PostList";
import InfinitePostList from "./components/InfinitePostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { queryClient } from "./lib/client";
import "./App.css";

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                {/* <PostList /> */}
                <InfinitePostList />
                <TodoForm />
                <TodoList />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default App;
