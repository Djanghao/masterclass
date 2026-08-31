# Easy Iterative Binary exponentiation | Python | C++ | Golang

**Author:** codeart7
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/3703760/](https://leetcode.com/problems/count-good-numbers/solutions/3703760/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```python []
import math

class Solution:
    MOD = int(1e9+7)

    @staticmethod
    def binexp(a, b, MOD):
        a %= MOD
        res = 1

        while b > 0:
            if b & 1:
                res = res * a % MOD
            a = a * a % MOD
            b >>= 1

        return res

    def countGoodNumbers(self, n: int) -> int:
        odds = math.floor(n/2)
        evens = math.ceil(n/2)
        return int(self.binexp(5, evens, self.MOD) * self.binexp(4, odds, self.MOD) % self.MOD)
```

``` C++ []
class Solution {
public:
    static constexpr int MOD = 1e9 + 7;

    static long long binexp(long long a, long long b, int MOD) {
        a %= MOD;
        int res = 1;

        while (b > 0) {
            if (b & 1) {
                res = (res * 1LL * a) % MOD;
            }
            a = (a * 1LL * a) % MOD;
            b >>= 1;
        }

        return res;
    }

    int countGoodNumbers(long long n) {
        long long odds = floor(n / 2.0);
        long long evens = ceil(n / 2.0);
        return (binexp(5, evens, MOD) * 1LL * binexp(4, odds, MOD)) % MOD;
    }
};
```

``` Golang []
const MOD = int(1e9 + 7)

func binexp(a, b, MOD int) int {
	a %= MOD
	res := 1

	for b > 0 {
		if b&1 == 1 {
			res = (res * a) % MOD
		}
		a = (a * a) % MOD
		b >>= 1
	}

	return res
}

func countGoodNumbers(n int64) int {
	odds := int(n / 2)
	evens := int((n + 1) / 2)
	return (binexp(5, evens, MOD) * binexp(4, odds, MOD)) % MOD
}
```