// pages/api/builds.ts
import { BuildService } from '@/services/BuildService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'POST':
			try {
				// Допустим, мы добавляем новый объект Build
				const newBuild = await BuildService.create(req.body);
				res.status(201).json(newBuild);
			} catch (error) {
				console.error('Failed to create a build:', error);
				res.status(400).json({ error: 'Bad request' });
			}
			break;

		case 'PUT':
			try {
				// Обновление объекта Build
				const updatedBuild = await BuildService.update(req.query.id, req.body);
				res.status(200).json(updatedBuild);
			} catch (error) {
				console.error('Failed to update build:', error);
				res.status(400).json({ error: 'Bad request' });
			}
			break;

		case 'DELETE':
			try {
				// Удаление объекта Build
				const { id } = req.query;
				if (isNaN(Number(id))) {
					// Проверка на валидность числа
					return res.status(400).json({ error: 'Invalid id provided' });
				}
				const data = await BuildService.delete(Number(id));
				res.status(204).send(data); // No content to send back
			} catch (error) {
				console.error('Failed to delete build:', error);
				res.status(404).json({ error: 'Not found' });
			}
			break;

		default:
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
