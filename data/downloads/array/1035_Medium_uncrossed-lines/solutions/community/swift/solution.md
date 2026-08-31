# [Swift] - Dynamic Programming. LCS Pattern. From brute-force to O(n).

**Author:** slowsteady
**Votes:** 2
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/653120/](https://leetcode.com/problems/uncrossed-lines/solutions/653120/)

---

**Basic brute-force solution is based on recursion approach.**
*Time complexity: O(2^(m + n)).*
*Space complexity: O(m + n).*

```
class Solution {
    
    func maxUncrossedLines(_ A: [Int], _ B: [Int]) -> Int {
        return findMax(A, B, 0, 0)
    }
    
    private func findMax(_ A: [Int], _ B: [Int], _ i: Int, _ j: Int) -> Int {
        if A.count == i || B.count == j { return 0 }
        
        if A[i] == B[j] {
            return 1 + findMax(A, B, i + 1, j + 1)
        }
        
        let l1 = findMax(A, B, i + 1, j)
        let l2 = findMax(A, B, i, j + 1)
        
        return max(l1, l2)
    }
}
```

**Dynamic Programming solution. Based on brute-force solution but using Top-down approach with memoization.**
*Time complexity: O(2^(m + n)).*
*Space complexity: O(m + n).*
```
class Solution {
    
    func maxUncrossedLines(_ A: [Int], _ B: [Int]) -> Int {
        var dp = [[Int]](repeating: [Int](repeating: 0, count: B.count), count: A.count)
        return findMax(A, B, &dp, 0, 0)
    }
    
    private func findMax(_ A: [Int], _ B: [Int], _ dp: inout [[Int]], _ i: Int, _ j: Int) -> Int {
        if A.count == i || B.count == j { return 0 }
        
        if dp[i][j] == 0 {
		
            if A[i] == B[j] {
                return 1 + findMax(A, B, &dp, i + 1, j + 1)
            }
			
            let l1 = findMax(A, B, &dp, i + 1, j)
            let l2 = findMax(A, B, &dp, i, j + 1)
			
            dp[i][j] = max(l1, l2)
        }
        
        return dp[i][j]
    }
}
```
**Dynamic Programming solution. Based on bottom-up approach.**
*Time and space complexity: O(m * n).*
```
class Solution {

    func maxUncrossedLines(_ A: [Int], _ B: [Int]) -> Int {
        let n1 = A.count
        let n2 = B.count
        
        var dp = [[Int]](repeating: [Int](repeating: 0, count: n2 + 1), count: n1 + 1)
        
        for i in 1 ... n1 {
            for j in 1 ... n2 {
                if A[i - 1] == B[j - 1] {
                    dp[i][j] = 1 + dp[i - 1][j - 1]
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                }
            }
        }
		
        return dp[n1][n2]
    }
    
}
```
**Dynamic Programming solution. Optimized bottom-up approach .**
*Time complexity: O(m * n).*
*Space complexity: O(n).*
```
class Solution {
    
    func maxUncrossedLines(_ A: [Int], _ B: [Int]) -> Int {
        let n1 = A.count
        let n2 = B.count
        
        var dp = [[Int]](repeating: [Int](repeating: 0, count: n2 + 1), count: n1 + 1)
        
        for i in 1 ... n1 {
            for j in 1 ... n2 {
                if A[i - 1] == B[j - 1] {
                    dp[i % 2][j] = 1 + dp[(i - 1) % 2][j - 1]
                } else {
                    dp[i % 2][j] = max(dp[(i - 1) % 2][j], dp[(i % 2)][j - 1])
                }
            }
        }
        
        return dp[n1 % 2][n2]
    }

}
```