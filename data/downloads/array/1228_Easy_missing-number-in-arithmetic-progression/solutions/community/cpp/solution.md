# beginner friendly || c++ || two approaches

**Author:** a1ashish1
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/5666648/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/5666648/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    // int missingNumber(vector<int>& arr) {
    //     int n = arr.size();
    //     int d = (arr[n-1]-arr[0])/n;
    //     if(!d) return arr[0];

    //     for(int i=1;i<n;i++) if(arr[i]!=arr[i-1]+d) return arr[i-1]+d;

    //     return 0;
    // }

    int missingNumber(vector<int>& arr) {
        int n = arr.size();
        int d = (arr[n-1]-arr[0])/n;
        int low=0;
        int high = n-1;
        int mid;

        while(low<=high){
            mid = low + (high-low)/2;
            if(arr[0] + d*mid == arr[mid]) low=mid+1;
            else high = mid-1;
        }

        return arr[0]+d*low;
    }
};
```