# Golang : faster than 100.00% of Go online submissions

**Author:** zabit_karimov
**Votes:** 13
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/402364/](https://leetcode.com/problems/summary-ranges/solutions/402364/)

---

```
func summaryRanges(nums []int) []string {
    if len(nums) == 0 {
		return nil
	}
    var res []string
    var head int = 0
    
    for i := range nums {
        if (i < len(nums)-1 && nums[i]+1 == nums[i+1]) {
            continue
        }
        if head == i {
            res = append(res, strconv.Itoa(nums[i]))
        } else {
            tmp := strconv.Itoa(nums[head]) + "->" + strconv.Itoa(nums[i])
            res = append(res, tmp)
        }
        
        head = i + 1
    }
    
    return res
}
```