# 20 lines 100% runtime two pointers iterators solution

**Author:** astadnik
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492221/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492221/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort the array
Iterate over the array. For each element $n[i_{start}]$, assume it to be a start of a subsequence (the smallest element). For each of those, find the corresponding largest element, such that $n[i_{start}] + n[i_{end}] \\leq target$. For each subsequence, calclate the possible number of subsequences of any size, which contain $n[i_{start}]$.


# Approach
<!-- Describe your approach to solving the problem. -->
Also, it turns out to be important to precalculate the powers of 2, because whatever type I used, it always overflowed before I could use the modulo operator.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
uuse std::iter::successors;

impl Solution {
    pub fn num_subseq(mut nums: Vec<i32>, target: i32) -> i32 {
        nums.sort_unstable();
        let m = 10_i32.pow(9) + 7;
        let powers: Vec<_> = successors(Some(1), |prev| Some((prev * 2) % m))
            .take(nums.len() + 1)
            .collect();

        nums.iter()
            .enumerate()
            .scan(nums.len(), |i_end, (i, &n)| {
                while *i_end > i && n + nums[*i_end - 1] > target {
                    *i_end -= 1;
                }
                (*i_end > i).then(|| powers[*i_end - i - 1])
            })
            .reduce(|sum, s| (sum + s) % m)
            .unwrap_or(0)
    }
}


```