# [Swift] Easy to understand solution

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612609/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612609/)

---

```
class Solution {
    func findEvenNumbers(_ digits: [Int]) -> [Int] {
        
    var answer: Set<Int> = []
    
    for (index1,element1) in digits.enumerated() where element1 != 0 {
        
        for (index2,element2) in digits.enumerated() where index2 != index1 {
            
            for (index3,element3) in digits.enumerated() where
            index3 != index1 &&
            index3 != index2 &&
            element3 % 2 != 1 {
                
                let string = String(element1) + String(element2) + String(element3)
                answer.insert(Int(string)!)
            }
        }
    }
    
    return answer.sorted()
    }
}
```