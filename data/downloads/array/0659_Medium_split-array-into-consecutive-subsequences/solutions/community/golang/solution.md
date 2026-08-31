# Go golang state machine solution. Time: O(N), Space: O(1)

**Author:** karsten_agathon
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2447118/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2447118/)

---

```
func isPossible(nums []int) bool {
    prevNum := math.MinInt32
    state := [3]int{}
    
    for len(nums) > 0 {
        num := nums[0]
        
        if prevNum+1 != num {
            if state[1] != 0 || state[2] != 0 {
                return false
            }
            
            state[0] = 0
        }
        
        count := 0
        
        for len(nums) > 0 && nums[0] == num {
            count++
            nums = nums[1:]
        }
        
        count -= state[1]+state[2]
        
        if count < 0 {
            return false
        }

        state[0], state[1], state[2] = state[1]+min(count, state[0]), state[2], max(0, count-state[0])
        
        prevNum = num
    }
    
    return state[1] == 0 && state[2] == 0
}

func min(i, j int) int {
    if i < j {
        return i
    }
    
    return j
}

func max(i, j int) int {
    if i > j {
        return i
    }
    
    return j
}
```