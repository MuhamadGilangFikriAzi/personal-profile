with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find Company Profile card
cp_start = html.find('proj.company.badge')
if cp_start > -1:
    cp_card = html.rfind('<div class="bg-white rounded-2xl', 0, cp_start)
    print(f'Company Profile card at {cp_card}')
    # Show from card start to end
    print(html[cp_card:cp_card+1200])
else:
    print("Company badge not found")
