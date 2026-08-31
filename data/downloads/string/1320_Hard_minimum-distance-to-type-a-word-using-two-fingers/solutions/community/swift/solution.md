# Swift Solution with brief explanation.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/2891267/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/2891267/)

---

# Approach
1. We first create a 3D array of size 27 * 27 * n, where n is the length of the word.
2. We then use a DFS to go through each possible combination of left and right fingers.
3. At each index, we have two choices: either use the left finger or use the right finger.
4. We can find the cost of using each finger by using the formula: abs(fromX - toX) + abs(fromY - toY).
    4a. The formula above uses the X and Y coordinates of the from and to fingers to find the cost.
5. Once we have the cost of using each finger, we can compare them and return the minimum one.
6. We can cache the results of each index to avoid repeated calculations.
7. At the end, we return the minimum cost of the first index.
8. The time complexity is O(26^3 * n), where 26 is the number of letters in the alphabet.
9. The space complexity is O(26^3 * n), where 26 is the number of letters in the alphabet.

# Complexity
- Time complexity: O(26^3 * n)

- Space complexity: O(26^3 * n)

# Code
```
// Minimum Distance to Type a Word Using Two Fingers
// https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/

class Solution {
    func minimumDistance(_ word: String) -> Int {
        let word = Array(word)
        var dp = Array(repeating: Array(repeating: Array(repeating: Int.max, count: 27), count: 27), count: word.count)
        return dfs(0, 26, 26, word, &dp)
    }
    
    func dfs(_ index: Int, _ left: Int, _ right: Int, _ word: [Character], _ dp: inout [[[Int]]]) -> Int {
        if index == word.count {
            return 0
        }
        if dp[index][left][right] != Int.max {
            return dp[index][left][right]
        }
        let leftCost = dfs(index + 1, Int(word[index].asciiValue!) - 65, right, word, &dp) + getCost(left, Int(word[index].asciiValue!) - 65)
        let rightCost = dfs(index + 1, left, Int(word[index].asciiValue!) - 65, word, &dp) + getCost(right, Int(word[index].asciiValue!) - 65)
        dp[index][left][right] = min(leftCost, rightCost)
        return dp[index][left][right]
    }
    
    func getCost(_ from: Int, _ to: Int) -> Int {
        if from == 26 {
            return 0
        }
        let fromX = from / 6
        let fromY = from % 6
        let toX = to / 6
        let toY = to % 6
        return abs(fromX - toX) + abs(fromY - toY)
    }
}
```