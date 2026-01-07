import { useQuery } from '@tanstack/react-query';
import members from '../data/members.json';

export default function useMembers() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["members"],
        queryFn: async () => members
    })

    return { data, isLoading, error }
}