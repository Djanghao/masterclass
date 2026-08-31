# [Rust] Simple single loop. | O(n)

**Author:** tmtappr
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313102/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313102/)

---

# Intuition
Questions like this usually have some mathematical trick or number theory concept they're implicitly asking the user to find and exploit.

In this case the condition for a *nice pair* is `a + rev(b) == rev(a) + b`. By subtracting `a` from both sides, and `b` from both sides, we can get:
`rev(a) - a == rev(b) - b`

The above equation is interesting because it implies that we can group numbers by applying only `rev(n) - n` to group them with other numbers that get the same result. That makes it possible to group all the numbers in linear time.

Calculating the number of combinations can be an intensive operation if you're applying the formula with factorial terms in it. But there's an easy way to get the number of combinations for the group sizes.

If we know the combinations of $$2$$ a group of $$n$$ items can form, or $$C(n,2)$$, we can easily get how many combinations of $$2$$ a group of $$n+1$$ items can form, or $$C(n+1,2)$$ with simple addition.

$$C(n+1,2) = C(n,2) + n$$

For instance, if we know a group of $$3$$ items can form $$3$$ pairs, then we can work out how many pairs $$4$$ items can form with $$3 + 3 = 6$$. To get how many pairs a group of $$5$$ items can form we use $$6 + 4 = 10$$. 

If $$C(n,2)=6$$ and $$ n=4$$ then $$C(n+1,2) = C(n,2)+n = 6+4 = 10$$.

Putting it simply, to keep a count of the number of combinations any given set contributes to the overall number of nice pairs, each time we update the count for a *key*, we take the current frequency of the key and add it to the overall total of nice pairs, then we increment the key by 1. Which is what this section of code does:

``` rust
    last    = freqs.entry(rev(num) - num).or_insert(0);
    n_nice += *last;
    n_nice %= MOD;
    *last  += 1;
```
We could accumulate the count of combinations for each key individually, then add them all together at the end to get the total number of *nice pairs*, but the above approach will yield the same result with less code.

# Approach
A `HashMap` is instantiated for use as a frequency map. For each number in `nums`, apply the formula for generating its key (`rev(n)-n`). Then look up that key in the frequency map. Take its current value and increment `n_nice` by it. Then increment the count for that specific key. Continue until all numbers are processed.

# Complexity
- Time complexity: $$O(n)$$ There's one primary loop that cycles through each number once.`rev()` also loops, but  has a constant upper bound of `9` cycles for every number processed.
- Space complexity: $$O(n)$$ Assuming the worst case where every number has a unique key, the hash map would require $$n$$ entries.

# Code
``` rust
use std::collections::HashMap;

const MOD: i32 = 10i32.pow(9) + 7;

impl Solution {
    pub fn count_nice_pairs(nums: Vec<i32>) -> i32 {
        let mut freqs  = HashMap::new();
        let mut n_nice = 0;
        let mut last;

        for num in nums {
            last    = freqs.entry(rev(num) - num).or_insert(0);
            n_nice += *last;
            n_nice %= MOD;
            *last  += 1;
        }
        n_nice
    }
}

fn rev(num: i32) -> i32 {
    let mut num = num;
    let mut out = 0;
    
    while num > 0 {
        out *= 10;
        out += num % 10;
        num /= 10;
    }
    out
}

```