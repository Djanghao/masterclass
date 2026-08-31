# Simple O(1)

**Author:** svolkovichs
**Votes:** 6
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3333858/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3333858/)

---

# Intuition
Simple math calculations

# Approach
If `money < children` return -1. 
If `money > children * 8` we give every child 8 and the rest to last one, the result will be children -1.
Else give every child by 1 dolar. Give every next child by 7. Handle corner case, when after giving every possible child by 7 dollars we have 3 dolars left. In this case if we have only one child left, we should decrease total nuberl by 1.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if(money < children){
        return -1;
    }
    if(children * 8 < money){
        return children - 1
    }
    let moneyLeft = money - children;
    let childrenBy8 = Math.floor(moneyLeft/7);
    let left = moneyLeft % 7;
    
    if(left === 3 && childrenBy8 > 0 && children - childrenBy8 === 1){
        childrenBy8--;
    }
    
    
    return childrenBy8;
};
```