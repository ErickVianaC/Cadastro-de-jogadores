import { ZodError } from 'zod';
import { Response } from 'express';

interface Issue {
    code: string;
    expected?: string;
    received?: string;
    path: (string | number)[];
    message: string;
}

interface ErrorData {
    issues: Issue[];
    name: string;
}

export const handleZodError = (error: ZodError, res: Response) => {
    const errorData: ErrorData = {
        issues: [],
        name: error.name,
    };

    error.issues.forEach((issue) => {
        const errorIssue = {
            code: issue.code,
            path: issue.path.map((path) => path.toString()),
            message: issue.message,
        };

        errorData.issues.push(errorIssue);
    });

    const statusCode = 400;
    const message = 'Validation error';
    res.status(statusCode).json({ message, error: errorData });
};
