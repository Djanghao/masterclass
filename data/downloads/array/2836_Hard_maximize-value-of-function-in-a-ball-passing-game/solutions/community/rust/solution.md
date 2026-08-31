# Rust Solution (dynamic programming)

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3994424/](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3994424/)

---

# Approach
```
input: receiver = [1,1,1,2,3], k = 3
output: 10
```

The person who receives ball after `steps` passes

| steps | 0 | 1 | 2 | 3 | 4 |
| :---- | :--: | :--: | :--: | :--: | :--: |
| $1=2^0$ | 1  | 1  | 1 |  2 |  3 |
| $2=2^1$ | 1  | 1  | 1 |  1 |  2 |
| $4=2^2$ | 1  | 1  | 1 |  1 |  1 |

The total reward excluding starters (who initiates the passing) will be calculated as follows:

| steps | f(0) | f(1) | f(2) | f(3) | f(4) |
| :---- | :--: | :--: | :--: | :--: | :--: |
| $1=2^0$ | 1  | 1  | 1 |  2 |  3 |
| $2=2^1$ | 2  | 2  | 2 |  3 |  5 |
| $4=2^2$ | 4  | 4  | 5 |  5 |  7 |

The answer should be obtained as 

$$\\underbrace{\	ext{the first two pass}}_{5} + \\underbrace{\	ext{the last pass}}_{1} + \\underbrace{\	ext{the person id who start passing}}_{4} = 10$$

Let's assume that $k=9$, We can break it down into  $k=8+1$. Then, $f(k)=f(8)+f(1)$. We leverage dynamic programming to compute $f(2^i)$ Afterward, we look up the first table to determine who received the ball after 8 passes. From there, we can determine where the ball goes for another ONE pass.

# Complexity
- Time complexity:
    - `dp()`: at most $i < 33$ recursive calls, $O(1)$
    - `main`: for loop: $O(n)$ in processing `pos` and `val` and in obtaining max result

- Space complexity: $O(n\\log k)$

# Code
```rust []
impl Solution {
    /// - i64::ilog2(i64::pow(10, 10)) = 33, therefore k is small, 2^5
    /// - i64::ilog2(i64::pow(10, 5)) = 16, therefore n is big, 2^16
    pub fn get_max_function_value(receiver: Vec<i32>, k: i64) -> i64 {
        let m = (k as f64 + 1.).log2().ceil(); // 1024 = 2^10 => 10
        let im = m as usize;
        let n = receiver.len();
        let mut pos: Vec<Vec<usize>> = vec![vec![0; n]; im];
        let mut val: Vec<Vec<i64>> = vec![vec![0; n]; im];
        for i in 0..n {
            pos[0][i] = receiver[i] as usize;
            val[0][i] = receiver[i] as i64;
        }
        //  iterate through 1 2 4 8 16 ... ball bassings
        //      iterate through each position
        for i in 1..im {
            for j in 0..n {
                let half = pos[i-1][j];         // who to pass the ball to 
                pos[i][j] = pos[i-1][half];     // update position
                val[i][j] = val[i-1][half] + val[i-1][j]; // add value
            }
        }
        //  define a closure to calculate result starting at jth person
        //  and the aggregated value after passing 2^i times
        fn dp(i: i64, j: usize, pos: &Vec<Vec<usize>>, val: &Vec<Vec<i64>>, k: i64) -> i64 {
            if i == -1 { return 0; }
            if (k & (1 << i)) == 0 { // e.g., 9 = 1 + 8 should skip calc(2) and calc(4)
                return dp(i-1, j, pos, val, k)
            }
            return val[i as usize][j] + dp(i-1, pos[i as usize][j], pos, val, k);
        }
        
        let max_value = (0..n)
            .map(|i| dp(m as i64 -1, i, &pos, &val, k) + i as i64)
            .max()
            .unwrap_or(0);
        return max_value;
    }
}

```