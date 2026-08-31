# [1156. Swap For Longest Repeated Character Substring](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1073 | 104 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `google`, `microsoft`, `nutanix`

## Description

You are given a string `text`. You can swap two of the characters in the `text`.

Return *the length of the longest substring with repeated characters*.

 

**Example 1:**

```

Input: text = &quot;ababa&quot;
Output: 3
Explanation: We can swap the first &#39;b&#39; with the last &#39;a&#39;, or the last &#39;b&#39; with the first &#39;a&#39;. Then, the longest repeated character substring is &quot;aaa&quot; with length 3.

```

**Example 2:**

```

Input: text = &quot;aaabaaa&quot;
Output: 6
Explanation: Swap &#39;b&#39; with the last &#39;a&#39; (or the first &#39;a&#39;), and we get longest repeated character substring &quot;aaaaaa&quot; with length 6.

```

**Example 3:**

```

Input: text = &quot;aaaaa&quot;
Output: 5
Explanation: No need to swap, longest repeated character substring is &quot;aaaaa&quot; with length is 5.

```

 

**Constraints:**

	- `1 <= text.length <= 2 * 10^4`

	- `text` consist of lowercase English characters only.

---

**Links:** [Submissions](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/) | [Solutions](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/)
