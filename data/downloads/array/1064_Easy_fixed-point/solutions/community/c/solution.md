# Easy BinarySearch C++ sol

**Author:** Pinak05
**Votes:** 1
**Link:** [https://leetcode.com/problems/fixed-point/solutions/1790807/](https://leetcode.com/problems/fixed-point/solutions/1790807/)

---

```
class Solution {
public:
    int fixedPoint(vector<int>& arr) {
        int n = arr.size();
        int l = 0; int h = n-1;
        while(l < h) {
            int mid = l + (h-l)/2;
            if(arr[mid] >= mid) {
                h = mid;
            } else if(arr[mid] < mid) {
                l = mid+1;
            }
        }
        return (l >= 0 && l == arr[l] ? l : -1);
    }
};
```