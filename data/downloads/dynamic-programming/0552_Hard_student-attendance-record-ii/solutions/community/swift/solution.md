# ✅ Easy to understand Swift implementations

**Author:** lebon
**Votes:** 2
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/5208612/](https://leetcode.com/problems/student-attendance-record-ii/solutions/5208612/)

---

# 1st Approach: Dynamic Programming
## Intuition
The problem asks to count the number of valid attendance records of length `n` such that the records do not contain more than one `'A'` (**Absent**) and no more than two consecutive `'L'`s (**Late**). The problem can be approached using **dynamic programming**.

## Approach
1. **Define DP Arrays**: Use three arrays `A`, `P`, and `L` to store the count of valid sequences of length i that end with `'A'`, `'P'`, and `'L'`, respectively.
2. **Initialize Base Cases**: Set the initial values for sequences of length `1`, `2`, and `3`.
3. **Iterate and Fill DP Arrays**: For each length from `1` to `n`, **compute the count of valid sequences ending** in `'A'`, `'P'`, and `'L'` based on the values from previous lengths.
4. **Return Result**: Sum the counts from the last entries of `A`, `P`, and `L` arrays to get the total number of valid sequences of length n.

## Complexity
- **Time complexity**: The algorithm runs in $$O(n)$$ time since it iterates through the lengths from `1` to `n`.
- **Space complexity**: The space complexity is $$O(n)$$ due to the three arrays `A`, `P`, and `L` used to store the DP states.



![Screenshot 2024-05-26 at 03.34.37.png](./images/0.png)

## Code
``` swift []
class Solution {
    func checkRecord(_ n: Int) -> Int {
        // Define the modulus value to prevent overflow
        let modulus = 1000000007
        
        // Arrays to store the count of valid sequences ending with A, P, and L
        var A = [Int](repeating: 0, count: max(3, n))
        var P = [Int](repeating: 0, count: max(3, n))
        var L = [Int](repeating: 0, count: max(3, n))
        
        // Initial values for sequences of length 1, 2, and 3
        P[0] = 1
        L[0] = 1
        L[1] = 3
        A[0] = 1
        A[1] = 2
        A[2] = 4
        
        // If n is 1, return the sum of initial values
        if n == 1 {
            return 3
        }
        
        // Iterate through each length from 1 to n-1
        for i in 1..<n {
            A[i - 1] %= modulus
            P[i - 1] %= modulus
            L[i - 1] %= modulus
            
            // Calculate the number of valid sequences ending with 'P' of length i+1
            P[i] = ((A[i - 1] + P[i - 1]) % modulus + L[i - 1]) % modulus
            
            // Calculate the number of valid sequences ending with 'L' of length i+1
            if i > 1 {
                L[i] = ((A[i - 1] + P[i - 1]) % modulus + (A[i - 2] + P[i - 2]) % modulus) % modulus
            }
            
            // Calculate the number of valid sequences ending with 'A' of length i+1
            if i > 2 {
                A[i] = ((A[i - 1] + A[i - 2]) % modulus + A[i - 3]) % modulus
            }
        }
        
        // Return the sum of valid sequences of length n ending with 'A', 'P', or 'L'
        return ((A[n - 1] % modulus + P[n - 1] % modulus) % modulus + L[n - 1] % modulus) % modulus
    }
}

```
This approach ensures that we _efficiently calculate the number of valid attendance records_ using **dynamic programming** and **memoization**.

# 2nd Approach: Matrix Exponentiation

## Intuition
Using **matrix exponentiation** provides an efficient way to compute the number of valid sequences. The transformation matrix captures the transitions between states, and raising this matrix to the power `n` simulates the progression of attendance records over `n` days.

## Approach
1. **Transformation Matrix**: The matrix `T` represents the transitions between states.
2. **Matrix Multiplication**: A helper function `multiplyMatrices` multiplies two matrices modulo $$10^9 + 7$$.
3. **Matrix Exponentiation**: A helper function `matrixExponentiation` recursively raises the matrix `T` to the power `n`.
4. **Result Calculation**: After exponentiating `T`, the sum of the first row of the resulting matrix gives the total count of valid sequences.

## Conplexity
- **Time complexity**: The time complexity is $$O(logn)$$ due to the matrix exponentiation.
- **Space complexity**: The space complexity is $$O(1)$$ for the matrix operations, with additional space for storing the matrices.

![Screenshot 2024-05-26 at 09.34.46.png](./images/1.png)



```swift []

class Solution {
    func checkRecord(_ n: Int) -> Int {
        // Define the modulus value to prevent overflow
        let modulus = 1_000_000_007 

        // Define the transformation matrix
        var T: [[Int]] = [
            [1, 1, 0, 1, 0, 0], // P, L, P, A, L, A -> P, P, L, P, L, P
            [1, 0, 1, 1, 0, 0], // L, P, L, A, L, A -> L, P, L, P, L, P
            [1, 0, 0, 1, 0, 0], // P, P, P, A, P, A -> P, P, P, P, P, P
            [0, 0, 0, 1, 1, 0], // A, P, L, A, L, A -> A, P, L, P, L, P
            [0, 0, 0, 1, 0, 1], // A, P, P, A, P, A -> A, P, P, P, P, P
            [0, 0, 0, 1, 0, 0]  // A, P, P, A, P, A -> A, P, P, P, P, P
        ]
        
        // Function to multiply two matrices with modulus
        func multiplyMatrices(_ A: [[Int]], _ B: [[Int]]) -> [[Int]] {
            var result = Array(repeating: Array(repeating: 0, count: A.count), count: A.count)
            for i in 0..<A.count {
                for j in 0..<A.count {
                    for k in 0..<A.count {
                        result[i][j] = (result[i][j] + A[i][k] * B[k][j]) % modulus
                    }
                }
            }
            return result
        }
        
        // Function to perform matrix exponentiation
        func matrixExponentiation(_ A: [[Int]], _ power: Int) -> [[Int]] {
            if power == 1 {
                return A
            }
            if power % 2 == 0 {
                let halfPower = matrixExponentiation(A, power / 2)
                return multiplyMatrices(halfPower, halfPower)
            } else {
                return multiplyMatrices(A, matrixExponentiation(A, power - 1))
            }
        }
        
        // Calculate the transformation matrix to the power of n
        let A = matrixExponentiation(T, n)
        
        // Sum the elements in the first row of the resulting matrix
        return A[0].reduce(0, { ($0 + $1) % modulus })
    }
}

```
This approach _efficiently computes the number of valid attendance records_ for a given length `n` using **matrix exponentiation**.