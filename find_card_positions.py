with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

for title_key, approx_pos in [('lab', 33300), ('landing', 37907), ('company', 40230), ('pos', 42748), ('sweetbake', 45003)]:
    tpos = html.find("proj." + title_key + ".title'")
    print(f'{title_key}: title at {tpos}')
    if tpos > -1:
        div_pos = html.rfind('<div class="bg-white rounded-2xl', 0, tpos)
        print(f'  card div at {div_pos}')
        print(f'  {html[div_pos:div_pos+120]}')
        print()
