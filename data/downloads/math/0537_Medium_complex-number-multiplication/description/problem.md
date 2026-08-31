# [537. Complex Number Multiplication](https://leetcode.com/problems/complex-number-multiplication/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 752 | 1255 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `amazon`

## Description

A complex number can be represented as a string on the form `"real+imaginaryi"` where:

	- `real` is the real part and is an integer in the range `[-100, 100]`.

	- `imaginary` is the imaginary part and is an integer in the range `[-100, 100]`.

	- `i^2 == -1`.

Given two complex numbers `num1` and `num2` as strings, return *a string of the complex number that represents their multiplications*.

 

**Example 1:**

```

Input: num1 = &quot;1+1i&quot;, num2 = &quot;1+1i&quot;
Output: &quot;0+2i&quot;
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

```

**Example 2:**

```

Input: num1 = &quot;1+-1i&quot;, num2 = &quot;1+-1i&quot;
Output: &quot;0+-2i&quot;
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.

```

 

**Constraints:**

	- `num1` and `num2` are valid complex numbers.

---

**Links:** [Submissions](https://leetcode.com/problems/complex-number-multiplication/) | [Solutions](https://leetcode.com/problems/complex-number-multiplication/)
