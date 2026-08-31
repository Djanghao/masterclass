# Min function calls

**Author:** MattRHall
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/4696701/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/4696701/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {

        let mut v = nums.clone(); // clone vector as the test passes through an immutable vector
        
        let mut operations = 0; // counter for number of operations

        // into_iter takes ownership consumes original iterator.
        // filter allows us to check operation. &x means we compare value without taking ownership.
        v = v.into_iter().filter(|&x| x != 0).collect();

        // carry on looping whilst v has elements
        while v.len() != 0 {
            // iter_mut returns iterator over mutable references. x represents a mutable reference.
            // to access or modify value of element pointed to by reference we need to dereference with *
            v.iter_mut().for_each(|x| *x = Solution::sub_one(*x, &mut operations));
            // apply filter one more time
            v = v.into_iter().filter(|&x| x != 0).collect();
            // check isn't all zeros.
            if v.len() == 0 {
                break;
            }
            // apply divide by 2 operations
            v.iter_mut().for_each(|x| *x /= 2);
            operations += 1;
        }

        return operations;
    }

    // if value = 0, return 0. else if odd take off one and increment operations.
    pub fn sub_one(mut num: i32, operations: &mut i32) -> i32 {
        if num%2 != 0 {
            *operations += 1;
            num -= 1;
        }
        return num;
    }

}

```