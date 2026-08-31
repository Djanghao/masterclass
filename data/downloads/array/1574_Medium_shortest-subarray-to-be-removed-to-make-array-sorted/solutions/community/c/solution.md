# [C++] Binary Search + DP

**Author:** uds5501
**Votes:** 42
**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/830479/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/830479/)

---

Basic Idea - 
- Make a prefix and suffix array of longest continuous non decreasing and non increasing subarrays of the given array.
- Now, apply Binary Search on the size of window to be removed.
	- Lowest : 0
	- Highest : `n-1` (`n` = size of given array)
- Now simulate the removal of windows of `size=mid` and if the `remaining left elements + remaining right elements == n-size` and `a[left-1] <= a[right+1]` then this size of window can be removed (see `ok` function)
- If the ok function returns true, do `high = mid` else `low = mid+1`.
 

Time Complexity : `O(n log n)`
Space Complexity : `O(n)`

```
// itne me hi thakk gaye?
class Solution {
public:
    bool ok(int &size, vector<int> &pref, vector<int> &suff, vector<int> &arr, int &n) {
        for(int start=0; start<=n-size; start++) {
            int end = start + size - 1;
            int left = (start <= 0) ? 0 : pref[start-1];
            int right = (end >= n-1) ? 0 : suff[end+1];
            int le = (start <= 0) ? -1e9+2 : arr[start-1];
            int re = (end >= n-1) ? 1e9+2 : arr[end+1];
            if (left + right == n-size && le <= re) {
                return true;
            }
        }
        return false;
    }
    int findLengthOfShortestSubarray(vector<int>& arr) {
        int n = arr.size();
        if (!n || n==1) return 0;
        vector<int> pref(n, 1);
        vector<int> suff(n, 1);
        for(int i=1; i<n; i++) {
            if (arr[i] >= arr[i-1]) pref[i] = pref[i-1]+1;
        }
        for(int i=n-2; i>=0; i--) {
            if (arr[i] <= arr[i+1]) suff[i] = suff[i+1]+1;
        }
        int low = 0;
        int high = n-1;
        while(low < high) {
            int mid = (low + high)/2;
            if(ok(mid, pref, suff, arr, n)) high = mid;
            else low = mid+1;
            if(high - low == 1) break;
        }
        if (ok(low, pref, suff, arr, n)) return low;
        return high;
    } 
};
```