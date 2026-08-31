# Check if Integer can be divided into some m and m+1 | Go

**Author:** imoonkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194436/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194436/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. count frequency of each distinct integer in `nums`.
2. each group has `m` or `m+1` integers, that is, a frequency should be `f=a*m+b*(m+1)`
2. check if every frequency can be written as the formula above, by trying `m` from large to small
3. the first `m` valid is accepted as result
4. how to check:
    `f` can be written as sum of  `b*(m+1)` and a `remain = (f%(m+1))`, and `0<= remain <=m`, if `remain` smaller than `m`, we can borrow a 1 from each `m+1` in those `b*(m+1)`. After borrowing, `m+1` turns into `m`, which also valid. 
If `remain` can reach `m` then this `m` is valid for `f`.
if not enough `m+1` to borrow, then this `m` is invalid, we should try next `m`
# Approach
<!-- Describe your approach to solving the problem. -->
in short: 
enough to borrow -> valid, 
not enough -> invalid
```
f= m+1 + m+1 + m+1 + m+1 + ... + remain
== m+1 + m+1 + m   + m   + ... + remain+borrow
remain + borrow = m
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N*min(freq))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minGroupsForValidAssignment(nums []int) int {
	freq := map[int]int{}
	mnFreq := len(nums)
	for _, v := range nums {
		freq[v]++
	}
	for _, v := range freq {
		mnFreq=min(mnFreq,v)

	}

	check := func(m int) (bool, int) {
		sum := 0
		for _, v := range freq {
			remain := v % (m+1)
			cntM1:=v/(m+1)
			if (remain!=0 && m-remain>cntM1){
				return false, 0
			}
			if remain!=0{
				cntM1++
			}
			sum+=cntM1
		}
		return true, sum
	}

	
	for m := mnFreq; m >= 1; m-- {
		if ok, sm := check(m); ok {
			return sm
		}
	}
	return len(nums)
}
func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}
```