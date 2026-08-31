# DP | Go

**Author:** imoonkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4220671/](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4220671/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Straight forward DP. Just implement with one tip:
use `bit shift` as a second state param to represent number of the second operation have made. And this shift cannot exceed 14, because max coin is 10^4, which becomes to 0 after 14 shift.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*14)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maximumPoints(edges [][]int, coins []int, k int) int {
	adj:=make([][]int,len(coins))
	mem:=make([][]int,len(coins))
	for i,_:=range adj{
		adj[i]=make([]int,0)
		mem[i]=make([]int,15)
		for j,_:=range mem[i]{
			mem[i][j]=-1e9
		}
	}
	for _,e:=range  edges{
		adj[e[0]]=append(adj[e[0]],e[1])
		adj[e[1]]=append(adj[e[1]],e[0])
	}
	var f func(n int, shift int, parent int) int
	f = func(i int, shift int, parent int) int { 
		if shift>14{ // shift max =14
			shift=14
		}
		if mem[i][shift]>-1e9{
			return mem[i][shift]
		}
		c1:=(coins[i]>>shift)-k
		c2:=(coins[i]>>shift)/2
		for _,to:=range adj[i]{
			if to!=parent{
				c1+=f(to,shift,i)
				c2+=f(to,shift+1,i)
			}
		}
		mem[i][shift]=max(c1,c2)
		return mem[i][shift]
	}
	return f(0,0,-1)
}
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```