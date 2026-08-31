# C++ | Clean Code and Detailed Explanation

**Author:** Unstoppable_Train
**Votes:** 4
**Link:** [https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3010644/](https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3010644/)

---

Here is a detailed explanation of the code, we first convert the triangles into intervals, then we find the number of intervals that are not included inside other intervals.

__Time complexity__: `O(n.log n)`
__Space complexity__: `O(n)`

```
 int visibleMountains(vector<vector<int>>& peaks) {
        int repeated = 0;        
        vector<vector<int>> intervals;
        
        for (auto peak : peaks) {
            intervals.push_back({ peak[0] - peak[1], peak[0] + peak[1] });
        }
        
        sort(intervals.begin(), intervals.end());
        
        // The answer is the number of intervals that can be hidden under other intervals
        // So we will use a monotonic stack for that
        stack<vector<int>> st;
        
        bool repeatedBefore = false;
        for (int i = 0; i < intervals.size(); i++) { 
            // Remove the repeated intervals since they overlap each other, and none of them is visible
            // We only remove one instance from each interval, regardless of how many times it occurs
                // Example: [[5,2],[5,2],[[8,4],[8,4],[8,4],[8,4],[8,4],[8,4],[8,4]]
                // We will subtract 2 only, since we have repeated intervals { [5, 2], [8, 4] }
            if (!repeatedBefore && !st.empty() && st.top()[1] == intervals[i][1] && st.top()[0] == intervals[i][0]) {
                repeated++;
                repeatedBefore = true;
            } 
            
            if (i > 0 && intervals[i][0] != intervals[i - 1][0] && intervals[i][1] != intervals[i - 1][1]) {
                repeatedBefore = false;
            }
            
            // If the new interval can hide tops of the stacks, then we keep popping them
            while(!st.empty() && (st.top()[0] >= intervals[i][0] && st.top()[1] <= intervals[i][1]) ) {
                st.pop();
            }
            
            // If the new interval can't hide the top (peak) interval of the stack, then skip it
            if (!st.empty() && (st.top()[0] <= intervals[i][0] && st.top()[1] >= intervals[i][1]) ) {
                continue;
            }
            
            st.push(intervals[i]);
        }
        
        
        return max((int)st.size() - repeated, 0);
    }
```
	
	