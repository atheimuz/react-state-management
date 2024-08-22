import {
    useQuery,
    useInfiniteQuery,
    keepPreviousData,
} from "@tanstack/react-query";
import { client } from "../../lib/client";
import { PostProps } from "../../components/PostItem";

interface FetchProps {
    page: number;
    limit: number;
}
export const QUERY_KEY = "/product";

const fetcher = ({ page, limit }: FetchProps) =>
    client
        .get<PostProps[]>("/list", { params: { page, limit } })
        .then(({ data }) => data);

export const useProductQuery = ({ page, limit }: FetchProps) =>
    useQuery({
        queryKey: [QUERY_KEY, page],
        queryFn: () => fetcher({ page, limit }),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 10,
        gcTime: 1000 * 10,
    });

export const useProductInfiniteQuery = ({ limit }: { limit: number }) =>
    useInfiniteQuery({
        queryKey: [QUERY_KEY],
        queryFn: ({ pageParam }) => fetcher({ page: pageParam, limit }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.length,
    });
