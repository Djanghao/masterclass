# Kotlin simple solution | 2 lines

**Author:** BotirMuzaffariy
**Votes:** 4
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2640935/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2640935/)

---


    fun average(salary: IntArray): Double {
        salary.sort()
        return salary.copyOfRange(1, salary.size - 1).average()
    }
