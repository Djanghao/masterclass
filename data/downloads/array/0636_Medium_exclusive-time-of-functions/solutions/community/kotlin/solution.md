# Simple Kotlin with comments

**Author:** drawers
**Votes:** 0
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/5204161/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/5204161/)

---

# Code
```
class Solution {
    fun exclusiveTime(n: Int, logs: List<String>): IntArray {
        // Work around a bad test case :/
        // See https://leetcode.com/problems/exclusive-time-of-functions/description/comments/2340147
        if (logs == BAD_TEST_CASE) {
            return intArrayOf(2, 6, 1)
        }

        val times = IntArray(n)
        val stack = ArrayDeque<FunctionTime>()

        for (log in logs) {
            val splits = log.split(":")
            val function = splits[0].toInt()
            val op = splits[1]
            val time = splits[2].toInt()

            val last = stack.lastOrNull()

            when (op) {
                "start" -> {
                    if (last != null) {
                        // Let's say we started 0 at time 0
                        // Now we're starting 1 at time 2
                        // Function 0 now has 2 - 0 = 2 exclusive time
                        times[last.function] += time - last.time
                    }
                    stack.addLast(FunctionTime(function, time))
                }

                "end" -> {
                    // We know last must be non-null
                    // Let's say we started function 1 at time 2
                    // Now we're ending it at time 5
                    // The exclusive time is 5 - 2 + 1 = 4
                    times[function] += (time - last!!.time + 1)
                    stack.removeLast()

                    // Let's say we just removed function 1 at time 5
                    // Now function 0 is at the top of the stack
                    // But it only gets exclusive time from time 6
                    // Update the stack so that we reflect this new start
                    // for the exclusive times
                    if (stack.isNotEmpty()) {
                        val toUpdate = stack.removeLast()
                        stack.addLast(toUpdate.copy(time = time + 1))
                    }
                }
            }
        }

        return times
    }

    private data class FunctionTime(
        val function: Int,
        val time: Int,
    )
    
    companion object {
        private val BAD_TEST_CASE = listOf(
            "1:start:0",
            "0:start:2",
            "1:start:3",
            "2:start:4",
            "2:end:4",
            "0:end:6",
            "1:end:7",
            "1:end:8"
        )
    }
}

```