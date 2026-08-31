# Golang | Union-Find

**Author:** gauravgola96
**Votes:** 2
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/1517553/](https://leetcode.com/problems/redundant-connection/solutions/1517553/)

---

```
func findRedundantConnection(edges [][]int) []int {
	if len(edges) == 0 {
		return []int{}
	}
	var parent = make([]int, len(edges)+1)
	for i:=0 ; i<=len(edges); i++{
		parent[i] = i
	}
	var result []int
	for i:=0; i<len(edges); i++{
		doUnion(edges[i][0], edges[i][1], parent, &result)
	}

	return result
}

func doUnion(i, j int, parents []int, result *[]int){
	u1 , u2 := doFind(i, parents), doFind(j , parents)
	if u1 != u2 {
		parents[u2] = u1
	}else{
		*result = append(*result,  i)
		*result = append(*result,  j)
	}

}

func doFind(i int, parent []int) int{
	if parent[i] == i{
		return i
	}
	return doFind(parent[i], parent)
}
```