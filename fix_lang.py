with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Alpine.magic script
old = """<script>
document.addEventListener('alpine:init', () => {
    const dict = JSON.parse(document.getElementById('trans-dict').textContent);
    Alpine.magic('t', () => key => {
        const alpineRoot = document.querySelector('[x-data]');
        try {
            const lang = alpineRoot.__x.getUnobservedData().lang;
            return dict[key] ? dict[key][lang] : key;
        } catch(e) {
            return dict[key] ? dict[key]['id'] : key;
        }
    });
});
</script>"""

new_script = """<script>
document.addEventListener('alpine:init', () => {
    const dict = JSON.parse(document.getElementById('trans-dict').textContent);
    Alpine.store('i18n', { lang: 'id' });
    Alpine.magic('t', () => key => {
        try {
            const l = Alpine.store('i18n').lang;
            return dict[key] ? dict[key][l] : key;
        } catch(e) {
            return dict[key] ? dict[key]['id'] : key;
        }
    });
});
</script>"""

html = html.replace(old, new_script)

# Update body x-init to sync lang changes to store
old_xinit = "window.addEventListener('scroll', () => scrolled = window.scrollY > 30)"
new_xinit = "window.addEventListener('scroll', () => scrolled = window.scrollY > 30); Alpine.effect(() => { try { Alpine.store('i18n').lang = Alpine.$data(document.body).lang; } catch(e) {} })"

html = html.replace(old_xinit, new_xinit)

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done")
print(f"Has Alpine.store: {'Alpine.store' in html}")
print(f"Has Alpine.effect: {'Alpine.effect' in html}")
