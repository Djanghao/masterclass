# Short simple solutions in C++, java & python

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/3855023/](https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/3855023/)

---

# Intuition
We have excatly 2 ^ n n-digit lucky numbers. Given k, we can subtract 2 ^ 0, 2 ^ 1, 2 ^ 2,....to decide the number of digits of the kth lucky number.
Then just use bit operation, if we want the m-th n-digit number, we just change (m - 1) into a n-digiht binary number and each digit 0 maps to a 4 and digit 1 maps to a 7.

# Complexity
- Time complexity:
O(logk)
- Space complexity:
O(1) if we don't count the output space otherwise it's O(logk) too.

# Code
C++

```
class Solution {
public:
    string kthLuckyNumber(int k) {
        int n = 1;
        for (; k > (1 << n); k -= 1 << n++)
        ;
        string r(n, ' ');
        for (--k; --n >= 0; r[n] = k & 1 ? '7' : '4', k >>= 1)
        ;
        return r;
    }
};
```

Java
```
public class Solution {
    public String kthLuckyNumber(int k) {
        int n = 1;
        for (; k > (1 << n); k -= 1 << n++)
        ;
        char[] t = new char[n];
        for (--k; --n >= 0; t[n] = (k & 1) > 0 ? '7' : '4', k >>= 1)
        ;
        return String.valueOf(t);
    }
}
```

python
```
class Solution:
    def kthLuckyNumber(self, k: int) -> str:
        n = 1
        while k > (1 << n):
            k -= 1 << n
            n += 1
        return bin(k - 1)[2:].zfill(n).replace('0', '4').replace('1', '7')
```