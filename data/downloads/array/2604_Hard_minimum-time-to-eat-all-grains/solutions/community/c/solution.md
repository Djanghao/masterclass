# [C++|Java|Python3] binary search

**Author:** ye15
**Votes:** -3
**Link:** [https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3360836/](https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3360836/)

---

**C++**
```
class Solution {
public:
    int minimumTime(vector<int>& hens, vector<int>& grains) {
        sort(hens.begin(), hens.end()); 
        sort(grains.begin(), grains.end()); 
        int lo = 0, hi = 1e9; 
        while (lo < hi) {
            int mid = lo + (hi-lo)/2, i = 0; 
            for (auto& h : hens) 
                for (int ii = i; i < grains.size() && (grains[i] <= h && h-grains[i] <= mid || h <= grains[ii] && grains[i]-h<= mid || grains[ii] <= h && h <= grains[i] && grains[i]-grains[ii]+min(grains[i]-h, h-grains[ii]) <= mid); ++i); 
            if (i == grains.size()) hi = mid; 
            else lo = mid+1; 
        }
        return lo; 
    }
};
```
**Java**
```
class Solution {
    public int minimumTime(int[] hens, int[] grains) {
        Arrays.sort(hens); 
        Arrays.sort(grains); 
        int lo = 0, hi = 1_000_000_000; 
        while (lo < hi) {
            int mid = lo + (hi-lo)/2, i = 0; 
            for (var h : hens) 
                for (int ii = i; i < grains.length && (grains[i] <= h && h-grains[i] <= mid || h <= grains[ii] && grains[i]-h <= mid || grains[ii] <= h && h <= grains[i] && grains[i]-grains[ii]+Math.min(grains[i]-h, h-grains[ii]) <= mid); ++i); 
            if (i == grains.length) hi = mid; 
            else lo = mid+1; 
        }
        return lo; 
    }
}
```
**Python3**
```
class Solution:
    def minimumTime(self, hens: List[int], grains: List[int]) -> int:
        hens.sort()
        grains.sort()
        lo, hi = 0, 1_000_000_000
        while lo < hi: 
            mid = lo + hi >> 1
            i = 0 
            for k, h in enumerate(hens): 
                ii = i 
                while i < len(grains) and (grains[i] <= h and h-grains[i] <= mid or h <= grains[ii] and grains[i]-h <= mid or grains[ii] <= h <= grains[i] and grains[i]-grains[ii] + min(grains[i]-h, h-grains[ii]) <= mid): i += 1
            if i == len(grains): hi = mid 
            else: lo = mid + 1
        return lo
```