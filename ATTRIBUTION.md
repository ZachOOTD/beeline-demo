# Attribution

beeline renders **real terrain from real open geodata**. Every dataset below is used under a licence
that permits redistribution *with attribution*, and this file is that attribution.

⚠ **This file must ship with the built game, not only with the source.** The deployed site serves the
elevation and cover data in order to run, so publishing the build is redistribution regardless of whether
the source repository is public.

The licences here are not assumed — each was screened before adoption and the working is in
`docs/research/real-world-geodata-sources.md` and `docs/research/factor-datasets.md`. Datasets carrying
non-commercial terms (WorldClim 2.1, FABDEM v1.2, MERIT-Hydro — all CC BY-NC-SA) were **deliberately
rejected** rather than used and hoped over.

---

## Elevation

**AWS Terrain Tiles** (Tilezen / Mapzen `terrarium` encoding) — public-domain and open-government
sources, no share-alike. The tiles are a composite; the upstream list includes:

> 3DEP (U.S. Geological Survey), ArcticDEM (Polar Geospatial Center), CDEM (Canada), Data.gov.uk /
> Environment Agency, EU-DEM (European Environment Agency), GMTED (USGS), INEGI (Mexico), Kartverket
> (Norway), LINZ (New Zealand), NRCAN (Canada) and SRTM (NASA).

## Land cover

**ESA WorldCover 10 m (2021)** — CC BY 4.0.

> © ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021)

## Soil

**SoilGrids 250 m v2.0** — ISRIC — World Soil Information. CC BY 4.0.
Layers used: sand %, clay %, coarse-fragment volumetric % (`cfvo`).

## Climate

**Köppen-Geiger climate classification, Beck et al. (2023) V3** — CC BY 4.0.

## Basemap (route planner only)

**OpenFreeMap**, serving **OpenStreetMap** data — ODbL 1.0.

> © OpenStreetMap contributors

The share-alike term of ODbL attaches to the *database*; displaying a rendered map does not place this
project's own data under ODbL.

---

## Code

beeline's own source is MIT — see `LICENSE`.

**`src/fields/erosionFilter.ts` is MPL-2.0**, a port of Rune Skovbo Johansen's erosion filter
(`wXcfWn`). MPL-2.0 is file-scoped copyleft: that file remains MPL and its source remains available,
which it is. It does not affect the licence of the rest of this tree.

## Procedural grass reference

The optional C10 grass comparison adapts [CK42BB/procedural-grass-threejs](https://github.com/CK42BB/procedural-grass-threejs) revision 26f072308df12caac68a474cb40300ef576793e1, including preset data.

MIT License

Copyright (c) 2026 Kingsley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
