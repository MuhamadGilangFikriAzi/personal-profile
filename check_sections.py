with open('C:/Users/mgfa9/Project/personal-profile/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the skills section and project section
# Skills section typically has "Technologies" or "Skills"
skills_start = html.find('id="skills"')
proj_start = html.find('id="projects"')
print(f"Skills section at: {skills_start}")
print(f"Projects section at: {proj_start}")
print(f"Gap between: {proj_start - skills_start} chars")

# Show what's right after skills section heading
skills_heading = html[skills_start:skills_start+500]
print(f"\nSkills heading: {skills_heading}")

# Show what's right after projects heading
proj_heading = html[proj_start:proj_start+500]
print(f"\nProjects heading: {proj_heading}")
