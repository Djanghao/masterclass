# Dynamic programming with Go

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/2599951/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/2599951/)

---

```
func findLength(nums1 []int, nums2 []int) int {
	arr := make([][]int, len(nums1)+1)

	for i := 0; i < len(arr); i++ {
		arr[i] = make([]int, len(nums2)+1)
	}
    
    result := 0
    
	for i := len(nums1) - 1; i > -1; i-- {
		for j := len(nums2) - 1; j > -1; j-- {
			if nums1[i] == nums2[j] {
                if arr[i+1][j+1] != 0 {
                    arr[i][j] = arr[i+1][j+1] + 1
                } else {
                    arr[i][j] = 1
                }
                
                result = max(result, arr[i][j])
			}
		}
	}
    
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
```