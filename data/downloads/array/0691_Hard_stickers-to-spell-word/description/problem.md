# [691. Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1324 | 129 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`backtracking`](https://leetcode.com/tag/backtracking), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`memoization`](https://leetcode.com/tag/memoization), [`bitmask`](https://leetcode.com/tag/bitmask)

**Companies:** `facebook`, `tiktok`, `google`, `amazon`, `bloomberg`, `ixl`

## Description

We are given `n` different types of `stickers`. Each sticker has a lowercase English word on it.

You would like to spell out the given string `target` by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once if you want, and you have infinite quantities of each sticker.

Return *the minimum number of stickers that you need to spell out *`target`. If the task is impossible, return `-1`.

**Note:** In all test cases, all words were chosen randomly from the `1000` most common US English words, and `target` was chosen as a concatenation of two random words.

 

**Example 1:**

```

Input: stickers = [&quot;with&quot;,&quot;example&quot;,&quot;science&quot;], target = &quot;thehat&quot;
Output: 3
Explanation:
We can use 2 &quot;with&quot; stickers, and 1 &quot;example&quot; sticker.
After cutting and rearrange the letters of those stickers, we can form the target &quot;thehat&quot;.
Also, this is the minimum number of stickers necessary to form the target string.

```

**Example 2:**

```

Input: stickers = [&quot;notice&quot;,&quot;possible&quot;], target = &quot;basicbasic&quot;
Output: -1
Explanation:
We cannot form the target &quot;basicbasic&quot; from cutting letters from the given stickers.

```

 

**Constraints:**

	- `n == stickers.length`

	- `1 <= n <= 50`

	- `1 <= stickers[i].length <= 10`

	- `1 <= target.length <= 15`

	- `stickers[i]` and `target` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/stickers-to-spell-word/) | [Solutions](https://leetcode.com/problems/stickers-to-spell-word/)
