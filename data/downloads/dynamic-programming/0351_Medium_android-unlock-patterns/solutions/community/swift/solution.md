# Swift Solution with Documentation

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/5806363/](https://leetcode.com/problems/android-unlock-patterns/solutions/5806363/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func numberOfPatterns(_ m: Int, _ n: Int) -> Int {
        // Jump matrix: records the number that must be jumped over for a valid pattern
        var jump = [[Int]](repeating: [Int](repeating: 0, count: 10), count: 10)
        
        // Initialize the jump over numbers for all valid jumps
        jump[1][3] = 2
        jump[3][1] = 2
        jump[4][6] = 5
        jump[6][4] = 5
        jump[7][9] = 8
        jump[9][7] = 8
        jump[1][7] = 4
        jump[7][1] = 4
        jump[2][8] = 5
        jump[8][2] = 5
        jump[3][9] = 6
        jump[9][3] = 6
        jump[1][9] = 5
        jump[9][1] = 5
        jump[3][7] = 5
        jump[7][3] = 5

        var visitedNumbers = 0
        var totalPatterns = 0
        var dp = Array(repeating: Array(repeating: nil as Int?, count: 1 << 10), count: 10)

        // Count patterns starting from corner numbers (1, 3, 7, 9) and multiply by 4 due to symmetry
        totalPatterns += countPatternsFromNumber(1, 1, m, n, &jump, visitedNumbers, &dp) * 4

        // Count patterns starting from edge numbers (2, 4, 6, 8) and multiply by 4 due to symmetry
        totalPatterns += countPatternsFromNumber(2, 1, m, n, &jump, visitedNumbers, &dp) * 4

        // Count patterns starting from the center number (5)
        totalPatterns += countPatternsFromNumber(5, 1, m, n, &jump, visitedNumbers, &dp)

        return totalPatterns
    }
    
    // Helper function to count valid patterns starting from a given number
    private func countPatternsFromNumber(
        _ currentNumber: Int,
        _ currentLength: Int,
        _ minLength: Int,
        _ maxLength: Int,
        _ jump: inout [[Int]],
        _ visitedNumbers: Int,
        _ dp: inout [[Int?]]
    ) -> Int {
        // Base case: if current pattern length exceeds maxLength, stop exploring
        if currentLength > maxLength { return 0 }

        // Check if we have already calculated the result for this state
        if let cachedResult = dp[currentNumber][visitedNumbers] {
            return cachedResult
        }

        var validPatterns = 0
        // If current pattern length is within the valid range, count it
        if currentLength >= minLength {
            validPatterns += 1
        }

        // Mark the current number as visited
        let newVisited = setBit(visitedNumbers, currentNumber)

        // Explore all possible next numbers (1 to 9)
        for nextNumber in 1...9 {
            let jumpOverNumber = jump[currentNumber][nextNumber]
            // Check if the next number is unvisited and either:
            // 1. There's no number to jump over, or
            // 2. The number to jump over has been visited
            if !isSet(newVisited, nextNumber) &&
                (jumpOverNumber == 0 || isSet(newVisited, jumpOverNumber)) {
                validPatterns += countPatternsFromNumber(
                    nextNumber,
                    currentLength + 1,
                    minLength,
                    maxLength,
                    &jump,
                    newVisited,
                    &dp
                )
            }
        }

        // Save the result for the current state and return it
        dp[currentNumber][visitedNumbers] = validPatterns
        return validPatterns
    }

    // Utility function to set the bit at the given position (mark a number as visited)
    private func setBit(_ num: Int, _ position: Int) -> Int {
        return num | (1 << (position - 1))
    }

    // Utility function to check if a bit is set at the given position (check if a number is visited)
    private func isSet(_ num: Int, _ position: Int) -> Bool {
        return (num >> (position - 1)) & 1 == 1
    }
}
```