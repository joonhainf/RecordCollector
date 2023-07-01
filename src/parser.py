import os
import json
import pandas as pd
import sqlite3

# Directory where the JSON files are saved
json_directory = 'C:/Users/joonh/Downloads/Storehere'

# store list of extracted data
data = []

# Iterate through JSON files
for filename in os.listdir(json_directory):
    if filename.endswith('.json'):
        with open(os.path.join(json_directory, filename)) as file:
            json_data = json.load(file)
            data.append(json_data)

# Extract the column names since its key 0
column_names = list(data[0].keys())

# Dictionary to store the data
combined_data = {}
for column_name in column_names:
    combined_data[column_name] = [item[column_name] for item in data]

# Convert dictionary to a DataFrame
df = pd.DataFrame(combined_data)

# Export DataFrame to Excel file
excel_file = 'C:/Users/joonh/Downloads/Storehere/storehere.xlsx'
df.to_excel(excel_file, index=False)

# Print
print(df)


# Read Excel file to DataFrame
df_excel = pd.read_excel(excel_file)

# Convert column from string to integer using pandas
df_excel['age'] = pd.to_numeric(df_excel['age'], errors='coerce')
df_excel['salary'] = pd.to_numeric(df_excel['salary'], errors='coerce')

# Print
print(df_excel)

excel_file = 'C:/Users/joonh/Downloads/Storehere/storehere.xlsx'
df_excel.to_excel(excel_file, index=False)


print(df_excel)

# Make SQLite Database in mem
conn = sqlite3.connect(':memory:')

# Put into excel_data so u can SQL it
df_excel.to_sql('excel_data', conn, index=False)

# Get rich people
query = "SELECT * FROM excel_data WHERE salary > 100000"
filtered_df = pd.read_sql_query(query, conn)

print(filtered_df)

# Save again 
excel_file = 'C:/Users/joonh/Downloads/Storehere/storehere.xlsx'
filtered_df.to_excel(excel_file, index=False)

# close connection
conn.close()

# Back to JSON don't look at me like that 

import pandas as pd
import json


df = pd.read_excel('C:/Users/joonh/Downloads/Storehere/storehere.xlsx')


json_data = df.to_json(orient='records')


with open('C:/Users/joonh/Downloads/Storehere/storehere.json', 'w') as file:
    file.write(json_data)

print('Excel file converted to JSON successfully!')
