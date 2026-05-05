with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

card_starts = [31673, 34210, 36632, 38832, 41119, 43753]

for i, cs in enumerate(card_starts):
    # Find the title in each card (look for <h3> or proj.*.title)
    card_content = html[cs:cs+2000]
    
    # Find project key reference
    import re
    titles = re.findall(r"x-text=\"\$t\('proj\.(\w+)\.title'\)\">([^<]+)</h3>", card_content)
    for key, fallback in titles:
        print(f"Card {i} (pos {cs}): key=proj.{key}.title, fallback='{fallback}'")
    
    if not titles:
        # Maybe it's lab or uses different pattern
        lab_idx = card_content.find('Lab')
        landing_idx = card_content.find('Landing')
        company_idx = card_content.find('Company')
        pos_idx = card_content.find('POS')
        print(f"Card {i} (pos {cs}): no title found. Nearby: '{card_content[200:400]}'")
