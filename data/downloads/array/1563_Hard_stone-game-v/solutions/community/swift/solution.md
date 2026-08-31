# Swift with recursion + caching.

**Author:** wenjiema
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/6024646/](https://leetcode.com/problems/stone-game-v/solutions/6024646/)

---

# Intuition
The problem can be solved with recursion. Two helper functions each represent Alice and Bob, they both return Alice's sum:
1. Alice would devide array into two parts, and find the division that returns biggest result.
2. Bob would throw away array with the bigger sum, then add the smaller sum to Alice's sum and give back alice the array; When their sum equal, Bob will let alice decide which one to pick (the larger result). 

Once the recursion solution is in place, caching can be added easily to bring down time complexity to O(n^2) 

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```swift []
class Solution {
    var sumVal: [[Int]] = []

    func stoneGameV(_ stoneValue: [Int]) -> Int {
        sumVal = Array(repeating: Array(repeating: 0, count: stoneValue.count), count: stoneValue.count)
        for i in 0..<stoneValue.count {
            for j in i..<stoneValue.count {
                if i == j {
                    sumVal[i][j] = stoneValue[i]
                } else {
                    sumVal[i][j] = stoneValue[j] + sumVal[i][j-1]
                }
            }
        }

        var c = Array(repeating: Array(repeating: -1, count: stoneValue.count), count: stoneValue.count)

        return alice(stoneValue, 0, stoneValue.count-1, &c)
    }

    func alice(_ stoneValue: [Int], _ i: Int, _ j: Int, _ c: inout [[Int]]) -> Int {
        if i == j {
            return 0
        }

        if c[i][j] != -1 {
            return c[i][j]
        }

        var res = 0
        for k in i...j-1 {
            res = max(res, bob(stoneValue, i, k, j, &c))
        }
        c[i][j] = res
        return res
    }

    func bob(_ stoneValue: [Int], _ i: Int, _ j: Int, _ k: Int, _ c: inout [[Int]]) -> Int {
        let s1 = sumVal[i][j]
        let s2 = sumVal[j+1][k]

        if s1 > s2 {
            return alice(stoneValue, j+1, k, &c) + s2
        } else if s1 < s2 {
            return alice(stoneValue, i,j, &c) + s1
        } else {
            return max(alice(stoneValue, j+1, k, &c) + s2, alice(stoneValue, i,j, &c) + s1)
        }
    }
}
```