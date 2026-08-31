# Go (golang) implemented per Editorial = 66% / 66%

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3896609/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3896609/)

---

# Approach
Implemented per Editorial guidance.

# Code
```
func houseCount(s Street, k int) int {
    stepsToFirstOpen, distFromFirst, numSteps := 0, 0, 0
    foundFirst := false

    k *= 2
    for numSteps <= k {
        if s.IsDoorOpen() {
            if foundFirst {
                // already skipped first open door,
                // so update distFromFirst & close the door
                distFromFirst = numSteps - stepsToFirstOpen
                s.CloseDoor()
            } else {
                // this is the first open door found,
                // so skip it and record index as stepsToFirstOpen
                stepsToFirstOpen = numSteps
                foundFirst = true
            }
        }
        // move to the next house on the right
        s.MoveRight()
        numSteps++
    }
    return distFromFirst
}
```