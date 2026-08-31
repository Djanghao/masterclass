# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/2794478/](https://leetcode.com/problems/maximum-69-number/solutions/2794478/)

---

Solution:
```
class Solution {
    func maximum69Number (_ num: Int) -> Int {
       var numbs = Array(String(num))
        
        for i in 0..<numbs.count{
            if numbs[i] == "6"{
                numbs[i] = "9"
                
                guard let newNumb = Int(String(numbs)) else { return num }
                return  newNumb
            }
        }
        
        return num 
    }
}
```