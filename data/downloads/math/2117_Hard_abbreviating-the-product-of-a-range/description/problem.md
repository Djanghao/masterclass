# [2117. Abbreviating the Product of a Range](https://leetcode.com/problems/abbreviating-the-product-of-a-range/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 91 | 162 |

**Tags:** [`math`](https://leetcode.com/tag/math)

**Companies:** `avalara`

## Description

You are given two positive integers `left` and `right` with `left For example, there are `3` trailing zeros in `1000`, and there are `0` trailing zeros in `546`.

	
	
	- Denote the remaining number of digits in the product as `d`. If `d > 10`, then express the product as `...` where `` denotes the **first** `5` digits of the product, and `` denotes the **last** `5` digits of the product **after** removing all trailing zeros. If `d For example, we express `1234567654321` as `12345...54321`, but `1234567` is represented as `1234567`.

	
	
	- Finally, represent the product as a **string** `"...eC"`.
	
		For example, `12345678987600000` will be represented as `"12345...89876e5"`.

	
	

Return *a string denoting the **abbreviated product** of all integers in the **inclusive** range* `[left, right]`.

 

**Example 1:**

```

Input: left = 1, right = 4
Output: &quot;24e0&quot;
Explanation: The product is 1 &times; 2 &times; 3 &times; 4 = 24.
There are no trailing zeros, so 24 remains the same. The abbreviation will end with &quot;e0&quot;.
Since the number of digits is 2, which is less than 10, we do not have to abbreviate it further.
Thus, the final representation is &quot;24e0&quot;.

```

**Example 2:**

```

Input: left = 2, right = 11
Output: &quot;399168e2&quot;
Explanation: The product is 39916800.
There are 2 trailing zeros, which we remove to get 399168. The abbreviation will end with &quot;e2&quot;.
The number of digits after removing the trailing zeros is 6, so we do not abbreviate it further.
Hence, the abbreviated product is &quot;399168e2&quot;.

```

**Example 3:**

```

Input: left = 371, right = 375
Output: &quot;7219856259e3&quot;
Explanation: The product is 7219856259000.

```

 

**Constraints:**

	- `1 <= left <= right <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/abbreviating-the-product-of-a-range/) | [Solutions](https://leetcode.com/problems/abbreviating-the-product-of-a-range/)
