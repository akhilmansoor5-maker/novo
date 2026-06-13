/**
 * Novo Industries — Image Downloader
 * Downloads all images from the live Wix site at full resolution.
 * Usage: node scripts/download-images.mjs
 */

import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const BASE = "https://static.wixstatic.com/media";
const OUT = "./public/images";

// Helper: build a high-res Wix URL from a media hash
function wix(hash, ext = "jpg", w = 1920, h = 1920) {
  return `${BASE}/${hash}/v1/fill/w_${w},h_${h},al_c,q_90,enc_auto/${hash}.${ext}`;
}
function wixPng(hash, w = 1920, h = 1920) {
  return wix(hash, "png", w, h);
}

// Catalogue of all images to download
const images = [
  // ── BRANDING ────────────────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_52561c67497f4e4a8b5dba454559f125~mv2.png/v1/fill/w_800,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20%26%20Orange.png`,
    dest: `${OUT}/branding/logo-black-orange.png`,
  },
  {
    url: `${BASE}/9e8008_7b4eddf773ad4537bb42080f68e0f454~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Novo%20%20Offset%20Smoker%20and%20Grill.png`,
    dest: `${OUT}/branding/logo-icon.png`,
  },
  {
    url: `${BASE}/9e8008_a6fd4019a9f145b49f1bb76858e798bb~mv2.png/v1/fill/w_600,h_600,al_c,q_85,enc_avif,quality_auto/proudly-manufactured-in-india.png`,
    dest: `${OUT}/branding/made-in-india-badge.png`,
  },

  // ── HERO / FEATURED ─────────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_70f4890aca9e48cfb71410a12ba318e8~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Apex%201000%20Reverse_edited.jpg`,
    dest: `${OUT}/manufacturing/hero-bg.jpg`,
  },
  {
    url: `${BASE}/9e8008_a27c1f6a20d6487589bc7f338011302b~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/hero-smoker.jpg`,
    dest: `${OUT}/manufacturing/hero-smoker.jpg`,
  },

  // ── APEX OFFSET SMOKER ───────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_d6d79e3523c74d7f8c962751f8e458e7~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Apex%20Offset%20Meat%20Smoker.png`,
    dest: `${OUT}/products/apex-smoker-1.png`,
  },
  {
    url: `${BASE}/9e8008_761821353dd345798d33457953d75fb9~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Apex%20Offset%20Meat%20Smoker-2.png`,
    dest: `${OUT}/products/apex-smoker-2.png`,
  },
  {
    url: `${BASE}/9e8008_c148c79f7ef346619022bc529438cac4~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Apex%20Offset%20Meat%20Smoker-3.png`,
    dest: `${OUT}/products/apex-smoker-3.png`,
  },
  {
    url: `${BASE}/9e8008_4c2cc9effc6845278fc1a7cea78da188~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Apex%20Offset%20Meat%20Smoker-4.png`,
    dest: `${OUT}/products/apex-smoker-4.png`,
  },
  {
    url: `${BASE}/9e8008_cfbf01844ce04dbebce660af8bb78e0a~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Apex%20Offset%20Meat%20Smoker-5.png`,
    dest: `${OUT}/products/apex-smoker-5.png`,
  },
  {
    url: `${BASE}/9e8008_ee17933b6fe943aa8aec1dd178090afe~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Apex%20Offset%20Meat%20Smoker-6.png`,
    dest: `${OUT}/products/apex-smoker-6.png`,
  },
  {
    url: `${BASE}/9e8008_cc3be121d54f4fc0850cfb9ea3b91e75~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Apex%20Offset%20Meat%20Smoker-7.png`,
    dest: `${OUT}/products/apex-smoker-7.png`,
  },

  // ── CLASSIC 72 ───────────────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_69399831a1284ddb9848ec51b8b77e00~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/Novo%20Classic%2072%20Offset%20Smoker.jpg`,
    dest: `${OUT}/products/classic-72-1.jpg`,
  },
  {
    url: `${BASE}/9e8008_2bacf947943249169095e4229b66bf46~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/Classic%2072%20Offset%20Smoker.jpg`,
    dest: `${OUT}/products/classic-72-2.jpg`,
  },
  {
    url: `${BASE}/9e8008_b241df17de854f539b058aa7ad1f4355~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/Classic72-gallery.jpg`,
    dest: `${OUT}/products/classic-72-3.jpg`,
  },
  {
    url: `${BASE}/9e8008_5d05651d731e40c0b53aad5e76003040~mv2.png/v1/fill/w_1200,h_1200,al_c,q_90,enc_avif,quality_auto/Classic72-4.png`,
    dest: `${OUT}/products/classic-72-4.png`,
  },
  {
    url: `${BASE}/9e8008_92e71b8e85cc4fd89aea668a748c88d0~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/Classic72-5.jpg`,
    dest: `${OUT}/products/classic-72-5.jpg`,
  },

  // ── BACKYARD OFFSET SMOKER ───────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_e3d2e008ca03460d8d0842c6af7db814~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/Backyard%20Offset%20Smoker.jpg`,
    dest: `${OUT}/products/backyard-smoker-1.jpg`,
  },
  {
    url: `${BASE}/9e8008_a57cdc62ef254f7e915ae7b8e0723de5~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/Ultimate%20Backyard%20Offset%20Smoker.jpg`,
    dest: `${OUT}/products/backyard-smoker-2.jpg`,
  },
  {
    url: `${BASE}/9e8008_e37eda6866104e8e8979e22bfed6e55d~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/Curved%20Edges.jpg`,
    dest: `${OUT}/products/backyard-smoker-3.jpg`,
  },
  {
    url: `${BASE}/9e8008_06de864d543241c1ab2757d5b74d1a0f~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/backyard-4.jpg`,
    dest: `${OUT}/products/backyard-smoker-4.jpg`,
  },
  {
    url: `${BASE}/9e8008_732977c461a84e27ac19b9dff62886ea~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/backyard-5.jpg`,
    dest: `${OUT}/products/backyard-smoker-5.jpg`,
  },

  // ── SANTA MARIA GRILL ────────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_56f28434410945aa986b4a1161392c0a~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/Santa%20Maria%20Grill.jpg`,
    dest: `${OUT}/products/santa-maria-1.jpg`,
  },
  {
    url: `${BASE}/9e8008_29a45c4edc674d5186c2eab1b05f5f88~mv2.jpg/v1/fill/w_1920,h_900,al_c,q_90,enc_avif,quality_auto/santa-maria-wide.jpg`,
    dest: `${OUT}/products/santa-maria-2.jpg`,
  },
  {
    url: `${BASE}/9e8008_dabb93794c144790929de4cd083cbe37~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/santa-maria-3.jpg`,
    dest: `${OUT}/products/santa-maria-3.jpg`,
  },
  {
    url: `${BASE}/9e8008_6b6f79b749124ac8863de625bb4a50cb~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/santa-maria-4.jpg`,
    dest: `${OUT}/products/santa-maria-4.jpg`,
  },
  {
    url: `${BASE}/9e8008_9abec6557ee2415f99f89f44c55301b4~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/santa-maria-5.jpg`,
    dest: `${OUT}/products/santa-maria-5.jpg`,
  },
  {
    url: `${BASE}/9e8008_8bccd3904554455cb50b0d8d6890fb3b~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/santa-maria-6.jpg`,
    dest: `${OUT}/products/santa-maria-6.jpg`,
  },
  {
    url: `${BASE}/9e8008_aae190eb72ab422eb75e74ba34b8863b~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/santa-maria-7.jpg`,
    dest: `${OUT}/products/santa-maria-7.jpg`,
  },

  // ── CLASSIC REVERSE FLOW ────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_f63e10361e20454c8c99f7029d0e0ebd~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/Classic%2057%20Offset%20Smoker.jpg`,
    dest: `${OUT}/products/classic-reverse-flow-1.jpg`,
  },
  {
    url: `${BASE}/9e8008_c4a059ed582f45e998500e6facb75b17~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/reverse-flow-2.jpg`,
    dest: `${OUT}/products/classic-reverse-flow-2.jpg`,
  },

  // ── SHOP / GENERAL PRODUCT IMAGES ────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_3d9589a9ce184f08b0e726cb28e80de3~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-1.jpg`,
    dest: `${OUT}/products/general-1.jpg`,
  },
  {
    url: `${BASE}/9e8008_c3d7c7957a5c498c897c1ea48e2de1e1~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-2.jpg`,
    dest: `${OUT}/products/general-2.jpg`,
  },
  {
    url: `${BASE}/9e8008_9655b3cfcd74414c8ff0a330289dbfee~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-3.jpg`,
    dest: `${OUT}/products/general-3.jpg`,
  },
  {
    url: `${BASE}/9e8008_26ebe697642342e8af4555b5532c6433~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-4.jpg`,
    dest: `${OUT}/products/general-4.jpg`,
  },
  {
    url: `${BASE}/9e8008_5dfdc09f034d403e8062dde14c509575~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-5.jpg`,
    dest: `${OUT}/products/general-5.jpg`,
  },
  {
    url: `${BASE}/9e8008_df3d822c57e247c4a9e780a9cdec7edf~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-6.jpg`,
    dest: `${OUT}/products/general-6.jpg`,
  },
  {
    url: `${BASE}/9e8008_ba870cbd0e3b4e46abeab9a07ee17549~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-7.jpg`,
    dest: `${OUT}/products/general-7.jpg`,
  },
  {
    url: `${BASE}/9e8008_755b270b9b814761bf71c451bc790047~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/product-general-8.jpg`,
    dest: `${OUT}/products/general-8.jpg`,
  },
  {
    url: `${BASE}/9e8008_af5a5829a1824f1a87e2ff2128c2719a~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-9.jpg`,
    dest: `${OUT}/products/general-9.jpg`,
  },
  {
    url: `${BASE}/9e8008_ed55ebc2194043eaabdaa399b4684aee~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-10.jpg`,
    dest: `${OUT}/products/general-10.jpg`,
  },
  {
    url: `${BASE}/9e8008_f574515330fd488bada09a82d0c02ecd~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/product-general-11.jpg`,
    dest: `${OUT}/products/general-11.jpg`,
  },

  // ── GALLERY IMAGES ──────────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_44eeb4a5c0f94dd69b28da217b32c5f7~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/gallery-1.jpg`,
    dest: `${OUT}/gallery/gallery-01.jpg`,
  },
  {
    url: `${BASE}/9e8008_470eea5bee824cb08fffc0179db755a8~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/gallery-2.jpg`,
    dest: `${OUT}/gallery/gallery-02.jpg`,
  },
  {
    url: `${BASE}/9e8008_cc46776de7794bb8b46cd9f4710cad89~mv2.jpg/v1/fill/w_900,h_900,al_c,q_90,enc_avif,quality_auto/gallery-3.jpg`,
    dest: `${OUT}/gallery/gallery-03.jpg`,
  },
  {
    url: `${BASE}/9e8008_1164e5fdd69640c89489aa57ac72c3e2f002.jpg/v1/fill/w_1200,h_675,al_c,q_90,enc_avif,quality_auto/gallery-4.jpg`,
    dest: `${OUT}/gallery/gallery-04.jpg`,
  },
  // Santa Maria gallery doubles as gallery
  {
    url: `${BASE}/9e8008_ab40f5d5bed047c4aedea956a389db73f003.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-5.jpg`,
    dest: `${OUT}/gallery/gallery-05.jpg`,
  },
  {
    url: `${BASE}/9e8008_75794d3cadff4472a5e2333c27ce0dc8~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-6.jpg`,
    dest: `${OUT}/gallery/gallery-06.jpg`,
  },
  {
    url: `${BASE}/9e8008_444ac4e26f1547b7aa7d2cecd53cebbd~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-7.jpg`,
    dest: `${OUT}/gallery/gallery-07.jpg`,
  },
  {
    url: `${BASE}/9e8008_f5ed145fb4d3432db843220e46b0db27~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-8.jpg`,
    dest: `${OUT}/gallery/gallery-08.jpg`,
  },
  {
    url: `${BASE}/9e8008_f9609f5428ce4c47889df6e9c5b805cf~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-9.jpg`,
    dest: `${OUT}/gallery/gallery-09.jpg`,
  },
  {
    url: `${BASE}/9e8008_07b46855e9544df3ba67d263e7e0c897~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-10.jpg`,
    dest: `${OUT}/gallery/gallery-10.jpg`,
  },
  {
    url: `${BASE}/9e8008_526681548b484c098993e3a6065e5982~mv2.jpg/v1/fill/w_1200,h_675,al_c,q_90,enc_avif,quality_auto/gallery-11.jpg`,
    dest: `${OUT}/gallery/gallery-11.jpg`,
  },
  {
    url: `${BASE}/9e8008_6f7d4d8a8c3b4209834aebaed68a2d66~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-12.jpg`,
    dest: `${OUT}/gallery/gallery-12.jpg`,
  },
  {
    url: `${BASE}/9e8008_2533de793b4a483a99c69e16509ad213~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-13.jpg`,
    dest: `${OUT}/gallery/gallery-13.jpg`,
  },
  {
    url: `${BASE}/9e8008_7fbe8123584a46cc90d92b2cb81c4170~mv2.jpg/v1/fill/w_1200,h_675,al_c,q_90,enc_avif,quality_auto/gallery-14.jpg`,
    dest: `${OUT}/gallery/gallery-14.jpg`,
  },
  {
    url: `${BASE}/9e8008_bba5eae7ae77484cbfd66bd80e53edf6~mv2.jpg/v1/fill/w_1200,h_675,al_c,q_90,enc_avif,quality_auto/gallery-15.jpg`,
    dest: `${OUT}/gallery/gallery-15.jpg`,
  },
  {
    url: `${BASE}/9e8008_73f17dd944b446cb85a42f2cd915a2b7~mv2.png/v1/fill/w_1200,h_675,al_c,q_90,enc_avif,quality_auto/gallery-16.png`,
    dest: `${OUT}/gallery/gallery-16.jpg`,
  },
  {
    url: `${BASE}/9e8008_0a7dffac275e46c3913e96a2155ed19c~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-17.jpg`,
    dest: `${OUT}/gallery/gallery-17.jpg`,
  },
  {
    url: `${BASE}/9e8008_2d8dbf6087674b95887b01af9f93ac78f003.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-18.jpg`,
    dest: `${OUT}/gallery/gallery-18.jpg`,
  },
  // More Santa Maria gallery
  {
    url: `${BASE}/9e8008_fa4e75156160486bad4b7716cd523aebf003.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-19.jpg`,
    dest: `${OUT}/gallery/gallery-19.jpg`,
  },
  {
    url: `${BASE}/9e8008_fe97f88e7b474c698d12a543db515769f003.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-20.jpg`,
    dest: `${OUT}/gallery/gallery-20.jpg`,
  },
  {
    url: `${BASE}/9e8008_7efd43399de7441782adfb9b3b275ef4f003.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-21.jpg`,
    dest: `${OUT}/gallery/gallery-21.jpg`,
  },
  {
    url: `${BASE}/9e8008_b2612935dd1642a79eabbad1cca963b0f003.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-22.jpg`,
    dest: `${OUT}/gallery/gallery-22.jpg`,
  },
  {
    url: `${BASE}/9e8008_1bcf486c72dc473984fe7d0e4d4acc4af003.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/gallery-23.jpg`,
    dest: `${OUT}/gallery/gallery-23.jpg`,
  },

  // ── MANUFACTURING IMAGES ─────────────────────────────────────────────────────
  {
    url: `${BASE}/9e8008_cfa1e3c16a484b0e86eee8d83c11cffe~mv2.webp/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/manufacturing-1.jpg`,
    dest: `${OUT}/manufacturing/manufacturing-1.jpg`,
  },
  {
    url: `${BASE}/9e8008_795d304e70f44d208192a2bf079f179f~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/manufacturing-2.jpg`,
    dest: `${OUT}/manufacturing/manufacturing-2.jpg`,
  },
  {
    url: `${BASE}/9e8008_8eb597f388604251a610656ec6cc902f~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/manufacturing-3.jpg`,
    dest: `${OUT}/manufacturing/manufacturing-3.jpg`,
  },
  {
    url: `${BASE}/9e8008_208c8c82f2e8451299e5c742b9f56e1c~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/manufacturing-4.jpg`,
    dest: `${OUT}/manufacturing/manufacturing-4.jpg`,
  },
  {
    url: `${BASE}/9e8008_acee62b3bef642a781951de1ca21887c~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/manufacturing-5.jpg`,
    dest: `${OUT}/manufacturing/manufacturing-5.jpg`,
  },
];

async function download(url, dest) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Referer: "https://www.novoindustries.in/",
      },
    });
    if (!res.ok) {
      console.error(`  ✗ ${dest.split("/").pop()} — HTTP ${res.status}`);
      return false;
    }
    const dir = dest.substring(0, dest.lastIndexOf("/"));
    mkdirSync(dir, { recursive: true });
    await pipeline(res.body, createWriteStream(dest));
    const bytes = (await import("fs")).statSync(dest).size;
    console.log(`  ✓ ${dest.split("/").pop()} — ${(bytes / 1024).toFixed(0)} KB`);
    return true;
  } catch (err) {
    console.error(`  ✗ ${dest.split("/").pop()} — ${err.message}`);
    return false;
  }
}

async function main() {
  console.log(`\nDownloading ${images.length} images from Novo Industries...\n`);
  let ok = 0, fail = 0;
  // Download in batches of 5 to avoid rate limiting
  for (let i = 0; i < images.length; i += 5) {
    const batch = images.slice(i, i + 5);
    const results = await Promise.all(batch.map((img) => download(img.url, img.dest)));
    results.forEach((r) => (r ? ok++ : fail++));
  }
  console.log(`\nDone. ${ok} succeeded, ${fail} failed.\n`);
}

main().catch(console.error);
