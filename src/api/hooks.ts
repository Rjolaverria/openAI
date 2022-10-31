import { davinci } from './openAI';

export const generateSimilarHooks = async (
    exampleText: string,
    count: number
) => {
    const prompt = `In an unordered list format, make me ${count} hooks similar this:\n${exampleText}`;

    try {
        const { data } = await davinci(prompt);
        const result = data.choices[0].text;
        const formatted = result
            ?.split('\n-')
            .filter((value) => value !== '\n' && value.trim().length);
        return formatted;
    } catch (error) {
        console.error(error);
    }
};
