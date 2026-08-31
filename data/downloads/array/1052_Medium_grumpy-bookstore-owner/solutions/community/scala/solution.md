# Scala FP: 2 foldLeft

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5345465/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5345465/)

---

# Code
```
object Solution {
  def maxSatisfied(customers: Array[Int], grumpy: Array[Int], minutes: Int): Int = 
    if (customers.length <= minutes) customers.sum else
      customers.indices.foldLeft(0)((sum, i) => sum + (1 - grumpy(i)) * customers(i)) +
        customers.indices.foldLeft((0, 0)) { 
          case ((sum, _), i) if i < minutes => 
            val grumpySum = sum + grumpy(i) * customers(i)
            (grumpySum, grumpySum)
          case ((sum, max), i) => 
            val windowSum = sum - grumpy(i - minutes) * customers(i - minutes) + grumpy(i) * customers(i)
            (windowSum, max max windowSum)
        }._2
}
```