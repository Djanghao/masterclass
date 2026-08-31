# C++ time beats 100%

**Author:** PABITRA_DASH
**Votes:** 6
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/692308/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/692308/)

---

```
class Solution {
public:
    long int counter(long long int n) // function to count trailing zeroes in n!
    {
        long int c=0;
        while(n)
        {
            c+=(n/5);
            n/=5;
        }
        return c;
    }
    int preimageSizeFZF(int k) 
    {
        // the output is either 5 or 0
        // i.e. the count of trailing zeroes changes per 5 numbers
        long long int low,high,mid,c;
        low=0;
        high=1000000000;
        
        if(k==low || k==high) // two base cases
            return 5;
        
        while(low<=high)
        {
            mid=low+(high-low)/2;
            c = counter(mid);
            if(k==c)   // a number with same no of trailing zeroes is found
                return 5;
            else if(k < c)
                high=mid-1;
            else
                low=mid+1;
        }
        
        return 0;            
    }
};
```