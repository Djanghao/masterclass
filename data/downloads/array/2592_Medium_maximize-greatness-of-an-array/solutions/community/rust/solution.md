# Idea: Construct max-greatness array for (sorted) input `nums` by left-shifting (4ms, Rust)

**Author:** Dummi26
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4805724/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4805724/)

---

# How to construct a max-greatness array?

For simplicity, assume the input (`nums`) is sorted and contains no equal elements.
The max-greatness array here would be `nums` with each element moved to the left once.
For all indices `0 <= i < len - 1`, this guarantees `perm[i] = nums[i+1] > nums[i]`, since `nums` is sorted and contains no equal elements.
This gives us a greatness of `len - 1`.
Example:
```
nums = [1, 2, 3, 4]
perm = [2, 3, 4, 1]
greatness = 3 = len - 1
```

Now consider a sorted `nums` where any element shows up at most `n` times, such as
```
nums = [1, 2, 2, 3]
```
Instead of left-shiftung nums by `1`, we have to shift by `n`:
```
nums = [1, 2, 2, 3, 4, 5] // n = 2
perm = [2, 3, 4, 5, 1, 2]
greatness = 4 = len - n
```

This strategy works for all sorted `nums`.
To apply it to unsorted `nums`, just sort `nums`, apply the strategy, and then change the order of `perm` by doing the reverse of what sorting `nums` did:
```
nums   = [1, 3, 2]
sorted = [1, 2, 3]
perm1  = [2, 3, 1]
perm2  = [2, 1, 3]
// perm1's 3 is at the same position as sorted's 2, so
// perm2's 3 must be at the same position as nums's 2.
```

With this, we get `greatness = len - n` where `n` is how often any element can appears in `nums`.

Figuring out `n` is relatively simple:

# Code
```
impl Solution {
    pub fn maximize_greatness(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        if nums.is_empty() {
            return 0;
        }
        let mut in_a_row = 1;
        let mut max = 1;
        let mut elem = nums[0];
        let len = nums.len();
        for n in nums.into_iter().skip(1) {
            if n == elem {
                in_a_row += 1;
            } else {
                elem = n;
                if in_a_row > max {
                    max = in_a_row;
                }
                in_a_row = 1;
            }
        }
        (len - max.max(in_a_row)) as _
    }
}
```

Because of the `nums.sort()`, this is $O(n \\log n)$, but I guess it could become $O(n)$ using a `HashMap` :)