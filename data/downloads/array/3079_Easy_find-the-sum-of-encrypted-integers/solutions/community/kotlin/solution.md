# a few solutions

**Author:** claytonjwong
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884146/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884146/)

---

# Game Plan

For each value `x` of the input array `A`, let `best` be the maximum digit of `x` of length `n`.  Return the accumulated total `t` of `best` digits.

# 1-liners: Just for fun \uD83E\uDD2A

*Kotlin*
```
class Solution {
    var sumOfEncryptedInt = { A: IntArray -> A.map{ "$it".toCharArray().max()!!.toString().repeat("$it".length).toInt() }.sum() }
}
```

*Javascript*
```
let sumOfEncryptedInt = A => _.sum(A.map(x => Number(Math.max(...`${x}`.split('')).toString().repeat(`${x}`.length))));
```

*Python3*
```
class Solution:
    sumOfEncryptedInt = lambda self, A: sum(int(max(c for c in str(x)) * len(str(x))) for x in A)
```

# Code

*Kotlin*
```
class Solution {
    fun sumOfEncryptedInt(A: IntArray): Int {
        var t = 0
        for (x in A) {
            var (best, n) = Pair("$x".toCharArray().max()!!, "$x".length)
            t += "$best".repeat(n).toInt()
        }
        return t
    }
}
```

*Javascript*
```
let sumOfEncryptedInt = (A, t = 0) => {
    for (let x of A) {
        let [best, n] = [Math.max(...`${x}`.split('').map(Number)), `${x}`.length];
        t += Number(`${best}`.repeat(n));
    }
    return t;
};
```

*Python3*
```
class Solution:
    def sumOfEncryptedInt(self, A: List[int], t = 0) -> int:
        for x in A:
            best, n = max(c for c in str(x)), len(str(x))
            t += int(best * n)
        return t
```

*Rust*
```
use std::cmp::max;
impl Solution {
    pub fn sum_of_encrypted_int(A: Vec<i32>) -> i32 {
        let mut t = 0;
        for x in A {
            let (mut x, mut best, mut n) = (x, 0, 0);
            while 0 < x {
                best = max(best, x % 10); x /= 10; n += 1;
            }
            for i in 0..n {
                t += best * (i32::pow(10, i));
            }
        }
        t
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    int sumOfEncryptedInt(VI& A, int t = 0) {
        for (auto x: A) {
            auto [best, n] = make_pair(0, 0);
            while (x)
                best = max(best, x % 10), x /= 10, ++n;
            for (auto i{ 0 }; i < n; ++i)
                t += best * pow(10, i);
        }
        return t;
    }
};
```