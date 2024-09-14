import {
    Box,
    Button,
    Chip,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Rating,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
// datePicker
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import {
    LocalizationProvider,
    LocalizationProviderProps,
} from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ja } from "date-fns/locale";
import { useState } from "react";

const BookForm = () => {
    const [ratingValue, setRatingValue] = useState<number | null>(3);
    const formLabel = {
        title: "本のタイトルを入力してください",
        author: "著者名を入力してください",
        translator: "翻訳者を入力してください",
        review: "感想を入力してください",
        rating: "評価を入力してください",
    };

    const commonTextStyle = {
        fontSize: "18px",
    };

    const requiredBatchStyle = {
        background: "red",
        color: "#fff",
        width: "50px",
        height: "20px",
        fontSize: "12px",
        mx: 1,
    };

    return (
        <Box component="form" sx={{ maxWidth: "700px", m: "auto", mt: 4 }}>
            <Stack spacing={3}>
                {/* 書籍名 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{ display: "flex", flex: 3, alignItems: "center" }}
                    >
                        <Typography sx={{ ...commonTextStyle }}>
                            書籍名
                        </Typography>
                        <Chip label="必須" sx={requiredBatchStyle} />
                    </Box>

                    <TextField sx={{ flex: 10 }} label={formLabel.title} />
                </Box>
                {/* 作者 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{ display: "flex", flex: 3, alignItems: "center" }}
                    >
                        <Typography sx={{ ...commonTextStyle }}>
                            作者
                        </Typography>
                        <Chip label="必須" sx={requiredBatchStyle} />
                    </Box>
                    <TextField sx={{ flex: 10 }} label={formLabel.author} />
                </Box>
                {/* 翻訳者 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ ...commonTextStyle, flex: 3 }}>
                        翻訳者
                    </Typography>
                    <TextField sx={{ flex: 10 }} label={formLabel.translator} />
                </Box>
                {/* 感想 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ ...commonTextStyle, flex: 3 }}>
                        感想
                    </Typography>
                    <TextField
                        sx={{ flex: 10 }}
                        label={formLabel.review}
                        multiline
                        rows={5}
                        variant="standard"
                    />
                </Box>
                {/* 評価 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flex: 3,
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{ ...commonTextStyle }}>
                            評価
                        </Typography>
                        <Chip label="必須" sx={requiredBatchStyle} />
                    </Box>
                    <Box
                        sx={{
                            flex: 10,
                        }}
                    >
                        <Typography sx={{ fontSize: "12px" }}>
                            {formLabel.rating}
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue: number | null) => {
                                setRatingValue(newValue);
                            }}
                        />
                    </Box>
                </Box>
                {/* 読書開始日 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ ...commonTextStyle, flex: 3 }}>
                        読書開始日
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker label="開始日を入力してください" />
                    </LocalizationProvider>
                </Box>
                {/* 読書終了日 */}
                {/* カテゴリー */}
                <Button type="submit" variant="contained">
                    送信
                </Button>
            </Stack>
        </Box>
    );
};

export default BookForm;
