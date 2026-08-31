# Solution

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3530802/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3530802/)

---

```C++ []
class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
        
        int n = strs.size();
        int m = strs[0].length();

        vector<int> dp(m, 1);
        int res = 1;
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < i; j++) {
                for(int k = 0; k <= n; k++) {
                    if(k == n) {
                        dp[i] = max(dp[i], dp[j] + 1);
                        res = max(res, dp[i]);
                    } else if (strs[k][j] > strs[k][i]) {
                        break;
                    }
                }
            }
        }
        return m - res;
    }
};
```

```Python3 []
class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        n = len(strs[0])
        dp = [1] * n
        for i in range(1, n):
            for j in range(i):
                valid = True
                for a in strs:
                    if a[j] > a[i]: 
                        valid = False
                        break
                if valid:
                    dp[i] = max(dp[i], dp[j] + 1)
        return n - max(dp)
```

```Java []
class Solution {
    public int minDeletionSize(String[] strs) {
    
        int length = strs[0].length();
        int[] dp = new int[length];
        
        int max = 0;
        for (int i = 0; i < length; i++){
            dp[i] = 1;
            for (int j = 0; j < i; j++){
                if (checkLager(j,i, strs)){
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            max = Math.max(max, dp[i]);
        }
        return length - max;
    }
    public boolean checkLager(int j, int i, String[] strs){
        for (String s : strs){
            if (s.charAt(j) > s.charAt(i)){
                return false;
            }
        }
        return true;
    }
}
```
