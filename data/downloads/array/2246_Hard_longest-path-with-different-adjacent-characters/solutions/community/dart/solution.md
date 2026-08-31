# Dart DFS

**Author:** Mahmoud_Zakaria
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3046534/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3046534/)

---

the algorithm is right, but Time Limit Exceeded

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

for explanation :
https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/2889382/longest-path-with-different-adjacent-characters/
# Code
```
class Solution {
    
  int longestPath(List<int> parent, String s) {
      int n=parent.length ;
        List<List<int>>c = List.generate(n, (i) => [], growable: true);
        for(int i=1; i<n; i++){
            c[parent[i]].add(i);
        }
        int tp=1 ;
        int dfs(int nod){
        int lng=0, slng=0;
        for(int chld in c[nod]){
            int lFromChld = dfs(chld);
            if(s[chld]== s[nod]) continue ;
            if(lFromChld > lng){
                slng = lng ;
                lng= lFromChld ;
            }else if (lFromChld > slng) slng = lFromChld ;
        }
        tp = max(tp, lng+ slng + 1);
        return lng +1 ;
    }
        dfs(0);
        return tp;
  }
}

```

Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)