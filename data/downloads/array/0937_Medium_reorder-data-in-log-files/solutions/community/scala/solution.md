# Scala solution

**Author:** dustin10
**Votes:** 1
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/382227/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/382227/)

---

```
  object Solution {
    def reorderLogFiles(logs: Array[String]): Array[String] = {
      val (digitLogs: Array[String], letterLogs: Array[String]) = logs.partition((logValue: String) => {
        logValue(logValue.indexOf(" ") + 1).isDigit
      })

      letterLogs.sortBy((logValue: String) => {
        val spaceIndex: Int = logValue.indexOf(" ")
        (logValue.substring(spaceIndex + 1), logValue.substring(0, spaceIndex))
      }) ++ digitLogs
    }
  }
```
