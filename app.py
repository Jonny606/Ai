import gradio as gr
from transformers import AutoTokenizer, AutoModelForCausalLM, GenerationConfig
import torch

model_id = "mistralai/Mistral-7B-Instruct-v0.2"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
    device_map="auto"
)

chat_history = []

def chat(user_input):
    chat_history.append(f"User: {user_input}\nAssistant:")
    prompt = "\n".join(chat_history)

    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    gen_config = GenerationConfig(
        max_new_tokens=200,
        do_sample=True,
        top_p=0.9,
        pad_token_id=tokenizer.eos_token_id,
    )

    with torch.no_grad():
        output = model.generate(**inputs, generation_config=gen_config)

    decoded = tokenizer.decode(output[0], skip_special_tokens=True)
    reply = decoded.split("Assistant:")[-1].strip().split("User:")[0].strip()
    chat_history.append(f" {reply}")
    return reply

iface = gr.Interface(fn=chat, inputs="text", outputs="text", title="Smart Chatbot", description="Chat with a Mistral 7B model.")

iface.launch()
