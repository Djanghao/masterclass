# ✅Simple Solution

**Author:** Durjoybarua5327
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844281/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844281/)

---

**Python**
```
class Solution:
    def minElement(self, nums: List[int]) -> int:
        mini=float('inf')
        for num in nums:
            r=0
            while num>0:
                r+= num%10
                num//=10
            mini= min(mini, r)
        return mini
```
**C++**
```
class Solution {
public:
    int minElement(vector<int>& nums) {
        int mini =INT_MAX;
        for (int num : nums) {
            int r = 0;
            while (num > 0) {
                r += num % 10;
                num /= 10;
            }
            mini =min(mini, r);
        }
        return mini;
    }
};
```