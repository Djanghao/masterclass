# Runtime: 0 ms, faster than 100.00% of ✅ C++ || Binary Search || Easy Simple Approach

**Author:** himanshuyadavroxx
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1916796/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1916796/)

---

***UPVOTE if you find it usefull and feel free to ask any doubt, thank you.***
```cpp
class Solution {
public:
    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
        int m = arr1.size();
        int n = arr2.size();
        sort(arr2.begin(), arr2.end());
        int cnt = 0;
        for (int i = 0; i < m; i++) {
            int l = 0, r = n-1, x = arr1[i] - d, y = arr1[i] + d;
            
            while (l <= r) {
                int mid = l+ (r-l)/2;
                if (arr2[mid] < x) {
                    l = mid + 1;
                } 
                else if (arr2[mid] > y) {
                    r = mid - 1;
                } 
                else {
                    cnt++; break;
                }
            }
        }
        return m - cnt;
    }
};
```