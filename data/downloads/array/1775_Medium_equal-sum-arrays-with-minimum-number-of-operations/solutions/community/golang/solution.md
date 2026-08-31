# Go | Counting | O(n+m), O(1)

**Author:** laiweili
**Votes:** 1
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/2662674/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/2662674/)

---

The amount of difference between sums changed by one operation  is `[1, 5]`.

To minimize the number of operations, we start from 5 to 1.

n: Length of the input array `nums1`
m: Length of the input array `nums2`
Time: **O(n+m)**
Extra Space: **O(1)**

```
func minOperations(nums1 []int, nums2 []int) int {
	n := len(nums1)
	m := len(nums2)
	if n > 6*m || m > 6*n {
		return -1
	}

	sum1 := sumOf(nums1)
	sum2 := sumOf(nums2)

	cnts1 := cntsOf(nums1)
	cnts2 := cntsOf(nums2)

	if sum2 > sum1 {
		cnts1, cnts2 = cnts2, cnts1
		sum1, sum2 = sum2, sum1
	}

	diff := sum1 - sum2
	res := 0

	for d := 5; d >= 1; d-- {
		num := d + 1
		num2 := 6 - d

		cnt := cnts1[num] + cnts2[num2]

		if cnt*d >= diff {
			res += diff / d
			if diff%d > 0 {
				res++
			}
			break
		}

		diff -= cnt * d
		res += cnt
	}

	return res
}

func cntsOf(nums []int) []int {
	res := make([]int, 7)
	for i := range nums {
		res[nums[i]]++
	}
	return res
}

func sumOf(nums []int) int {
	res := 0
	for i := range nums {
		res += nums[i]
	}
	return res
}

```