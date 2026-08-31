# Scala Solution + Explanation

**Author:** imagiraffe123
**Votes:** 3
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/506569/](https://leetcode.com/problems/meeting-rooms/solutions/506569/)

---

**Imperative Style**
```scala
object Solution {
    def canAttendMeetings(intervals: Array[Array[Int]]): Boolean = {
        if (intervals.isEmpty) true
        else {
            val sorted = intervals.sortWith(_.head < _.head)

            for (i <- 1 until sorted.length) {
                val curr = sorted(i)
                val prev = sorted(i-1)
                if (prev.last > curr.head) return false
            }
            
            true
        }
    }
}
```

**Functional Style**
```scala
object Solution {
    def canAttendMeetings(intervals: Array[Array[Int]]): Boolean = {
		val sorted = intervals.sortWith(_.head < _.head)

		(1 until sorted.length).forall(i => {
			val curr = sorted(i)
			val prev = sorted(i-1)
			prev.last <= curr.head
		})
    }
}
```

**Example**

Sort the meetings by start time. Once you have them in order, you can compare if one meeting runs into the next. Ex.

`[[0,30], [40,50], [100, 200], [150, 400]]`

Does `[0,30]` conflict with any other meeting? 
* This is the first meeting of the day, so we have nothing before it to check.
* We check  the next meeting, and it does not conflict. `[40,50]` has a start time of `40`, which is after the end time of `30`.
* Since the meetings are sorted in ascending start times, we know all other meetings to the right will have start times of `>40`. Therefore, none of them will conflict with the `[0, 30]` meeting.

Does `[40, 50]` conflict with any other meeting? 
* It can't conflict with meetings to its left, since we already checked them.
* Next, we check the meeting directly after at `[100, 200]`. The start time of `100` is after the end time of `50`. Therefore, there is no conflict.
* Since the meetings are sorted in ascending order, the rest of the meetings in the array will have start times of `>100`. Therefore, there is no conflict with those.

Does `[100, 200]` conflict with any other meeting?
* It can't conflict with meetings to its left, since we already checked them.
* We check the next meeting, and it does conflict. `[150, 400]` has a start time of `150`, which is before the endtime of `200`.

Therefore, it is impossible to attend all meetings.

**Runtime: O(n)**
**Spacetime: O(1)**