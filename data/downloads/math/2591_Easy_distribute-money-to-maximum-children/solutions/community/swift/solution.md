# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312335/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312335/)

---



# Code
```
class Solution {
    func distMoney(_ money: Int, _ children: Int) -> Int {
        
        var money = money
        money -= children
        
        if (money < 0){
            return -1
        }
        
        if (money / 7 == children && money % 7 == 0){
            return children
        }
        
        if (money / 7 > children){
            return children - 1
        } 
        
        if (money / 7 == children - 1 && money % 7 == 3){
            return children - 2
        }
        
        return min(children - 1, money / 7)
    }
}






```