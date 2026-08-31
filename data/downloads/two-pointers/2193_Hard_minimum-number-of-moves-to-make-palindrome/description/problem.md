# [2193. Minimum Number of Moves to Make Palindrome](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1043 | 77 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`binary-indexed-tree`](https://leetcode.com/tag/binary-indexed-tree)

**Companies:** `amazon`, `goldman-sachs`, `microsoft`

## Description

You are given a string `s` consisting only of lowercase English letters.

In one **move**, you can select any two **adjacent** characters of `s` and swap them.

Return *the **minimum number of moves** needed to make* `s` *a palindrome*.

**Note** that the input will be generated such that `s` can always be converted to a palindrome.

 

**Example 1:**

```

Input: s = &quot;aabb&quot;
Output: 2
Explanation:
We can obtain two palindromes from s, &quot;abba&quot; and &quot;baab&quot;. 
- We can obtain &quot;abba&quot; from s in 2 moves: &quot;aabb&quot; -&gt; &quot;abab&quot; -&gt; &quot;abba&quot;.
- We can obtain &quot;baab&quot; from s in 2 moves: &quot;aabb&quot; -&gt; &quot;abab&quot; -&gt; &quot;baab&quot;.
Thus, the minimum number of moves needed to make s a palindrome is 2.

```

**Example 2:**

```

Input: s = &quot;letelt&quot;
Output: 2
Explanation:
One of the palindromes we can obtain from s in 2 moves is &quot;lettel&quot;.
One of the ways we can obtain it is &quot;letelt&quot; -&gt; &quot;letetl&quot; -&gt; &quot;lettel&quot;.
Other palindromes such as &quot;tleelt&quot; can also be obtained in 2 moves.
It can be shown that it is not possible to obtain a palindrome in less than 2 moves.

```

 

**Constraints:**

	- `1 <= s.length <= 2000`

	- `s` consists only of lowercase English letters.

	- `s` can be converted to a palindrome using a finite number of moves.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/) | [Solutions](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)
