# Go golang dp bitmask solution

**Author:** karsten_agathon
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/2457983/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/2457983/)

---

```
func maxStudents(seats [][]byte) int {
    dp := make([]int, 1 << len(seats[0]))
    
    for _, row := range seats {
        prevDP := dp
        dp = make([]int, 1<<len(row))
        
        rowMask := 0
        
        for i := range row {
            if row[i] =='.' {
                rowMask += 1<<i
            }
        }
        
        for mask := 0; mask < 1<<len(row); mask++ {
            if mask&rowMask != mask {
                continue
            }
            
            count := bits.OnesCount(uint(mask))
            
            for prevMask := 0; prevMask < 1<<len(row); prevMask++ {
                if mask<<1 & mask > 0 || prevMask<<1 & mask > 0 || prevMask>>1 & mask > 0 {
                    continue
                }
                
                dp[mask] = max(dp[mask], prevDP[prevMask]+count)
            }
        }
    }
    
    result := 0

    for i := 0; i < 1<<len(seats[0]); i++ {
        result = max(result, dp[i])
    }
    
    return result
}

func max(i, j int) int {
    if i > j {
        return i
    }
    
    return j
}
```