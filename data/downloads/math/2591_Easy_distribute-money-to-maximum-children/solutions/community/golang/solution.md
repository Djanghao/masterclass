# Simple solution

**Author:** ragnar_by
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3337192/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3337192/)

---

# Intuition
 give 1 dollar to every child, than give 7 dollars to some children
# Approach
Just some edge cases
# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)
# Code
```
func distMoney(money int, children int) int {
    money=money-children // give one dollar to it child
    if money<0 {
        return -1
    }
    c:=money/7
    money = money-c*7 // remainder
    if c==children && money==0{ // we can give 8 dollars to every child
        return c
    }
    if c==children -1 && money ==3{ //last child will receive 4 dollars, it is bad
        return c-1
    }
    if c>children -1 { 
        return children -1
    }
    return c
}

```