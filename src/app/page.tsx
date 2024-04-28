import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<Link href='/admin'>
				<Button type='dashed' size={'large'}>
					Админка
				</Button>
			</Link>
		</main>
	);
}
