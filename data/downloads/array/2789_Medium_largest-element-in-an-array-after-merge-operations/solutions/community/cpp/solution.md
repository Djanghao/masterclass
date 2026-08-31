# Greedy || Easy Explanation || Short Code

**Author:** HoneyJammer
**Votes:** 44
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3803714/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3803714/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Intially take sum as 0.
Start from end and just take number smaller than sum
and if we encounter number(num[i]) greater than sum then we update the sum to new greater element.
Here sum , stores maximum sum of all possible groups.. 

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    long long maxArrayValue(vector<int>& nums) {
        long long sum = 0;
        for(int i= nums.size()-1 ; i>=0 ; i--){
            if(nums[i] <= sum) sum += nums[i];
            else sum = nums[i];
        }
        return sum;
    }
};
```