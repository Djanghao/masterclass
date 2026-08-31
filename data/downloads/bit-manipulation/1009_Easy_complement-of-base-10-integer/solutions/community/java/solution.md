# Solution

**Author:** deleted_user
**Votes:** 464
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/3544067/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/3544067/)

---

```C++ []
class Solution {
 public:
  int bitwiseComplement(int N) {
    int mask = 1;

    while (mask < N)
      mask = (mask << 1) + 1;

    return mask ^ N;
  }
};
```

```Python3 []
class Solution:
    def bitwiseComplement(self, n: int) -> int:
        cnt=0
        ans=0
        if n==0:
            return 1
        while n>0:
            if n&1:
                cnt+=1
            else:
                ans =ans +(2**cnt)
                cnt+=1
            n=n>>1
        return ans
```

```Java []
class Solution {
    public int bitwiseComplement(int n) {
        if(n == 0) return 1;
        int res = 0;
        int fac = 1;
        
        while(n != 0){
            res += fac * (n % 2 == 0 ? 1 : 0);
            fac *= 2;
            n /= 2;
        }
        return res;
    }
}
```