# 691: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 3
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/3323045/](https://leetcode.com/problems/stickers-to-spell-word/solutions/3323045/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Compute the length of target and create a bitmask maxMask that has a 1 in each position that corresponds to a character in target.
2. Create a list dp of length maxMask to store the minimum number of stickers required to spell out each bitmask.
3. Initialize dp[0] to 0, since no stickers are required to spell out the empty string.
4. Preprocess the stickers list by creating a list stickerCounts of dictionaries that contain the frequency of each character in each sticker.
5. Iterate over all possible bitmasks mask of target.
6. If dp[mask] is float('inf'), then skip this mask since it cannot be reached from the starting bitmask.
7. For each sticker stickerCount in stickerCounts, check if it contains any characters that are needed to fill in the missing characters in mask.
8. If there are no such characters, then skip this sticker since it cannot help to fill in any missing characters in mask.
9. Create a new bitmask superMask that represents the state after applying the current sticker to mask.
10. For each character c in the sticker that matches a character t in target, check if that character is missing from the current bitmask superMask.
11. If the character is missing, then set the corresponding bit in superMask to 1 to indicate that the character has been added.
12. If the character appears more than once in the sticker, decrement its frequency counter and continue.
13. Update the dp array at the new bitmask superMask with the minimum number of stickers required to reach it.
14. If the final bitmask dp[-1] is still float('inf'), return -1 to indicate that it is impossible to spell out the target string. Otherwise, return dp[-1] as the minimum number of stickers required.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minStickers(self, stickers: List[str], target: str) -> int:
        n = len(target)
        maxMask = 1 << n
        # dp[i] := min # of stickers to spell out i, where i is the bit mask of
        # target.
        dp = [float('inf')] * maxMask
        dp[0] = 0
        
        # Preprocess the stickers to create a mapping of character frequencies
        stickerCounts = []
        for sticker in stickers:
            stickerCounts.append(collections.Counter(sticker))
        
        for mask in range(maxMask):
            if dp[mask] == float('inf'):
                continue
            # Try to expand from `mask` by using each sticker.
            for i, stickerCount in enumerate(stickerCounts):
                # Skip over stickers that do not contain any characters we need
                if not any(c in stickerCount for c in target):
                    continue
                superMask = mask
                for c, freq in stickerCount.items():
                    for j, t in enumerate(target):
                        # Try to apply it on a missing char.
                        if c == t and not (superMask >> j & 1):
                            superMask |= 1 << j
                            freq -= 1
                            if freq == 0:
                                break
                dp[superMask] = min(dp[superMask], dp[mask] + 1)
        
        return -1 if dp[-1] == float('inf') else dp[-1]

```