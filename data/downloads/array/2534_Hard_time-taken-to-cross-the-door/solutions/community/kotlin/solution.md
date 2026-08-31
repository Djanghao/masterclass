# Not the most optimal solution but a working one

**Author:** deepaksrgm2010
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/6093005/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/6093005/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    val EXIT=1
    val ENTRY=0
    fun timeTaken(arrivals: IntArray, state: IntArray): IntArray {
        val numberOfPersons = arrivals.size
        val maxTimeTaken = arrivals[numberOfPersons-1]+numberOfPersons
        var lastPersonState = EXIT
        var lateTimeMovement = -2
        val newAnswers = IntArray(arrivals.size){-1}
        val arrivalTimeMap = mutableMapOf<Int, MutableList<Int>>()
        for(arrivedPerson in arrivals.indices) {
            if(arrivalTimeMap[arrivals[arrivedPerson]] == null) {
                arrivalTimeMap[arrivals[arrivedPerson]] = mutableListOf<Int>()
            }
            arrivalTimeMap[arrivals[arrivedPerson]]!!.add(arrivedPerson)
        }

        val waitingPersonsForEntry: Queue<Int> = LinkedList<Int>()
        val waitingPersonsForExit: Queue<Int> = LinkedList<Int>()

        for(currentTime in arrivals[0]..maxTimeTaken) {
            if(arrivalTimeMap[currentTime] != null) {
                arrivalTimeMap[currentTime]!!.forEach { it ->
                    if(state[it] == EXIT) {
                        waitingPersonsForExit.add(it)
                    } else {
                        waitingPersonsForEntry.add(it)
                    }
                }
                arrivalTimeMap.remove(currentTime)
            }

            if(currentTime - lateTimeMovement <= 1) {
                if(lastPersonState == ENTRY && waitingPersonsForEntry.size > 0) {
                    newAnswers[waitingPersonsForEntry.remove()] = currentTime
                    lastPersonState = ENTRY
                    lateTimeMovement = currentTime
                } else if(waitingPersonsForExit.size > 0) {
                    newAnswers[waitingPersonsForExit.remove()] = currentTime
                    lastPersonState = EXIT
                    lateTimeMovement = currentTime

                } else if(waitingPersonsForEntry.size > 0) {
                    newAnswers[waitingPersonsForEntry.remove()] = currentTime
                    lastPersonState = ENTRY
                    lateTimeMovement = currentTime
                }
            } else {
                if(waitingPersonsForExit.size > 0) {
                    newAnswers[waitingPersonsForExit.remove()] = currentTime
                    lastPersonState = EXIT
                    lateTimeMovement = currentTime

                } else if(waitingPersonsForEntry.size > 0) {
                    newAnswers[waitingPersonsForEntry.remove()] = currentTime
                    lastPersonState = ENTRY
                    lateTimeMovement = currentTime
                }
            }

        }
        

        // val answers = IntArray(arrivals.size)
        // answerPerPerson.forEach { entry ->
        //     answers[entry.key] = entry.value
        // }

        return newAnswers
    }
}
```