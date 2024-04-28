'use client';
import { Button } from 'antd';
//src/app/pages/admin.tsx
import dayjs from 'dayjs';
import Link from 'next/link';

export default function Admin() {
	const date = dayjs();
	return (
		<div
			style={{
				margin: '20px',
			}}
		>
			<Link href='/' passHref>
				<Button type='dashed' size='large'>
					Домой
				</Button>
			</Link>
		</div>
	);
}
