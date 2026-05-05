with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

target = 'proj.'
start = 0
found = []
while True:
    idx = html.find(target, start)
    if idx == -1 or idx > 100000:
        break
    end = html.find('"', idx)
    snippet = html[idx:end]
    if snippet.startswith('proj.') and snippet.endswith('.title') and '(' not in snippet:
        if snippet not in found:
            found.append(snippet)
            # get position relative to document
            print(f"  {snippet} at offset {idx}")
    start = idx + 1
