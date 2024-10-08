import {z} from "zod";

export const bookSchema = z.object({
    title: z.string().min(1, {message: "タイトルは必須です"}),
    author: z.string().min(1, {message: "著者は必須です"}),
    translator: z.string().nullish(),
    review: z.string(),
    rating: z.number().min(1).max(5, {message: "評価は1~5の間で入力してください"}),
    startDate: z.date().nullish(),
    endDate: z.date().nullish(),
    categoryId: z.number().min(1, {message: "カテゴリーは必須です"}).nullish(),
}).refine((data) => {
    if(data.startDate && data.endDate && data.startDate > data.endDate) {
        return false;
    }
    return true;
}, {
    message: "読書終了日は読書開始日より後の日付を選択してください",
    path: ["endDate"],
})
        

export type BookFormType = z.infer<typeof bookSchema>;