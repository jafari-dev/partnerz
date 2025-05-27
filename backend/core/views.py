from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .llm_service import generate_faqs, generate_answer  # keep this modular

import random

class FAQView(APIView):
    def post(self, request):
        product = request.data
        # Randomly choose 2, 3, or 4 questions
        num_questions = random.choice([2, 3, 4])
        faqs = generate_faqs(product, num_questions=num_questions)
        return Response({"faqs": faqs}, status=status.HTTP_200_OK)

class ChatView(APIView):
    def post(self, request):
        question = request.data.get("question")
        product = request.data.get("product")
        answer = generate_answer(question, product)
        return Response({"answer": answer}, status=status.HTTP_200_OK)
