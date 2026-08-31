# Kotlin Functional

**Author:** qveex
**Votes:** 0
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5835881/](https://leetcode.com/problems/report-spam-message/solutions/5835881/)

---

# Code
```kotlin []
fun reportSpam(message: Array<String>, bannedWords: Array<String>): Boolean =
    bannedWords.toHashSet().let { set ->
        generateSequence(0 to 0) { (i, count) ->
            i + 1 to count + if (message[i] in set) 1 else 0
        }
            .takeWhile { it.second <= 2 && it.first < message.count() }
            .last()
            .let { (i, count) -> count + if (message[i] in set) 1 else 0 }
            .takeIf { it > 1 }
            ?.compareTo(1) == 1
    }
```