# [2525. Categorize Box According to Criteria](https://leetcode.com/problems/categorize-box-according-to-criteria/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 233 | 63 |

**Tags:** [`math`](https://leetcode.com/tag/math)

**Companies:** `zendesk`

## Description

Given four integers `length`, `width`, `height`, and `mass`, representing the dimensions and mass of a box, respectively, return *a string representing the **category** of the box*.

	- The box is `"Bulky"` if:

	
		**Any** of the dimensions of the box is greater or equal to `10^4`.

		- Or, the **volume** of the box is greater or equal to `10^9`.

	
	
	- If the mass of the box is greater or equal to `100`, it is `"Heavy".`

	- If the box is both `"Bulky"` and `"Heavy"`, then its category is `"Both"`.

	- If the box is neither `"Bulky"` nor `"Heavy"`, then its category is `"Neither"`.

	- If the box is `"Bulky"` but not `"Heavy"`, then its category is `"Bulky"`.

	- If the box is `"Heavy"` but not `"Bulky"`, then its category is `"Heavy"`.

**Note** that the volume of the box is the product of its length, width and height.

 

**Example 1:**

```

Input: length = 1000, width = 35, height = 700, mass = 300
Output: &quot;Heavy&quot;
Explanation: 
None of the dimensions of the box is greater or equal to 104. 
Its volume = 24500000 &lt;= 109. So it cannot be categorized as &quot;Bulky&quot;.
However mass &gt;= 100, so the box is &quot;Heavy&quot;.
Since the box is not &quot;Bulky&quot; but &quot;Heavy&quot;, we return &quot;Heavy&quot;.
```

**Example 2:**

```

Input: length = 200, width = 50, height = 800, mass = 50
Output: &quot;Neither&quot;
Explanation: 
None of the dimensions of the box is greater or equal to 104.
Its volume = 8 * 106 &lt;= 109. So it cannot be categorized as &quot;Bulky&quot;.
Its mass is also less than 100, so it cannot be categorized as &quot;Heavy&quot; either. 
Since its neither of the two above categories, we return &quot;Neither&quot;.
```

 

**Constraints:**

	- `1 <= length, width, height <= 10^5`

	- `1 <= mass <= 10^3`

---

**Links:** [Submissions](https://leetcode.com/problems/categorize-box-according-to-criteria/) | [Solutions](https://leetcode.com/problems/categorize-box-according-to-criteria/)
