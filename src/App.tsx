import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Post from "./components/Post";
import Todo from "./components/Todo";

import { queryClient } from "./lib/client";
import "./App.css";

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Post />
                <Todo />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default App;
