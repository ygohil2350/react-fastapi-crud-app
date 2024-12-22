FROM python:3.12-slim
WORKDIR /app
RUN apt-get update && apt-get install -y gcc libpq-dev
RUN pip install --upgrade pip && pip install poetry && poetry config virtualenvs.create false
COPY pyproject.toml poetry.lock /app/
RUN poetry install
COPY app /app/app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
