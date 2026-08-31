# C++ Simple and Short Solution 0 ms faster than 100%

**Author:** YehudisK
**Votes:** 53
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1017858/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1017858/)

---

```
class Solution {
public:
    int getMaximumGenerated(int n) {
        if (n == 0 || n == 1) return n;
        
        vector<int> arr(n+1);
        arr[0] = 0;
        arr[1] = 1;
        int maxi = 1;
        
        for (int i = 2; i <= n; i++) {
            arr[i] = i % 2 == 0 ? arr[i/2] : arr[i / 2] + arr[i / 2 + 1];
            maxi = max(maxi, arr[i]);
        }
        
        return maxi;
    }
};
```
**Like it? please upvote...**