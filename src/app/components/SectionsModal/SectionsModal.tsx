import { useSections } from '@/services/client-api/BuildService';
import BuildingsTable from './BuildingsTable';

export default function SectionsModal() {
	const { data: sections, isFetching } = useSections();

	return (
		<div>
			{sections ? (
				<BuildingsTable data={sections} />
			) : (
				<h1>{'Данные загружаются'}</h1>
			)}
		</div>
	);
}
