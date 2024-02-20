# import os

# # Define input and output filenames
# input_file = "styles.css"
# output_dir = "split"
# prefix = "output"

# # Create output directory if it doesn't exist
# os.makedirs(output_dir, exist_ok=True)

# # Define the number of characters per file
# chars_per_file = 15000

# # Read input file content
# with open(input_file, 'r') as f:
#     content = f.read()

# # Split content into parts based on character count
# num_files = len(content) // chars_per_file + 1
# for i in range(num_files):
#     start = i * chars_per_file
#     end = (i + 1) * chars_per_file
#     part_content = content[start:end]
#     output_file = os.path.join(output_dir, f"{prefix}{i}.css")
#     with open(output_file, 'w') as f:
#         f.write(part_content)
# Define input and output filenames
input_file = "styles.css"
output_file = "rewritten_styles.css"

# Read input file content
with open(input_file, 'r') as f:
    content = f.read()

# Rewrite content with newline after each closing bracket
rewritten_content = ""
for char in content:
    rewritten_content += char
    if char == '}':
        rewritten_content += '\n'  # Add a newline after each closing bracket

# Write the rewritten content to the output file
with open(output_file, 'w') as f:
    f.write(rewritten_content)
