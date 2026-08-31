# C++ O(N) Solution using Monotonic Stacks

**Author:** mayank8019
**Votes:** 80
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/2259285/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/2259285/)

---

The question says that we need to find any such subarray which has the property that all the elements in that subarray are `> threshold / k`.  

The gist of the above statement is that we need to find the subarray minimum and we need to expand that subarray as max as possible so as to have as less `threshold / k` as possible.

### Solution Idea
We consider the current element as the minimum element and try to find out the prev smaller and next smaller elements. Once we know that, we can calculate the max. subarray length K which will allow us to get least `threshold / k`. 

```
class Solution {
public:
    int validSubarraySize(vector<int>& a, int threshold) {
        int n = a.size();
        
        vector<int> stk;                            // used as a stack
        vector<int> nextS(n, -1), prevS(n, -1);     // used for storing next and previous smaller elements
                
        // firstly, let's find out the next smaller elements
        for(int i = 0; i < n; i++) {
            while (!stk.empty() && a[i] < a[stk.back()]) {
                nextS[stk.back()] = i;
                stk.pop_back();
            }
            stk.push_back(i);
        }

        // clear up our stack
        stk.clear();
        
        // now, let's find out the previous smaller elements for each index
        for(int i = n-1; i >= 0; i--) {
            while (!stk.empty() && a[i] < a[stk.back()]) {
                prevS[stk.back()] = i;
                stk.pop_back();
            }
            stk.push_back(i);
        }
        
        for(int i = 0; i < n; i++) {
            int left = prevS[i];                            // left boundary
            int right = nextS[i] == -1 ? n : nextS[i];      // right boundary
            
            int len = right - left - 1;                     // length of subarray formed with a[i] as minimum
            
            if (a[i] > (threshold / ((double) len)))
                return len;
        }
        
        return -1;
    }
};
```

**TC: O(N)**

**Similar questions**

1. https://leetcode.com/problems/next-greater-element-i/
2. https://leetcode.com/problems/largest-rectangle-in-histogram/
3. https://leetcode.com/problems/sum-of-subarray-minimums/