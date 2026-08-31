# Check for Two Even Numbers || C++ , Python

**Author:** not_yl3
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5132609/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5132609/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
If a number has a trailing zero in its binary representation then it is an even number, so we need to check for at least two even numbers in `nums`.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool hasTrailingZeros(vector<int>& nums) {
        int count = 0;
        for (int num : nums){
            count += !(num % 2);
            if (count == 2){
                return true;
            }
        }
        return false;
    }
};
```
```python3 []
class Solution:
    def hasTrailingZeros(self, nums: List[int]) -> bool:
        count = 0
        for num in nums:
            count += not (num % 2)
            if count == 2: return True
        return False
```