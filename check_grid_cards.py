with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find grid between projects section and check each card's height
proj_section_start = html.find('class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"')
if proj_section_start == -1:
    proj_section_start = html.find('xl:grid-cols-3 gap-8')
    
print(f"Grid at {proj_section_start}")
grid_begin = html.rfind('<div', 0, proj_section_start)
content = html[proj_section_start:proj_section_start+16000]

# Find each project-card
i = 0
card_num = 0
while True:
    pc = content.find('project-card bg-white rounded-2xl', i)
    if pc == -1:
        break
    card_num += 1
    # show the gradient header
    header_start = content.find('<div class="h-48', pc)
    pad_pos = content.find('class="p-6"', pc)
    if pad_pos > -1:
        span = content.find('<span ', pad_pos)
        span_end = content.find('</span>', span) if span > -1 else -1
        title_content = content[pc+10:pc+200]  # first 200 chars
    
    print(f"Card {card_num}:")
    # Find the title in this card
    title_pos = content.find('<div class="text-xl font-bold">', pc, pc+500)
    if title_pos > -1:
        title_end = content.find('</div>', title_pos)
        title = content[title_pos+35:title_end]
        print(f"  Title: {title}")
    print(f"  Starts at: {pc} (relative to grid)")
    i = pc + 5

print(f"\nTotal project cards in grid: {card_num}")
