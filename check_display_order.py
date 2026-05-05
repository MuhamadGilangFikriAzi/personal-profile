with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find card starts and check what content follows
card_starts = []
i = 31600
while True:
    i = html.find('bg-white rounded-2xl overflow-hidden', i)
    if i == -1 or i > 50000:
        break
    card_starts.append(i)
    i += 5

print(f"Found {len(card_starts)} cards")
for idx, cs in enumerate(card_starts):
    # Find title by looking at next 2000 chars
    section = html[cs:cs+2000]
    # Find project key
    t1 = section.find("proj.")
    t2 = section.find("title")
    if t1 > -1 and t2 > t1:
        key = section[t1:t2+5]
    else:
        # Check for plain text title
        t3 = section.find('<div class="text-xl font-bold">')
        if t3 > -1:
            t4 = section.find('</div>', t3)
            key = section[t3+33:t4]
        else: key = "(unknown)"
    print(f"  Card {idx+1}: {key}")
