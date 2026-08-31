# Golang solution

**Author:** jing_nan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/885982/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/885982/)

---

```go
func minOperationsMaxProfit(customers []int, boardingCost int, runningCost int) int {
    
    waiting := 0
    served := 0
    
    rotation := 1
    max := -1
    optimalRotation := -1
    for {
        newCustomers := waiting
        if rotation <= len(customers) {
            newCustomers = customers[rotation-1] + waiting 
        }
 
        if newCustomers >= 4 {
            waiting = newCustomers - 4
            served += 4
        } else {
            waiting = 0
            served += newCustomers
        }
        
        newProfit := calculateProfit(served, rotation, boardingCost, runningCost)
        if max < newProfit {
            max = newProfit
            optimalRotation = rotation
        }
        if rotation > len(customers) && waiting == 0 {
            break
        }
        rotation++

    }
    
    if max <= 0 {
        return -1
    }

    return optimalRotation
}

func calculateProfit(served, rotation, boardingCost, runningCost int) int {
    // fmt.Println(served, boardingCost, rotation, runningCost)
    return served*boardingCost - rotation * runningCost
}
```