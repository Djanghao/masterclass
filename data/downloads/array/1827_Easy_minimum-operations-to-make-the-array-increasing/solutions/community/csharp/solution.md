# Solution which beats 96% in C#

**Author:** akhundovaykhan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/4018367/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/4018367/)

---

```
public class Solution {
    public int MinOperations(int[] nums) {
          int currElement = nums[0], count = 0;
            for (int i = 1; i < nums.Length; i++)
            {
                if (currElement < nums[i])
                {
                    currElement = nums[i];
                }
                else
                {
                    count += currElement - nums[i] + 1;
                    currElement++;
                }
            }
            return count;
    }
}
```