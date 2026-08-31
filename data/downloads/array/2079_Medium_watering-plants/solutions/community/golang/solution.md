# Go - Readable Solution

**Author:** MichaelGov-ctrl
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/4796718/](https://leetcode.com/problems/watering-plants/solutions/4796718/)

---

# Code
```
func wateringPlants(plants []int, capacity int) int {
    steps, waterCan := 0, capacity
    for distance, plantThirst := range plants {
        steps+=1
        if plantThirst <= waterCan {
            waterCan-=plantThirst
        } else {
            steps+=distance*2
            waterCan=capacity-plantThirst
        }
    }
    return steps
}
```