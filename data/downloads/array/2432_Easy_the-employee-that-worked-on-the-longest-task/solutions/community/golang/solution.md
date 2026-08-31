# golang 3ms

**Author:** wupeiing
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/3959313/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/3959313/)

---

Use 2 parameters to store value of id and max length
replace the max id and max len when logs[i-1][1] > max length
```
func hardestWorker(n int, logs [][]int) int {
    maxId := logs[0][0]
    maxL := logs[0][1]
    for i:=1;i<len(logs);i++ {
        tmp := logs[i][1] - logs[i-1][1]
        if tmp > maxL {
            maxL = tmp
            maxId = logs[i][0]
        } else if tmp == maxL && logs[i][0] < maxId {
            maxId = logs[i][0]
        }
    }
    return maxId
}
```