# Math

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/4337782/](https://leetcode.com/problems/reach-a-number/solutions/4337782/)

---

# Intuition
Let's denote $S_k = 1 + 2 + 3 + ... + k = k * (k + 1) / 2$.
$S_k = |target|$, if $k = (-1 + sqrt(1 + 8 * |target|)) / 2$

Let's consider $target = 8$, then
$S_4 - target = 10 - 8 = 2$ or $S_4 - 2 = -2 + 1 + 2 + 3 + 4 = -1 + 2 + 3 + 4 = 8$.

We can draw the following conclusions:
1) We need always take $S_k >= |target|$
2) If $(S_k - |target|)$ % $2 = 0$, we can always find number in the range from $1$ to $k$ inclusive which is taken with negative sign in $S_k$ 
3) $k$ is the minimum number of moves to achieve $|target|$

Let's consider $target = 7$, then
$S_4 - 7 = 10 - 7 = 3$, and $(S_4 - 7)$ % $2 = 1$, so we can't find number in the range from $1$ to $4$ which is taken with negative sign in $S_4$. So in this case we need to take $5$ (see the conclusion #1 above). 
$S_5 - 7 = 15 - 7 = 8$, and $(S_5 - 7)$ % $2 = 0$ or $S_5 - 8 = -2 * 4 + 1 + 2 + 3 + 4 + 5 = 1 + 2 + 3 - 4 + 5 = 7$.

Let's consider $target = 5$, then
$S_3 - 5 = 6 - 5 = 1$, and $(S_3 - 5)$ % $2 = 1$, but $(S_4 - 5)$ % $2 = 1$, so we need to take $5$. 
$S_5 - 5 = 15 - 5 = 10$, and $(S_5 - 5)$ % $2 = 0$ or $S_5 - 10 = -2 * 5 + 1 + 2 + 3 + 4 + 5 = 1 + 2 + 3 + 4 - 5 = 5$.


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sum of the numbers
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(1)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn reach_number(target: i32) -> i32 {
        let target = target.abs();
        let t = target as f64;

        let k = ((-1. + (1. + 8. * t).sqrt()) / 2.).ceil() as i32;

        let s = (k * (k + 1)) / 2;

        if (s - target) % 2 == 0 {
            k
        } else if k % 2 == 0 {
            k + 1
        } else {
            k + 2
        }        
    }    
}
```