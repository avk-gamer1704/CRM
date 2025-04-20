
import json
import os

# 📁 Path to the folder containing JSON files
folder_path = "/Users/adwaitkavishwar/VIT/hackathon"

# 📄 Output file
output_file = "combined.json"

# 📦 Container for all data
combined_data = []

# 🚀 Loop through all .json files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith(".json"):
        file_path = os.path.join(folder_path, filename)
        with open(file_path, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
                # If the JSON content is a list, extend the main list
                if isinstance(data, list):
                    combined_data.extend(data)
                else:
                    combined_data.append(data)
            except json.JSONDecodeError as e:
                print(f"Error decoding {filename}: {e}")

# 💾 Save combined data to a new JSON file
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(combined_data, f, indent=4, ensure_ascii=False)

print(f"✅ Combined {len(combined_data)} items into '{output_file}'")
