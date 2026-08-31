# [Go] greedy solution

**Author:** hotdog132
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/510697/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/510697/)

---

```
func maxEvents(events [][]int) int {
    sort.Slice(events, func(i, j int) bool {
        if events[i][1] == events[j][1] {
            return events[i][0] < events[j][0]
        }
        
        return events[i][1] < events[j][1]
    })
    
    m := make(map[int]bool)
    
    for _, e := range events {
        for i := e[0]; i <= e[1]; i++ {
            if _, ok := m[i]; !ok {
                m[i] = true
                break
            }
        }
    }
    
    return len(m)
}
```