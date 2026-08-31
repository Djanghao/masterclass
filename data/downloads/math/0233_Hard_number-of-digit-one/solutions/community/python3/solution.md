# Solution

**Author:** deleted_user
**Votes:** 436
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/2997009/](https://leetcode.com/problems/number-of-digit-one/solutions/2997009/)

---

```C++ []
class Solution { 
public:
    int countDigitOne(int n) {
    int ret = 0;
      for(long long int i = 1; i <= n; i*= (long long int)10){
         int a = n / i;
         int b = n % i;
         int x = a % 10;
         if(x ==1){
            ret += (a / 10) * i + (b + 1);
         }
         else if(x == 0){
            ret += (a / 10) * i;
         } else {
            ret += (a / 10 + 1) *i;
         }
      }
      return ret;
    }
};
```

```Python3 []
class Solution:
    def countDigitOne(self, n: int) -> int:
        def count(add,n_digit):
            c = 0
            for d in range(0,n_digit+1):
                c += (d+add)*math.comb(n_digit,d)*9**(n_digit-d)
            return c
        res = 0
        n_list = [int(x) for x in str(n)]
        count_1 = 0
        for i in range(len(n_list)-1):
            if n_list[i] == 1:
                res += count(count_1,len(n_list)-i-1)
                count_1 += 1
            elif n_list[i] > 1:
                leading = n_list[i]-1
                res += count(count_1,len(n_list)-i-1)*leading+count(count_1+1,len(n_list)-i-1)
        res += count_1*(n_list[-1]+1)
        if n_list[-1] >= 1:
            res += 1
        return res
```

```Java []
class Solution {
  public int countDigitOne(int n) {
    int ans = 0;
    for (long pow10 = 1; pow10 <= n; pow10 *= 10) {
      final long divisor = pow10 * 10;
      final int quotient = (int) (n / divisor);
      final int remainder = (int) (n % divisor);
      if (quotient > 0)
        ans += quotient * pow10;
      if (remainder >= pow10)
        ans += Math.min(remainder - pow10 + 1, pow10);
    }
    return ans;
  }
}
```
