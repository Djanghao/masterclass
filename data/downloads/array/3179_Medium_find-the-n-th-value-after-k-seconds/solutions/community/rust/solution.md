# Rust | O(log(n)) time, O(1) space | 0 ms, 2.1 MB | Pascal's Triangle + LUT

**Author:** arkelley77
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5287925/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5287925/)

---

The goal of this post is to walk you through my process coming up with my solution to this problem, so we'll take a few wrong turns and dead ends along the way. If you want to skip to the code, it's at the end, but I highly recommend at least skimming my explanation, especially section 3.

### Take 1: Naive - O(n*k) time, O(n) space
I feel like I have to mention this one, because it's the obvious approach.
- Start out with an array of `n` ones
- `k` times:
	- For each element `x` in the array, after the first element:
		- let `p` be the previous element in the array
		- `x` by `p`

This solution works correctly

### Take 2: nCr - O(n) time, O(1) space
I would not have figured this out without the help of [this discussion post](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/discuss/5282015/Python-3-oror-1-line-Pascal's-Triangle-oror-TS%3A-36-ms-16-MB), so I'd like to first make sure I give credit where credit is due. 
TL;DR: The output values all fall diagonally on Pascal's triangle. Specifically, `value_after_k_seconds(n, k)` represents the value in the `n-1`-th place on the `n+k-1`-th row.
I'm not going to explain why here, or prove it, so please check out the linked post if you don't understand this.

Mathematically, values which fall on Pascal's triangle ar defined by the combination function, `nCr`, where `n` and `r` are zero-indexed and represent the row and column, respectiely.
`nCr` is a simple function defined as `n! / (r! * (n-r)!)`, but in order to define it, we'll need to define the factorial function. Let's go with the simplest, O(n) version for now:
```
fn factorial(n: i32) -> i32 {
	// O(n) time, O(1) space
    (2..=n).into_iter().fold(1, |fact, i| fact * i)
}

fn nCr(n: i32, r: i32) -> i32 {
    factorial(n) / (factorial(r) * factorial(n - r))
}

impl Solution {
    pub fn value_after_k_seconds(n: i32, k: i32) -> i32 {
	     nCr((n + k - 1), (n - 1))
    }
}
```
Unfortunately, this solution has a major problem: overflow. Actually, you may have noticed I didn't account for it in take 1 either. We're supposed to give our answer mod 1,000,000,007, 1000! simply refuses to fit into a 64-bit integer, and I'd rather avoid `BigInt` classes if possible, so we really only have one possible fix:

###  Take 3:  Modular arithmetic - O(n) time, O(log(n)) space
Let's stop doing our math like normal people and start doing it like mathematicians!
One quick thing before we get started: I'm not writing `1,000,000,007` in every equation & function, so let's add a constant to the beginning of our program:
```
// Rust version:
const M: usize = 1_000_000_007;

// C++ version:
constexpr size_t M = 1'000'000'007;
```
From now on, I'm going to simply use `M`.

The first helpful bit of info we can use in our program is this: `(a * b) = ((a mod M) * (b mod M)) (mod M)`. In other words, instead of multiplying `a` and `b`, which may overflow, we can multiply `a mod M` and `b mod M`, resulting in the same product `mod M`.
For example, if I want to know the last digit (`mod 10`) of `1,574 * 13,265`, I only have to multiply the last digits (`4 * 5 = 20 = 0 (mod 10)`) to come up with the right answer `0` (Use a calculator if you don't believe me!).
In the context of our program, this means that we can compute the factorials `mod M`, preventing overflow.

However, if we stop there, we'll fail the test cases, because we haven't accounted for division. `nCr` performs a single division, and for this, we need a new rule.
Unfortunately, `(a / b) % M != (a % M) / (b % M)`, so we can't use the same trick we used for multiplication. We'll need to use the [modular multiplicative inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) instead.
Using [Fermat's little theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem), we find that `b^(-1) = b^(M - 2) (mod M)`, as long as `M` is prime, which it is in this case.
We'll need to define a function to find `b^(M - 2) mod M`, since taking a number to a power `mod M` isn't exactly part of the standard library. For this, we can use [exponentiation by squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring).

Here's the code for take 3:
```
const M: usize = 1_000_000_007;

fn power_mod_M(mut x: usize, mut y: usize) -> usize {
	// O(log(n)) time, O(log(n)) space
    if y == 0 {
	    1
	} else if y % 2 != 0 {
	    (x * power_mod_M((x * x) % M, y / 2)) % M
	} else {
		power_mod_M((x * x) % M, y / 2)
	}
}

fn mod_mult_inv(n: usize) -> usize {
    power_mod_M(n, M - 2)
}

fn factorial_mod_M(n: usize) -> usize {
	// O(n) time, O(1) space
    (2..=n).into_iter().fold(1, |fact, i| (fact * i) % M)
}

fn nCr_mod_M(n: usize, r: usize) -> usize {
    (factorial_mod_M(n) * mod_mult_inv((factorial_mod_M(r) * factorial_mod_M(n - r)) % M)) % M
}

impl Solution {
    pub fn value_after_k_seconds(n: i32, k: i32) -> i32 {
	     nCr_mod_M((n + k - 1) as usize, (n - 1) as usize) as i32
    }
}
```

### Take 4: Lookup table - O(log(n)) time, O(log(n)) space
Since `n` and `k` are each `<= 1000`, the largest factorial we'll ever have to calculate is `1999!`. We can store a lookup table for all 2,000 factorials we could ever need in the compiled binary using `const`, reducing `factorial` from O(n) to O(1):
```
const M: usize = 1_000_000_007;

fn power_mod_M(mut x: usize, mut y: usize) -> usize {
	// O(log(n)) time, O(log(n)) space
    if y == 0 {
	    1
	} else if y % 2 != 0 {
	    (x * power_mod_M((x * x) % M, y / 2)) % M
	} else {
		power_mod_M((x * x) % M, y / 2)
	}
}

fn mod_mult_inv(n: usize) -> usize {
    power_mod_M(n, M - 2)
}

const fn gen_fact_lut_mod_M() -> [usize; 2000] {
    let mut lut = [0; 2000];
	let mut n = 0;
	let mut n_fact = 1;
	while n < 2000 {
	    lut[n] = n_fact;
		n += 1;
		n_fact = (n_fact * n) % M;
	}
	lut
}
const FACT_MOD_M: [usize; 2000] = gen_fact_lut_mod_M();

fn nCr_mod_M(n: usize, r: usize) -> usize {
    (FACT_MOD_M[n] * mod_mult_inv((FACT_MOD_M[r] * FACT_MOD_M[n - r]) % M)) % M
}

impl Solution {
    pub fn value_after_k_seconds(n: i32, k: i32) -> i32 {
	     nCr_mod_M((n + k - 1) as usize, (n - 1) as usize) as i32
    }
}
```

### Take 5: Iterative algorithm - O(log(n)) time, O(1) space
Let's replace `power_mod_M`'s recursive approach with an iterative one to cut down on space. This also takes it down from 2ms to 0ms. Incidentally, this is also the final version.
```
const M: usize = 1_000_000_007;

fn power_mod_M(mut x: usize, mut y: usize) -> usize {
	// O(log(n)) time, O(1) space
	let mut p = 1;
    while y > 0 {
        if y % 2 != 0 {
            p = (p * x) % M;
        }
        x = (x * x) % M;
        y /= 2;
    }
    p
}

fn mod_mult_inv(n: usize) -> usize {
    power_mod_M(n, M - 2)
}

const fn gen_fact_lut_mod_M() -> [usize; 2000] {
    let mut lut = [0; 2000];
	let mut n = 0;
	let mut n_fact = 1;
	while n < 2000 {
	    lut[n] = n_fact;
		n += 1;
		n_fact = (n_fact * n) % M;
	}
	lut
}
const FACT_MOD_M: [usize; 2000] = gen_fact_lut_mod_M();

fn nCr_mod_M(n: usize, r: usize) -> usize {
    (FACT_MOD_M[n] * mod_mult_inv((FACT_MOD_M[r] * FACT_MOD_M[n - r]) % M)) % M
}

impl Solution {
    pub fn value_after_k_seconds(n: i32, k: i32) -> i32 {
	     nCr_mod_M((n + k - 1) as usize, (n - 1) as usize) as i32
    }
}
```