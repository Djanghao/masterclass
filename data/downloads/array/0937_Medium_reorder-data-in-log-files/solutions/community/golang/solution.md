# Simple, methodical Go solution, beats 100% time and space

**Author:** zerosandones
**Votes:** 8
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/360144/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/360144/)

---

1. Separate the letter logs from the number logs
2. Sort the letter logs, first on log content, then on identifier
3. Append the number logs to the letter logs

```
func reorderLogFiles(logs []string) []string {
    if len(logs) < 2 {
        return logs
    }
    
    var sortedStrLogs []string
    var sortedNumLogs []string
    for _, log := range logs {
        i := strings.Index(log, " ")
        if log[i+1] >= 'a' && log[i+1] <= 'z' {
            sortedStrLogs = append(sortedStrLogs, log)
        } else {
            sortedNumLogs = append(sortedNumLogs, log)
        }
    }
    
    sort.Slice(sortedStrLogs, func (i, j int) bool {
        iIndex := strings.Index(sortedStrLogs[i], " ")
        jIndex := strings.Index(sortedStrLogs[j], " ")
        
        iLog := sortedStrLogs[i][iIndex+1:]
        jLog := sortedStrLogs[j][jIndex+1:]
        if iLog == jLog {
            return sortedStrLogs[i] < sortedStrLogs[j]
        }
        return iLog < jLog
    })
    
    sortedStrLogs = append(sortedStrLogs, sortedNumLogs...)
    return sortedStrLogs
}
```