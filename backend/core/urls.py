from django.urls import path
from .views import FAQView, ChatView

urlpatterns = [
    path("faqs", FAQView.as_view(), name="faqs"),
    path("chat", ChatView.as_view(), name="chat"),
]
