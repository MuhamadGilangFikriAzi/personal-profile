with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Card boundaries from earlier:
# Card 4 (POS): 41119 - need to find its end
# Card 5 (SweetBake): 43753 - need to find its end

# Find end of each card by counting div nesting
def find_card_end(html, start):
    """Find the end of a card div by counting nesting"""
    # Card starts with <div class="bg-white ...
    # Count opening and closing divs
    depth = 1
    i = start
    # Find the first > to start after the opening tag
    i = html.index('>', i) + 1
    while depth > 0 and i < len(html):
        next_open = html.find('<div', i)
        next_close = html.find('</div>', i)
        
        if next_close == -1:
            break
        if next_open == -1 or next_close < next_open:
            depth -= 1
            i = next_close + 6
        else:
            depth += 1
            i = next_open + 4
    return i

pos_card_start = 41119
sb_card_start = 43753

pos_card_end = find_card_end(html, pos_card_start)
sb_card_end = find_card_end(html, sb_card_start)

print(f"POS: {pos_card_start} to {pos_card_end} ({pos_card_end - pos_card_start} chars)")
print(f"SweetBake: {sb_card_start} to {sb_card_end} ({sb_card_end - sb_card_start} chars)")

# Get text before POS, between cards, and after sweetbake
before_pos = html[:pos_card_start]
between = html[pos_card_end:sb_card_start]
after_sb = html[sb_card_end:]

# New order: swap POS and SweetBake
# Put SweetBake where POS was, and POS where SweetBake was
sb_card = html[sb_card_start:sb_card_end]
pos_card = html[pos_card_start:pos_card_end]

new_html = before_pos + sb_card + between + pos_card + after_sb

print(f"\nOld total: {len(html)}")
print(f"New total: {len(new_html)}")

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("✅ Cards swapped: SweetBake now before POS")
