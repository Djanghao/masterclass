# C#, using O(1) space, O(n) runtime

**Author:** edevyatkin
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/545609/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/545609/)

---

```
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        for (int i = 0; i < nums.Length; i++) {
            int index = Math.Abs(nums[i]) - 1;
            if (nums[index] > 0) nums[index] = -nums[index];
        }
        List<int> result = new List<int>();
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] > 0) result.Add(i+1);
        }
        return result;
    }
}
```