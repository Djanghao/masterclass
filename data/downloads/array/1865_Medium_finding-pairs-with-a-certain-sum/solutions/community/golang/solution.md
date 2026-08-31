# Go Runtime: 375 ms, faster than 75.00%

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/2130377/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/2130377/)

---

```
type FindSumPairs struct {
    n1 []int
    n2 []int
    m map[int]int
}

func Constructor(nums1 []int, nums2 []int) FindSumPairs {
    m := make(map[int]int)
    
    for _, num := range nums2 {
        m[num]++
    }
    
	return FindSumPairs{
		n1: nums1,
		n2: nums2,
        m : m,
	}
}


func (this *FindSumPairs) Add(index int, val int)  {
    if index > len(this.n2) - 1 {
        return
    }
    
    this.m[this.n2[index]]--
    this.n2[index] += val
    this.m[this.n2[index]]++
}


func (this *FindSumPairs) Count(tot int) int {
    var res int
    
    for _, num := range this.n1 {
        if value, ok := this.m[tot - num]; ok {
            res += value
        }
    }
    
    return res
}


/**
 * Your FindSumPairs object will be instantiated and called as such:
 * obj := Constructor(nums1, nums2);
 * obj.Add(index,val);
 * param_2 := obj.Count(tot);
 */
```