import { useQuery } from '@tanstack/react-query';
import labels from '../data/labels.json';

export default function useLabels() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["labels"],
        queryFn: async () => labels
    })

    return { data, isLoading, error }
}