# Kotlin | One line | Simple

**Author:** BotirMuzaffariy
**Votes:** 10
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/2387133/](https://leetcode.com/problems/richest-customer-wealth/solutions/2387133/)

---

class Solution {

    fun maximumWealth(accounts: Array<IntArray>) = accounts.map { it.sum() }.max() ?: 0
	
}