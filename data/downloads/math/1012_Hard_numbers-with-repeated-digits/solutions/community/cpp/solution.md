# Solution

**Author:** deleted_user
**Votes:** 442
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/3544075/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/3544075/)

---

```C++ []
class Solution {
public:
    int numDupDigitsAtMostN(int n) {
        vector<int> digits{};
        int temp = n + 1;
        while (temp > 0) {
            digits.emplace_back(temp % 10);
            temp /= 10;
        }
        int result = 0;
        int len = digits.size();
        int curr = 9;
        for (int i = 0; i < len - 1; i++) {
            result += curr;
            curr *= 9 - i;
        }
        curr /= 9;
        vector<bool> seen(10, false);
        for (int i = 0; i < len; i++) {
            int d = digits[len - i - 1];

            for (int j = i == 0 ? 1 : 0; j < d; j++) if (!seen[j]) result += curr;
            curr /= 9 - i;

            if (seen[d]) break;
            seen[d] = true;
        }
        return n - result;
    }
};
```

```Python3 []
from math import perm

class Solution:
    def numDupDigitsAtMostN(self, n: int) -> int:
        digits = list(map(int, str(n + 1)))
        nl = len(digits)
        res = sum(9 * perm(9, i) for i in range(nl - 1))
        s = set()
        for i, x in enumerate(digits):
            for y in range(i == 0, x):
                if y not in s:
                    res += perm(9 - i, nl - i - 1)
            if x in s:
                break
            s.add(x)
        return n - res
```

```Java []
class Solution {
    public int numDupDigitsAtMostN(int N) {
        ArrayList<Integer> L = new ArrayList<Integer>();
        for (int x = N + 1; x > 0; x /= 10)
            L.add(0, x % 10);

        int res = 0, n = L.size();
        for (int i = 1; i < n; ++i)
            res += 9 * A(9, i - 1);

        HashSet<Integer> seen = new HashSet<>();
        for (int i = 0; i < n; ++i) {
            for (int j = i > 0 ? 0 : 1; j < L.get(i); ++j)
                if (!seen.contains(j))
                    res += A(9 - i, n - i - 1);
            if (seen.contains(L.get(i))) break;
            seen.add(L.get(i));
        }
        return N - res;
    }
    public int A(int m, int n) {
        return n == 0 ? 1 : A(m, n - 1) * (m - n + 1);
    }
}
```