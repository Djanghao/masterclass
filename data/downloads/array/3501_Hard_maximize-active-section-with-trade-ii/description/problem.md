# [3501. Maximize Active Section with Trade II](https://leetcode.com/problems/maximize-active-section-with-trade-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 22 | 8 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`segment-tree`](https://leetcode.com/tag/segment-tree)


## Description

You are given a binary string `s` of length `n`, where:

	- `'1'` represents an **active** section.

	- `'0'` represents an **inactive** section.

You can perform **at most one trade** to maximize the number of active sections in `s`. In a trade, you:

	- Convert a contiguous block of `'1'`s that is surrounded by `'0'`s to all `'0'`s.

	- Afterward, convert a contiguous block of `'0'`s that is surrounded by `'1'`s to all `'1'`s.

Additionally, you are given a **2D array** `queries`, where `queries[i] = [l_i, r_i]` represents a substring `s[l_i...r_i]`.

For each query, determine the **maximum** possible number of active sections in `s` after making the optimal trade on the substring `s[l_i...r_i]`.

Return an array `answer`, where `answer[i]` is the result for `queries[i]`.

**Note**

	- For each query, treat `s[l_i...r_i]` as if it is **augmented** with a `'1'` at both ends, forming `t = '1' + s[l_i...r_i] + '1'`. The augmented `'1'`s **do not** contribute to the final count.

	- The queries are independent of each other.

 

**Example 1:**

**Input:** s = "01", queries = [[0,1]]

**Output:** [1]

**Explanation:**

Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

**Example 2:**

**Input:** s = "0100", queries = [[0,3],[0,2],[1,3],[2,3]]

**Output:** [4,3,1,1]

**Explanation:**

	- 
	
Query `[0, 3]` &rarr; Substring `"0100"` &rarr; Augmented to `"101001"`

	Choose `"0100"`, convert `"0100"` &rarr; `"0000"` &rarr; `"1111"`.

	The final string without augmentation is `"1111"`. The maximum number of active sections is 4.

	

	- 
	
Query `[0, 2]` &rarr; Substring `"010"` &rarr; Augmented to `"10101"`

	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.

	The final string without augmentation is `"1110"`. The maximum number of active sections is 3.

	

	- 
	
Query `[1, 3]` &rarr; Substring `"100"` &rarr; Augmented to `"11001"`

	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

	

	- 
	
Query `[2, 3]` &rarr; Substring `"00"` &rarr; Augmented to `"1001"`

	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

	

**Example 3:**

**Input:** s = "1000100", queries = [[1,5],[0,6],[0,4]]

**Output:** [6,7,2]

**Explanation:**

	
	
Query `[1, 5]` &rarr; Substring "00010" &rarr; Augmented to "1000101"
	Choose "00010", convert "00010" &rarr; "00000" &rarr; "11111".

	The final string without augmentation is "1111110". The maximum number of active sections is 6.

	
	
	
Query `[0, 6]` &rarr; Substring "1000100" &rarr; Augmented to "110001001"
	Choose "000100", convert "000100" &rarr; "000000" &rarr; "111111".

	The final string without augmentation is "1111111". The maximum number of active sections is 7.

	
	
	
Query `[0, 4]` &rarr; Substring "10001" &rarr; Augmented to "1100011"
	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.

	

**Example 4:**

**Input:** s = "01010", queries = [[0,3],[1,4],[1,3]]

**Output:** [4,4,2]

**Explanation:**

	- 
	
Query `[0, 3]` &rarr; Substring `"0101"` &rarr; Augmented to `"101011"`

	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.

	The final string without augmentation is `"11110"`. The maximum number of active sections is 4.

	

	- 
	
Query `[1, 4]` &rarr; Substring `"1010"` &rarr; Augmented to `"110101"`

	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.

	The final string without augmentation is `"01111"`. The maximum number of active sections is 4.

	

	- 
	
Query `[1, 3]` &rarr; Substring `"101"` &rarr; Augmented to `"11011"`

	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.

	

 

**Constraints:**

	- `1 <= n == s.length <= 10^5`

	- `1 <= queries.length <= 10^5`

	- `s[i]` is either `'0'` or `'1'`.

	- `queries[i] = [l_i, r_i]`

	- `0 <= l_i <= r_i < n`

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-active-section-with-trade-ii/) | [Solutions](https://leetcode.com/problems/maximize-active-section-with-trade-ii/)
