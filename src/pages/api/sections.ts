import { BuildService } from '@/services/BuildService';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		try {
			const builds = await BuildService.get();
			res.status(200).json(builds);
		} catch (error) {
			res.status(500).json({ error: 'Internal server error' });
		}
	}
	if (req.method !== 'GET') {
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
