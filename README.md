[![make.fun · u-carbon-forge-midnight-fridge-roast-fc5d44a7](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/oy-builds/midnight-fridge-roast-01/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/oy-builds/midnight-fridge-roast-01/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

# Midnight Fridge Roast

One line roasting a smart fridge that locks itself after midnight — it claims to be saving me from myself, while it is the one hoarding three cheesecakes. The joke targets the fridge's petty midnight rule itself: the appliance appoints itself my diet coach while sitting on the very food it guards.

`main.ts` reads `entry.txt`, strips one trailing newline, gate-checks it (single line, 1–200 characters, not only whitespace), writes it byte-identical to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the output back and verifies it matches exactly, exiting non-zero on any failure.
