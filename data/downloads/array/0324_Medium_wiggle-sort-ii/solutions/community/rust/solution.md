# Rust | guaranteed O(n) time, O(1) extra memory (including finding the median)

**Author:** tifv
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/3921819/](https://leetcode.com/problems/wiggle-sort-ii/solutions/3921819/)

---

You can see from other solutions that the main blocker to the guaranteed $O(n)$ time complexity solution is finding the median.

# Approach
We will have three passes over the array. After each pass, we will detect whether the array is already wiggle-sorted, and stop if this is the case.

*Pass 1.* `wiggle_forward` procedure will traverse the array from start to end.

*Lemma 1.* Upon completion of `wiggle_forward`, the array will be wiggle-sorted except possibly for several identical elements at the end.

*Hint of proof.* Algorithm is linear, so one can prove it by induction by looking at the code. Note the invariants mentioned there.

*Pass 2.* `wiggle_backward` procedure will traverse the array from end to start. Similarly, upon completion the array will be wiggle-sorted except possibly for several identical elements at the front.

*Lemma 2.* These identical elements, if any, will be equal to the median element $m$, i.e. such element that there are at least $\\lceil n/2 \\rceil$ elements less than or equal to $m$ and at least $\\lfloor n/2 \\rfloor$ elements greater than or equal to $m$.

*Hint of proof.* Procedure will start with several identical elements $a$ at the end of the array (otherwise, the whole algorithm can exit after the first step). If at the end of any cycle `j == i` is true, then `nums[i+1..]` is wiggle-sorted by invariant, and `nums[..j]` is unchanged after the first pass and therefore also wiggle-sorted; after that, no operations will be performed, and the result will be wiggle-sorted. Otherwise, at any point `nums[j..i]` will be non-empty; one can observe that at all points it must contain elements equal to $a$. In that case one with careful examination of algorithm can prove that the resulting array will contain elements that are less than or equal to $a$ on even positions and elements that are greater than or equal to $a$ on odd positions; this is sufficient to say that $a$ is the median.

*Pass 3.* `wiggle_pivot` will rearrange all elements in such a way that all values less than $m$ will have even indices towards the end of the array, and all values greater than $m$ will have odd indices towards the start of the array.

This will provide the solution, if there is any.

# Complexity
- Time complexity: $O(n)$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: extra $O(1)$.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::Ordering::{Less, Equal, Greater};

impl Solution {
    pub fn wiggle_sort(nums: &mut Vec<i32>) {
        if Self::wiggle_forward(&mut nums[..]) {
            return;
        }
        if Self::wiggle_backward(&mut nums[..]) {
            return;
        }
        let pivot = nums[0];
        if Self::wiggle_pivot(&mut nums[..], pivot) {
            return;
        }
        panic!("not wiggle-sortable");
    }
    fn wiggle_forward(nums: &mut [i32]) -> bool {
        let mut i = 0;
        let mut j = 0;
        while j < nums.len() {
            // INVARIANTS:
            // (0) 0 <= i <= j <= nums.len, i < nums.len
            // (1) nums[..i+1] is wiggle-sorted
            // (2) nums[i..j] are all identical
            // (3) nums[j..] are unchanged since the start of the loop
            if j <= i {
                j = i + 1;
                continue;
            }
            match (i % 2 == 0, i32::cmp(&nums[j], &nums[i])) {
                (true, Greater) | (false, Less) => {
                    if j <= i + 1 {
                        i += 1;
                    } else {
                        nums.swap(j, i + 1);
                        i += 2;
                        j += 1;
                    }
                },
                (true, Less) | (false, Greater) => {
                    nums.swap(j, i);
                    i += 1;
                    j += 1;
                },
                (_, Equal) => j += 1,
            }
        }
        return i >= nums.len() - 1;
    }
    fn wiggle_backward(nums: &mut [i32]) -> bool {
        let mut i = nums.len();
        let mut j = nums.len();
        while j > 0 {
            // INVARIANTS HERE:
            // (0) 0 <= j <= i <= nums.len and 0 < i
            // (1) nums[i-1..] is wiggle-sorted
            // (2) nums[j..i] are all identical
            // (3) nums[..j] are unchanged since the start of the loop
            if j >= i {
                j = i - 1;
                continue;
            }
            match (i % 2 == 0, i32::cmp(&nums[j-1], &nums[i-1])) {
                (true, Less) | (false, Greater) => {
                    if j >= i - 1 {
                        i -= 1;
                    } else {
                        nums.swap(j - 1, i - 2);
                        i -= 2;
                        j -= 1;
                    }
                },
                (true, Greater) | (false, Less) => {
                    nums.swap(j - 1, i - 1);
                    i -= 1;
                    j -= 1;
                },
                (_, Equal) => j -= 1,
            }
        }
        return i <= 1;
    }
    fn wiggle_pivot(nums: &mut [i32], pivot: i32) -> bool {
        let n = nums.len();
        let m = (n + 1) / 2;
        let index = move |i: usize| if i < m {
            2 * (m - i - 1)
        } else {
            2 * (n - i) - 1
        };
        let mut min_i = 0;
        let mut max_i = n;
        let mut i = 0;
        while i < max_i {
            match nums[index(i)].cmp(&pivot) {
                Less => {
                    nums.swap(index(i), index(min_i));
                    i += 1;
                    min_i += 1;
                },
                Equal => {
                    i += 1;
                },
                Greater => {
                    nums.swap(index(i), index(max_i - 1));
                    max_i -= 1;
                },
            }
        }
        return min_i <= m && max_i >= m;
    }
}
```