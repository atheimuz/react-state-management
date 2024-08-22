import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { client } from "../../lib/client";
import { PostProps } from "../../components/PostItem";

export const QUERY_KEY = "/product";
const fetcher = ({ page, limit }: { page: number; limit: number }) =>
    client
        .get<PostProps[]>("/list", { params: { page, limit } })
        .then(({ data }) => data);

export const useProductQuery = ({
    page,
    limit,
}: {
    page: number;
    limit: number;
}) =>
    useQuery({
        queryKey: [QUERY_KEY, page],
        queryFn: () => fetcher({ page, limit }),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 10,
        gcTime: 1000 * 10,
    });
