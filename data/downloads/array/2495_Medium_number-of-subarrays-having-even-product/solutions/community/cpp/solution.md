# C++ | O(N) | Math

**Author:** happysleepyslime
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3402107/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3402107/)

---

# Intuition
A math problem

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
public:
    long long evenProduct(vector<int>& nums) {
        long long sol = 0;
        long long n = nums.size();
        long long lastEven = 0;
        for(long long i = 0; i<n; i++){
            if(nums[i]%2==0){
                sol+= (i-lastEven)*(n-i-1)+n-lastEven;
                // (i-lastEven)*(n-(i+1))+ (i-lastEven) + (n-(i+1)) + 1
                // subarray left * subarray right + subarray left + subarray right + itself
                lastEven = i+1;
            }
        }
        return sol;
    }
};
```