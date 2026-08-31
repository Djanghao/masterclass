# Go | DP | Beat 100%

**Author:** linhduong
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/1628650/](https://leetcode.com/problems/stone-game-vii/solutions/1628650/)

---

```
func stoneGameVII(stones []int) int {
    sum := buildPrefixSum(stones) 
    
    var (
        prev, current [2][]int
        n = len(stones)
    )
    
	// prev and current is pivot dp slice which store difference of each state
	//
	// 0: Alice move
	// 1: Bob move
    prev[0], prev[1] = make([]int, n), make([]int, n)
    current[0], current[1] = make([]int, n), make([]int, n)
   
    for ln := 2; ln <= n; ln++ {
        for i := 0; i <= n - ln; i++ {
            s1 := rangeSum(sum, i, i + ln - 2)
            s2 := rangeSum(sum, i + 1, i + ln - 1)
            
			// 0: Alice move -> try to maximize the difference, she knows that next move is Bob
            current[0][i] = max(prev[1][i] + s1, prev[1][i+1] + s2)
			
			// 1: Bob move -> try to minimize the difference, he knows that next move is Alice
            current[1][i] = min(prev[0][i] - s1, prev[0][i+1] - s2)
        }
        
        prev, current = current, prev
    } 
    
    return prev[0][0]
}

func buildPrefixSum(v []int) (sum []int) {
    sum = make([]int, len(v))
    
    s := 0
    for i := range v {
        s += v[i] 
        sum[i] = s
    }
    
    return
}

// inclusive
func rangeSum(prefixSum []int, from, to int) int {
    if from == 0 {
        return prefixSum[to]
    }
    return prefixSum[to] - prefixSum[from - 1]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```