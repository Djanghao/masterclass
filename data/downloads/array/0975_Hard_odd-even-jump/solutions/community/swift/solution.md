# Stack with DP

**Author:** CroperBY
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/5951739/](https://leetcode.com/problems/odd-even-jump/solutions/5951739/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(NLogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
 func oddEvenJumps(_ arr: [Int]) -> Int {
        let n = arr.count

        // find the next odd jump indices
        var nextOddJump = findNextJumpIndices(for: arr.enumerated().sorted(by: { $0.1 < $1.1 }))

        // find the next even jump indices
        // here we need a reverse sorted array
        var nextEvenJump = findNextJumpIndices(for: arr.enumerated().sorted(by: { $0.1 > $1.1 }))

        // use the above jump indices arrays to find if each 
        // index can odd-start & even-start jump to position n-1    
        var oddStartGood = Array(repeating: 0, count: n)
        var evenStartGood = Array(repeating: 0, count: n)
    
        // 1 = can reach n-1, 0 = otherwise
        oddStartGood[n - 1] = 1
        evenStartGood[n - 1] = 1

        for i in (0..<n-1).reversed() {
            let iNextOdd = nextOddJump[i]
            if iNextOdd > 0 && evenStartGood[iNextOdd] == 1 {
                oddStartGood[i] = 1
            }
            let iNextEven = nextEvenJump[i]
            if iNextEven > 0 && oddStartGood[iNextEven] == 1 {
                evenStartGood[i] = 1
            }
        }
    
        return oddStartGood.reduce(0, +)
    }


    func findNextJumpIndices(for array: [EnumeratedSequence<[Int]>.Iterator.Element]) -> [Int] {
        var jumpIndiciesArray = Array(repeating: 0, count: array.count)
        var stack: [Int] = []

        for (index, value) in array {
            while !stack.isEmpty && stack.last! < index {
                jumpIndiciesArray[stack.popLast()!] = index
            }
            stack.append(index)
        }

        return jumpIndiciesArray
    }
}
```