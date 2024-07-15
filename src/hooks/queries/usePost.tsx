import { useQuery } from "@tanstack/react-query";
import { client, queryClient } from "../../lib/client";

export const useGetPostList = ({
    skip = 0,
    limit = 10,
}: {
    skip: number;
    limit: number;
}) =>
    useQuery({
        queryKey: ["posts", skip * limit],
        queryFn: async () => {
            const { data } = await client.get("/posts");
            const slicedList = [...data].slice(
                skip * limit,
                skip * limit + limit
            );
            return slicedList;
        },
    });

export const usePostList = (skip: number = 0) =>
    queryClient.getQueryData(["posts"]) || [];
