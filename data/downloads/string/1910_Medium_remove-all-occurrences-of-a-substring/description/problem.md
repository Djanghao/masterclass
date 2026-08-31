# [1910. Remove All Occurrences of a Substring](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2571 | 90 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `facebook`, `bloomberg`, `amazon`, `microsoft`, `google`, `infosys`, `goldman-sachs`, `ibm`, `twitter`, `zoho`

## Description

Given two strings `s` and `part`, perform the following operation on `s` until **all** occurrences of the substring `part` are removed:

	- Find the **leftmost** occurrence of the substring `part` and **remove** it from `s`.

Return `s`* after removing all occurrences of *`part`.

A **substring** is a contiguous sequence of characters in a string.

 

**Example 1:**

```

Input: s = &quot;daabcbaabcbc&quot;, part = &quot;abc&quot;
Output: &quot;dab&quot;
Explanation: The following operations are done:
- s = &quot;daabcbaabcbc&quot;, remove &quot;abc&quot; starting at index 2, so s = &quot;dabaabcbc&quot;.
- s = &quot;dabaabcbc&quot;, remove &quot;abc&quot; starting at index 4, so s = &quot;dababc&quot;.
- s = &quot;dababc&quot;, remove &quot;abc&quot; starting at index 3, so s = &quot;dab&quot;.
Now s has no occurrences of &quot;abc&quot;.

```

**Example 2:**

```

Input: s = &quot;axxxxyyyyb&quot;, part = &quot;xy&quot;
Output: &quot;ab&quot;
Explanation: The following operations are done:
- s = &quot;axxxxyyyyb&quot;, remove &quot;xy&quot; starting at index 4 so s = &quot;axxxyyyb&quot;.
- s = &quot;axxxyyyb&quot;, remove &quot;xy&quot; starting at index 3 so s = &quot;axxyyb&quot;.
- s = &quot;axxyyb&quot;, remove &quot;xy&quot; starting at index 2 so s = &quot;axyb&quot;.
- s = &quot;axyb&quot;, remove &quot;xy&quot; starting at index 1 so s = &quot;ab&quot;.
Now s has no occurrences of &quot;xy&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `1 <= part.length <= 1000`

	- `s`​​​​​​ and `part` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/) | [Solutions](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/)
