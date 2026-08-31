# [Go] Optimized bit operations

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/image-overlap/solutions/2750276/](https://leetcode.com/problems/image-overlap/solutions/2750276/)

---

```go
func largestOverlap(img1 [][]int, img2 [][]int) int {
	n := len(img1)

	// Convert images to bitmaps
	var image1 [30]uint32
	var image2 [30]uint32
	for i := range img1 {
		for j := range img1 {
			image1[i] = (image1[i] << 1) | uint32(img1[i][j])
			image2[i] = (image2[i] << 1) | uint32(img2[i][j])
		}
	}

	// For each possible shift in x and y axis, try it and count common bits
	var res int
	for dy := -n + 1; dy < n; dy++ {
		for dx := 0; dx < n; dx++ {
			var left int
			var right int
			for i := 0; i < n; i++ {
				j := i + dy
				if j < 0 || j >= n {
					continue
				}
				// Note: we do not need to worry about going out of bounds
				// because the other image could not share those bits.
				left += bits.OnesCount32(image2[i] & (image1[j] << dx))
				right += bits.OnesCount32(image2[i] & (image1[j] >> dx))
			}
			res = max(res, left)
			res = max(res, right)
		}
	}
	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```