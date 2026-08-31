# [2264. Largest 3-Same-Digit Number in String](https://leetcode.com/problems/largest-3-same-digit-number-in-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1377 | 54 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `bloomberg`, `opentext`, `paypay`

## Description

You are given a string `num` representing a large integer. An integer is **good** if it meets the following conditions:

	- It is a **substring** of `num` with length `3`.

	- It consists of only one unique digit.

Return *the **maximum good **integer as a **string** or an empty string *`""`* if no such integer exists*.

Note:

	- A **substring** is a contiguous sequence of characters within a string.

	- There may be **leading zeroes** in `num` or a good integer.

 

**Example 1:**

```

Input: num = &quot;6777133339&quot;
Output: &quot;777&quot;
Explanation: There are two distinct good integers: &quot;777&quot; and &quot;333&quot;.
&quot;777&quot; is the largest, so we return &quot;777&quot;.

```

**Example 2:**

```

Input: num = &quot;2300019&quot;
Output: &quot;000&quot;
Explanation: &quot;000&quot; is the only good integer.

```

**Example 3:**

```

Input: num = &quot;42352338&quot;
Output: &quot;&quot;
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.

```

 

**Constraints:**

	- `3 <= num.length <= 1000`

	- `num` only consists of digits.

---

**Links:** [Submissions](https://leetcode.com/problems/largest-3-same-digit-number-in-string/) | [Solutions](https://leetcode.com/problems/largest-3-same-digit-number-in-string/)
