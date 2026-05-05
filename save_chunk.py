with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

grid_start = html.find('max-w-5xl mx-auto')
grid_end = grid_start + 15000
chunk = html[grid_start:grid_end]

with open('C:/Users/mgfa9/Project/personal-profile/project_chunk.txt', 'w', encoding='utf-8') as f:
    f.write(chunk)
    
print(f'Saved chunk: {len(chunk)} chars')
print(f'Grid at {grid_start}')
