# FROM python:latest
# ADD . /code
# WORKDIR /code
# RUN pip install -r requirements.txt
# CMD python app.py



# pull official base image
FROM python:latest

# set working directory
WORKDIR /app

# add and install requirements
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80
EXPOSE 5000

# add app
COPY . /app

# CMD ["python", "app.py"]
CMD ["flask", "run"]
