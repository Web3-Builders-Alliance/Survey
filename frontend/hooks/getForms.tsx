import { authOptions } from '@/lib/authOptions';
import { api } from '@/lib/axios';
import { sleep } from '@/lib/sleep';
import { getServerSession } from 'next-auth';

export default async function getForms() {
  const session = await getServerSession(authOptions);
  try {
    const { data } = await api.get('/api/forms', {
      headers: {
        Authorization: `Bearer ${session?.token}`,
        'Content-Type': 'application/json',
      },
    });
    await sleep(500)
    return data.data;
  } catch (error) {
    return error;
  }
}
