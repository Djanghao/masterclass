# [1611. Minimum One Bit Operations to Make Integers Zero](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1195 | 1191 |

**Tags:** [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`memoization`](https://leetcode.com/tag/memoization)

**Companies:** `oracle`, `bloomberg`, `expedia`

## Description

Given an integer `n`, you must transform it into `0` using the following operations any number of times:

	- Change the rightmost (`0^th`) bit in the binary representation of `n`.

	- Change the `i^th` bit in the binary representation of `n` if the `(i-1)^th` bit is set to `1` and the `(i-2)^th` through `0^th` bits are set to `0`.

Return *the minimum number of operations to transform *`n`* into *`0`*.*

 

**Example 1:**

```

Input: n = 3
Output: 2
Explanation: The binary representation of 3 is &quot;11&quot;.
&quot;11&quot; -&gt; &quot;01&quot; with the 2nd operation since the 0th bit is 1.
&quot;01&quot; -&gt; &quot;00&quot; with the 1st operation.

```

**Example 2:**

```

Input: n = 6
Output: 4
Explanation: The binary representation of 6 is &quot;110&quot;.
&quot;110&quot; -&gt; &quot;010&quot; with the 2nd operation since the 1st bit is 1 and 0th through 0th bits are 0.
&quot;010&quot; -&gt; &quot;011&quot; with the 1st operation.
&quot;011&quot; -&gt; &quot;001&quot; with the 2nd operation since the 0th bit is 1.
&quot;001&quot; -&gt; &quot;000&quot; with the 1st operation.

```

 

**Constraints:**

	- `0 <= n <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/) | [Solutions](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/)
