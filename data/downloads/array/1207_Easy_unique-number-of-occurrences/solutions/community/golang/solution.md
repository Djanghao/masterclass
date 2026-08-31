# My Golang Solution

**Author:** miryang
**Votes:** 6
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/394475/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/394475/)

---

```
func uniqueOccurrences(arr []int) bool {
 	var count = make(map[int]int)
	for i:=0; i<len(arr); i++{
        count[arr[i]]++
    }
	
    var result = make(map[int]int)
    for _,value:=range count{
        result[value]++
        if result[value]!=1 {
            return false
        }
    }
    return true
}
```
