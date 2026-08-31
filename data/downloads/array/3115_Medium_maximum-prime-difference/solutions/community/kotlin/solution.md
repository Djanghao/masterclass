# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5108124/](https://leetcode.com/problems/maximum-prime-difference/solutions/5108124/)

---

# Game Plan

Use the Sieve of Eratosthenes to create a `prime` lookup table for the values `1..100` inclusive.

Let `ok` be a filter of all index `i` such that `A[i]` is `prime`.

Then return the last value of `ok` minus the first value of `ok`.

# Code

*Kotlin*
```
class Solution {
    fun maximumPrimeDifference(A: IntArray, N: Int = 101): Int {
        var prime = BooleanArray(N){ true }; prime[1] = false
        for (hop in 2 until N)
            for (x in 2 * hop until N step hop)
                prime[x] = false
        var ok = A.withIndex().map{ (i, _) -> if (prime[A[i]]) i else -1 }.filter{ 0 <= it }
        return ok.last() - ok.first()
    }
}
```

*Javascript*
```
let maximumPrimeDifference = (A, N = 101) => {
    let prime = Array(N).fill(true); prime[1] = false;
    for (let step = 2; step < N; ++step)
        for (let x = 2 * step; x < N; x += step)
            prime[x] = false;
    let ok = A.map((_, i) => prime[A[i]] ? i : -1).filter(i => 0 <= i);
    return ok[ok.length - 1] - ok[0];
};
```

*Python3*
```
class Solution:
    def maximumPrimeDifference(self, A: List[int], N = 101) -> int:
        prime = [True] * N; prime[1] = False
        for step in range(2, N):
            for x in range(2 * step, N, step):
                prime[x] = False
        ok = [i for i in range(len(A)) if prime[A[i]]]
        return ok[-1] - ok[0]
```

*Rust*
```
type VI = Vec<i32>;
impl Solution {
    pub fn maximum_prime_difference(A: VI) -> i32 {
        let N = 101;
        let mut prime = vec![true; N]; prime[1] = false;
        for step in 2..N {
            for x in (2 * step..N).step_by(step) {
                prime[x] = false;
            }
        }
        let ok = A.iter().enumerate().map(|(i, _)| if prime[A[i] as usize] { i as i32 } else { -1 }).filter(|i| 0 <= *i).collect::<VI>();
        *ok.last().unwrap() - *ok.first().unwrap()
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    int maximumPrimeDifference(VI& A, int N = 101, VI ok = {}) {
        VI prime(N, 1); prime[1] = 0;
        for (auto step{ 2 }; step < N; ++step)
            for (auto x{ 2 * step }; x < N; x += step)
                prime[x] = 0;
        for (auto i{ 0 }; i < A.size(); ++i)
            if (prime[A[i]])
                ok.push_back(i);
        return ok.back() - ok.front();
    }
};
```

# "Breadcrumbs" for how we arrived "here"
```
# game plan:

# sieve of erotosthensis for isprime precalcs up to 100

# then filter primes, then return diff b/w left-most and right-most index


class Solution:
    def maximumPrimeDifference(self, A: List[int], N = 100) -> int:
        prime = [True] * (N + 1)
        prime[1] = False
        for step in range(2, floor(sqrt(N) + 1)):
            for x in range(2 * step, N + 1, step):
                prime[x] = False
        ok = [i for i in range(len(A)) if prime[A[i]]]
        return ok[-1] - ok[0]
```