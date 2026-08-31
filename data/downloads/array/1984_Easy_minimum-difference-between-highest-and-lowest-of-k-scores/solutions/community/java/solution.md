# JAVA | Sorting | Sliding Window

**Author:** sourin_bruh
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/2824934/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/2824934/)

---

### **Please Upvote** :D
```
class Solution {
    public int minimumDifference(int[] nums, int k) {
        if (k == 1) return 0;

        Arrays.sort(nums);
		
        int i = 0, j = k - 1, 
        min = Integer.MAX_VALUE;

        while (j < nums.length) {
            min = Math.min(min, nums[j++] - nums[i++]);
        }

        return min;
    }
}

// TC: O(n * logn) + O(n) => O(n * logn)
// SC: O(1)
```