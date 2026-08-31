# [Rust] Priority Queue

**Author:** tmtappr
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/5329834/](https://leetcode.com/problems/super-ugly-number/solutions/5329834/)

---

# Intuition
The problem comes down to finding a way to generate multiples of `primes` in ascending order, and taking the $n^{th}$ item.

# Approach
A min priority queue `pqueue` is used to organize the primes in such a way that the prime at the front of the queue will have the next *ugly number* of the sequence in its `prime.mult` (multiple) field. This is achieved by making the last multiple produced by the prime its primary key in the queue: `prime.mult`.

Each prime number needs to be multiplied by each *ugly number*, one after the other in order, so the `Prime` struct has the field `ugly_i` that indexes in to `uglies`. When a prime is up again to produce another *ugly number*, it's multiplied by `uglies[prime.ugly_i]`, then this new number is assigned back to its `mult` field and its `ugly_i` index is incremented for the next time the prime comes up.

After all the *ugly numbers* up to `n` have been produced, the last item in `uglies` is returned.

The code is significantly faster by explicitly implementing the comparison traits on `Prime` instead of using the `#[derive(..)]` macros.

# Complexity
- Time complexity: $O(n \\cdot \\log n)$ `pqueue` is popped from somewhere near `n` times. When uglies collide, or *bump* if you will \uD83D\uDE44, the number of iterations increase by 1 each time.
- Space complexity: $O(n)$ `uglies` will have the full set of ugly numbers.

# Code
``` rust []
// Check next tab for faster implementation.

use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn nth_super_ugly_number(n: i32, primes: Vec<i32>) -> i32 {
        let mut uglies = Vec::with_capacity(n as usize);
        let mut primeq = primes.into_iter()
                               .map(|p| Reverse(Prime::new(p)))
                               .collect::<BinaryHeap<_>>();

        uglies.push(1);

        while uglies.len() < n as usize {
            // Get the currently smallest multiple of a prime.
            let mut prime = primeq.pop().expect("All multiples overflowed.").0;

            // If not already in the ugly list, add it.
            if uglies.last() != Some(&prime.mult) {
                uglies.push(prime.mult);
            }
            // Advance the prime's next ugly number to multiply it with.
            prime.ugly_i += 1;

            // Multiply the prime with its indexed ugly and put back in the
            // heap if it doesn't overflow.
            if let Some(mult) = prime.prime.checked_mul(uglies[prime.ugly_i]) {
                prime.mult = mult;
                primeq.push(Reverse(prime));
            }
        }
        uglies.last().copied().unwrap()
    }
}

#[derive(Eq, PartialEq, Ord, PartialOrd)]
struct Prime {
    mult  : i32,
    prime : i32,
    ugly_i: usize,
}
impl Prime {
    fn new(prime: i32) -> Self {
        Self { mult: prime, prime, ugly_i: 0 }
    }
}
```
``` rust [Rust (FASTER)]
// Code runs much faster by directly implementing Ord, et al.

use std::collections::BinaryHeap;
use std::cmp::{Ordering, Reverse};

impl Solution {
    pub fn nth_super_ugly_number(n: i32, primes: Vec<i32>) -> i32 {
        let mut uglies = Vec::with_capacity(n as usize);
        let mut primeq = primes.into_iter()
                               .map(|p| Reverse(Prime::new(p)))
                               .collect::<BinaryHeap<_>>();

        uglies.push(1);

        while uglies.len() < n as usize {
            let mut prime = primeq.pop().expect("All multiples overflowed.").0;

            if uglies.last() != Some(&prime.mult) {
                uglies.push(prime.mult);
            }
            prime.ugly_i += 1;

            if let Some(mult) = prime.prime.checked_mul(uglies[prime.ugly_i]) {
                prime.mult = mult;
                primeq.push(Reverse(prime));
            }
        }
        uglies.last().copied().unwrap()
    }
}

struct Prime {
    mult  : i32,
    prime : i32,
    ugly_i: usize,
}
impl Prime {
    fn new(prime: i32) -> Self {
        Self { mult: prime, prime, ugly_i: 0 }
    }
}

impl PartialEq for Prime {
    fn eq(&self, other: &Self) -> bool {
        self.mult == other.mult
    }
}
impl Eq for Prime { }

impl Ord for Prime {
    fn cmp(&self, other: &Self) -> Ordering {
        self.mult.cmp(&other.mult)
    }
}
impl PartialOrd for Prime {
    fn partial_cmp(&self, other: &Self) ->Option<Ordering> {
        Some(self.cmp(other))
    }
}
```