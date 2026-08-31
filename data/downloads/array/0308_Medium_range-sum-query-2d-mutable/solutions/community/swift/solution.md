# Swift binary index tree with explain comment

**Author:** tzef
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/2824050/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/2824050/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Concept as same as [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)
just change the cumutative sum from always from zero to partial sum based on Fenwick Tree

# Approach
<!-- Describe your approach to solving the problem. -->
Each single row as same as one dimentaino Fenwick Tree
Variation: each update/query have to iterate two dimentions

# Complexity
N - number of rows
M - number of cols

- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
update: $$O(LogN * LogM)$$
query: $$O(LogN * LogM)$$
init: N * M * query: $$O(N * M * LogN * LogM)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(N * M)$$
only each row and col add one for dummy root

# Code
```
/*
    Brute Force
    save matrix
    udpate -> O(1)
    sum -> O(n)

    Accumulate
    save prefix sum
    update -> O(n)
    sum -> O(1)

    update/sum -> O(log n)
    binary index tree
    
    index: 7 -> 0111 = 100 + 10 + 01
                                   ^: 1             \\
                             ^: sum(101...110)      - sum(001...111)
                       ^prefixSum: sum(001...100)   /
    query
    1010 = 0010 + 1000
      ^: lsb (least significant bit)

    udpate
    1010 -> 1100, 10000
                   ^sum(00001...10000)
            ^sum(1001...1100)

               000 dummy root
            /   |   \\
          001  010   100
                 \\    |   \\
                 011  101  110
                             \\
                             111
    - -  - -        a a  a a     b b  b b     c c  - -      d d  - -
    - -  - -    =   a a  a a  -  b b  b b  -  c c  - -   +  d d  - -
    - - [- -]       a a  a a     - -  - -     c c  - -      - -  - -
    - - [- -]       a a  a a     - -  - -     c c  - -      - -  - -
 */

class BinaryIndexTree {
    var matrix: [[Int]]
    var prefixSumMatrix: [[Int]]
    init(_ matrix: [[Int]]) {
        self.matrix = matrix.map { $0.map { _ in 0 }}
        prefixSumMatrix = Array(
            repeating: Array(repeating: 0, count: matrix[0].count + 1), 
            count: matrix.count + 1
        )
        for row in 0..<matrix.count {
            for col in 0..<matrix[row].count {
                update(row, col, matrix[row][col])
            }
        }
    }
    
    func update(_ row: Int, _ col: Int, _ val: Int) {
        let delta = val - matrix[row][col]
        matrix[row][col] = val
        var i = row + 1
        while i < prefixSumMatrix.count {
            defer { i += (i & -i) }
            var j = col + 1
            while j < prefixSumMatrix[row].count {
                defer { j += (j & -j) }
                prefixSumMatrix[i][j] += delta
            }
        }
    }
    
    func query(_ row: Int, _ col: Int) -> Int {
        var i = row + 1
        var sum = 0
        while i > 0 {
            defer { i -= (i & -i) }
            var j = col + 1
            while j > 0 {
                defer { j -= (j & -j) }
                sum += prefixSumMatrix[i][j]
            }
        }
        return sum
    }
}
class NumMatrix {
    let binaryIndexTree: BinaryIndexTree
    init(_ matrix: [[Int]]) {
        binaryIndexTree = BinaryIndexTree(matrix)
    }
    
    func update(_ row: Int, _ col: Int, _ val: Int) {
        binaryIndexTree.update(row, col, val)
    }
    
    func sumRegion(_ row1: Int, _ col1: Int, _ row2: Int, _ col2: Int) -> Int {
        var sum = binaryIndexTree.query(row2, col2)
        if row1 > 0 {
            sum -= binaryIndexTree.query(row1 - 1, col2)
        }
        if col1 > 0 {
            sum -= binaryIndexTree.query(row2, col1 - 1)
        }
        if row1 > 0, col1 > 0 {
            sum += binaryIndexTree.query(row1 - 1, col1 - 1)
        }
        return sum
    }
}
```