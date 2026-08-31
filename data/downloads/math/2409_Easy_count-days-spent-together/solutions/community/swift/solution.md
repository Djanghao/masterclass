# Beats 100% of other submissions' runtime

**Author:** MrPaschenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/4574408/](https://leetcode.com/problems/count-days-spent-together/solutions/4574408/)

---

![Pic](./images/0.jpeg)

```
class Solution {
    func countDaysTogether(
        _ arriveAlice: String, 
        _ leaveAlice: String, 
        _ arriveBob: String, 
        _ leaveBob: String
        ) -> Int {
        var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        func getNumberOfDayFromString(_ string: String) -> Int {
            var date = string.split(separator: "-").map{ Int($0)! }

            if date[0] == 1 {
                return date[1]
            }
            if date[0] == 2 {
                return daysInMonths[0] + date[1]
            }

            var numberOfDay = 0
            var lastIndex = date[0] - 2
            for i in 0...lastIndex {
                numberOfDay += daysInMonths[i]
            }
            numberOfDay += date[1]
            return numberOfDay
        }

        var arriveAliceDay = getNumberOfDayFromString(arriveAlice)
        var leaveAliceDay = getNumberOfDayFromString(leaveAlice)
        var arriveBobDay = getNumberOfDayFromString(arriveBob)
        var leaveBobDay = getNumberOfDayFromString(leaveBob)

        if leaveAliceDay < arriveBobDay || leaveBobDay < arriveAliceDay {
            return 0
        }
        if arriveBobDay >= arriveAliceDay && leaveBobDay <= leaveAliceDay {
            return leaveBobDay - arriveBobDay + 1
        }
        if arriveAliceDay > arriveBobDay && leaveAliceDay < leaveBobDay {
            return leaveAliceDay - arriveAliceDay + 1
        }
        if arriveBobDay > arriveAliceDay && leaveAliceDay < leaveBobDay {
            return leaveAliceDay - arriveBobDay + 1
        }
        if arriveAliceDay > arriveBobDay && leaveBobDay < leaveAliceDay {
            return leaveBobDay - arriveAliceDay + 1
        }
        return 0
    }
}
```