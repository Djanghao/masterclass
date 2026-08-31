# 100% time complexity O(n) solution.

**Author:** vongochieu115
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/5851116/](https://leetcode.com/problems/design-an-atm-machine/solutions/5851116/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 
  + Deposit method: O(n)
  + Withdraw method: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) since we only declare the an int array with 5 variables. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class ATM() {
  private val bankNotes = intArrayOf(0, 0, 0, 0, 0)
  private val bankNotesValue = intArrayOf(20, 50, 100, 200, 500)
  fun deposit(banknotesCount: IntArray) {
    for (i in banknotesCount.indices) {
      bankNotes[i] += banknotesCount[i]
    }
  }

  fun withdraw(amount: Int): IntArray {
    val result = intArrayOf(0, 0, 0, 0, 0)
    var remainingAmount = amount
    for (i in bankNotes.size - 1 downTo 0) {
      if (bankNotes[i] == 0) continue
      val count = minOf(remainingAmount / bankNotesValue[i], bankNotes[i])
      result[i] = count
      remainingAmount -= count * bankNotesValue[i]
    }

    return if (remainingAmount == 0) {
      bankNotes.forEachIndexed { index, _ -> bankNotes[index] -= result[index] }
      result
    } else intArrayOf(-1)
  }
}
/**
 * Your ATM object will be instantiated and called as such:
 * var obj = ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
```