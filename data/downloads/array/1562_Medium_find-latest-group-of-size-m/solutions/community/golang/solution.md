# Golang | O(N) Complexity & Mem

**Author:** linhduong
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/1665391/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/1665391/)

---

Here we represent segment by its (start, end) and (end, start). In this way we could easily search for a segment by start or end. Each step, we update segments by merging or adding new one.

```
func findLatestStep(arr []int, m int) int {
    s := newSegments(len(arr)) 
   
    latest, count := -1, 0
    for i, v := range arr {
        newSize, r1, r2 := s.glueOrNew(v-1)
        
        if newSize == m {
            count++
        }
        if r1 == m {
            count--
        }
        if r2 == m {
            count--
        }
        
        if count > 0 {
            latest = i + 1
        }
    }
    
    return latest
}

type segments struct {
   start []int
   end []int
}

func newSegments(n int) (s segments) {
    start, end := make([]int, n), make([]int, n)
    for i := range start {
        start[i], end[i] = -1, -1
    }
    
    s.start, s.end = start, end
    return
}

func (s *segments) glueOrNew(index int) (newSize, removedStart, removedEnd int) {
    var start, end int
    var ok1, ok2 bool
    
    if index+1 < len(s.start) {
        end = s.start[index+1]
        ok1 = end != -1
    }
   
    if index > 0 {
        start = s.end[index-1]    
        ok2 = start != -1    
    }
    
    if ok1 && ok2 { // glue it
        removedStart = end - index 
        removedEnd = index - start
      
        // removing
        s.end[index-1] = -1
        s.start[index+1] = -1
        
        s.start[start] = end
        s.end[end] = start
        
        newSize = end - start + 1
        return
    }
    
    if ok1 {
        removedStart = end - index 
        
        // removing
        s.start[index+1] = -1
        
        s.end[end] = index
        s.start[index] = end
        
        newSize = removedStart + 1 
        return
    }
    
    if ok2 {
        removedEnd = index - start
        
        // removing
        s.end[index - 1] = -1
        
        s.start[start] = index
        s.end[index] = start
        
        newSize = removedEnd + 1
        return
    }
    
    s.start[index] = index
    s.end[index] = index
    
    newSize = 1
    return
}
```