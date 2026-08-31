# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-factorization/solutions/3416463/](https://leetcode.com/problems/minimum-factorization/solutions/3416463/)

---

```C++ []
class Solution {
public:
    int smallestFactorization(int n) {
	if (n == 1) return 1;
	long long m = 0, l = 1;
        for (int i = 9; i >= 2;)
        if (n % i == 0)
        {
            m += i*l;
            l *= 10;
            n /= i;
            if (m > INT_MAX)
                return 0;
        }else
            i --;
    return n == 1 ? m : 0;
    }
};
```

```Python3 []
class Solution:
    def smallestFactorization(self, num: int) -> int:
        if num>=1073741824:
            return 0
        if num==1:
            return 1
        facs=[]
        prims=[5,7,8,9]
        lookup={5:0,7:0,8:0,9:0}
        for p in prims:
            while num%p==0:
                lookup[p]+=1
                num//=p
        prims2=6
        ct=0
        while num%prims2==0:
            ct+=1
            num//=prims2
        lookup[prims2]=ct
        prims2=4
        ct=0
        while num%prims2==0:
            ct+=1
            num//=prims2
        lookup[prims2]=ct
        prims2=3
        ct=0
        while num%prims2==0:
            ct+=1
            num//=prims2
        lookup[prims2]=ct
        prims2=2
        ct=0
        while num%prims2==0:
            ct+=1
            num//=prims2
        lookup[prims2]=ct
        if num>10:
            return 0
        lookup2={}
        for l in lookup:
            if lookup[l]>0:
                lookup2[l]=lookup[l]
        ll=list(lookup2)
        ll.sort()
        ret=0
        for l in ll:
            while lookup2[l]>0:
                ret+=l
                ret*=10
                lookup2[l]-=1
        if ret%10==0:
            ret=ret//10
        if ret>=1073741824:
            return 0
        return ret
```

```Java []
class Solution {
    public int smallestFactorization(int a) {
        if (a < 2)
            return a;
        long res = 0, mul = 1;
        for (int i = 9; i >= 2; i--) {
            while (a % i == 0) {
                a /= i;
                res = mul * i + res;
                mul *= 10;
            }
        }
        return a < 2 && res <= Integer.MAX_VALUE ? (int)res : 0;
    }
}
```
