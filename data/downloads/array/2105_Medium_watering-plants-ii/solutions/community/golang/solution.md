# Ez solution | 100% Beats

**Author:** azenshpis
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/5852258/](https://leetcode.com/problems/watering-plants-ii/solutions/5852258/)

---

# Complexity
O(n)
O(1)

# Code
```golang []
func minimumRefill(plants []int, capacityA int, capacityB int) int {
    l := len(plants)
    if l < 3 {
        return 0
    }

    res := 0
    currA, currB := capacityA, capacityB
    i, j := 0, l-1
    for i < j {       
        if currA < plants[i] {
            res += 1
            currA = capacityA
        }
        if currB < plants[j] {
            res += 1
            currB = capacityB
        }

        currA -= plants[i]
        currB -= plants[j]

        j -= 1
        i += 1 
    }

    if l % 2 == 1 {
        if currA < plants[i] && currB < plants[i] {
            res += 1
        }
    }
    
    return res
}
```