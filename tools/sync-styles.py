from pathlib import Path
import re
public = Path(__file__).resolve().parents[1] / "public"
css = (public / "assets/site.css").read_text(encoding="utf-8").replace("url(../fonts/", "url(fonts/")
for page in public.glob("*.html"):
    html = page.read_text(encoding="utf-8")
    html, count = re.subn(r'<style data-source="assets/site.css">.*?</style>', lambda _: '<style data-source="assets/site.css">' + css + '</style>', html, flags=re.S)
    assert count == 1, page
    page.write_text(html, encoding="utf-8")
