# Java EASY Solution for Beginners [ 99.96% ] [ 1ms ]

**Author:** RajarshiMitra
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5227248/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5227248/)

---

# Approach
1. **Initialize Counter**:
   - Create a variable `count` to store the number of valid pairs.

2. **Outer Loop**:
   - Iterate through each element `i` in `nums1`.

3. **Inner Loop**:
   - For each element `i` in `nums1`, iterate through each element `j` in `nums2`.

4. **Check Condition**:
   - Check if `nums1[i] % (nums2[j] * k) == 0`.

5. **Update Counter**:
   - If the condition is true, increment `count`.

6. **Return Result**:
   - Return the value of `count`.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```
class Solution {
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        int count=0;
        for(int i=0; i<nums1.length; i++){
            for(int j=0; j<nums2.length; j++){
                if(nums1[i]%(nums2[j]*k) == 0) count++;
            }
        }
        return count;
    }
}
```

![193730892e8675ebafc11519f6174bee5c4a5ab0.jpeg](./images/0.jpeg)
