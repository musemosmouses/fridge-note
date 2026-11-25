# Notes From a Passive-Aggressive Fridge

One funny passive-aggressive note a smart fridge leaves for its owner —
a single line on its door screen, for the make.fun bounty
"Notes From a Passive-Aggressive Fridge"
(`u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7`).

## The entry

> I made 48 ice cubes for your party. You used two. The other 46 have started a support group in the freezer.

107 characters, one line. The fridge counts its own ice cubes like a
resentful accountant — smug about its inventory — and the sting lands
last: the unused cubes have formed a support group. Small domestic
grudge, concrete detail (the ice maker), no explaining the joke.

## How it works

`main.ts` (Node, stdlib only, no network, no randomness, no clock) holds
the line as one deterministic constant, checks it against the gate
(1–200 characters, one non-blank line), and writes it exactly — no
trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `out/entry.txt` locally).

## Run

```sh
node main.ts   # with node 22+ type stripping, or the make.fun harness
cat out/entry.txt
```

## License

MIT — see `LICENSE`.

