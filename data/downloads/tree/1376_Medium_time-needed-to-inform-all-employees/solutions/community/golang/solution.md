# go map and recursive solution

**Author:** hjoru
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/2707162/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/2707162/)

---

```
var urgentTime int
func numOfMinutes(n int, headID int, manager []int, informTime []int) int {
    urgentTime = 0
    managerMap := make(map[int][]int)
    for employeeId, managerId := range manager {
        managerMap[managerId] = append(managerMap[managerId], employeeId)
    }
    tracePath(headID, managerMap, informTime, 0)
    return urgentTime
}

func tracePath(employee int, managerMap map[int][]int, informTime []int, time int) {
    time += informTime[employee]
    if urgentTime < time {
        urgentTime = time
    }
    employeeIds, ok := managerMap[employee]
    if ok {
        for _, employeeId := range employeeIds {
            tracePath(employeeId, managerMap, informTime, time)
        }
    }
}