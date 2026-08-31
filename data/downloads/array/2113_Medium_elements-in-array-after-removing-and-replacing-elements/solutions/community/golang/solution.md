# Golang Simple & Fast Solution 🚀

**Author:** fcmdias
**Votes:** 0
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/3675226/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/3675226/)

---

# Code
```
func elementInNums(nums []int, queries [][]int) []int {
    var res []int
		l := len(nums)

    for _, query := range queries {
        i := query[0] 
				var s []int

				// if array is length 3 then there will be 
				// 3 elements where elements are being 
				// removed from the left.
				// And then the following 3 will have elements
				// being removing from the right. 
				// See example bellow. 
				if i/l%2 == 0 {
					s = nums[i%l:l]
				} else {
					s = nums[:i%l]
				}
				if query[1] > len(s) - 1 {
					res = append(res, -1)
				} else {
					res = append(res, s[query[1]])
				}
    }

    return res
}


// 0  [1,2,3]
// 1  [1,2]
// 2  [1]

// 3  []
// 4  [3]
// 5  [2,3]

// 6  [1,2,3]
// 7  [1,2]
// 8  [1]

// 9  []
// 10 [3]
// 11 [2,3]
```