# 0ms O(n) and O(log(n)) 4x4 Matrix solutions

**Author:** Martician
**Votes:** 9
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4222453/](https://leetcode.com/problems/knight-dialer/solutions/4222453/)

---

# Approach
We can think of cells and jumps as vertices and edges in a directed graph. Visualizing this graph we notice that some vertices share common properties:
```
#0 {0} -> jumps to {#3 or #3}
#1 {1, 3, 7, 9} -> jumps to {#2 or #3}
#2 {2, 8} -> jumps to {#1 or #1}
#3 {4, 6} -> jumps to {#0 or #1 or #1}
#4 {5} -> can't jump
```
We handle ```#4``` as an edge case when ```n == 1``` and just consider the other groupings.

# O(n) solution
At step ```i: 0<=i<n``` of the algorithm we would calculate the number of ways we can have a number from a specific group after jumping ```i``` times: ```f(i) = [#0, #1, #2, #3] at step i```. We notice that```f(x)``` is a recurrence:
```
f(x) = [f(x-1)[3],
        (f(x-1)[2] + f(x-1)[3]) * 2,
        f(x-1)[1],
        f(x-1)[0] * 2 + f(x-1)[1]]

// At step 0 we haven't jumped yet, so we have:
f(0) = [1, 4, 2, 2]
```
Using the recurrence we obtain ```f(n-1)``` by doing a bottom-up build from ```f(0)```:
```
impl Solution {
    pub fn knight_dialer(n: i32) -> i32 {
        if n == 1 {
            return 10;
        }

        let MOD = 1_000_000_007;
        ((1..n).fold([1, 4, 2, 2], |v, _| {
            [
                v[3],
                ((v[2] + v[3]) << 1) % MOD,
                v[1],
                ((v[0] << 1) + v[1]) % MOD
            ]
        }).iter().sum::<u32>() % MOD) as i32
    }
}
```

# O(log(n)) solution
If you are not familiar with the concept of matrix exponentiation I suggest you take a look at this article: https://leetcodethehardway.com/tutorials/math/matrix-exponentiation

In the $$O(n)$$ solution we applied an operation to a vector ```n``` times. We can think of this operation as multiplying the vector by a matrix. So we obtain the solution doing $$(((V*M)*M)*M)...= A*M^n$$ because multiplying matrices is an associative operation. This is good news since anything can be raised to the power of ```n``` in logarithmic time. This is best demonstrated by an example:
$$n = 11 = 1011 (binary) = 2^0 + 2^1 + 2^3$$
$$=> x^{11} = x^1 * x^2 * x^8$$
But $$x^{2n} = x^n * x^n$$ so we just need to calculate powers of two and multiply those corresponding to set bits in ```n```'s bit representation. Here is the pseudocode to do that:
```
x, n
m = 2
while n != 0:
    if n % 2 == 1:
        // i-th bit is set so we multiply the result by 2.pow(i) = m 
        x *= m
    m *= m
    n /= 2
```
My logarithmic solution is better than all I have seen so far since it utilizes the forementioned observation that some graph nodes share common properties hence we work with 4x4 matrices and multiplicatoin takes only 64 iterations:
```
const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn knight_dialer(n: i32) -> i32 {
        if n == 1 {
            return 10;
        }

        let mut M = [
            [0, 0, 0, 2],
            [0, 0, 1, 1],
            [0, 2, 0, 0],
            [1, 2, 0, 0],
        ];

        let mut rez = [
            [1, 0, 0, 0],
            [0, 4, 0, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 2]
        ];

        let mut n = n - 1;
        while n != 0 {
            if n & 1 != 0 {
                rez = Self::matrix_mul(&rez, &M)
            }
            M = Self::matrix_mul(&M, &M);
            n >>= 1;
        }

        (rez.iter().flatten().sum::<i64>() % MOD) as i32
    }

    fn matrix_mul(A: &[[i64; 4]; 4], B: &[[i64; 4]; 4]) -> [[i64; 4]; 4] {
        let mut C = [[0; 4]; 4];
        for i in 0..4 {
            for j in 0..4 {
                for k in 0..4 {
                    C[i][j] = (C[i][j] + A[i][k] * B[k][j]) % MOD;
                }
            }
        }

        C
    }
}
```