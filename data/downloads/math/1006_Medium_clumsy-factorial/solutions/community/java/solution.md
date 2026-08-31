# Solution

**Author:** deleted_user
**Votes:** 448
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/3540720/](https://leetcode.com/problems/clumsy-factorial/solutions/3540720/)

---

```C++ []
class Solution {
 public:
  int clumsy(int N) {
    if (N == 1)
      return 1;
    if (N == 2)
      return 2;
    if (N == 3)
      return 6;
    if (N == 4)
      return 7;
    if (N % 4 == 1)
      return N + 2;
    if (N % 4 == 2)
      return N + 2;
    if (N % 4 == 3)
      return N - 1;
    return N + 1;
  }
};
```

```Python3 []
class Solution(object):
    def clumsy(self, n):
       if n == 1:
            return 1
       elif n == 2:
            return 2
       elif n == 3:
            return 6
       elif n == 4:
            return 7
       else:
            if n % 4 == 0:
                return n + 1
            elif n % 4 <= 2:
                return n + 2
            else:
                return n - 1
```

```Java []
class Solution {
    public int clumsy(int n) {
        int ans = 1;
        if(n <= 4){
            if(n <= 2) return n;
            else if(n == 3) return 6;
            else if(n == 4) return 7;
        } else {
            if(n%4 == 1 || n%4 == 2) ans = n+2;
            else if(n%4 == 3) ans = n-1;
            else ans = n+1;
        }
        return ans;
    }
}
```