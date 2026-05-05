with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_body = "<body x-data=\"{ lang: 'id', mobileOpen: false }\" x-init=\"if(localStorage.getItem('lang')) lang = localStorage.getItem('lang')\">"
new_body = "<body x-data=\"{ lang: 'id', mobileOpen: false, scrolled: false }\" x-init=\"lang = localStorage.getItem('lang') || 'id'; window.addEventListener('scroll', () => scrolled = window.scrollY > 30)\">"
html = html.replace(old_body, new_body)

html = html.replace('<nav x-data="{ scrolled: false }"', '<nav')
html = html.replace('<nav x-data="{ scrolled: false }">', '<nav')

# Remove duplicate x-init from nav
html = html.replace("x-init=\"window.addEventListener('scroll', () => scrolled = window.scrollY > 30)\"", '')

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done")
has = "'scrolled: false' in html"
check = 'scrolled: false' in html
print(f"Body has scrolled: {check}")
