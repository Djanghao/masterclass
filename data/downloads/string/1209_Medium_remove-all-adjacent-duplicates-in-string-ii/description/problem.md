# [1209. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 6028 | 123 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `bloomberg`, `facebook`, `goldman-sachs`, `oracle`, `amazon`, `salesforce`, `grammarly`, `walmart-labs`, `google`, `disney`, `tiktok`, `microsoft`, `paypal`, `factset`

## Description

You are given a string `s` and an integer `k`, a `k` **duplicate removal** consists of choosing `k` adjacent and equal letters from `s` and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make `k` **duplicate removals** on `s` until we no longer can.

Return *the final string after all such duplicate removals have been made*. It is guaranteed that the answer is **unique**.

 

**Example 1:**

```

Input: s = &quot;abcd&quot;, k = 2
Output: &quot;abcd&quot;
Explanation: There&#39;s nothing to delete.
```

**Example 2:**

```

Input: s = &quot;deeedbbcccbdaa&quot;, k = 3
Output: &quot;aa&quot;
Explanation: 
First delete &quot;eee&quot; and &quot;ccc&quot;, get &quot;ddbbbdaa&quot;
Then delete &quot;bbb&quot;, get &quot;dddaa&quot;
Finally delete &quot;ddd&quot;, get &quot;aa&quot;
```

**Example 3:**

```

Input: s = &quot;pbbcggttciiippooaais&quot;, k = 2
Output: &quot;ps&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `2 <= k <= 10^4`

	- `s` only contains lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) | [Solutions](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)
