# Go Greedy clear solution

**Author:** qube
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/2223784/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/2223784/)

---

```
func maximumUnits(boxTypes [][]int, truckSize int) int {
    sort.Slice(boxTypes, func (i, j int) bool {
        return boxTypes[i][1] > boxTypes[j][1]
    })
    
    units := 0
    for _, boxType := range boxTypes {
        taken := Min(boxType[0], truckSize)
        units += taken*boxType[1]
        truckSize -= taken
        if truckSize == 0 { break }
    }
    return units
}

func Min(a, b int) int { if a < b { return a }; return b }
```