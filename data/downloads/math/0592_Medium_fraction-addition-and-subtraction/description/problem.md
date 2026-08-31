# [592. Fraction Addition and Subtraction](https://leetcode.com/problems/fraction-addition-and-subtraction/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 887 | 693 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `trilogy`, `zopsmart`, `ixl`, `amazon`, `facebook`, `google`

## Description

Given a string `expression` representing an expression of fraction addition and subtraction, return the calculation result in string format.

The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator `1`. So in this case, `2` should be converted to `2/1`.

 

**Example 1:**

```

Input: expression = &quot;-1/2+1/2&quot;
Output: &quot;0/1&quot;

```

**Example 2:**

```

Input: expression = &quot;-1/2+1/2+1/3&quot;
Output: &quot;1/3&quot;

```

**Example 3:**

```

Input: expression = &quot;1/3-1/2&quot;
Output: &quot;-1/6&quot;

```

 

**Constraints:**

	- The input string only contains `'0'` to `'9'`, `'/'`, `'+'` and `'-'`. So does the output.

	- Each fraction (input and output) has the format `&plusmn;numerator/denominator`. If the first input fraction or the output is positive, then `'+'` will be omitted.

	- The input only contains valid **irreducible fractions**, where the **numerator** and **denominator** of each fraction will always be in the range `[1, 10]`. If the denominator is `1`, it means this fraction is actually an integer in a fraction format defined above.

	- The number of given fractions will be in the range `[1, 10]`.

	- The numerator and denominator of the **final result** are guaranteed to be valid and in the range of **32-bit** int.

---

**Links:** [Submissions](https://leetcode.com/problems/fraction-addition-and-subtraction/) | [Solutions](https://leetcode.com/problems/fraction-addition-and-subtraction/)
