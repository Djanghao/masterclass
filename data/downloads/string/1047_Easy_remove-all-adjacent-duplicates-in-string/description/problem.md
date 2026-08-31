# [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 6991 | 270 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `facebook`, `apple`, `grammarly`, `amazon`, `bloomberg`, `google`, `microsoft`, `oracle`, `adobe`, `audible`, `zoho`, `paytm`

## Description

You are given a string `s` consisting of lowercase English letters. A **duplicate removal** consists of choosing two **adjacent** and **equal** letters and removing them.

We repeatedly make **duplicate removals** on `s` until we no longer can.

Return *the final string after all such duplicate removals have been made*. It can be proven that the answer is **unique**.

 

**Example 1:**

```

Input: s = &quot;abbaca&quot;
Output: &quot;ca&quot;
Explanation: 
For example, in &quot;abbaca&quot; we could remove &quot;bb&quot; since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is &quot;aaca&quot;, of which only &quot;aa&quot; is possible, so the final string is &quot;ca&quot;.

```

**Example 2:**

```

Input: s = &quot;azxxzy&quot;
Output: &quot;ay&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | [Solutions](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
