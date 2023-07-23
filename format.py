import os
import re
from bs4 import BeautifulSoup

def extract_a_tag_content(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    a_tags = soup.find_all('a')
    urls = []
    for a_tag in a_tags:
        urls.append(a_tag.text.strip())
    return urls

def main():
    folder_path = 'Webpages'
    output_file = '3output_file.txt'

    # Combine all .html files into one text file
    combined_content = ''
    for filename in os.listdir(folder_path):
        if filename.endswith('.html'):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as file:
                combined_content += file.read()

    # Extract and format URLs
    urls = extract_a_tag_content(combined_content)
    formatted_urls = [f'"{url}",' for url in urls]

    # Join the formatted URLs into a single string
    output_content = '\n'.join(formatted_urls)

    # Use regex to remove unwanted lines (non-URL lines)
    pattern = r'"[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}",'  # Matches domain.tldx format ending with a comma
    output_content = '\n'.join(re.findall(pattern, output_content))

    # Write the formatted URLs to the output file
    with open(output_file, 'w') as outfile:
        outfile.write(output_content)

if __name__ == "__main__":
    main()
