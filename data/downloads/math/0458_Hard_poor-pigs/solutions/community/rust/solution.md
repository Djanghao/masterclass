# Rust - Understanding Recursion - Beats 100%

**Author:** jgorton
**Votes:** 2
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/4224857/](https://leetcode.com/problems/poor-pigs/solutions/4224857/)

---

# Intuition

This problem asks us to return the minimum number of pigs necessary to determine which bucket contains the poison. However, sometimes it is helpful to turn the problem around, and ask a different question that will allow us to answer the first question more easily: 

What is the maximum number of buckets that can be tested by a certain number of pigs within a certain number of rounds of testing?

Some key insights:
1. If the `minutes_to_test` / `minutes_to_die` = 1, then we can only perform one round of testing.
2. If we can only perform one test, the maximum number of buckets that can be searched by `n` pigs is $2^n$. For example, one pig can search two buckets with only a single test, and two pigs can search four buckets (as explained in Example 1 of the problem statement).
3. If we can only perform one test, the *combination* of pigs that drink out of a given bucket should **always** be unique. To understand this third point, imagine we have three pigs and some number of buckets. If all three pigs drink out of the same two buckets, what if all three die? You don't know which of those two buckets contain the poison, and you don't have any more pigs, or time to test, either. You can allow all three pigs to drink out of at maximum *one bucket* - that way, if all three die, you know which bucket killed them. This would be like assigning that bucket a binary value of '111', where each bit of the binary string refers to one of your three pigs, and a 1 signifies that they did drink out of the bucket. A 0 means that the pig did not drink out of the bucket.

But with this information, how can we determine the optimal way to use two pigs if there is more than one round of testing?

This is where the recursion comes in. In order to figure out the best way to use two pigs in two rounds of testing, first consider two pigs in only one round of testing, and then consider how many pigs you'll have left for the second round of testing. After the first round of testing, there were four scenarios: either both pigs died, or pig A died, or pig B died, or neither died. If both pigs died, the poison has been found in that bucket (+ 1). If neither pig died, then we have two pigs still alive, and only one round of testing left to go - this is the same value we just calculated, so we know the pigs can search through four buckets in a single round (+ 4). Otherwise, only one pig died - either pig A or pig B. That means for our last round of testing, we will have one pig available to us. We already calculated that too, and we know that one pig can find the poison from two buckets in a single testing round (either it dies or it doesn't). That means that in the first round, we can feed bucket 1 to both pigs, and we can feed bucket 2 and bucket 3 to pig A, and bucket 4 and bucket 5 to pig B. That's because if one of them dies, we can still use the other pig to figure out which bucket killed our first pig. If neither pig dies from the first five buckets in round one, we can use them both in round two for bucket 6, 7, 8, and 9 using the technique from example 2. 

Therefore, with two pigs and two rounds of testing, our formula looks like this:

$\	ext{2 Pigs, 2 Rds} = 1 * (\	ext{0 Pigs, 1 Rd}) + 2 * (\	ext{1 Pig, 1 Rd}) + 1 * (\	ext{2 Pigs, 1 Rd}) = 9$

The coefficients correspond to rows in Pascal's triangle, which also correspond to combinatorial coefficients, i.e. $(a+b)(a+b) = 1*a^2 + 2*ab + 1*b^2$ so we can save additional runtime by calculating those values efficiently for larger combinations of pigs and buckets.

# Approach

If there is only one bucket, there's no need to use any pig at all - that bucket definitely contains the poison. Otherwise, continue on.

First, calculate how many rounds we have to work with. Secondly, calculate how many buckets a single pig could solve within that many rounds; if it is greater than our `buckets` target value, we can return that number of pigs, otherwise we should add a pig and check again.

The number of buckets that `n` pigs can solve for within `m` rounds can be found by summing up all of the scenarios possible by round `m - 1` - the first element of Pascal's coefficients corresponds to the number of ways that you will be left with `n` pigs after one round, meaning all survive: ${n \\choose n} = 1$ ... The number of ways that you can be left with `n - 1` pigs after one round is the same as the number of ways that a single one of your `n` pigs dies: ${n \\choose n - 1} = {n \\choose 1} = n$ ... This will correspond to the second value of Pascal's coefficients. Continue this for all remaining combinations of surviving pigs after a single round, and then multiply that factor by the number of ways to use the remaining pigs over the course of the following rounds.

# Complexity

The `pascal_coefficients` function, as well as the `max_buckets` function, are sometimes called with the same arguments multiple times, and would benefit from caching.

- Time complexity: $$O(n^2*\	ext{log}_2(m))$$ where $m$ is `buckets` and $n$ is the number of rounds of testing, which equals `minutes_to_test` / `minutes_to_die` 

- Space complexity: $$O(n^2*\	ext{log}_2(m))$$ where $n$ is the number of rounds of testing, which equals `minutes_to_test` / `minutes_to_die` and $m$ is `buckets` 

# Code
```
use std::convert::TryInto;

impl Solution {    
    pub fn poor_pigs(buckets: i32, minutes_to_die: i32, minutes_to_test: i32) -> i32 {
        if buckets == 1 { return 0; }

        let rounds: i32 = (minutes_to_test / minutes_to_die);
        let mut num_pigs: i32 = 1;

        while buckets > Self::max_buckets(num_pigs, rounds) { num_pigs += 1; }

        return num_pigs;
    }

    fn max_buckets(pigs: i32, rounds: i32) -> i32 {
        if pigs == 0 { return 1; }
        if pigs == 1 { return rounds + 1; }
        if rounds == 1 { let base: i32 = 2; return base.pow(pigs as u32); }

        let coefficients = Self::pascal_coefficients(pigs);
        let mut buckets: i32 = 0;
        for (index, element) in coefficients.iter().enumerate() {
            buckets += element * Self::max_buckets(index as i32, rounds - 1);
        }

        return buckets;
    }

    fn pascal_coefficients(row: i32) -> Vec<i32> {
        let mut coeffs = vec![1i32; (row + 1).try_into().unwrap()];

        for i in 1..row + 1 {
            coeffs[i as usize] = coeffs[(i - 1) as usize] * (row - i + 1) / i; 
        }

        return coeffs;
    }
}
```