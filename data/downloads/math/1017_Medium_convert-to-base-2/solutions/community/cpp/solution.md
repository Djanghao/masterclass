# C++ | Easy solution with detailed explanation

**Author:** deepak728
**Votes:** 10
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/2082966/](https://leetcode.com/problems/convert-to-base-2/solutions/2082966/)

---

Approach: 
1. Everything will be same as we convert decimal to binary with base 2. 
2. Taking base as -2. Find remainer using N%(-2) and divide no with (-2) after each iteration. 
3. We just have to handle the case when remainder is negative. `r = r + abs(-2)` and `N = N /(-2) +1` ; 

Example : 
N = -5 and base -2. Negative remainder will only occur when n is negative. 
```

N = (divisor) * (quoteint) + remiander 
-5 = (-2 )* (2) + -1
```
To make remainder positive and within the range we can add and subtract base value. 
```
-5 = (-2)* 2 + (-2) + -1 + 2
-5 = (-2) * (2 + 1) + (-1+2 ) 
-5 = (-2) * (3) +1 
```

Now remiander is positive and within range (0 - 1) and quotient will be N/(-2) + 1 



```
   string baseNeg2(int n) {
        string ans="";
        if(n==0)
            ans+=('0');
        int r;
        while(n){
            r=n%(-2);
            if(r<0){
                r+=2;
                n=n/(-2)+1;
            }else
                n/=(-2);
            ans+=(r+'0');
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
```