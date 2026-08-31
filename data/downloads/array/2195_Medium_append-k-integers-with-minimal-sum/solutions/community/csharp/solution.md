# C# O(n): Linear and without sorting 🐱‍👤

**Author:** TrickyCat
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5067375/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5067375/)

---

# Intuition

Start from the minimum possible value of the result and adjust it while iterating over the array.

# Approach

Traverse the array and deduct the current number if it was counted in the result (i.e. if the number `x` was less than or equal to the `lastNum` (max number taken into the result)).

The tricky part lies here:
```csharp
while (numSet.Contains(++lastNum))
{
    handled.Add(lastNum);
}
```
where we mark the numbers from the array that weren't counted in the current result as handled in order to not possibly subtract their values at later iterations.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp
public class Solution
{
	// @TrickyCat
	public long MinimalKSum(int[] nums, int k)
	{
		long sum = (1L + k) * k / 2;
		int lastNum = k;
		HashSet<int> handled = new(), numSet = new(nums);
		
		for (int i = 0; i < nums.Length; i++)
		{
			if (nums[i] > lastNum) continue;

			if (handled.Add(nums[i]))
			{
				sum -= nums[i];
				while (numSet.Contains(++lastNum))
				{
					handled.Add(lastNum);
				}
				sum += lastNum;
			}
		}
		return sum;
	}
}

```