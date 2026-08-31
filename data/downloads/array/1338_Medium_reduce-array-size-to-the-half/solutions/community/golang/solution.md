# [Go] O(n) & O(n.log(n)) solution

**Author:** akash__gupta
**Votes:** 3
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319725/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319725/)

---

1. Solution with bucket sort: O(N)
```
func minSetSize(arr []int) int {
    counts := map[int]int{}
    maxCount := 0
    for _, num := range arr {
        counts[num] += 1
        maxCount = max(maxCount, counts[num])
    }
    
    buckets := make([]int, maxCount+1)
    for _, count := range counts {
        buckets[count]++
    }
    
    result, target := 0, len(arr)/2
    for target > 0 {
        val := target / maxCount
        if target % maxCount != 0 {
            val++
        }
        if buckets[maxCount] == 0 {
            maxCount--
            continue
        }
        increase := min(buckets[maxCount], val)
        result += increase
        target -= increase*maxCount
        maxCount--
    }
    return result
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```

2. Solution with sorting: O(n.log(n))

```
func minSetSize(arr []int) int {
	c := make([]int, 100001)
	r, l := 0, len(arr)

	for _, i := range arr {
		c[i]++
	}

	sort.Slice(c, func(i, j int) bool {
		return c[i] > c[j]
	})

	for i := 0; i < len(c) && c[i] != 0; i++ {
		l -= c[i]
		r++
		if l <= len(arr)/2 {
			return r
		}
	}
	
	return len(arr)
}