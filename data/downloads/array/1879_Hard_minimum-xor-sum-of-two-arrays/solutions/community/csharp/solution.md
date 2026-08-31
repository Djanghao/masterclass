# Simple C# DP solution

**Author:** maxpushkarev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/3994299/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/3994299/)

---

# Complexity
- Time complexity: O(n^2 * 2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * 2^n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
	public class Solution
	{
		public int MinimumXORSum(int[] nums1, int[] nums2)
		{
			checked
			{
				var length = nums1.Length;
				var mask = 1 << length;
				long[,] dp = new long[length + 1, mask];

				for (var i = 0; i <= length; i++)
				{
					for (var j = 0; j < mask; j++)
					{
						dp[i, j] = int.MaxValue;
					}
				}

				dp[0, 0] = 0;

				for (var i = 1; i <= length; i++)
				{
					var v1 = nums1[i - 1];

					for (var j = 0; j < mask; j++)
					{
						for(var k = 0; k < length; k++)
						{
							var v2 = nums2[k];

							if((j & (1 << k)) != 0)
							{
								dp[i, j] = Math.Min(dp[i, j], (v1 ^ v2) + dp[i - 1, (j ^ (1 << k))]);
							}
						}
					}
				}

				return (int)dp[length, mask - 1];
			}
		}
	}
```