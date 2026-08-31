# Swift Solution with Brief Explanation.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-string-with-lcp/solutions/3204261/](https://leetcode.com/problems/find-the-string-with-lcp/solutions/3204261/)

---

# Approach
1. Create a 2D array of size n x n
2. Initialize the array with 0
3. Iterate over the array and fill the array with the LCP values
4. Create a new array of size n
5. Initialize the array with "a"
6. Iterate over the array and fill the array with the values from the LCP array
7. If the value is 0, then increment the value of the previous element by 1
8. If the value is greater than 26, then return an empty string
9. Create a new 2D array of size n x n
10. Initialize the array with 0
11. Iterate over the array and fill the array with the LCP values
12. Iterate over the array and check if the LCP values are same as the values in the new array
13. If the values are not same, then return an empty string
14. Return the array joined with ""


# Complexity
- Time complexity: O(n<sup>2</sup>)

- Space complexity: O(n<sup>2</sup>)

# Code
```
class Solution {
    func findTheString(_ lcp: [[Int]]) -> String {
        let n = lcp.count
        var arr = Array(repeating: "a", count: n)
        var test = "a"
        var found = false
        for i in 1..<n {
            test = "a"
            found = false
            for j in 0..<i {
                test = max(test, arr[j])
                if lcp[i][j] != 0 {
                    found = true
                    arr[i] = arr[j]
                    break
                }    
            }
            if found {
                continue
            }
            test = String(Character(UnicodeScalar(test.unicodeScalars.first!.value + 1)!))
            arr[i] = test
            if test > "z" {
                return ""
            }
        }
        var dp = Array(repeating: Array(repeating: 0, count: n + 1), count: n + 1)
        var val = 0
        for i in (0..<n).reversed() {
            for j in (0..<n).reversed() {
                if arr[i] != arr[j] {
                    val = 0
                } else {
                    val = 1 + dp[i + 1][j + 1]
                }
                
                dp[i][j] = val
            }
        }
        for i in (0..<n).reversed() {
            for j in (0..<n).reversed() {
                if dp[i][j] != lcp[i][j] {
                    return ""
                }
            }
        }
        return arr.joined()
    }
}
```