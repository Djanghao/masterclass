# Beats 100% in time and space. Simple elegant high school mathematics

**Author:** randomcoder219
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5990704/](https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5990704/)

---

# Intuition
It comes from classic combinatorics problem. The sum can be odd if the subsequence contains odd numbers odd times. 

# Approach

nc0 + nc1 + nc2 + ...... + ncn = 2^n
nc1 + nc3 + nc5 + ...... = nc0 + nc2 + ...... = 2 ^ n - 1



# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
 $$O(1)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int subsequenceCount(vector<int>& nums) {
        int mod = 1000000007;
        int n = nums.size();
        int numEven = 0;
        int numOdd = 0;
        for(auto num: nums) {
            if(num % 2 == 0) {
                numEven++;
            }
        }
        numOdd = n - numEven;
        if(numOdd == 0) {
            return 0;
        }


        long long result1 = 1;
        for(int i = 1; i <= numEven; i++) {
            result1 = ((result1 % mod)*2) % mod;
        }
        long long result2 = 1;
        for(int i = 1; i < numOdd; i++) {
            result2 = ((result2 % mod)*2) % mod;
        }

        return ((result1 % mod) * (result2 % mod)) % mod;
    }
};
```