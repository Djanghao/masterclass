# return GCD(nums)==1 || C++

**Author:** ganeshkumawat8740
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3621142/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3621142/)

---

# Code
```
class Solution {
public:
    bool isGoodArray(vector<int>& nums) {
        int g = 0;
        for(auto &i: nums){
            g = __gcd(i,g);
            if(g==1)return true;
        }
        return false;
    }
};
```