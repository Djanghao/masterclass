# Solution based on min and max functions

**Author:** RedaSen
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5105862/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5105862/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If you take all possibles scenarios, you will find we will end-up by having this rule
$$min(end1,end2) >= start(max(start1,start2))$$

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```
func haveConflict(event1 []string, event2 []string) bool {
    minEnd := min(getMinutes(event1[1]),getMinutes(event2[1]))
    maxStart := max(getMinutes(event1[0]),getMinutes(event2[0]))
    return minEnd >= maxStart
}
func getMinutes(event string) int {
    // hh:mm
    hours := int(event[0]-'0') * 10 + int(event[1]-'0')
    minutes := int(event[3]-'0') * 10 + int(event[4]-'0')
    return hours * 60 + minutes
}
/**

["06:35","07:15"]
["16:41","19:36"]
"07:35" >= "16:41"

end of the first >= start of the other
min(end1,end2) >= start(max(start1,start2))
2 >= 2
event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
1:15---------2:00
             2:00-----------3:00

             2:00-----------3:00
1:15---------2:00

event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
min(end1,end2) >= start(max(start1,start2))
2 >= 1:20
1:00---------2:00
     1:20-----------3:00

     1:20-----------3:00
1:00---------2:00

     
event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
min(end1,end2) >= start(max(start1,start2))
4 >= 3:30 ==> true



    3:00-------------5:00
        3:30-----4:00

        3:30-----4:00
    3:00-------------5:00

["10:00","11:00"], event2 = ["14:00","15:00"]
min(end1,end2) >= start(max(start1,start2))
10------11
            14-----15
11 >= 14 => false
        

**/
```