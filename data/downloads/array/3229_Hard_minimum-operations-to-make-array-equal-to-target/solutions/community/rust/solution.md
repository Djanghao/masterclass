# stack O(n)

**Author:** asherlau
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5639072/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5639072/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
get difference array of nums and target. 
we now can calculate how to make them all 0, in an effective way.
the most efficient way is to calculate all the difference between each element and its previous element. 
for example [2, 3] if we want to make them all zero, 
then 2 steps is needed. the delta(3, 2) + initial value 2 = 3.
in this example we know, we want to make each of the element the same height, so calculate the difference is helpful. 
calculate the sum of the delta is easy by using the monotonic stack.
now the initial value is tricky, if the initial value is negative, and the final value is positive like [-4, -3, 2, 3], that the steps is 4 + 3, because the initial value 3, is not correct, there is a negative starting point, and it should be in the answer too.
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
    pub fn minimum_operations(nums: Vec<i32>, target: Vec<i32>) -> i64 {
        let mut diff_arr: Vec<_> = nums.into_iter().zip(target.into_iter()).map(|(a, b)| a - b).collect();
        let mut res = 0;
        let mut stack = Vec::new();
        println!("{:?}", diff_arr);
        stack.push(0);
        diff_arr.push(0);
        let n = diff_arr.len();
        for i in 0..n{
            if !stack.is_empty() && stack[stack.len() - 1] > diff_arr[i]{
                res += (stack[stack.len() - 1] - diff_arr[i])as i64;
            }
            while !stack.is_empty() && stack[stack.len() - 1] >= diff_arr[i]{
                stack.pop();
            }
            stack.push(diff_arr[i]);
        }
        println!("{:?}", stack);
        return res;
    } 
}
```