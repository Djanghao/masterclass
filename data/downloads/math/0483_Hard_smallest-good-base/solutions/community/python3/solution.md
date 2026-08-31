# Solution

**Author:** deleted_user
**Votes:** 202
**Link:** [https://leetcode.com/problems/smallest-good-base/solutions/3004597/](https://leetcode.com/problems/smallest-good-base/solutions/3004597/)

---

```C++ []
class Solution {
 public:
  string smallestGoodBase(string n) {
    const long num = stol(n);

    for (int m = log2(num); m >= 2; --m) {
      const int k = pow(num, 1.0 / m);
      long sum = 1;
      long prod = 1;
      for (int i = 0; i < m; ++i) {
        prod *= k;
        sum += prod;
      }
      if (sum == num)
        return to_string(k);
    }

    return to_string(num - 1);
  }
};
```

```Python3 []
class Solution:
    def smallestGoodBase(self, n: str) -> str:
        n = int(n)
        for m in range(int(math.log(n, 2)), 1, -1):
            k = int(n ** m ** -1)
            if (k ** (m + 1) - 1)
                return str(k)
        return str(n - 1)
```

```Java []
class Solution {
    public String smallestGoodBase(String n) {
        long low = Long.valueOf(n);
        int high = (int) (Math.log(low + 1) / Math.log(2)) - 1;
        
        long result = low - 1;
        for (int m = high; m > 1; m--) {
            long k = (long) Math.pow(low, 1.0 / m);
            if (geometric(k, m) == low) return String.valueOf(k);
        }
        return String.valueOf(result);
    }

    private long geometric(long base, int m) {
        long result = 0;
        for (int i = 0; i <= m; i++) {
            result = 1 + result * base;
        }
        return result;
    }
}
```
