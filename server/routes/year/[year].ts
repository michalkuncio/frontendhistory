import * as path from 'node:path';
import * as fs from 'node:fs';

export default defineEventHandler(async (event) => {
    const year = getRouterParam(event, 'year');

    const filePath = path.join(process.cwd(), 'server', 'data', `${year}.json`);
    const file = await fs.promises.readFile(filePath, 'utf-8');
    const json = JSON.parse(file);
    return json.reverse();
});
