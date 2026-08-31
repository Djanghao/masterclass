# Sliding Window

**Author:** votrubac
**Votes:** 186
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2527272/](https://leetcode.com/problems/longest-nice-subarray/solutions/2527272/)

---


**Intuition:** each element in the nice array has unique bits.
    
We use the sliding window approach, tracking `used` bits. We use OR to combine bits.
    
If the next number has a conflicting bit (`used & nums[i] != 0`), we shrink the window until there are no conflicts. We use XOR to remove bits as the window shrinks.
   
**Java**
```java
public int longestNiceSubarray(int[] nums) {
    int used = 0, j = 0, res = 0;
    for (int i = 0; i < nums.length; ++i) {
        while ((used & nums[i]) != 0)
            used ^= nums[j++];
        used |= nums[i];
        res = Math.max(res, i - j + 1);
    }
    return res;    
}
```
**C++**
```cpp
int longestNiceSubarray(vector<int>& nums) {
    int used = 0, j = 0, res = 0;
    for (int i = 0; i < nums.size(); ++i) {
        while ((used & nums[i]) != 0)
            used ^= nums[j++];
        used |= nums[i];
        res = max(res, i - j + 1);
    }
    return res;
}
```