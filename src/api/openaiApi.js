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
							"You are an expert recipe generator. Provide a well-structured and detailed recipe for the given dish, including a precise list of ingredients with exact measurements, step-by-step cooking instructions in detail and if user ask it in hindi or any other language give response to it in that language also, that are clear and easy to follow, and the total cooking time (both preparation and cooking). Additionally, include a direct, clickable YouTube video link to the best-rated tutorial for this recipe, ensuring it has a preview thumbnail displayed for user convenience. Format the response to be visually appealing, clean, and easy to read. Do not include any extra text, greetings, or explanations—only the structured recipe and the video and return or generate the image of that dish if possible",
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
