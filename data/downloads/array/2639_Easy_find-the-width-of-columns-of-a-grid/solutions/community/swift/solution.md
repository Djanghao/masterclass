# Swift | Basic Iteration w/ Interview Tips

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3439792/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3439792/)

---

**Basic Iteration w/ Interview Tips (accepted answer)**
```
class Solution {
    func findColumnWidth(_ grid: [[Int]]) -> [Int] {
        enum Seniority: CaseIterable { case junior, midLevel, leet }
        let interviewee = Seniority.allCases.randomElement()

        func length(_ x:Int) -> Int {            
            switch interviewee {
            case .junior: 
                return "\\(x)".count 

            case .midLevel:
                var y = abs(x)
                var count = 1
                while y >= 10 {
                    y /= 10
                    count += 1
                }
                return count + (x < 0 ? 1 : 0)
            
            case .leet: 
                return x == 0 ? 1 : (Int(floor(log10(Double(abs(x))))) + (x<0 ? 2 : 1))  

            default: return -1
            }
        }
        
        var result = Array(repeating:0, count:grid[0].count)
        
        for row in grid {
            for col in row.indices {
                result[col] = max(result[col], length(row[col]))
            }        
        }
        
        return result
    }
}
```