# [3387. Maximize Amount After Two Days of Conversions](https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 149 | 41 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `rippling`, `google`

## Description

You are given a string `initialCurrency`, and you start with `1.0` of `initialCurrency`.

You are also given four arrays with currency pairs (strings) and rates (real numbers):

	- `pairs1[i] = [startCurrency_i, targetCurrency_i]` denotes that you can convert from `startCurrency_i` to `targetCurrency_i` at a rate of `rates1[i]` on **day 1**.

	- `pairs2[i] = [startCurrency_i, targetCurrency_i]` denotes that you can convert from `startCurrency_i` to `targetCurrency_i` at a rate of `rates2[i]` on **day 2**.

	- Also, each `targetCurrency` can be converted back to its corresponding `startCurrency` at a rate of `1 / rate`.

You can perform **any** number of conversions, **including zero**, using `rates1` on day 1, **followed** by any number of additional conversions, **including zero**, using `rates2` on day 2.

Return the **maximum** amount of `initialCurrency` you can have after performing any number of conversions on both days **in order**.

**Note: **Conversion rates are valid, and there will be no contradictions in the rates for either day. The rates for the days are independent of each other.

 

**Example 1:**

**Input:** initialCurrency = "EUR", pairs1 = [["EUR","USD"],["USD","JPY"]], rates1 = [2.0,3.0], pairs2 = [["JPY","USD"],["USD","CHF"],["CHF","EUR"]], rates2 = [4.0,5.0,6.0]

**Output:** 720.00000

**Explanation:**

To get the maximum amount of **EUR**, starting with 1.0 **EUR**:

	- On Day 1:
	
		Convert **EUR **to **USD** to get 2.0 **USD**.

		- Convert **USD** to **JPY** to get 6.0 **JPY**.

	
	
	- On Day 2:
	
		Convert **JPY** to **USD** to get 24.0 **USD**.

		- Convert **USD** to **CHF** to get 120.0 **CHF**.

		- Finally, convert **CHF** to **EUR** to get 720.0 **EUR**.

	
	

**Example 2:**

**Input:** initialCurrency = "NGN", pairs1 = [["NGN","EUR"]], rates1 = [9.0], pairs2 = [["NGN","EUR"]], rates2 = [6.0]

**Output:** 1.50000

**Explanation:**

Converting **NGN** to **EUR** on day 1 and **EUR** to **NGN** using the inverse rate on day 2 gives the maximum amount.

**Example 3:**

**Input:** initialCurrency = "USD", pairs1 = [["USD","EUR"]], rates1 = [1.0], pairs2 = [["EUR","JPY"]], rates2 = [10.0]

**Output:** 1.00000

**Explanation:**

In this example, there is no need to make any conversions on either day.

 

**Constraints:**

	- `1 

	- `pairs2[i] == [startCurrency_i, targetCurrency_i]`

	- `1 <= startCurrency_i.length, targetCurrency_i.length <= 3`

	- `startCurrency_i` and `targetCurrency_i` consist only of uppercase English letters.

	- `rates1.length == n`

	- `rates2.length == m`

	- `1.0 <= rates1[i], rates2[i] <= 10.0`

	- The input is generated such that there are no contradictions or cycles in the conversion graphs for either day.

	- The input is generated such that the output is **at most** `5 * 10^10`.

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/) | [Solutions](https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/)
