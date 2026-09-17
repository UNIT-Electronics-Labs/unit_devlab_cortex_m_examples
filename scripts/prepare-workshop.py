"""Genera un ZIP reproducible con los sketches publicados en VitePress."""

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo

root = Path(__file__).resolve().parents[1]
public = root / "docs/public/examples"
sources = sorted((public / "py32f003").glob("*/*.ino"))
if not sources:
    raise SystemExit("No se encontraron ejemplos de Arduino.")

with ZipFile(public / "py32f003-ejemplos.zip", "w", ZIP_DEFLATED) as archive:
    for source in sources:
        info = ZipInfo(str(source.relative_to(public / "py32f003")))
        info.compress_type = ZIP_DEFLATED
        info.external_attr = 0o644 << 16
        archive.writestr(info, source.read_bytes())

print(f"ZIP preparado con {len(sources)} ejemplos.")
