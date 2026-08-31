# Simple solution using |  - Java

**Author:** Dave-Land
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5834102/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5834102/)

---

# Code
```java []
class Solution {
    public int[] orArray(int[] nums) {
        int[] result= new int[nums.length -1];

        for(int i = 0; i < nums.length - 1; i++) {
            result[i] = nums[i] | nums[i + 1]; 
        }

        return result;
    }
}
```