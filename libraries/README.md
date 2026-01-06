# Imported Component Libraries

This directory contains component library files downloaded from various sources. Where applicable, files are imported into library files with sources archived here for reference and traceability.

There is a separate KiCad project for each board. For simplicity, libraries are maintained at the repo level (the parent directory of the boards). Therefore, when adding libraries to KiCad it is recommended to link to the following directories:

- **Symbols:** `${KIPRJMOD}/../libraries/symbols/Amplifier_Symbols.kicad_sym`
- **Footprints:** `${KIPRJMOD}/../libraries/footprints.pretty`

---

## Component Source Log

### Relays

| Part Number | Manufacturer | Source | Download Date | Files | Notes |
|-------------|--------------|--------|---------------|-------|-------|
| 5-1415899-0 (RZ03-1A3-D024) | TE Connectivity / Schrack | Mouser | 2024-12-31 | `RZ03-1A3-D024.kicad_sym` | 16A SPST-NO relay, 24VDC coil |

### Amplifiers

| Part Number | Manufacturer | Source | Download Date | Files | Notes |
|-------------|--------------|--------|---------------|-------|-------|
| | | | | | |

### Power Management

| Part Number | Manufacturer | Source | Download Date | Files | Notes |
|-------------|--------------|--------|---------------|-------|-------|
| | | | | | |

### Other Components

| Part Number | Manufacturer | Source | Download Date | Files | Notes |
|-------------|--------------|--------|---------------|-------|-------|
| | | | | | |

---

## Common Sources

- **Mouser**: https://www.mouser.com (usually has good quality KiCad exports)
- **SnapEDA**: https://www.snapeda.com (free account required, KiCad 6+ exports)
- **Ultra Librarian**: https://www.ultralibrarian.com (manufacturer-provided files)
- **Component Search**: https://componentsearchengine.com (SamacSys)
- **Manufacturer websites**: Often provide official CAD files

---

## Usage Notes

1. When downloading new components, save the original files here
2. Import symbols into `Custom_Symbols.kicad_sym` using Symbol Editor
3. Copy footprints into `footprints.pretty` using Footprint Editor
4. Update this README with source information
5. Keep 3D models in `./3dmodels/` with consistent naming

---

## File Naming Convention

**Symbols:** Use manufacturer part number exactly as downloaded
**Footprints:** Use manufacturer part number or descriptive name
**3D Models:** Match footprint name for easy association

---

*Last updated: 2024-12-31*

