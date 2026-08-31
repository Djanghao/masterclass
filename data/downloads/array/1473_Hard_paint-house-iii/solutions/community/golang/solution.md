# Golang | Recursion | 3D - DP

**Author:** ansuraj
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/2281300/](https://leetcode.com/problems/paint-house-iii/solutions/2281300/)

---

```
func minCost(houses []int, cost [][]int, m int, n int, target int) int {
    
    // houseIndex, colouredIndex, target
    memory := make([][][]int, m+1)
    
    for i:=0; i<=m; i++ {
        memory[i] = make([][]int, n+1)
        
        for j:=0; j<=n; j++ {
            memory[i][j] = make([]int, target+1)
        }
    }
    
    // start from first house index and start coloring houses, note to set the last-color-index as 0
    result := helper(houses, cost, 0, 0, target, memory)
    if result == math.MaxInt32 {
        return -1
    }
    return result
}

func helper(houses []int, cost [][]int, houseIndex, lastColourIndex, target int, memory [][][]int) int {
    
    if target < 0 {
        return math.MaxInt32
    }
    
    if houseIndex >= len(houses) {
        
        if target == 0 {
            // We have covered all the houses and the target neighbourhood has been fulfilled
            return 0
        } else {
            // We have covered all the houses and the target neibourhood has not been reached
            return math.MaxInt32
        }
    }
    
    // check if the house is already painted, then just skip to the next house index and update the target
    if houses[houseIndex] != 0 {
        
        if houses[houseIndex] == lastColourIndex {
            
            return helper(houses, cost, houseIndex+1, lastColourIndex, target, memory)
        } else {
            
            return helper(houses, cost, houseIndex+1, houses[houseIndex], target-1, memory)
        }
    }
    
    // if the value is already computed and in memory, just return it
    if memory[houseIndex][lastColourIndex][target] > 0 {
        return memory[houseIndex][lastColourIndex][target]
    }
    
    result := math.MaxInt32
    // loop through the colours for a house-index and choose the minimum
    for i:=0; i<len(cost[houseIndex]); i++ {
        
        newColorIndex := i+1
        newTarget := target
        
        if lastColourIndex != newColorIndex {
            newTarget = target - 1 
        }
        
        remainingCostOfHouses := helper(houses, cost, houseIndex+1, newColorIndex, newTarget, memory)
        
        result = min(cost[houseIndex][i] + remainingCostOfHouses, result)
    }
    
    // store it in memory for future computations
    memory[houseIndex][lastColourIndex][target] = result
    
    return result
}

func min(a,b int) int {
    if a < b {
        return a
    }
    
    return b
}