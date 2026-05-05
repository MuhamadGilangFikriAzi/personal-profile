import re

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all project card titles
for m in re.finditer(r'x-text="\$t\(\'proj\.(\w+)\.title\'\)">([^<]+)</h3>', html):
    print(f"Project: {m.group(1)} -> fallback: {m.group(2)}")
    print(f"  at position {m.start()}")
    print()
