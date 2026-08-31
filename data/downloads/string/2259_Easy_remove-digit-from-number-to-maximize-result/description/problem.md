# [2259. Remove Digit From Number to Maximize Result](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 936 | 65 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `facebook`, `amazon`, `google`, `microsoft`

## Description

You are given a string `number` representing a **positive integer** and a character `digit`.

Return *the resulting string after removing **exactly one occurrence** of *`digit`* from *`number`* such that the value of the resulting string in **decimal** form is **maximized***. The test cases are generated such that `digit` occurs at least once in `number`.

 

**Example 1:**

```

Input: number = &quot;123&quot;, digit = &quot;3&quot;
Output: &quot;12&quot;
Explanation: There is only one &#39;3&#39; in &quot;123&quot;. After removing &#39;3&#39;, the result is &quot;12&quot;.

```

**Example 2:**

```

Input: number = &quot;1231&quot;, digit = &quot;1&quot;
Output: &quot;231&quot;
Explanation: We can remove the first &#39;1&#39; to get &quot;231&quot; or remove the second &#39;1&#39; to get &quot;123&quot;.
Since 231 &gt; 123, we return &quot;231&quot;.

```

**Example 3:**

```

Input: number = &quot;551&quot;, digit = &quot;5&quot;
Output: &quot;51&quot;
Explanation: We can remove either the first or second &#39;5&#39; from &quot;551&quot;.
Both result in the string &quot;51&quot;.

```

 

**Constraints:**

	- `2 <= number.length <= 100`

	- `number` consists of digits from `'1'` to `'9'`.

	- `digit` is a digit from `'1'` to `'9'`.

	- `digit` occurs at least once in `number`.

---

**Links:** [Submissions](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/) | [Solutions](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/)
