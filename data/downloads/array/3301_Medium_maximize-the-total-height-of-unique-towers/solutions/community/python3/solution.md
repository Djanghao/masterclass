# Friendly Code &  ✅Simple Solution beat 100%✅

**Author:** Durjoybarua5327
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844303/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844303/)

---

**Python**
```
class Solution:
    def maximumTotalSum(self, maximumHeight: List[int]) -> int:
        maximumHeight.sort(reverse=True)
        now = maximumHeight[0]
        sum = 0
        n = len(maximumHeight)
        for i in range(n):
            now = min(now, maximumHeight[i])
            if now<=0:
                return -1
            sum +=now  
            now-=1
            
        return sum
```
**C++**
```
class Solution {
public:
    long long maximumTotalSum(vector<int>& maximumHeight) {
        sort(maximumHeight.rbegin(), maximumHeight.rend());
        int now = maximumHeight[0];
        long long sum = 0;  // Change to long long
        int n = maximumHeight.size();
        for (int i = 0; i < n; ++i) {
            now = min(now, maximumHeight[i]);
            if (now <= 0) {
                return -1;
            }
            sum += now;
            now -= 1;
        }
        return sum;
    }
};
```