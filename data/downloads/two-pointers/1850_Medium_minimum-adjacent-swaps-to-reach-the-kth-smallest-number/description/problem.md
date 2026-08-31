# [1850. Minimum Adjacent Swaps to Reach the Kth Smallest Number](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 806 | 117 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `facebook`, `google`

## Description

You are given a string `num`, representing a large integer, and an integer `k`.

We call some integer **wonderful** if it is a **permutation** of the digits in `num` and is **greater in value** than `num`. There can be many wonderful integers. However, we only care about the **smallest-valued** ones.

	- For example, when `num = "5489355142"`:

	
		The 1st smallest wonderful integer is `"5489355214"`.

		- The 2nd smallest wonderful integer is `"5489355241"`.

		- The 3rd smallest wonderful integer is `"5489355412"`.

		- The 4th smallest wonderful integer is `"5489355421"`.

	
	

Return *the **minimum number of adjacent digit swaps** that needs to be applied to *`num`* to reach the *`k^th`*** smallest wonderful** integer*.

The tests are generated in such a way that `k^th` smallest wonderful integer exists.

 

**Example 1:**

```

Input: num = &quot;5489355142&quot;, k = 4
Output: 2
Explanation: The 4th smallest wonderful number is &quot;5489355421&quot;. To get this number:
- Swap index 7 with index 8: &quot;5489355142&quot; -&gt; &quot;5489355412&quot;
- Swap index 8 with index 9: &quot;5489355412&quot; -&gt; &quot;5489355421&quot;

```

**Example 2:**

```

Input: num = &quot;11112&quot;, k = 4
Output: 4
Explanation: The 4th smallest wonderful number is &quot;21111&quot;. To get this number:
- Swap index 3 with index 4: &quot;11112&quot; -&gt; &quot;11121&quot;
- Swap index 2 with index 3: &quot;11121&quot; -&gt; &quot;11211&quot;
- Swap index 1 with index 2: &quot;11211&quot; -&gt; &quot;12111&quot;
- Swap index 0 with index 1: &quot;12111&quot; -&gt; &quot;21111&quot;

```

**Example 3:**

```

Input: num = &quot;00123&quot;, k = 1
Output: 1
Explanation: The 1st smallest wonderful number is &quot;00132&quot;. To get this number:
- Swap index 3 with index 4: &quot;00123&quot; -&gt; &quot;00132&quot;

```

 

**Constraints:**

	- `2 <= num.length <= 1000`

	- `1 <= k <= 1000`

	- `num` only consists of digits.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/) | [Solutions](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/)
