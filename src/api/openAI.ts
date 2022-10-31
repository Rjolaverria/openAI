import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const createOpenAIRequest = async (
    createCompletion: CreateCompletionRequest
) => await openai.createCompletion(createCompletion);

export const davinci = (prompt: string) =>
    createOpenAIRequest({
        model: 'text-davinci-002',
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

export const curie = (prompt: string) =>
    createOpenAIRequest({
        model: 'text-curie-001',
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

export const babbage = (prompt: string) =>
    createOpenAIRequest({
        model: 'text-babbage-001',
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

export const davinci002 = (prompt: string) =>
    createOpenAIRequest({
        model: 'text-ada-001',
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
