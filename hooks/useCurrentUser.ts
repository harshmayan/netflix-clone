import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);
// swr--fetching user data similar as redux query with having this we don't need any statemanagement status...
    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser;