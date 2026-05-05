with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the sweetbake section (starts at 45003)
sb_start = html.find('x-text="$t(\'proj.sweetbake.title\')">SweetBake</h3>')
# Go back to find the beginning of this project card
card_start = html.rfind('<div', 0, sb_start)
# The closing of sweetbake card
sb_end = html.find('</div>', html.find('</div>', html.find('</div>', sb_start) + 6) + 6) + 6

print(f"SweetBake card: {card_start} to {sb_end}")
print(f"Content: {html[card_start:card_start+100]}...")
print(f"End content: ...{html[sb_end-50:sb_end]}")

# Find the pos section
pos_start = html.find('x-text="$t(\'proj.pos.title\')">Sistem POS Warung</h3>')
pos_card_start = html.rfind('<div', 0, pos_start)
pos_end = html.find('</div>', html.find('</div>', html.find('</div>', pos_start) + 6) + 6) + 6

print(f"\nPOS card: {pos_card_start} to {pos_end}")
print(f"Content: {html[pos_card_start:pos_card_start+100]}...")
print(f"End content: ...{html[pos_end-50:pos_end]}")

# Extract both cards
sb_card = html[card_start:sb_end]
pos_card = html[pos_card_start:pos_end]

print(f"\nSweetBake card length: {len(sb_card)}")
print(f"POS card length: {len(pos_card)}")

# Check: is POS directly before SweetBake?
print(f"\nPOS ends at: {pos_end}")
print(f"SweetBake starts at: {card_start}")
print(f"Gap between POS end and SweetBake start: {card_start - pos_end} chars")
print(f"Gap content: {html[pos_end:card_start]}")
