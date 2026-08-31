# Simple swift solution with explanations

**Author:** Gman4291
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671915/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4671915/)

---

# Approach
There is no particular technique used.

# Complexity
- Time complexity:
$$O(n^3)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    func isPossible(a: [Int], b: [Int]) -> Bool {

        // Here we just check if the two candidates points is a valid
        // possible solution according to what is explained in the
        // problem  description.

        return a[0] == b [0]
        || a[1] == b[1]
        || (a[0] < b[0] && a[1] > b[1])
        || (a[1] < b[1] && a[0] > b[0])
    }

    func isInside(a: [Int], b: [Int], c: [Int]) -> Bool {

        // In this function we check if the point c is 
        // in the fence formed by a and b

        if a[0] == b[0] {
            return a[0] == c[0] && ((a[1] <= c[1] && c[1] <= b[1]) || (b[1] <= c[1] && c[1] <= a[1]))
        }

        if a[1] == b[1] {
            return a[1] == c[1] && ((a[0] <= c[0] && c[0] <= b[0]) || (b[0] <= c[0] && c[0] <= a[0]))
        }

        return (a[0] <= c[0] && c[0] <= b[0] && b[1] <= c[1] && c[1] <= a[1])
        || (b[0] <= c[0] && c[0] <= a[0] && a[1] <= c[1] && c[1] <= b[1])
    }

    func numberOfPairs(_ points: [[Int]]) -> Int {

        var solution = 0
        for i in 0..<(points.count - 1) {
            for j in (i + 1)..<points.count {
                guard isPossible(a: points[i], b: points[j]) else {
                    continue
                }
                var k = 0
                var isOkSolution = true
                // For all (a, b) we check if there is no point c in the fence
                while k < points.count && isOkSolution {
                    guard k != i && k != j else {
                        k += 1
                        continue
                    }
                    if isInside(a: points[i], b: points[j], c: points[k]) {
                        isOkSolution = false
                    }
                    k += 1
                }
                // If there no point in the fence, the solution is valid
                if isOkSolution {
                    solution += 1
                }
            }
        }
        return solution
    }
}
```