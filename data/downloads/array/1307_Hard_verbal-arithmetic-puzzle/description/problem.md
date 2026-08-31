# [1307. Verbal Arithmetic Puzzle](https://leetcode.com/problems/verbal-arithmetic-puzzle/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 525 | 138 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`backtracking`](https://leetcode.com/tag/backtracking)

**Companies:** `wells-fargo`, `google`, `atlassian`

## Description

Given an equation, represented by `words` on the left side and the `result` on the right side.

You need to check if the equation is solvable under the following rules:

	- Each character is decoded as one digit (0 - 9).

	- No two characters can map to the same digit.

	- Each `words[i]` and `result` are decoded as one number **without** leading zeros.

	- Sum of numbers on the left side (`words`) will equal to the number on the right side (`result`).

Return `true` *if the equation is solvable, otherwise return* `false`.

 

**Example 1:**

```

Input: words = [&quot;SEND&quot;,&quot;MORE&quot;], result = &quot;MONEY&quot;
Output: true
Explanation: Map &#39;S&#39;-&gt; 9, &#39;E&#39;-&gt;5, &#39;N&#39;-&gt;6, &#39;D&#39;-&gt;7, &#39;M&#39;-&gt;1, &#39;O&#39;-&gt;0, &#39;R&#39;-&gt;8, &#39;Y&#39;-&gt;&#39;2&#39;
Such that: &quot;SEND&quot; + &quot;MORE&quot; = &quot;MONEY&quot; ,  9567 + 1085 = 10652
```

**Example 2:**

```

Input: words = [&quot;SIX&quot;,&quot;SEVEN&quot;,&quot;SEVEN&quot;], result = &quot;TWENTY&quot;
Output: true
Explanation: Map &#39;S&#39;-&gt; 6, &#39;I&#39;-&gt;5, &#39;X&#39;-&gt;0, &#39;E&#39;-&gt;8, &#39;V&#39;-&gt;7, &#39;N&#39;-&gt;2, &#39;T&#39;-&gt;1, &#39;W&#39;-&gt;&#39;3&#39;, &#39;Y&#39;-&gt;4
Such that: &quot;SIX&quot; + &quot;SEVEN&quot; + &quot;SEVEN&quot; = &quot;TWENTY&quot; ,  650 + 68782 + 68782 = 138214
```

**Example 3:**

```

Input: words = [&quot;LEET&quot;,&quot;CODE&quot;], result = &quot;POINT&quot;
Output: false
Explanation: There is no possible mapping to satisfy the equation, so we return false.
Note that two different characters cannot map to the same digit.

```

 

**Constraints:**

	- `2 <= words.length <= 5`

	- `1 <= words[i].length, result.length <= 7`

	- `words[i], result` contain only uppercase English letters.

	- The number of different characters used in the expression is at most `10`.

---

**Links:** [Submissions](https://leetcode.com/problems/verbal-arithmetic-puzzle/) | [Solutions](https://leetcode.com/problems/verbal-arithmetic-puzzle/)
