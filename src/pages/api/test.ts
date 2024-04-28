// pages/api/rooms.ts
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Получаем все записи из таблицы Room
		const rooms = await prisma.room.findMany({
			include: {
				build: true, // Добавляем сведения о связанном объекте Build
			},
		});

		// Отправляем результат в формате JSON
		res.status(200).json(rooms);
	} catch (error) {
		// В случае ошибки отправляем статус 500 и сообщение об ошибке
		res
			.status(500)
			.json({ error: 'An error occurred while fetching the data.' });
	}
}
