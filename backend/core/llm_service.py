import os
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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",
)


def generate_faqs(product):
    prompt = (
        f"Generate 3 FAQs for:\n\n"
        f"Title: {product['title']}\n\n"
        f"Description: {product['description']}\n\n"
        f"Variants: {product['variants']}"
    )
    try:
        response = client.chat.completions.create(
            model="mistralai/mistral-7b-instruct",
            messages=[
                {"role": "system", "content": "You are a helpful and accurate product assistant."},
                {"role": "user", "content": prompt},
            ],
        )
        answer = response.choices[0].message.content
        return [q.strip() for q in answer.split("\n") if q.strip()]
    except Exception as e:
        return [f"Error generating FAQs: {str(e)}"]
