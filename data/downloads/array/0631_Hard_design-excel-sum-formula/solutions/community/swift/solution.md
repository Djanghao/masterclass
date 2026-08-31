# Beats 100% in swift

**Author:** vishundayal
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/5305335/](https://leetcode.com/problems/design-excel-sum-formula/solutions/5305335/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Start lazy, try creating matrix storage, set the value and get the value
# Approach
<!-- Describe your approach to solving the problem. -->
1. Create array for value storage
2. Create array for formula storage 
3. Parse formula into range of indexes
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. init O(1)
2. set O(n)
3. get O(1)
4. sum O(height * width * O(numbers))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class Excel {
    let h: Int
    let w: Int
    let col = Array("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    var mat:[[Int]]
    var matFormula:[[[String]]]
    init(_ height: Int, _ width: Character) {
        h = height
        w = (col.firstIndex(of:width) ?? 0 ) + 1
        // print("create excel of ", w, h)
        mat = Array(repeating: Array(repeating:0, count: w), count: h)
        matFormula = Array(repeating: Array(repeating:[], count: w), count: h)
    }
    
    func set(_ row: Int, _ column: Character, _ val: Int) {
        let c = col.firstIndex(of:column) ?? 0
        mat[row-1][c] = val
        matFormula[row-1][c] = []
        // print("set")
        updateSheet(for:[row-1,c])
        // print(mat)

    }
    
    func get(_ row: Int, _ column: Character) -> Int {
        let c = col.firstIndex(of:column) ?? 0
        return mat[row-1][c]
    }
    
    func sum(_ row: Int, _ column: Character, _ numbers: [String]) -> Int {
        // print("sum at \\(row-1), \\(column)", numbers)        
        let c = col.firstIndex(of:column) ?? 0
        var sum = 0
        for f in numbers {
            if f.contains(":") {
                let compo = f.components(separatedBy:":")
                let (r1,c1) = getRowCol(compo[0])
                let (r2,c2) = getRowCol(compo[1])
                // print((r1,c1), (r2,c2))
                for i in r1...r2 {
                    for j in c1...c2 {
                        // print("Adding [\\(i+1),\\(col[j])]=\\(mat[i][j])", sum)
                        sum += mat[i][j]
                    }
                }
            } else {
                let (r1,c1) = getRowCol(f)
                sum += mat[r1][c1]
            }
        }
        // print("set sum")
        // print(mat[row-1][c], sum)
        mat[row-1][c] = sum
        // print(matFormula)
        matFormula[row-1][c] = numbers
        updateSheet(for:[row-1,c])
        // print(mat)
        return sum
    }
    func updateSheet(for cell:[Int]) {
        // print("updateSheet for", cell)
        for i in 0..<matFormula.count {
            for j in 0..<matFormula[i].count {
                if matFormula[i][j] != [] {
                    if isCellInRange(cell, matFormula[i][j]) && !(cell[0] == i && cell[1] == j) {
                        sum(i+1, col[j], matFormula[i][j])
                    }
                }
            }
        }
    }
    func getRowCol(_ str: String)->(Int, Int) {
        let cell = Array(str)
        let r = ((cell.count == 3) ? ((cell[1].wholeNumberValue ?? 0) * 10 + (cell[2].wholeNumberValue ?? 0)) : (cell[1].wholeNumberValue ?? 0)) - 1
        let c = col.firstIndex(of:cell[0]) ?? 0
        return (r, c)
    }
    func isCellInRange(_ cell:[Int], _ numbers: [String]) -> Bool {
        for f in numbers {
            if f.contains(":") {
                let compo = f.components(separatedBy:":")
                let (r1,c1) = getRowCol(compo[0])
                let (r2,c2) = getRowCol(compo[1])
                if (cell[0] >= r1 && cell[0] <= r2 && cell[1] >= c1 && cell[1] <= c2) == true {
                    return true
                }
            } else {
                let (r1,c1) = getRowCol(f)
                if (r1 == cell[0] && c1 == cell[1]) == true {
                    return true
                }
            }
        }
        return false
    }
}

/**
 * Your Excel object will be instantiated and called as such:
 * let obj = Excel(height, width)
 * obj.set(row, column, val)
 * let ret_2: Int = obj.get(row, column)
 * let ret_3: Int = obj.sum(row, column, numbers)
 */
```