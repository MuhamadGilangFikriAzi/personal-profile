with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all bg-white rounded-2xl in HTML after position 30000
# (not in CSS/skill-card definition)
search_start = 30000
i = search_start
count = 0
while True:
    i = html.find('bg-white rounded-2xl', i)
    if i == -1:
        break
    count += 1
    # Show 150 chars of context
    context = html[i:i+150]
    if 'class=' in context or 'rounded-2xl' in context:
        print(f'#{count} at {i}: {context[:120]}')
        print()
    i += 5
