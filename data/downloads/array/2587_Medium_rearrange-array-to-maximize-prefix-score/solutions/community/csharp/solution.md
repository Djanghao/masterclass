# Go, C# || Sort Descending

**Author:** Wild-Boar
**Votes:** 2
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286427/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286427/)

---

# Approach
 - Sort **nums** is descending.
 - Sum **prefix**
 - If **prefix** > 0, increase **res**, else return.

# Complexity
- Time complexity: O(nlog(n))
- Space complexity: O(1)

```Go []
func maxScore(nums []int) int {
	var res int = 0
	var prefix int64 = 0
	sort.SliceStable(nums, func(i, j int) bool {
		return nums[i] > nums[j]
	})
	for _, num := range nums {
		prefix += int64(num)
		if prefix > 0 {
			res++
		} else {
			break
		}
	}
	return res
}
```
```C# []
public class Solution {
    public int MaxScore(int[] nums)
    {
        int res = 0;
        long predix = 0;
        Array.Sort(nums, (a, b) => b - a);
        foreach (int num in nums)
        {
            predix += num;
            if (predix > 0)
                res++;
            else
                return res; ;
        }
        return res;
    }
}
```