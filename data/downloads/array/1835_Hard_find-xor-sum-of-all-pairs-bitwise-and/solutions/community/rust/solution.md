# Rust // 16 ms O(n) // Bitwise operations + combinatorics with explanation

**Author:** cyclic
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/2969023/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/2969023/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The naive solution to this is to find all of the pairs of numbers in each array and take their AND, and then XOR all the pairs. However, this will take too long. We therefore need to take advantage of the properties of the XOR function, with a couple of key observations.

The first is that in this problem, each bit is independent. If we consider just the 1s place of each number and do the ANDs of all of them and XOR them, we will get a number with 0s in all places except the 1s place, which is either a 1 or 0. If we then consider the 2s places, we get another number, and the same holds for the 4s place, 8s place, and so on. Then summing all of these partial results will give us our final result, because each one represents one bit of the final result and no bit is represented twice.

The second observation is that when we take the XOR of a bunch of numbers on a single bit (for example, the 1s place), we only care about whether the number of 1s on that bit is even or odd. This is because two 1s in that place will cancel out under the XOR operation, whereas a single 1 will remain a 1.

We therefore want to do this bit-by-bit, reconstructing whether the final answer should have a 1 or a 0 in each position. We do this by finding whether the number of pairs (i, j) with i AND j having a 1 in that position is even or odd.

# Approach
<!-- Describe your approach to solving the problem. -->
As suggested before, what we do is iterate through the bit positions one by one, and determine whether it will be a 1 or a 0 in the final result. To do this for a position, we could iterate through all of the pairs and see which ones have a 1 in their AND, but that doesn't end up being any better than the naive solution.

Instead, notice that by the definition of AND, a pair of numbers (i, j) has a 1 in a given bit if and only if that bit is set to 1 in both i and j. This is where a tiny bit of combinatorics comes in. The number of pairs with 1s in that bit is then just the number of elements of arr1 with a 1 in this bit times the number of elements in arr2 with a 1 in this bit. We can then determine if this product is even or odd, which directly tells us if the bit is 1 or 0 in the final result.

To implement this, we iterate through the bits. For each bit, we check how many elements in arr1 have that bit set to 1 using an `&` operation, and we do the same for arr2. To do this, we simply take `j & (1 << k)` to check the `k`th bit, which will be 0 if the bit is not set in `j` and will be greater than 0 otherwise. Then checking if both totals are odd suffices, because the only way to get an odd product is if both numbers are odd. If they are both odd, then we add to the final result.

- Optimizations:
    - We are given that the greatest value of any number is $$10^9$$. This means we don't need to use the upper two bits of the numbers. This allows us to iterate from bits 0 to 29 rather than 0 to 31, saving two iterations.
    - Rather than recomputing the mask `1 << i` every time we need to use it, we just compute it once and store its value, saving a few operations at the cost of one number in memory.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is going to be $$O(m + n)$$, where the lengths of the two arrays are $$m$$ and $$n$$. We make a constant number of passes over each of the arrays.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The additional space, outside of the input arrays, is going to be $$O(1)$$. On each iteration of the loop we need two counter variables (the memory from which can be re-used), as well as a loop counter and an accumulator to hold the result. The additional memory is therefore constant.

# Code
```
impl Solution {
    pub fn get_xor_sum(arr1: Vec<i32>, arr2: Vec<i32>) -> i32 {
        let mut acc = 0;
        for i in 0..30 {
            let mask = 1 << i;
            let mut x = 0;
            for j in &arr1 {
                if j & mask != 0 {
                    x += 1;
                }
            }
            let mut y = 0;
            for j in &arr2 {
                if j & mask != 0 {
                    y += 1;
                }
            }
            if x % 2 == 1 && y % 2 == 1 {
                acc += mask;
            }
        }
        return acc;
    }
}
```