# [Python3] simulation

**Author:** ye15
**Votes:** 1
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/1408119/](https://leetcode.com/problems/output-contest-matches/solutions/1408119/)

---


```
class Solution:
    def findContestMatch(self, n: int) -> str:
        ans = [str(x) for x in range(1, n+1)]
        while len(ans) > 1: 
            n = len(ans)
            for i in range(n//2): 
                ans[i] = f"({ans[i]},{ans[n-i-1]})"
                ans.pop()
        return ans[0]
```

```
class Solution {
public:
    string findContestMatch(int n) {
        vector<string> ans(n); 
        for (int i = 0; i < n; ++i) ans[i] = to_string(i+1); 
        for (int n = ans.size(); n > 1; n /= 2) 
            for (int i = 0; i < n/2; ++i) {
                ans[i] = "(" + ans[i] + "," + ans[n-i-1] + ")"; 
                ans.pop_back(); 
            }
        return ans[0]; 
    }
};
```