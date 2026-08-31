# [2243. Calculate Digit Sum of a String](https://leetcode.com/problems/calculate-digit-sum-of-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 584 | 52 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `uber`

## Description

You are given a string `s` consisting of digits and an integer `k`.

A **round** can be completed if the length of `s` is greater than `k`. In one round, do the following:

	- **Divide** `s` into **consecutive groups** of size `k` such that the first `k` characters are in the first group, the next `k` characters are in the second group, and so on. **Note** that the size of the last group can be smaller than `k`.

	- **Replace** each group of `s` with a string representing the sum of all its digits. For example, `"346"` is replaced with `"13"` because `3 + 4 + 6 = 13`.

	- **Merge** consecutive groups together to form a new string. If the length of the string is greater than `k`, repeat from step `1`.

Return `s` *after all rounds have been completed*.

 

**Example 1:**

```

Input: s = &quot;11111222223&quot;, k = 3
Output: &quot;135&quot;
Explanation: 
- For the first round, we divide s into groups of size 3: &quot;111&quot;, &quot;112&quot;, &quot;222&quot;, and &quot;23&quot;.
  ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5. 
&nbsp; So, s becomes &quot;3&quot; + &quot;4&quot; + &quot;6&quot; + &quot;5&quot; = &quot;3465&quot; after the first round.
- For the second round, we divide s into &quot;346&quot; and &quot;5&quot;.
&nbsp; Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5. 
&nbsp; So, s becomes &quot;13&quot; + &quot;5&quot; = &quot;135&quot; after second round. 
Now, s.length &lt;= k, so we return &quot;135&quot; as the answer.

```

**Example 2:**

```

Input: s = &quot;00000000&quot;, k = 3
Output: &quot;000&quot;
Explanation: 
We divide s into &quot;000&quot;, &quot;000&quot;, and &quot;00&quot;.
Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0. 
s becomes &quot;0&quot; + &quot;0&quot; + &quot;0&quot; = &quot;000&quot;, whose length is equal to k, so we return &quot;000&quot;.

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `2 <= k <= 100`

	- `s` consists of digits only.

---

**Links:** [Submissions](https://leetcode.com/problems/calculate-digit-sum-of-a-string/) | [Solutions](https://leetcode.com/problems/calculate-digit-sum-of-a-string/)
