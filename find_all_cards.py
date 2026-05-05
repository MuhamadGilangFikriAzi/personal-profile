with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find each project card by looking for title then going backward to find opening div
# ID cards: look for the common structure
# Sweetbake is project-card type, others are skill-card type
# But they're all inside a grid container

# Find the grid container that holds all project cards
# Sweetbake is the last one, find its close and work backward
# Find the section title "Projects" area
proj_section = html.find('id="projects"')
print(f'Projects section at {proj_section}')

# Find the grid container after it
grid_start = html.find('grid', proj_section)
print(f'Grid container at {grid_start}')
# Get from projects title to sweetbake close
section = html[proj_section:proj_section+22000]

# Find all project card containers
# The structure: they're inside a flex-wrap gap-1.5 mb-3 which is inside each card
# Let's find each card by searching for "proj.*.title" and extracting surrounding div

import re

# Find all project-card openings and their closes
card_areas = []
for m in re.finditer(r'<div class="bg-white rounded-2xl overflow-hidden.*?project-card', html[proj_section:proj_section+22000]):
    # This is sweetbake style (project-card with overflow-hidden)
    pass

for m in re.finditer(r'<div class="bg-white rounded-2xl p-6 shadow-sm border', html[proj_section:proj_section+22000]):
    # This is skill-card style (other projects)
    pass

# Simpler: find each card by tracking div nesting
# Each card starts with <div class="bg-white rounded-2xl" and is closed by </div></div></div></div>
# Let's find the positions

card_starts = []
search_start = proj_section
while True:
    # Find any project/skill card start
    s1 = html.find('<div class="bg-white rounded-2xl overflow-hidden', search_start)
    s2 = html.find('<div class="bg-white rounded-2xl p-6 shadow-sm border', search_start)
    
    candidates = [x for x in [s1, s2] if x > -1]
    if not candidates:
        break
    card_start = min(candidates)
    if card_start > search_start + 20000:
        break
    card_starts.append(card_start)
    search_start = card_start + 1

print(f"\nFound {len(card_starts)} card starts")
for i, cs in enumerate(card_starts):
    print(f"Card {i} at {cs}: {html[cs:cs+100]}")
