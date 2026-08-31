# Scala FP: simulation O(n) tailrec

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5641319/](https://leetcode.com/problems/lemonade-change/solutions/5641319/)

---

# Code
```
object Solution {
  @ annotation.tailrec 
  def lemonadeChange(bills: Array[Int], customer: Int = 0, fives: Int = 0, tens: Int = 0): Boolean = 
    customer == bills.length || (bills(customer) match {
      case 5 => lemonadeChange(bills, customer + 1, fives + 1, tens)
      case 10 if fives >= 1 => lemonadeChange(bills, customer + 1, fives - 1, tens + 1)
      case 20 if tens >= 1 && fives >= 1 => lemonadeChange(bills, customer + 1, fives - 1, tens - 1)
      case 20 if fives >= 3 => lemonadeChange(bills, customer + 1, fives - 3, tens)
      case _ => false
    })
}
```