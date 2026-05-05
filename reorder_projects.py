with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# The structure of the grid: cards are in a div with class that contains grid
# Each card starts with '<div class="bg-white rounded-2xl' pattern
# Let's find the project grid container

# Find container that holds all project cards
# Look for the section containing all project cards
proj_section_start = html.find('class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">')
if proj_section_start == -1:
    proj_section_start = html.find('max-w-5xl mx-auto')
    
print(f"Grid section at {proj_section_start}")

# Find card boundaries - each card is a bg-white rounded-2xl
cards_start = []
cards_end = []
search_start = proj_section_start

while True:
    card_begin = html.find('<div class="bg-white rounded-2xl', search_start)
    if card_begin == -1:
        break
    # The card ends with </div></div></div> pattern for last closing
    # Find the 3rd </div> from end of card
    first_close = html.find('</div>', card_begin) + 6
    second_close = html.find('</div>', first_close) + 6
    third_close = html.find('</div>', second_close) + 6
    
    cards_start.append(card_begin)
    cards_end.append(third_close)
    search_start = third_close
    print(f"Card at {card_begin}-{third_close}: {html[card_begin:card_begin+80]}...")

print(f"\nFound {len(cards_start)} cards")
for i, (s, e) in enumerate(zip(cards_start, cards_end)):
    print(f"Card {i}: {s}-{e} ({e-s} chars)")

# Cards are: 0=lab, 1=landing, 2=company, 3=pos, 4=sweetbake
# Want to move sweetbake (index 4) before pos (index 3)
# So new order: 0=lab, 1=landing, 2=company, 3=sweetbake, 4=pos

cards = []
for s, e in zip(cards_start, cards_end):
    cards.append(html[s:e])

# Get html before first card and after last card
before_cards = html[:cards_start[0]]
after_cards = html[cards_end[-1]:]

# New order: lab, landing, company, sweetbake, pos
new_order = [cards[0], cards[1], cards[2], cards[4], cards[3]]

new_html = before_cards + '\n'.join(new_order) + after_cards

print(f"\nOld grid: {html[cards_start[0]:cards_end[-1]][:100]}...")
print(f"New grid: {new_html[cards_start[0]:cards_start[0]+100]}...")
print(f"\nTotal old: {len(html)}, total new: {len(new_html)}")

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("\n✅ Cards reordered!")
