# 🔥🔥🐱‍👤 Explained code O(n) 🐱‍🏍🔥🔥

**Author:** TrickyCat
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4637671/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4637671/)

---

# Intuition & Approach

We're minimizing the answer, so go the left to right (from MSB to LSB direction).

#### 1. Consider the MSB bit (j = 29-th bit) on the first iteration:
- `j = 29`
- `cnt` would contain count of the numbers having `0` in `j`th bit.
- `Q = n - cnt` would contain count of the numbers having `1` in `j`th bit.

So, if `Q > k` then there's no way to eliminate the necessity to have the `j`th bit set in the answer.

#### 2. Consider j = 28-th bit on the second iteration:

- `j = 28`
- `target` would contain:
    - the prefix of the currently computed `ans` for the already handled more significant bits than the current `j`-th bit
    - `0` in j-th position
    - all `1`s in positions `[j-1, 0]`
- `cnt` would contain count of the numbers 'covered by OR' by the `target` value
- `Q = n - cnt` would contain count of the numbers having `1` in **ANY** significant bit with zero value in the `target` which can be:
    - either `j`th bit (which we're handling on the current iteration)
    - or any `z`th bit from the `ans` prefix having zero value
    - so, `Q` is the accumulated count of violations for all those zero bits and technically speaking we can set **ANY(!!!)** subset of those zero bits to one (as long as the chosen subset would keep us within the thershold `k`), and we're setting it to the current `j` because:
        - our goal is to **minimize** and index/position of `j` is smaller/more optimal than any of those possible `z`-s
        - we already know that it would be sufficient to set only a single `j`-th bit (instead of a subset of multiple bits) to keep us again within the thershold (I'll leave it to the reader to think why that's the case)

**E.g.:**

- Assume the current `ans` is `0`
    -  then `target` is `0011111111111`
    - `cnt` is the count of numbers which do not have the two MSBs set
    - `n - cnt` is the count of numbers having set bit in **EITHER(!!!)** of the `target` positions having zero value


#### 3. Consider j = 27..0 bits on the following iterations:

This is step 2 by induction.

# Complexity
- Time complexity: $$O(30n) = O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
  
- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
public class Solution
{
	public int MinOrAfterOperations(int[] nums, int k)
	{
		int n = nums.Length, ans = 0;

		// Going from MSB to LSB
		for (int j = 29; j >= 0; j--)
		{
			int cnt = 0; // count of elements which have 0 at j-th bit

			// binary(cur) = 111...11
			int cur = -1;

			// target = <currently computed ans prefix> then <0> then <j 1's>
			// target = ans01111111111
			// and 0 is at current MSB position j
			// aka
			// [29, j+1] bits: currently computed ans prefix / MSBits of the answer
			// j-th bit: 0
			// [j-1, 0] bits: all set to 1
			int target = ans | ((1 << j) - 1);

			foreach (int x in nums)
			{
				cur &= x;
				// Can the `target` 'cover by OR' the value of `cur`
				// If `cur` is covered => this automatically implies that its j-th bit is 0.
				// Same as:
				// if((cur & target) == cur)
				if ((cur | target) == target)
				{
					cnt++;
					cur = -1;
				}
			}

			/*
			`n - cnt`:
			
			- count of numbers which have bit set in either the current `j`-th 
			position or in any bit with zero value from the current already 
			computed prefix of `ans`
			
			- and if that accumulated count would be greater than a threshold k, 
			we must set any of those bits to one; and because we're minimizing 
			the answer, we set to 1 the smallest among them (which is at current `j` position)			
			*/
			if (n - cnt > k)
			{
				ans |= (1 << j);
			}
		}
		return ans;
	}
}


```