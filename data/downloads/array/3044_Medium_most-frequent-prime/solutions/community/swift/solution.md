# Swift Solution

**Author:** programerkapilshanbhag
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4748918/](https://leetcode.com/problems/most-frequent-prime/solutions/4748918/)

---

# Intuition
Linear Solution

# Approach
Linear solution

# Complexity
- Time complexity:
O(n ^ 3)

- Space complexity:
O(n ^ 2)

# Code
```
class Solution {
    var m = 0, n = 0
    var count: [Int : Int] = [:]
    var matrix: [[Int]] = []

    func isEligiblePrime(_ n: Int) -> Bool {
        if n == 0 {
            return false
        }
        if n < 10 {
            return false
        }
        var i = 2
        while i * i <= n {
            if n % i == 0 {
                return false
            }
            i += 1
        }
        return true
    }

    func iterateMatrix(_ i: Int, _ j: Int) {
        let num = matrix[i][j]
        if isEligiblePrime(num) {
            count[num] = (count[num] ?? 0) + 1
        }
        
        var tempNum = num
        var ti = i, tj = j+1
        
        //MARK: East
        while tj < n {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1
            }
            tj += 1
        }
        
        //MARK: South-Ease\	
        ti = i+1
        tj = j+1
        tempNum = num
        while tj < n && ti < m {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1
            }
            tj += 1
            ti += 1
        }
        
        //MARK: South
        ti = i+1
        tj = j
        tempNum = num
        while ti < m {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1
            }
            ti += 1
        }
        
        //MARK: South-West
        ti = i+1
        tj = j-1
        tempNum = num
        while ti < m && tj >= 0 {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1
            }
            ti += 1
            tj -= 1
        }
        
        //MARK: West
        ti = i
        tj = j-1
        tempNum = num
        while tj >= 0 {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1
            }
            tj -= 1
        }
        
        //MARK: North-West
        ti = i-1
        tj = j-1
        tempNum = num
        while ti >= 0 && tj >= 0 {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1
            }
            ti -= 1
            tj -= 1
        }
        
        //MARK: North
        ti = i-1
        tj = j
        
        tempNum = num
        while ti >= 0 {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1
            }
            ti -= 1
        }
        
        //MARK: North East
        ti = i-1
        tj = j+1
        tempNum = num
        while ti >= 0 && tj < n {
            tempNum = (tempNum * 10) + matrix[ti][tj]
            if isEligiblePrime(tempNum) {
                count[tempNum] = (count[tempNum] ?? 0) + 1 
            }
            ti -= 1
            tj += 1
        }
    }

    func mostFrequentPrime(_ mat: [[Int]]) -> Int {
        m = mat.count
        n = mat[0].count
        matrix = mat
        var visited: [String : Bool] = [:]
        
        for i in 0..<m {
            for j in 0..<n {
                visited = [:]
                iterateMatrix(i, j)
            }
        }
        if count.isEmpty {
            return -1
        }
        var ans: (Int, Int) = (0,0)
        for (key, val) in count {
            if val > ans.1 {
                ans = (key, val)
            }
            else if val == ans.1 {
                let newNum = ans.0 > key ? ans.0 : key
                ans = (newNum, val)
            }
        }
        return ans.0
    }
}
```