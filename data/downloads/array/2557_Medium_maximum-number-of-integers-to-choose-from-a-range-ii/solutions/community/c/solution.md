# [C++|Java|Python3] binary search

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/3144370/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/3144370/)

---

**Intuition**
Here, due to the large range, we have to use binary search to solve this problem. 
**Implementation**
**C++**
```
class Solution {
public:
    int maxCount(vector<int>& banned, int n, long long maxSum) {
        int lo = 0, hi = n; 
        while (lo < hi) {
            int mid = lo + (hi - lo + 1)/2; 
            long total = (long) mid*(mid+1)/2; 
            for (auto& x : banned) 
                if (x <= mid) total -= x; 
            if (total <= maxSum) lo = mid; 
            else hi = mid-1; 
        }
        return lo - count_if(banned.begin(), banned.end(), [&](auto& x) {return x <= lo;}); 
    }
};
```
**Java**
```
class Solution {
    public int maxCount(int[] banned, int n, long maxSum) {
        int lo = 0, hi = n; 
        while (lo < hi) {
            int mid = lo + (hi - lo + 1)/2; 
            long total = (long) mid*(mid+1)/2; 
            for (var x : banned) 
                if (x <= mid) total -= x; 
            if (total <= maxSum) lo = mid; 
            else hi = mid-1; 
        }
        int ans = lo; 
        for (var x : banned)
            if (x <= lo) --ans; 
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        lo, hi = 0, n
        while lo < hi: 
            mid = lo + hi + 1 >> 1
            total = mid*(mid+1)//2
            for x in banned: 
                if x <= mid: total -= x
            if total <= maxSum: lo = mid
            else: hi = mid-1
        return lo - sum(x <= lo for x in banned)
```