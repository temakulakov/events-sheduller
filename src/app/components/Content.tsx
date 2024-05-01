import { useSections } from '@/services/client-api/BuildService';
import { Button, Modal } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SectionsModal from './SectionsModal/SectionsModal';

export default function Content() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { data: sections, isFetching } = useSections();

	const handleOpenModal = () => {
		// Меняем URL
		router.push('?modal=1', undefined);
		// Открываем модальное окно
		setModalOpen(true);
	};

	useEffect(() => {
		console.log(sections);
		console.log(isFetching);
	}, [isFetching]);

	const handleCloseModal = () => {
		// Меняем URL обратно
		router.push('/', undefined);
		// Закрываем модальное окно
		setModalOpen(false);
	};

	return (
		<div>
			<Button
				loading={isFetching}
				disabled={isFetching}
				type='primary'
				onClick={handleOpenModal}
			>
				Настройки
			</Button>
			<Modal
				title='Настройки'
				centered
				open={isModalOpen}
				confirmLoading={loading}
				onOk={() => setModalOpen(false)}
				onCancel={() => setModalOpen(false)}
				width={900}
			>
				<SectionsModal />
			</Modal>
		</div>
	);
}
