# C++ Simple Solution (beats all)

**Author:** rexagod
**Votes:** 7
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/768973/](https://leetcode.com/problems/prime-arrangements/solutions/768973/)

---

```
class Solution {
    int mod=1e9+7;
    int nop(int n) {
        int c=0, flag=false;
        for(int i=2; i<=n; i++) {
            for(int j=2; j*j<=i; j++) {
                if(i%j==0) {
                    flag = true;
                    break;
                }
            }
            if(!flag)
                c++;
            else
                flag=false;
        }
        return c;
    }
    long long fact(int n) {
        if(n==0)
            return 1;
        return n*fact(n-1)%mod;
    }
public:
    int numPrimeArrangements(int n) {
        int p = nop(n);
        int c = n-p;
        long long x = fact(p)%mod*fact(c)%mod;
        return x%mod;
    }
};
```