# [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 12539 | 719 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `google`, `microsoft`, `amazon`, `facebook`, `bloomberg`, `goldman-sachs`, `servicenow`, `adobe`, `yandex`, `bytedance`, `uipath`, `apple`, `uber`, `tiktok`, `yahoo`, `flipkart`, `docusign`, `pocket-gems`

## Description

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return *the length of the longest substring containing the same letter you can get after performing the above operations*.

 

**Example 1:**

```

Input: s = &quot;ABAB&quot;, k = 2
Output: 4
Explanation: Replace the two &#39;A&#39;s with two &#39;B&#39;s or vice versa.

```

**Example 2:**

```

Input: s = &quot;AABABBA&quot;, k = 1
Output: 4
Explanation: Replace the one &#39;A&#39; in the middle with &#39;B&#39; and form &quot;AABBBBA&quot;.
The substring &quot;BBBB&quot; has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of only uppercase English letters.

	- `0 <= k <= s.length`

---

**Links:** [Submissions](https://leetcode.com/problems/longest-repeating-character-replacement/) | [Solutions](https://leetcode.com/problems/longest-repeating-character-replacement/)
