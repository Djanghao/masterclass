# 3-liner C++ to build string backward + 1-liner recursive solutions

**Author:** zzg_zzm
**Votes:** 16
**Link:** [https://leetcode.com/problems/base-7/solutions/98385/](https://leetcode.com/problems/base-7/solutions/98385/)

---

**Iterative Version:** Note that the input `n` is guaranteed to be in range of [-1e7, 1e7] by the problem, so `abs(n)` won't overflow since `n` cannot be `INT_MIN`.
```
    string convertToBase7(int n) {
      int x = abs(n); string res;
      do res = to_string(x%7)+res; while(x/=7);
      return (n>=0? "" : "-") + res;
    }
```
**Recursive Version:**
```
    string convertToBase7(int n) {
      return n>=0? n>=7? convertToBase7(n/7)+to_string(n%7) : to_string(n) : '-'+convertToBase7(-n);
    }
```