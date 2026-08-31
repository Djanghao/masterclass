# [Swift] Backtracking Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/506468/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/506468/)

---

```
class Solution {
    var count = 0
    func numSquarefulPerms(_ A: [Int]) -> Int {
        var used:[Bool] = Array(repeating: false, count: A.count)
        var arr = A.sorted()
        var temp:[Int] = []
        helper(arr, &used, &temp)
        return count
    }
    
    func helper(_ A: [Int],_ used:inout[Bool],_ temp:inout[Int]){
        if temp.count == A.count{
            count += 1
            return
        }
        for i in 0..<A.count{
            if used[i] == true{ continue }
            if(i>0 && A[i-1]==A[i] && !used[i-1]){ continue }
            if temp.isEmpty || checkSquare(Double(temp.last!+A[i])){
                temp.append(A[i])
                used[i] = true
                helper(A, &used, &temp)
                used[i] = false
                temp.removeLast()
            }
        }
    }
    
    func checkSquare(_ total:Double)->Bool{
        let val = Int(sqrt(total))
        return total == Double(val*val)
    }
}
```