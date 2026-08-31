# [726. Number of Atoms](https://leetcode.com/problems/number-of-atoms/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1962 | 411 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `agoda`, `amazon`, `flipkart`, `tiktok`, `google`, `microsoft`, `coupang`

## Description

Given a string `formula` representing a chemical formula, return *the count of each atom*.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than `1`. If the count is `1`, no digits will follow.

	- For example, `"H2O"` and `"H2O2"` are possible, but `"H1O2"` is impossible.

Two formulas are concatenated together to produce another formula.

	- For example, `"H2O2He3Mg4"` is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula.

	- For example, `"(H2O2)"` and `"(H2O2)3"` are formulas.

Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than `1`), followed by the second name (in sorted order), followed by its count (if that count is more than `1`), and so on.

The test cases are generated so that all the values in the output fit in a **32-bit** integer.

 

**Example 1:**

```

Input: formula = &quot;H2O&quot;
Output: &quot;H2O&quot;
Explanation: The count of elements are {&#39;H&#39;: 2, &#39;O&#39;: 1}.

```

**Example 2:**

```

Input: formula = &quot;Mg(OH)2&quot;
Output: &quot;H2MgO2&quot;
Explanation: The count of elements are {&#39;H&#39;: 2, &#39;Mg&#39;: 1, &#39;O&#39;: 2}.

```

**Example 3:**

```

Input: formula = &quot;K4(ON(SO3)2)2&quot;
Output: &quot;K4N2O14S4&quot;
Explanation: The count of elements are {&#39;K&#39;: 4, &#39;N&#39;: 2, &#39;O&#39;: 14, &#39;S&#39;: 4}.

```

 

**Constraints:**

	- `1 <= formula.length <= 1000`

	- `formula` consists of English letters, digits, `'('`, and `')'`.

	- `formula` is always valid.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-atoms/) | [Solutions](https://leetcode.com/problems/number-of-atoms/)
