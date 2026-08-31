# fast go dp 0ms

**Author:** jian_lee
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/2136569/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/2136569/)

---

```
func dp(cnt [9]int, memo map[[9]int]int, left, bz int) int {
	if r, ok := memo[cnt]; ok {
		return r
	}

	r := 0
	for i := 1; i < bz; i++ {
		if cnt[i] > 0 {
			cnt[i]--
			z := dp(cnt, memo, (bz+left-i)%bz, bz)
			if left == 0 {
				z++
			}
		
			if r < z {
				r = z
			}
			cnt[i]++
		}
	}

	memo[cnt] = r
	return r
}

func maxHappyGroups(bz int, groups []int) int {
    cnt := [9]int{}
    res := 0
    
    for _, x := range groups {
        r := x % bz
        if r == 0 {
            res++
        } else if cnt[bz - r] > 0 {
            cnt[bz - r]--
            res++
        } else {
            cnt[r]++
        }
    }
    
    memo := make(map[[9]int]int, 0)
    return res + dp(cnt, memo, 0, bz)    
}