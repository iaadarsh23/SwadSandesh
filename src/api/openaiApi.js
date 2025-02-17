export const getdata = async (dishName) => {
	const API_URL = "https://api.groq.com/openai/v1/chat/completions";
	const apiKey = import.meta.env.VITE_GROQ_API_KEY;

	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				messages: [
					{
						role: "system",
						content:
							"You are a recipe generator. Only return the recipe for the given dish. Do not add any extra information or greetings.",
					},
					{ role: "user", content: dishName },
				],
				temperature: 0.8, // Ensures more structured responses
				//control the msg length

				model: "llama3-70b-8192",
			}),
		});

		if (!response.ok) {
			throw new Error(`API error: ${response.status}`);
		}

		const data = await response.json();
		console.log("Groq Response:", data);
		return data.choices[0]?.message?.content || "No response from AI";
	} catch (error) {
		console.error("Groq API Request Error:", error.message);
	}
};
