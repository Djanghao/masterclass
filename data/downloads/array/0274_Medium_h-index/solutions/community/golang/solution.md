# 8ms Golang Solution with O(n) space & O(n) time

**Author:** linfongi
**Votes:** 3
**Link:** [https://leetcode.com/problems/h-index/solutions/70920/](https://leetcode.com/problems/h-index/solutions/70920/)

---

    func hIndex(citations []int) int {
    	m, max := make(map[int]int), 0
    	for _, v := range citations {
    		m[v]++
    	}
    	for i, h := 0, len(citations); i <= h; i++ {
    		max = i
    		h = h - m[i]
    	}
    	return max
    }