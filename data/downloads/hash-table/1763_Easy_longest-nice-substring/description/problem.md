# [1763. Longest Nice Substring](https://leetcode.com/problems/longest-nice-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1475 | 961 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`divide-and-conquer`](https://leetcode.com/tag/divide-and-conquer), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`sliding-window`](https://leetcode.com/tag/sliding-window)

**Companies:** `bloomberg`, `google`, `microsoft`

## Description

A string `s` is **nice** if, for every letter of the alphabet that `s` contains, it appears **both** in uppercase and lowercase. For example, `"abABB"` is nice because `'A'` and `'a'` appear, and `'B'` and `'b'` appear. However, `"abA"` is not because `'b'` appears, but `'B'` does not.

Given a string `s`, return *the longest **substring** of `s` that is **nice**. If there are multiple, return the substring of the **earliest** occurrence. If there are none, return an empty string*.

 

**Example 1:**

```

Input: s = &quot;YazaAay&quot;
Output: &quot;aAa&quot;
Explanation: &quot;aAa&quot; is a nice string because &#39;A/a&#39; is the only letter of the alphabet in s, and both &#39;A&#39; and &#39;a&#39; appear.
&quot;aAa&quot; is the longest nice substring.

```

**Example 2:**

```

Input: s = &quot;Bb&quot;
Output: &quot;Bb&quot;
Explanation: &quot;Bb&quot; is a nice string because both &#39;B&#39; and &#39;b&#39; appear. The whole string is a substring.

```

**Example 3:**

```

Input: s = &quot;c&quot;
Output: &quot;&quot;
Explanation: There are no nice substrings.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` consists of uppercase and lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/longest-nice-substring/) | [Solutions](https://leetcode.com/problems/longest-nice-substring/)
