from langchain_core.prompts import ChatPromptTemplate

from app.rag.llm import get_llm


def get_rag_chain(retriever):

    llm = get_llm()

    template = """
You are a helpful AI assistant.

Answer the user's question ONLY using the context below.

If the answer is not in the context, reply:
"I couldn't find the answer in the video."

Context:
{context}

Question:
{question}
"""

    prompt = ChatPromptTemplate.from_template(template)

    def ask(question: str):

        docs = retriever.invoke(question)

        context = "\n\n".join(doc.page_content for doc in docs)

        messages = prompt.format_messages(
            context=context,
            question=question,
        )

        response = llm.invoke(messages)

        return response.content

    return ask