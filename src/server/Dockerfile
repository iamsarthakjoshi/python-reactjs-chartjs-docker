
# pull official base image
FROM python:latest

ENV PYTHONDONTWRITEBYTECODE 1
ENV FLASK_APP "app.py"
ENV FLASK_ENV "development"
ENV FLASK_DEBUG True


# set working directory
WORKDIR /app

# add and install requirements
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# add app
COPY . .

EXPOSE 5000

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x wait-for-it.sh
# CMD ["python", "app.py"]
# CMD ["flask", "run", "--host", "0.0.0.0"]