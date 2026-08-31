# Simple C++ Solution || Brute Force

**Author:** prashudeshmukh3006
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5939858/](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5939858/)

---

# Intuition
The largest perfect divisor of a number will always result in the smallest prime factor of the number. Now the number will not be further divisible because it is prime now.

Maximum one operation can be performed with a single number.

Just iterate over array from backwards. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
private:
public:
    int minOperations(vector<int>& nums) {
        int n = nums.size();
        int ans = 0;
        for(int i = n-2; i>=0; i--){
            if(nums[i] > nums[i+1]){
                
                for(int j = 2; j*j <= nums[i]; j++){
                    if(nums[i]%j == 0){
                        nums[i] = j;
                        ans++;
                        break;
                    }
                }

                if(nums[i]>nums[i+1]) return -1;
            }
        }

        return ans;
    }
};
```