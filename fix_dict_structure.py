import re

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all x-data occurrences
for m in re.finditer(r'x-data="([^"]*)"', html):
    print(f"At {m.start()}: {m.group(0)}")

# Find LANG SWITCHER
start = html.find('LANG SWITCHER')
print(f"\n=== LANG SWITCHER ===")
end = html.find('</div>', start) + 6
end2 = html.find('</div>', end) + 6
print(html[start:end2])

# Find second x-data
print(f"\n=== OTHER x-data ===")
matches = list(re.finditer(r'x-data="([^"]*)"', html))
for m in matches[1:3]:
    print(f"At {m.start()}: {m.group(0)}")
