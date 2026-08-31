# 👍Runtime 254 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/5048707/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/5048707/)

---

# Code
```
type MajorityChecker struct {
    digits  int
	presum  [][]int
	pos     map[int][]int 
}


func Constructor(arr []int) MajorityChecker {
    mc := MajorityChecker{
		digits:  15,
		presum:  make([][]int, len(arr)+1),
		pos:     make(map[int][]int),
	}

	for i := range mc.presum {
		mc.presum[i] = make([]int, mc.digits)
	}

	for i := 0; i < len(arr); i++ {
		n := arr[i]
		if _, ok := mc.pos[n]; !ok {
			mc.pos[n] = make([]int, 0)
		}
		mc.pos[n] = append(mc.pos[n], i)

		for j := 0; j < mc.digits; j++ {
			mc.presum[i+1][j] = mc.presum[i][j] + (n & 1)
			n >>= 1
		}
	}

	return mc
}


func (mc *MajorityChecker) Query(left int, right int, threshold int) int {
    ans := 0
	for i := mc.digits - 1; i >= 0; i-- {
		cnt := mc.presum[right+1][i] - mc.presum[left][i]
		b := 1
		if cnt >= threshold {
			b = 1
		} else if right-left+1-cnt >= threshold {
			b = 0
		} else {
			return -1
		}
		ans = (ans << 1) + b
	}

	list := mc.pos[ans]
	if list == nil {
		return -1
	}
	L := mc.floor(list, left-1)
	R := mc.floor(list, right)
	if R-L >= threshold {
		return ans
	}
	return -1
}

func (mc *MajorityChecker) floor(list []int, n int) int {
	return sort.Search(len(list), func(i int) bool {
		return list[i] > n
	})
}


/**
 * Your MajorityChecker object will be instantiated and called as such:
 * obj := Constructor(arr);
 * param_1 := obj.Query(left,right,threshold);
 */
```