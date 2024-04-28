import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BuildService {
	static async get() {
		const builds = await prisma.build.findMany({
			include: {
				rooms: true, // Включаем связанные объекты Room
			},
		});
		return builds;
	}
	static async create(title: string) {
		return;
	}
	static async update(id: number) {
		return;
	}
	static async delete(id: number) {
		return;
	}
}
