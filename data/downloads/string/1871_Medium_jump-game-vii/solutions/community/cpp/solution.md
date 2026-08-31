# BFS - C++ Explained

**Author:** morning_coder
**Votes:** 74
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/1224963/](https://leetcode.com/problems/jump-game-vii/solutions/1224963/)

---

-> If last character is not '0' , return false

Assuming i has current position where we are standing and using standard BFS approach with slight optimization (to avoid TLE).

**Slight Optimization** : I got TLE with standard BFS so added this to avoid extra traversals.
-> max_curr : max position which has been visited  till previous iteration , start next iteration after max_curr to avoid duplication indices traversals.

1. Initially i = 0 , insert i into queue.
2. Pop i from queue front 
3. Iterate from max (i+minJump,max_curr) to (i+maxJump) and put all 0s indices in queue.
4. Update max_curr after complete iteration.

```
class Solution {
public:
    bool canReach(string s, int minJump, int maxJump) {
        int n = s.length();
        if(s[n-1]!='0')
            return false;
        
        int i = 0;
        queue<int> q;
        q.push(0);
        int curr_max = 0;
        
        while(!q.empty()){
            i = q.front();
            q.pop();
            if(i == n-1)
                return true;
            
            for(int j = max(i + minJump, curr_max); j <= min(i + maxJump, n - 1); j++){
                if(s[j] == '0')   q.push(j);
            }   
            curr_max = min(i+maxJump+1, n);
        }
        return false;
    }
};
```

**Time Complexity** - O(n)