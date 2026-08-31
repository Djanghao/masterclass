# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/5097455/](https://leetcode.com/problems/random-flip-matrix/solutions/5097455/)

---

# Intuition
The problem is asking to randomly pick an index (i, j) where matrix[i][j] == 0 and flips it to 1. All the indices (i, j) where matrix[i][j] == 0 should be equally likely to be returned. The challenge here is to optimize the algorithm to minimize the number of calls made to the built-in random function of your language and optimize the time and space complexity.

# Approach
The approach used here is to maintain a mapping of the indices of the zeros in the matrix. We start by initializing a total variable to m*n (the total number of zeros in the matrix) and a map to store the indices of the flipped cells.

In the flip function, we generate a random number between 0 and total-1, and then swap the value at the random index with the value at the last index in the map. This ensures that all the indices where matrix[i][j] == 0 are equally likely to be returned. We then decrement the total by 1 to reflect the fact that one zero has been flipped to 1.

The reset function simply resets the map and total to their initial states, effectively setting all the values in the matrix back to 0.


# Complexity
- Time complexity: The time complexity for both the flip and reset functions is O(1), as they both perform a constant amount of work regardless of the size of the matrix.


- Space complexity: The space complexity is O(m\u2217n), where m and n are the dimensions of the matrix. This is because we need to store the indices of the zeros in the matrix in the map. In the worst case, all the cells in the matrix are zeros, so we need to store m*n indices. However, this space complexity is optimal for this problem, as we need to keep track of the positions of all the zeros in the matrix.

# Code
```
import Foundation

class Solution {
    var total: Int
    var map: [Int: Int]
    var m: Int
    var n: Int

    init(_ m: Int, _ n: Int) {
        self.m = m
        self.n = n
        self.total = m * n
        self.map = [Int: Int]()
    }
    
    func flip() -> [Int] {
        let rand = Int.random(in: 0..<total)
        let x = map[rand] ?? rand
        let y = map[total-1] ?? (total-1)
        
        map[rand] = y
        map[total-1] = x
        total -= 1
        
        return [x / n, x % n]
    }
    
    func reset() {
        map.removeAll()
        total = m * n
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution(m, n)
 * let ret_1: [Int] = obj.flip()
 * obj.reset()
 */

```