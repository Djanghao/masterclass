# [Swift] Bottom up approach, 100% beating. TC - O(n^2), SC - O(n)

**Author:** sashkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-paths-with-max-score/solutions/3808419/](https://leetcode.com/problems/number-of-paths-with-max-score/solutions/3808419/)

---

# Intuition
Sounded similar to https://leetcode.com/problems/minimum-path-sum/description/ but with diagonal move and obstacles

# Approach
Count maximum sum and number of repeats in parallel.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
class Solution {
    private let values: [Character: Int] = [
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "E": 0,
        "S": 0
    ]

    func pathsWithMaxScore(_ board: [String]) -> [Int] {
        let characters = board.map { Array($0) }
        let size = board.count
        var sums = Array(repeating: Int.min, count: size)
        sums[0] = 0
        for i in 1..<size {
            guard let value = values[characters[0][i]] else { break }
            sums[i] = sums[i-1] + value
        }

        var nextSums = Array(repeating: Int.min, count: size)

        var repeats = Array(repeating: 1, count: size)
        var nextRepeats = Array(repeating: 1, count: size)
        
        for i in 1..<size {
            if let value = values[characters[i][0]] {
                nextSums[0] = sums[0] == .min ? .min : (sums[0] + value)
            }

            for j in 1..<size {
                guard let value = values[characters[i][j]] else {
                    continue
                }
                if sums[j] == nextSums[j-1] {
                    if nextSums[j-1] == .min {
                        nextSums[j] = sums[j-1] == .min ? .min : (sums[j-1] + value)
                        nextRepeats[j] = repeats[j-1]
                    } else {
                        nextSums[j] = sums[j] + value
                        nextRepeats[j] = (repeats[j] + nextRepeats[j-1]) % 1000000007
                    }
                    continue
                }
                
                if sums[j] > nextSums[j-1] {
                    nextSums[j] = sums[j] + value
                    nextRepeats[j] = repeats[j]
                } else {
                    nextSums[j] = nextSums[j-1] + value
                    nextRepeats[j] = nextRepeats[j-1]
                }
            }

            sums = nextSums
            repeats = nextRepeats
            nextSums = Array(repeating: .min, count: size)
            nextRepeats = Array(repeating: 1, count: size)
        }
        
        if sums[size-1] == .min { return [0,0] }
        return [sums[size-1], repeats[size-1]]
    }
}
```