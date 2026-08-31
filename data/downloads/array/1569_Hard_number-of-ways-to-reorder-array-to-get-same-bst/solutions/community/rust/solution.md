# Rust | “i dont like trees” faster-then-editorial approach

**Author:** tifv
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643832/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643832/)

---

# Intuition
The answer will be the product for all nodes of $\\binom{k+m}{m}$ where $k$ and $m$ are sizes of left and right subtree of the node, respectively.

We want to compute the sizes of subtrees somehow. The easiest way would be to either build the tree directly or somehow iterate through it via function recursion.

But we are not going to do this for two reasons. First, we don't like trees. Second, this will take worst-case quadratic time (we are talking `[1, 2, 3, ..., 1000]` case here).

(As evident from the editorial, a quadratic time solution will work. But we can to better than this.)

# Approach
Instead we can just reverse the permutation and notice the answer immediately. For any value $i$ in the reversed permutation, if we locate values $j$ and $k$ that are less than $i$ and are closest to $i$ from right and left respectively, i.e.
$[\u2026, j, \\underbrace{\u2026}_{\	ext{values}\u2265i}, i, \\underbrace{\u2026}_{\	ext{values}\u2265i}, k, \u2026]$
then the values between $j$ and $i$ are the indices (in the original array) of values in the left subtree of $i$, and the values between $i$ and $k$ are the indices of values in the right subtree.

Therefore we only need to reverse the permutation (which is essentially sorting the original array) and then have a pass though it noting for each value $i$ the distances to the closest values that are less than $i$ (this will need a stack of previous smaller values).

After that only the problem of computing the binomial coefficients remains. Unlike editorial, which uses a quadratic solution by precomputing Pascal's triangle, we will use $\\binom{k+m}{m} = \\frac{(k+m)!}{k! \\cdot m!}$ formula, and only precompute the factorials. In fact, since factorials are constants, we can precompute them compile-time (up to $999!$) using Rust's const expressions.

# Complexity
- Time complexity: $O(n \\log(n))$, where $n = nums.\\mathrm{length}$.

- Space complexity: $O(n)$.

LeetCode shows `4 ms` and `2.3 MB`.

# Code
```
/// Standard \u201Cgive the answer modulo 10\u2079\xA0+\xA07\u201D thing
mod modulo {

use std::{ops::{Add, Sub, Mul, Div, AddAssign, MulAssign}, iter::Sum};

#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub struct I32Mod(i32);

fn ext_gcd(a: i32, b: i32) -> (i32, i32, i32) {
    let (mut a, mut b) = (a, b);
    let (mut ma, mut na, mut mb, mut nb) = (1_i32, 0_i32, 0_i32, 1_i32);
    assert!(a > 0 && b > 0);
    while b > 0 {
        let (k, r) = (a / b, a % b);
        let (mr, nr) = (
            ma - k * mb,
            na - k * nb,
        );
        a = b;
        ma = mb; na = nb;
        b = r;
        mb = mr; nb = nr;
    }
    return (a, ma, na);
}

impl I32Mod {
    pub const MOD: i32 = 10_i32.pow(9) + 7;

    #[inline]
    pub fn inverse(self) -> Self {
        assert!(self.0 != 0, "only nonzero elements are inversible");
        let (d, _, n) = ext_gcd(Self::MOD, self.0);
        assert!(d == 1, "element should be inversible");
        return n.into()
    }

    pub const fn const_from(value: i32) -> Self {
        Self((value % Self::MOD + Self::MOD) % Self::MOD)
    }

    pub const fn const_mul(self, other: I32Mod) -> I32Mod {
        Self((
            (self.0 as i64 * other.0 as i64) % (Self::MOD as i64)
        ) as i32)
    }

}

impl From<i32> for I32Mod {
    #[inline]
    fn from(value: i32) -> Self {
        Self((value % Self::MOD + Self::MOD) % Self::MOD)
    }
}

impl From<I32Mod> for i32 {
    #[inline]
    fn from(value: I32Mod) -> i32 {
        value.0
    }
}

impl Add<I32Mod> for I32Mod {
    type Output = I32Mod;
    #[inline]
    fn add(self, other: I32Mod) -> I32Mod {
        Self((self.0 + other.0) % Self::MOD)
    }
}

impl Sub<I32Mod> for I32Mod {
    type Output = I32Mod;
    #[inline]
    fn sub(self, other: I32Mod) -> I32Mod {
        Self((self.0 - other.0 + Self::MOD) % Self::MOD)
    }
}

impl Mul<I32Mod> for I32Mod {
    type Output = I32Mod;
    #[inline]
    fn mul(self, other: I32Mod) -> I32Mod {
        Self((
            (self.0 as i64 * other.0 as i64) % (Self::MOD as i64)
        ) as i32)
    }
}

impl Div<I32Mod> for I32Mod {
    type Output = I32Mod;
    // #[inline]
    fn div(self, rhs: I32Mod) -> Self::Output {
        self * rhs.inverse()
    }
}

impl AddAssign<I32Mod> for I32Mod {
    #[inline]
    fn add_assign(&mut self, other: I32Mod) {
        *self = *self + other;
    }
}

impl MulAssign<I32Mod> for I32Mod {
    #[inline]
    fn mul_assign(&mut self, other: I32Mod) {
        *self = *self * other;
    }
}

} // mod modulo

use modulo::I32Mod;

const MAX_N: usize = 1000;

const factorials: [I32Mod; MAX_N] = { // compile-time precompute
    let mut result: [I32Mod; MAX_N] = [I32Mod::const_from(0); MAX_N];
    result[0] = I32Mod::const_from(1);
    let mut i = 1;
    while i < MAX_N {
        result[i] = result[i-1].const_mul(I32Mod::const_from(i as i32));
        i += 1;
    }
    result
};

impl Solution {
    pub fn num_of_ways(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        assert!(n <= MAX_N);
        let inv_nums = { // permutation inverse
            let mut inv_nums = (0..(n as i32)).collect::<Vec<_>>();
            inv_nums.sort_unstable_by_key(|&i| nums[i as usize]);
            inv_nums.push(-1); // add guard
            inv_nums
        };
        let margins = {
            let mut margins = Vec::<(i32,i32)>::with_capacity(n + 1);
            let mut stack = Vec::with_capacity(20);
            for (j, i) in inv_nums.into_iter().enumerate() {
                let j = j as i32;
                // clear the stack from values that are larger than us
                // (guard will wipe the stack on last iteration)
                loop { match stack.last() {
                    Some(&(j1, i1)) if i1 > i => {
                        margins[j1 as usize].1 = j - j1 - 1;
                        stack.pop();
                    },
                    _ => break,
                } }
                margins.push((
                    match stack.last() {
                        Some(&(j1, _)) => j - j1 - 1,
                        None => j,
                    },
                    -1, // must get overwritten later
                ));
                stack.push((j, i));
            }
            margins.pop(); // remove guard
            margins
        };
        let mut result_frac = (I32Mod::from(1), I32Mod::from(1));
        for (left, right) in margins {
            result_frac.0 *= factorials[(left + right) as usize];
            result_frac.1 *= factorials[left as usize];
            result_frac.1 *= factorials[right as usize];
        }
        return (result_frac.0 / result_frac.1 - 1.into()).into();
    }
}
```

P.S. It's a joke. I like trees. Just not in this problem.