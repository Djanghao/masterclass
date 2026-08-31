# C++

**Author:** spyole97
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1769791/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1769791/)

---

```
class Solution {
public:
    long long largestEvenSum(vector<int>&A, int k) {
        long long sum = 0;
        int n = A.size();
        sort(A.begin(),A.end());
        reverse(A.begin(),A.end());
        int smallest_odd = INT_MAX;
        int smallest_even = INT_MAX;
        int i = 0;
        
        while(i < k)
        {
            sum += A[i];
            if(A[i] % 2)
                smallest_odd = min(smallest_odd,A[i]);
            else
                smallest_even = min(smallest_even,A[i]);
            i++;
        }
        if(sum % 2 == 0)
            return sum;
        
        long long res = -1;
        while(i < n)
        {
            if(A[i] % 2 and smallest_even != INT_MAX)
            {
                res = max(res,(sum - smallest_even + A[i]) );
            }
            else if(A[i] % 2 == 0 and smallest_odd != INT_MAX)
            {
                res = max(res,sum - smallest_odd + A[i] );
            }
            i++;
        }
        if(res % 2)
            return -1;
        return res;
        
    }
};
```