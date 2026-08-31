# Swift solution 🔥

**Author:** Yaseeeko
**Votes:** 1
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/4018353/](https://leetcode.com/problems/subrectangle-queries/solutions/4018353/)

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
```

class SubrectangleQueries {

    var rect: [[Int]]
    
    init(_ rectangle: [[Int]]) {
        self.rect = rectangle
    }
    
    func updateSubrectangle(_ row1: Int, _ col1: Int, _ row2: Int, _ col2: Int, _ newValue: Int) {
        self.rect = rect
            .enumerated()
            .map { (row, col) in
                
                if row >= row1 && row <= row2 {
                    
                    return col
                        .enumerated()
                        .map { (i, n) in
                        
                            if i >= col1 && i <= col2 {
                                
                                return newValue
                                
                            }
                            
                            return n
                        }
                    
                }
                
                return col
                
            }

    }
    
    func getValue(_ row: Int, _ col: Int) -> Int {
        
        rect[row][col]
        
    }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * let obj = SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1, col1, row2, col2, newValue)
 * let ret_2: Int = obj.getValue(row, col)
 */
```