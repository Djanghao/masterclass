# Rust solution

**Author:** blackcrow01
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/2111458/](https://leetcode.com/problems/meeting-rooms/solutions/2111458/)

---

```
impl Solution {
    pub fn can_attend_meetings(intervals: Vec<Vec<i32>>) -> bool {
        let mut meetings = intervals.clone();
        meetings.sort();
       
        for i in 1..meetings.len() {
            let (meeting1, meeting2) = (&meetings[i-1], &meetings[i]);
            let (start1, end1) = (meeting1[0], meeting1[1]);
            let (start2, end2) = (meeting2[0], meeting2[1]);
            
            if end1 > start2 {
                return false;
            }
        } 
        true
        
    }
}
```