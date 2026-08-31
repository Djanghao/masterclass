# Simple iterative, O(n) solution beating 95%.

**Author:** Swapnil_
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2807858/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/2807858/)

---

# Intuition
Need to find when the sum of all existing numbers become minimum,
negating that number number will and adding to the array will give us 1 instance when sum becomers 0, hence we just need to add 1 to it.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int MinStartValue(int[] nums) {
        int sum = 0;
        int min = 0;
        foreach(int num in nums) {
            sum += num;
            if(sum < min) {
                min = sum;
            }
        }

        return -min + 1;
    }
}
```