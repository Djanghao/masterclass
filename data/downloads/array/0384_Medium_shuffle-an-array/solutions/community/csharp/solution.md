# c# solution

**Author:** Pachisi
**Votes:** 2
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/2895335/](https://leetcode.com/problems/shuffle-an-array/solutions/2895335/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    private int[] nums;
    private int[] shuffled;
    private Random rnd = new Random();

    public Solution(int[] nums) {
        this.nums = nums;
        shuffled = new int[nums.Length];
        Array.Copy(nums, shuffled, nums.Length);
    }
    
    public int[] Reset() {
        Array.Copy(nums, shuffled, nums.Length);
        return nums;
    }
    
    public int[] Shuffle() {
        for(int i=0;i< shuffled.Length; i++){
            int random = rnd.Next(i, shuffled.Length);
            int temp = shuffled[i];
            shuffled[i] = shuffled[random];
            shuffled[random] = temp;
        }
        return shuffled;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.Reset();
 * int[] param_2 = obj.Shuffle();
 */
```