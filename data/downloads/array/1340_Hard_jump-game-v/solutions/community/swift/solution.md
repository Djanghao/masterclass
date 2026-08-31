# Swift Solution || 100% efficient

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/2893138/](https://leetcode.com/problems/jump-game-v/solutions/2893138/)

---

# Approach
1. Create an array of length arr.count (the number of elements in arr) to keep track of the max jumps from each element. Initialize the array with all zeroes.
2. Create a variable max to keep track of the maximum number of jumps from any element in arr.
3. Loop through arr from 0 to arr.count.
4. For each element, call the dfs function to find the maximum number of jumps from that element. Let's call this value val.
5. If the value val is greater than the current value for max, set max to val.
6. Return max.
7. Create a dfs function that takes arr, d, i, and dp as parameters. i is the index of the element in arr that we are currently considering. d is the maximum number of jumps allowed. dp is the array that keeps track of the max jumps from each element.
8. If the element at index i in dp is not 0, return the value at that index. This means that we have already calculated the max jumps from this element.
9. Create a variable max and initialize it to 1. This is the minimum number of jumps that we can make from this element (1 jump).
10. Loop from 1 to d. This is the number of jumps we will attempt to make from this element.
11. If i + j is greater than or equal to arr.count (if we are trying to jump beyond the end of the array) OR arr[i + j] is greater than or equal to arr[i] (if the element we are jumping to is greater than or equal to the current element), break out of the loop.
12. Let val equal the result of calling dfs with arr, d, i + j, and dp as parameters. Add 1 to val. This is the number of jumps we can make from the element that we are jumping to.
13. If val is greater than max, set max to val.
14. Repeat steps 10-13 for j in 1...d. This time, we are jumping to elements to the left of the current element.
15. Set the element at index i in dp equal to max.
16. Return max.

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n)

# Code
```
// Jump Game V
// https://leetcode.com/problems/jump-game-v/

class Solution {
    func maxJumps(_ arr: [Int], _ d: Int) -> Int {
        var dp = Array(repeating: 0, count: arr.count)
        var max = 0
        for i in 0..<arr.count {
            let val = dfs(arr, d, i, &dp)
            if val > max {
                max = val
            }
        }
        return max
    }
    
    func dfs(_ arr: [Int], _ d: Int, _ i: Int, _ dp: inout [Int]) -> Int {
        if dp[i] != 0 {
            return dp[i]
        }
        var max = 1
        for j in 1...d {
            if i + j >= arr.count || arr[i + j] >= arr[i] {
                break
            }
            let val = dfs(arr, d, i + j, &dp) + 1
            if val > max {
                max = val
            }
        }
        for j in 1...d {
            if i - j < 0 || arr[i - j] >= arr[i] {
                break
            }
            let val = dfs(arr, d, i - j, &dp) + 1
            if val > max {
                max = val
            }
        }
        dp[i] = max
        return max
    }
}
```