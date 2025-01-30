import {z} from 'zod';

export const messageSchema = z.object({
    content: z
    .string()
    .min(1, {message: 'Message must not be empty'})
    .max(300,{message: 'Message must not exceed 300 characters'}),
})