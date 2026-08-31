# Very Easy || 0 ms ||100%|| Fully Explained (Java, C++, Python, JS, C, Python3)

**Author:** PratikSen07
**Votes:** 176
**Link:** [https://leetcode.com/problems/single-number/solutions/2438883/](https://leetcode.com/problems/single-number/solutions/2438883/)

---

**Problem:**
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
**Input:**   nums = [ 4, 1, 2, 1, 2 ]
**Output:**  4
**Explanation:**   1\u2019s and 2\u2019s appear twice, only 4 appears exactly once. So the answer is 4.
**Concept of XOR:**
XOR of zero and some bit returns that bit i.e. x^0 = x...
XOR of two same bits returns 0 i.e. x^x = 0...
And,  x^y^x = (x^x)^y = 0^y = y...
XOR all bits together to find the unique number.


# **Java Solution:**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Single Number.
Memory Usage: 46.2 MB, less than 89.95% of Java online submissions for Single Number.
```
class Solution {
    public int singleNumber(int[] nums) {
        // Initialize the unique number...
        int uniqNum = 0;
        // TRaverse all elements through the loop...
        for (int idx : nums) {
            // Concept of XOR...
            uniqNum ^= idx;
        } return uniqNum;       // Return the unique number...
    }
}
```

# **C++ Solution:**
Runtime: 6 ms, faster than 98.77% of C++ online submissions for Single Number.
Memory Usage: 11.8 MB, less than 98.93% of C++ online submissions for Single Number.
```
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        // Initialize the unique number...
        int uniqNum = 0;
        // TRaverse all elements through the loop...
        for (int idx : nums) {
            // Concept of XOR...
            uniqNum ^= idx;
        } return uniqNum;       // Return the unique number...
    }
};
```

# **Python Solution:**
```
class Solution(object):
    def singleNumber(self, nums):
        # Initialize the unique number...
        uniqNum = 0;
        # TRaverse all elements through the loop...
        for idx in nums:
            # Concept of XOR...
            uniqNum ^= idx;
        return uniqNum;       # Return the unique number...
```
            
# **JavaScript Solution:**
```
var singleNumber = function(nums) {
    // Initialize the unique number...
    let uniqNum = 0;
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;       // Return the unique number...
};
```

# **C Language:**
```
int singleNumber(int* nums, int numsSize){
    // Initialize the unique number...
    int uniqNum = 0;
    // TRaverse all elements through the loop...
    for (int idx = 0; idx < numsSize; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;       // Return the unique number...
}
```

# **Python3 Solution:**
```
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # Initialize the unique number...
        uniqNum = 0;
        # TRaverse all elements through the loop...
        for idx in nums:
            # Concept of XOR...
            uniqNum ^= idx;
        return uniqNum;       # Return the unique number...
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**