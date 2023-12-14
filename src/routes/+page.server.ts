export const load = (async () => {
    return {};
})

export const actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();
        const chat = data.get('chat')

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                model: 'mistral',
                prompt: chat + '. Use only Tailwind for styling. Only respond with HTML! Do not explain anything.',
                stream: false
            })
        }

        const res = await fetch('http://localhost:11434/api/generate', options)

        const {response} = await res.json()

        return { response }
    }
};