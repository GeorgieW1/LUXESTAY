import { useQuery } from '@tanstack/react-query'

export interface Property {
    _id: string;
    name: string;
    description: string;
    pricePerNight: number;
    location: string;
    images: string[];
    amenities: string[];
    rating: number;
}

const fetchProperties = async (searchParams?: { location?: string; guests?: string }): Promise<Property[]> => {
    const url = new URL('http://localhost:8000/api/properties');
    if (searchParams?.location) url.searchParams.append('location', searchParams.location);
    if (searchParams?.guests) url.searchParams.append('guests', searchParams.guests);

    const res = await fetch(url.toString());
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data.data.properties;
};

export const useProperties = (searchParams?: { location?: string; guests?: string }) => {
    return useQuery({
        queryKey: ['properties', searchParams],
        queryFn: () => fetchProperties(searchParams),
    });
};
