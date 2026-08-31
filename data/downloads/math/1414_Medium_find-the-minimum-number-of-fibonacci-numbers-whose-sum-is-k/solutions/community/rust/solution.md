# Binary search on a compile-time-generated list of Fibonacci numbers. Time: O(ans), space: O(1).

**Author:** JSorngard
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5994465/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5994465/)

---

![bild.png](./images/0.png)

# Intuition
If we generate all relevant Fibonacci numbers at compile time, we can then use a greedy algorithm and search through the list to find the next number smaller than or equal to k. This can be easily done with a binary search.

# Approach
It turns out that we only need 44 Fibonacci numbers for this task, since the 45th one is 1134903170, which is larger than 10^9. Thus we can generate them in a loop during compilation and store them in the binary.
At runtime we can use a binary search on the resulting list to find the largest Fibonacci number smaller than or equal to k, subtract it from k, and repeat until k becomes 0.

# Complexity
- Time complexity: O(final answer). The binary search is done on a list of constant size, and thus contributes a constant to the time complexity.

- Space complexity: O(1).

# Code
```rust []
const N: usize = 44;
// Generate all Fibonacci numbers smaller than 10^9 in a constant
// at compile time.
const FIBS: [i32; N] = {
    let mut fibs = [0; N];
    let mut curr = 1;
    let mut prev1 = 1;
    let mut prev2 = 0;
    let mut i = 0;
    while i < N {
        fibs[i] = curr;
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
        i += 1;
    }
    fibs
};

impl Solution {
    pub const fn find_min_fibonacci_numbers(mut k: i32) -> i32 {
        let mut count = 0;
        let mut l = N;
        while k > 0 {
            // Binary search for k.
            match Self::binary_search(FIBS.split_at(l).0, k) {
                // We found a number equal to k.
                // We know this is the only remaining number we need,
                // so we can just return the count after
                // subtracting it from k
                Ok(_) => return count + 1,
                // If such a number is not found the search
                // results in the location where k could be 
                // inserted while maintaining sorted order. 
                // We set l to the index of this
                // Fibonacci number so that we will skip
                // searching the part of the list with too large
                // numbers in the future.
                Err(i) => l = i,
            }
            // Subtract from k the largest Fibonacci number smaller
            // than k.
            k -= FIBS[l - 1];
            count += 1;
        }
        count
    }

    /// This is just the binary search from Rust's standard library,
    /// but specialized to slices and made into a
    /// constant function.
    /// You can replace the call to this function with
    /// FIBS.binary_search(&k) if you don't care about making
    /// `find_min_fibonacci_numbers` a constant function.
    const fn binary_search(slice: &[i32], target: i32) -> Result<usize, usize> {
        let mut size = slice.len();
        if size == 0 {
            return Err(0);
        }
        let mut base: usize = 0;
        while size > 1 {
            let half = size / 2;
            let mid = base + half;
            base = if slice[mid] > target { base } else { mid };
            size -= half;
        }
        if slice[base] == target {
            Ok(base)
        } else {
            let result = base + (slice[base] < target) as usize;
            Err(result)
        }
    }

}
```