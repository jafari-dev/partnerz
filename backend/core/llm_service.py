import os
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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",
)


import random

def generate_faqs(product, num_questions=None):
    if num_questions is None:
        num_questions = random.choice([2, 3, 4])
    prompt = (
        f"Generate {num_questions} unique, relevant and non-overlapping frequently asked questions (FAQs) for the following product. Only return the questions, no answers.\n\n"
        f"Title: {product['title']}\n\n"
        f"Description: {product['description']}\n\n"
        f"Variants: {product['variants']}\n\n"
        f"Format:\nQuestion 1?\nQuestion 2?\n...\nQuestion N?\n"
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
        # Split by line and filter out empty/questionless lines
        return [q.strip() for q in answer.split("\n") if q.strip() and q.strip().endswith("?")]
    except Exception as e:
        return [f"Error generating FAQs: {str(e)}"]

def generate_answer(question, product):
    prompt = (
        f"You are a product assistant. Given the following product information, answer the user's question as helpfully and accurately as possible.\n\n"
        f"Title: {product['title']}\n\n"
        f"Description: {product['description']}\n\n"
        f"Variants: {product['variants']}\n\n"
        f"Question: {question}\n"
    )
    try:
        response = client.chat.completions.create(
            model="mistralai/mistral-7b-instruct",
            messages=[
                {"role": "system", "content": "You are a helpful and accurate product assistant."},
                {"role": "user", "content": prompt},
            ],
        )
        answer = response.choices[0].message.content.strip()
        return answer
    except Exception as e:
        return f"Error generating answer: {str(e)}"

