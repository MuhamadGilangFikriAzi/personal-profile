import re

with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find ALL lang switches - search for both ID/EN button patterns
id_btns = list(re.finditer(r'lang=.id.*localStorage', html))
print(f"Found {len(id_btns)} lang-switching buttons")

# Check the $t magic function
magic = re.search(r"document\.querySelector.*?\)", html)
if magic:
    print(f"querySelector target: {magic.group()}")

# The real issue might be $t function caches dictionary but reads lang from wrong place
# Fix: use Alpine.store or $store instead of querySelector
# Or simpler: Alpine.magic should reference Alpine.$data(document.body).lang

# Let's look at the actual magic definition
magic_full = re.search(r"Alpine\.magic\('t'.*?\);", html, re.DOTALL)
if magic_full:
    print(f"\nFull magic definition:")
    print(magic_full.group())
