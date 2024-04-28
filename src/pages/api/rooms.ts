import { PrismaClient } from '@prisma/client/extension';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		try {
			// Получаем все Build объекты с их Rooms
			const builds = await prisma.build.findMany({
				include: {
					rooms: true, // Включаем связанные объекты Room
				},
			});

			res.status(200).json(builds);
		} catch (error) {
			res.status(500).json({ error: 'Internal server error' });
		}
	}
	if (req.method !== 'GET') {
		// Не поддерживаемый метод
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
