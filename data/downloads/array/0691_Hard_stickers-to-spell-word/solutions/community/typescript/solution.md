# Bitmask + Dynamic Programming Solution explained intuitively w/ Comments

**Author:** jbernier
**Votes:** 5
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/5073458/](https://leetcode.com/problems/stickers-to-spell-word/solutions/5073458/)

---

# Intuition

Represent each letter in `target` as a binary bit, where `1` means the letter is set, `0` meaning the letter is not set. Starting with no letters (all 0s), our goal is to set all letters in target (all 1s)

For example, if `target = "jeremy"`, then our bitmask contains `"jeremy".length === 6` bits.

If `mask = 000000`, then no letters are set.

If `mask = 110111`, then `'r'` is missing.

If `mask = 111111`, then every letter is set. We have created `target`

Starting from an empty mask of `target.length` bits (`000000`), our goal is to fill every letter (`111111`) using the minimum number of stickers.

### Dynamic Programming

In dynamic programming, we break the problem down into subproblems in order to obtain the final solution.

Recall that our primary goal here is to find the minimum number of stickers to go from `mask = 000000` to `mask = 111111`.

Let's represent `dp[mask]` as the minimum number of stickers required to obtain `mask` (starting from an empty mask of `0`s).

```
dp[mask] = Minimum # of stickers required to create mask
dp[0] = 0 // Base case
dp[mask with all 1s] = Solution
```

Starting from the base case of an empty `mask` (all 0s), we'll cycle through each sticker and do the following for each sticker:

- Apply the sticker to `mask`, which means going through each character of `sticker` and using all characters possible, flipping the corresponding bits in the bitmask to `1`. Let `maskAfterSticker` denote the new mask after applying a single sticker.
- If any sticker letters were used (ie. any bits were flipped to 1, ie. `maskAfterSticker > mask`), then set `dp[maskAfterSticker] = Math.min(dp[maskAfterSticker], dp[mask] + 1)`. We used 1 sticker to obtain `maskAfterSticker`, so the minimum # of stickers to obtain `maskAfterSticker` is the minimum of this and any previously calculated minimums.

Starting from the base case of an empty `mask` (all 0s), we can apply each sticker (flip `mask` bits to `1` for every corresponding sticker letter), calculate the new mask after applying the sticker `maskAfterSticker`, and if some letters were set (ie. some bits were flipped to `1`, or `maskAfterSticker > mask`).

As we apply each sticker, we're updating `dp[maskAfterSticker]` for various masks that we're creating. Then for every larger mask with more letters set (bits flipped to 1), we'll apply stickers again until eventually all bits are set to `1`, and we've calculated the minimum `dp[mask with all bits set to 1]` or `dp[(1 << target.length) - 1]`

# Code
```
function minStickers(stickers: string[], target: string): number {
  const N = target.length;
  // Given a bitmask, returns minimum # of stickers to obtain that bitmask
  const dp = new Array(1 << N).fill(-1);
  dp[0] = 0; // Base case: 0 stickers for empty bitmask

  for (let mask = 0; mask < dp.length; mask++) {
    if (dp[mask] === -1) continue;

    for (const sticker of stickers) {
      let maskAfterSticker = mask;
      for (const ch of sticker) { // for each letter in sticker
        for (let i = 0; i < N; i++) { // for each bit in bitmask
          // If target already has letter flipped, ignore
          if (((maskAfterSticker >> i) & 1) === 1) continue;
          if (target[N - i - 1] === ch) { // if target has unflipped char
            maskAfterSticker |= (1 << i); // flip character bit to 1
            break; // character has been used, skip to next character
          }
        }
      }
      // Update min # of moves to obtain maskAfterSticker if either
      // it's unset (-1), or less than dp[mask] + 1 sticker applied
      if (dp[maskAfterSticker] === -1 || dp[maskAfterSticker] > dp[mask] + 1) {
        dp[maskAfterSticker] = dp[mask] + 1;
      }
    }
  }
  // Min # of stickers when all bits flipped to 1
  // (1 << N) - 1 === N bits all set to 1
  return dp[(1 << N) - 1]
};
```