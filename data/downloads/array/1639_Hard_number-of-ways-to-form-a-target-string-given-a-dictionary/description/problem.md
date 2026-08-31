# [1639. Number of Ways to Form a Target String Given a Dictionary](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2048 | 119 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `snowflake`, `meesho`, `google`, `amazon`, `bloomberg`, `facebook`, `dunzo`

## Description

You are given a list of strings of the **same length** `words` and a string `target`.

Your task is to form `target` using the given `words` under the following rules:

	- `target` should be formed from left to right.

	- To form the `i^th` character (**0-indexed**) of `target`, you can choose the `k^th` character of the `j^th` string in `words` if `target[i] = words[j][k]`.

	- Once you use the `k^th` character of the `j^th` string of `words`, you **can no longer** use the `x^th` character of any string in `words` where `x <= k`. In other words, all characters to the left of or at index `k` become unusuable for every string.

	- Repeat the process until you form the string `target`.

**Notice** that you can use **multiple characters** from the **same string** in `words` provided the conditions above are met.

Return *the number of ways to form `target` from `words`*. Since the answer may be too large, return it **modulo** `10^9 + 7`.

 

**Example 1:**

```

Input: words = [&quot;acca&quot;,&quot;bbbb&quot;,&quot;caca&quot;], target = &quot;aba&quot;
Output: 6
Explanation: There are 6 ways to form target.
&quot;aba&quot; -&gt; index 0 (&quot;acca&quot;), index 1 (&quot;bbbb&quot;), index 3 (&quot;caca&quot;)
&quot;aba&quot; -&gt; index 0 (&quot;acca&quot;), index 2 (&quot;bbbb&quot;), index 3 (&quot;caca&quot;)
&quot;aba&quot; -&gt; index 0 (&quot;acca&quot;), index 1 (&quot;bbbb&quot;), index 3 (&quot;acca&quot;)
&quot;aba&quot; -&gt; index 0 (&quot;acca&quot;), index 2 (&quot;bbbb&quot;), index 3 (&quot;acca&quot;)
&quot;aba&quot; -&gt; index 1 (&quot;caca&quot;), index 2 (&quot;bbbb&quot;), index 3 (&quot;acca&quot;)
&quot;aba&quot; -&gt; index 1 (&quot;caca&quot;), index 2 (&quot;bbbb&quot;), index 3 (&quot;caca&quot;)

```

**Example 2:**

```

Input: words = [&quot;abba&quot;,&quot;baab&quot;], target = &quot;bab&quot;
Output: 4
Explanation: There are 4 ways to form target.
&quot;bab&quot; -&gt; index 0 (&quot;baab&quot;), index 1 (&quot;baab&quot;), index 2 (&quot;abba&quot;)
&quot;bab&quot; -&gt; index 0 (&quot;baab&quot;), index 1 (&quot;baab&quot;), index 3 (&quot;baab&quot;)
&quot;bab&quot; -&gt; index 0 (&quot;baab&quot;), index 2 (&quot;baab&quot;), index 3 (&quot;baab&quot;)
&quot;bab&quot; -&gt; index 1 (&quot;abba&quot;), index 2 (&quot;baab&quot;), index 3 (&quot;baab&quot;)

```

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 1000`

	- All strings in `words` have the same length.

	- `1 <= target.length <= 1000`

	- `words[i]` and `target` contain only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/) | [Solutions](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)
