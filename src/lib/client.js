import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();
export const client = axios.create();

client.defaults.baseURL = "https://koreanjson.com";
