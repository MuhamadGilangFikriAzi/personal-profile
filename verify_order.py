import re
with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()
pattern = r"x-text=\$t\('proj\.(\w+)\.title'\)\">([^<]+)</h3>"
for m in re.findall(pattern, html):
    print(m[0] + " -> " + m[1])
