# Java | Beats 100% | TC: O(logN), SC: O(1) |

**Author:** mhrj1425
**Votes:** 1
**Link:** [https://leetcode.com/problems/fixed-point/solutions/3055240/](https://leetcode.com/problems/fixed-point/solutions/3055240/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(logN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int fixedPoint(int[] arr) {
    
        int low = 0, high = arr.length-1, mid = (high+low)/2, ans = -1;

        while(low <= high) {

            if(arr[mid] == mid) {
                ans = mid;
                high = mid-1;
            }
            if(arr[mid] < mid) {
                low = mid+1; 
            } else {
                high = mid-1;
            }

            mid = (high+low)/2;
        }

        return ans;
    }
}
```