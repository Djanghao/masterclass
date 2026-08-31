# Go 97% hashmap

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/770347/](https://leetcode.com/problems/distant-barcodes/solutions/770347/)

---

```go
func rearrangeBarcodes(barcodes []int) []int {
	hash := map[int]int{}
	for _, v := range barcodes {
		hash[v]++
	}
	content := make([][]int, 0, len(hash))
	for k, v := range hash {
		content = append(content, []int{k, v})
	}
	sort.Slice(content, func(i, j int) bool {
		return content[i][1] > content[j][1]
	})
	index := 0
	for i := 0; i < len(barcodes); i+=2 {
		if content[index][1] == 0 {
			index++
		}
		content[index][1]--
		barcodes[i] = content[index][0]
	}
	for i := 1; i < len(barcodes); i+=2 {
		if content[index][1] == 0 {
			index++
		}
		content[index][1]--
		barcodes[i] = content[index][0]
	}
	return barcodes
}
```