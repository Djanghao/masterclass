# Fast pow | Approach and clear code

**Author:** TigProg
**Votes:** 5
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5974946/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5974946/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Let's see example 1:
> Input:
> s = "abcyy"
> t = 2
> nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]

First of all transform `s` to Counter:
`Counter("abcyy") = Counter({'a': 1, 'b': 1, 'c': 1, 'y': 2})`
and transform Counter to matrix `A`:
$A = (1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0)$.

Secondly transform `nums` to matrix `B` (pay attention to the last line):
$$(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0)$$
$$(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1)$$
$$(1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)$$.

And finally result is sum of elements in matrix $C = A \\cdot B^t$.

Fast pow:
$B^t = B$ if $t = 1$
$B^t = (B^2) ^ {t/2}$ if $t \\mod  2 == 0$
$B^t = B \\cdot (B^2) ^ {t/2}$ if $t \\mod  2 == 1$

# Complexity
- Time complexity: $$O(n + a^2 + \\log(t) \\cdot a^3) = O(n + \\log(t))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
  - recursion pow: $$O(a^2 + \\log(t) \\cdot a^2) = O(\\log(t))$$
  - iterative pow: $$O(a^2) = O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

where `a = 26`, `n = s.length <= 10^5`, `t <= 10^9`

# Code
```python3 []
# recursion pow

class Solution:
    def lengthAfterTransformations(self, s: str, t: int, nums: List[int]) -> int:
        alphabet = 26

        def construct_A(s):
            line = [0] * alphabet
            for char, cnt in Counter(s).items():
                index = ord(char) - 97
                line[index] = cnt
            return [line]

        def construct_B(nums):
            B = [[0] * alphabet for _ in range(alphabet)]
            for i, shift in enumerate(nums):
                for j in range(shift):
                    B[i][(i + 1 + j) % alphabet] = 1
            return B
        
        A = construct_A(s)
        B = construct_B(nums)
        modulo = 1_000_000_007

        def mult(A, B):
            n = len(A)
            m = len(B[0])
            l = len(A[0])

            C = [[0] * m for _ in range(n)]
            for i in range(n):
                for j in range(m):
                    C[i][j] = sum(
                        A[i][k] * B[k][j]
                        for k in range(l)
                    ) % modulo
            
            return C
        
        def pow(A, n):
            if n == 1:
                return A

            A_2 = mult(A, A)
            A_almost_n = pow(A_2, n // 2)
            if n % 2 == 0:
                return A_almost_n
            return mult(A, A_almost_n)
        
        C = mult(A, pow(B, t))
        return sum(
            sum(line) % modulo
            for line in C
        ) % modulo
```
``` python3 []
# iterative pow function with constant memory

class Solution:
    def lengthAfterTransformations(self, s: str, t: int, nums: List[int]) -> int:
        alphabet = 26

        def construct_A(s):
            line = [0] * alphabet
            for char, cnt in Counter(s).items():
                index = ord(char) - 97
                line[index] = cnt
            return [line]

        def construct_B(nums):
            B = [[0] * alphabet for _ in range(alphabet)]
            for i, shift in enumerate(nums):
                for j in range(shift):
                    B[i][(i + 1 + j) % alphabet] = 1
            return B
        
        A = construct_A(s)
        B = construct_B(nums)
        modulo = 1_000_000_007

        def mult(A, B):
            n = len(A)
            m = len(B[0])
            l = len(A[0])

            C = [[0] * m for _ in range(n)]
            for i in range(n):
                for j in range(m):
                    C[i][j] = sum(
                        A[i][k] * B[k][j]
                        for k in range(l)
                    ) % modulo
            
            return C
        
        # help function
        def get_one_matrix(size):
            result = [[0] * size for _ in range(size)]
            for i in range(size):
                result[i][i] = 1
            return result
        
        # instead of pow function
        def pow_constant_memory(A, n):
            if n == 1:
                return A
            
            result = get_one_matrix(alphabet)
            for i in range(alphabet):
                result[i][i] = 1
            a_square = A
            while n:
                if n % 2 == 1:
                    result = mult(result, a_square)
                n //= 2
                a_square = mult(a_square, a_square)
            return result
        
        C = mult(A, pow_constant_memory(B, t))
        return sum(
            sum(line) % modulo
            for line in C
        ) % modulo
```
