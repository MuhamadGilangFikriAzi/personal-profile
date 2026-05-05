with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

proj_section_start = html.find('xl:grid-cols-3 gap-8')
grid_start = html.find('<div', proj_section_start)
grid_start = html.index('>', grid_start) + 1

content = html[grid_start:grid_start+16000]
print(content[1000:4000])
