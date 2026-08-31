# C++|short and simple

**Author:** spyole97
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1760038/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/1760038/)

---

```
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& A) {
        int n = A.size();
        vector<int>L(n,0);
        vector<int>R(n,0);
        int max_len = 0;
        L[0] = A[0];
        R[n - 1] = A[n - 1];
        for(int i = 1; i < n; i++)
        {
            if(A[i] == 1)
                L[i] = L[i - 1] + 1;
        }
        for(int i = n - 2; i >= 0; i--)
        {
            if(A[i] == 1)
                R[i] = R[i + 1] + 1;
        }
        for(int i = 0; i < n; i++)
        {
            int l = (i == 0) ? 0: L[ i - 1];
            int r = (i == n - 1) ? 0: R[ i + 1];
            max_len = max(max_len, l + r + 1);
            
        }
        return max_len;
        
        
        
    }
};
```