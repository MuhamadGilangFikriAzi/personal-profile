with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

target = "x-text=\"$t('proj."
start = 0
while True:
    idx = html.find(target, start)
    if idx == -1 or idx > 100000:
        break
    end = html.find('</h3>', idx)
    if end == -1:
        break
    print(html[idx:end+5])
    start = idx + 1
