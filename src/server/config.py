# host=database, where database is a service name which is created in docker-compose.yml file

user = 'root'
password = 'root'
host = 'database'
database = 'chart'
port = 3306

DATABASE_CONNECTION_URI = f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}'
