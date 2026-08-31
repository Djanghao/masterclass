# [0ms][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 6
**Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2127604/](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2127604/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** C++ ***

```

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        
        int i = 0;
        int j = 0;
        int count = 0;
        int target = (nums1.size() + nums2.size());
        int prev = 0;
        
        while(true) {
            
            int n = 0;
            
            int x = INT_MAX;
            int y = INT_MAX;
            
            if(i < nums1.size()) x = nums1[i];
            if(j < nums2.size()) y = nums2[j];
            
            if(x == INT_MAX && y == INT_MAX) break;
            
            if(x < y) {
                n = x;
                i++;
            }
            else {
                n = y;
                j++;
            }
            
            if(count == target / 2) {
                if(target % 2 != 0) {
                    return n;
                }
                else {
                    return (double)(prev + n) / 2;
                }
            }
            prev = n;
            count++;
        }
        return 0;
    }
};

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
