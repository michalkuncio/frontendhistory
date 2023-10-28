import * as path from 'node:path';
import * as fs from 'node:fs';

export default defineEventHandler(async () => {
    const dataPath = path.join(process.cwd(), 'server', 'data');

    const files = await fs.promises.readdir(dataPath);

    const years = [];

    for (const file of files) {
        years.push(file.split('.', 1)[0]);
    }

    return years.reverse();
});
