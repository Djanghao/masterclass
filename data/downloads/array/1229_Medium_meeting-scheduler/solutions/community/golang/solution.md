# [Simple Golang solution] - Beats 100%

**Author:** lisa1001
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/865697/](https://leetcode.com/problems/meeting-scheduler/solutions/865697/)

---

```
func minAvailableDuration(slots1 [][]int, slots2 [][]int, duration int) []int {
    
    sort.Slice(slots1, func(p, q int) bool {  
      return slots1[p][0] < slots1[q][0] }) 
    
    sort.Slice(slots2, func(p, q int) bool {  
      return slots2[p][0] < slots2[q][0] }) 
    
    var index1, index2, start, end int
    
    // while both calendars still have time slots to be compared
    for index1 < len(slots1) && index2 < len(slots2) {
        
        // the max of the two start time gives us the overlapping start time
        start = int(math.Max(float64(slots1[index1][0]), float64(slots2[index2][0])))
        
        // the min of the two end time gives us the overlapping end time
        end = int(math.Min(float64(slots1[index1][1]), float64(slots2[index2][1])))
        
        // we only care for the slot between the start and end time >= duration
        if end - start >= duration {
            return []int{start, start+duration}
        }
        
        // if slots1[current][end time] < slots2[current][end time] then
        // slot1[current][end time] < slot2[next][start time] since the list is sorted by start time and
		// "It is guaranteed that no two availability slots of the same person intersect with each other"
        // which mean current slot1 will not have any overlaps with the next slot2 so we move to index1++
        if slots1[index1][1] < slots2[index2][1] {
            index1++
        }else {
            index2++
        }
    }
    return []int{}
}