# ✅ [C++] || Explanation || 4 Line of Code

**Author:** deleted_user
**Votes:** 52
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2947991/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2947991/)

---

**If you liked solution please upvote!**

 * **Approach** - 
    - Simple, calculate distance from `starting_index` to `target_index` and also `starting_index` to `target_index` but reverse direction and take min of both.

* *Time Complexity - O(N)*

* *Space Complexity - O(1)*
    
```
class Solution {
public:
    int closetTarget(vector<string>& words, string target, int s) {
        int n = words.size(), ans = INT_MAX;
        
        for(int i = 0; i < n; i++) 
            if(words[i] == target) 
                ans = min(ans, min(abs(s - i), abs(n - abs(s - i)))); 
                // abs(s - i) => distance from starting index to target index, 
                // abs(n - abs(s - i)) => distance from starting index to target index but reverse direction
        
        return ans == INT_MAX ? -1 : ans;
    }
};
```

**Thank You!**