// useSections.ts
import { Build, Room } from '@prisma/client';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const API_BASE_URL = '/api';

export interface ISection extends Build {
	rooms: Room[];
}

const fetchSections = async (): Promise<ISection[]> => {
	try {
		const response = await axios.get<ISection[]>(`${API_BASE_URL}/sections`);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Failed to fetch data');
		} else {
			throw new Error('Failed to fetch data');
		}
	}
};

export function useSections(): UseQueryResult<ISection[], Error> {
	return useQuery<ISection[], Error>({
		queryKey: ['sections'],
		queryFn: fetchSections,
		// Здесь можно добавить дополнительные опции, например, staleTime или cacheTime
	});
}
