# Go | DP | O(2^n), O(2^n)

**Author:** laiweili
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5327937/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5327937/)

---

# Complexity\r
- Time complexity: $$O(2^n)$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(2^n)$$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
## Go\r
```Go\r
func circularPermutation(n int, start int) []int {\r
    res := permute(n)\r
\r
    idx := 0\r
    for i:=range res {\r
        if res[i] == start{\r
            idx = i\r
            break\r
        }\r
    }\r
\r
    for i:=0; i<idx; i++ {\r
        res = append(res, res[i])\r
    }\r
\r
    return res[idx:]\r
}\r
\r
func permute(n int) []int {\r
	res := make([]int, 1<<n)\r
	for i := 0; i < n; i++ {\r
		mirror(res, 1<<i)\r
		flip(res, i)\r
	}\r
	return res\r
}\r
\r
func mirror(nums []int, idx int) {\r
	for i := 0; i < idx; i++ {\r
		nums[idx+i] = nums[idx-i-1]\r
	}\r
}\r
\r
func flip(nums []int, idx int) {\r
	n := 1 << idx\r
	for i := 0; i < n; i++ {\r
		nums[i+n] |= 1 << idx\r
	}\r
}\r
```