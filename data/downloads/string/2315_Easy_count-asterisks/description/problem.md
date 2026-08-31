# [2315. Count Asterisks](https://leetcode.com/problems/count-asterisks/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 673 | 118 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

You are given a string `s`, where every **two** consecutive vertical bars `'|'` are grouped into a **pair**. In other words, the 1st and 2nd `'|'` make a pair, the 3rd and 4th `'|'` make a pair, and so forth.

Return *the number of *`'*'`* in *`s`*, **excluding** the *`'*'`* between each pair of *`'|'`.

**Note** that each `'|'` will belong to **exactly** one pair.

 

**Example 1:**

```

Input: s = &quot;l|*e*et|c**o|*de|&quot;
Output: 2
Explanation: The considered characters are underlined: &quot;l|*e*et|c**o|*de|&quot;.
The characters between the first and second &#39;|&#39; are excluded from the answer.
Also, the characters between the third and fourth &#39;|&#39; are excluded from the answer.
There are 2 asterisks considered. Therefore, we return 2.
```

**Example 2:**

```

Input: s = &quot;iamprogrammer&quot;
Output: 0
Explanation: In this example, there are no asterisks in s. Therefore, we return 0.

```

**Example 3:**

```

Input: s = &quot;yo|uar|e**|b|e***au|tifu|l&quot;
Output: 5
Explanation: The considered characters are underlined: &quot;yo|uar|e**|b|e***au|tifu|l&quot;. There are 5 asterisks considered. Therefore, we return 5.
```

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s` consists of lowercase English letters, vertical bars `'|'`, and asterisks `'*'`.

	- `s` contains an **even** number of vertical bars `'|'`.

---

**Links:** [Submissions](https://leetcode.com/problems/count-asterisks/) | [Solutions](https://leetcode.com/problems/count-asterisks/)
