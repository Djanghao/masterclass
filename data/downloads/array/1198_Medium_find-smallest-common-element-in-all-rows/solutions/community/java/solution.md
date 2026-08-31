# Simple and readable Java solution (binary search by rows)

**Author:** RuslanVdovychenko
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2188841/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2188841/)

---

```
class Solution {
    public int smallestCommonElement(int[][] mat) {
        if (mat.length == 1)
            return mat[0][0];
        
        for (int target: mat[0]) {
            boolean common = true;
            for (int r = 1; r < mat.length; r++) {
                int[] row = mat[r];
                boolean b = bSearch(row, target);
                if (!b) {
                    common = false;
                    break;
                }
            }
            if (common)
                return target;
        }
        
        return -1;
    }
    
    private boolean bSearch(int[] arr, int target) {
        int m = arr.length;
        
        int left = 0;
        int right = m - 1;
        while (left <= right) {
            int mid = left + (right - left)/2;
            int midVal = arr[mid];
            if (midVal == target)
                return true;
            
            if (midVal < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        
        return false;
    }
}
```