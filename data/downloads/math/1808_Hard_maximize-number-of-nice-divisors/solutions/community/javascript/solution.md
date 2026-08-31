# javascript BigInt + pow mod 72ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1130822/](https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1130822/)

---

```
const MOD = BigInt(1e9 + 7);
const maxNiceDivisors = (pf) => {
    if (pf == 1) return 1;
    let bpf = BigInt(pf);
    let res;
    if (pf % 3 == 0) {
        res = powmod(3n, bpf / 3n, MOD);
    } else if (pf % 3 == 1) {
        res = powmod(3n, bpf / 3n - 1n, MOD) * 4n % MOD;
    } else {
        res = powmod(3n, bpf / 3n, MOD) * 2n % MOD;
    }
    return Number(res);
};

const powmod = (a, b, mod) => {
    let r = 1n;
    while (b > 0n) {
        if (b % 2n == 1) r = r * a % mod;
        b >>= 1n;
        a = a * a % mod;
    }
    return r;
};
```
java version: 0ms 100%
```
class Solution {
		private final int mod = 1000000007;
		public int maxNiceDivisors(int pf) {
			if(pf == 1) return 1;
			if (pf % 3 == 0) {
				return (int) powmod(3, pf/3, mod);
			} else if (pf % 3 == 1) {
				return (int) (powmod(3, pf/3-1, mod) * 4L % mod);
			} else {
				return (int) (powmod(3, pf/3, mod) * 2L % mod);
			}
		}

		public long powmod (long a, long b, long mod) {
		    long r = 1;
		    while (b > 0) {
			    if ((b & 1) == 1) r = r * a % mod;
			    b >>= 1;
			    a = a * a % mod;
		    }
		    return r;
	    }
	}
```
Similar question use pow mod https://atcoder.jp/contests/arc113/tasks/arc113_b