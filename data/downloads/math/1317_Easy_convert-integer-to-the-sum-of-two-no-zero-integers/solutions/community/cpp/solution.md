# Easy & Clear Solution 0ms (100%) c++

**Author:** moazmar
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/991418/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/991418/)

---

```
class Solution {
public:
    vector<int> getNoZeroIntegers(int n) {
        int a=1,b=n-1,aa,bb;
        while(true){
            aa=a;bb=b;
            while(aa>0){
                if(aa%10==0){
                    a++;
                    b--;
                    break;
                }
                aa/=10;
            }  
            while(bb>0){
                if(bb%10==0){
                    a++;
                    b--;
                    break;
                }
                bb/=10;
            }
            if(aa==0 && bb==0)break;
            
        }
        return {a,b};
    }
};
```