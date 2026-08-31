# Go solution

**Author:** pinkpepsi
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/1622433/](https://leetcode.com/problems/design-log-storage-system/solutions/1622433/)

---

Simple lexicographic comparisons instead of converting to integer first. Brought down from 64ms to 12ms.

```
import (
    "strings"
)

type LogSystem struct {
    Logs map[int] string
}


func Constructor() LogSystem {
    return LogSystem{
        Logs: make(map[int] string, 0),
    }
}


func (this *LogSystem) Put(id int, timestamp string)  {
    this.Logs[id] = timestamp
}


func (this *LogSystem) Retrieve(start string, end string, granularity string) (results []int) {
    var granIdx int
    switch granularity {
        case "Year": 
            granIdx = 1
        case "Month":
            granIdx = 2
        case "Day":
            granIdx = 3
        case "Hour":
            granIdx = 4
        case "Minute":
            granIdx = 5
        case "Second":
            granIdx = 6
    }
    
    startTS, endTS := convert(start, granIdx), convert(end, granIdx)

    for id, timestamp := range this.Logs {
        ts := convert(timestamp, granIdx)
        if startTS <= ts && ts <= endTS {
            results = append(results, id)
        }
    }
    
    return results
}

func convert(timestamp string, granularity int) (result string) {
    ts := strings.Split(timestamp, ":")
    result = strings.Join(ts[:granularity], "")
    
    return result
}
```