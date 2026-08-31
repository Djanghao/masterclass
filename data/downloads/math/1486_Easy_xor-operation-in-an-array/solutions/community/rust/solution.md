# Beats 100% with one line in Rust

**Author:** reimao
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/3289461/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/3289461/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
* Need to iterate for a given number of times and apply an operation over an accumulator in each iteration
* We just want the result, so no need to store intermediate values in a collection
# Approach
<!-- Describe your approach to solving the problem. -->
* Iterators are typically faster than for loops, so I wanted to go with that functional approach
* Need to have a collection with n elements with values from 1 to n (sequentially), so let's use a range. (starting from 1 because the method I'm going to use allows me to set an initial value for the accumulator)
* Then I want to apply an operation on each of these elements and storing the result in an accumulator
* Finally I want to return the accumulator
* To do this I can use the fold() method

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$0(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn xor_operation(n: i32, start: i32) -> i32 {
        (1..n).into_iter().fold(start, |result, i| result ^ start + 2 * i)
    }
}
```