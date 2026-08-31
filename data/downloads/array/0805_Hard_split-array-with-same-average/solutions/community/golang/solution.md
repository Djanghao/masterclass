# Meet in the middle || Binary Search

**Author:** alprose11
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/5785661/](https://leetcode.com/problems/split-array-with-same-average/solutions/5785661/)

---

# Intuition
This problem is an extension to [closest-subsequence-sum](https://leetcode.com/problems/closest-subsequence-sum/) problem. The only tricky part was to apply binary search with this data.

# Approach
1. If we generate all susbset and and find sum of subset and also keep count of no of elements in the susbset, then we can easily find average of all susbset.
2. With this(point 1) we have average(A), for average(B) we can find it by remaining sum/ remaining count.
3. Now to find average(A), we cannot generate all subset as it will give TLE(2^N), so we will be using Meet in the middle concept which is nothing but divide the array in two equal half and calculate subset sum for each half.
4. Now to combine each half to find average(A) we will apply binary seaech, to apply binary search we can not directly apply on sorted subset sum, so I have a map, for every count(no of ele in subset) I have a list of subset sum.
5. Binary search condition ->
    if currentSubsetAverage < remainingSubsetAverage
        I know that I can increase currentSubsetAverage by having a number with greater value with same no of count, so in that case I'll prefer to move right hand of the array, therefore -> ```lo = mid + 1```

    else -> ```hi = mid - 1```



# Code
```golang []
func splitArraySameAverage(nums []int) bool {
	totalSum := sum(&nums)
    l := len(nums)
	n1, n2 := nums[0:l/2], nums[l/2:l]
    m1, m2 := make(map[int][]int), make(map[int][]int)
	subArSum(0, 0, 0, &n1, m1)
	subArSum(0, 0, 0, &n2, m2)

	for k, _ := range m2 {
        sort.Ints(m2[k])
    }
	
    for size1, sum1 := range m1 {
        for _, curSum1 := range sum1 {
            for size2, sum2 := range m2 {
                if size1 + size2 == 0 {
                    continue
                }

                lo, hi := 0, len(sum2) - 1
                for lo <= hi {
                    mid := lo + (hi - lo) / 2
                    curSum2 := sum2[mid]
                    avg1, avg2 := avg(curSum1, size1, curSum2, size2, totalSum, l)
                    if avg1 == avg2 {
                        return true
                    } else if avg1 < avg2 {
                        lo = mid + 1
                    } else {
                        hi = mid - 1
                    }
                }
            }
        }
    } 

	return false
}

func avg(s1, c1, s2, c2, totalSum, totalLen int) (float64, float64) {
	curSum, curLen := (s1 + s2), (c1 + c2)
	remSum, remLen := totalSum-curSum, totalLen-curLen
	return float64(curSum) / float64(curLen), float64(remSum) / float64(remLen)
}

func sum(nums *[]int) int {
	sum := 0
	for _, num := range *nums {
		sum += num
	}
	return sum
}

func subArSum(ind, curSum, count int, nums *[]int, m map[int][]int) {
	if ind == len(*nums) {
		m[count] = append(m[count], curSum)
		return
	}
	subArSum(ind+1, curSum+(*nums)[ind], count+1, nums, m) //take
	subArSum(ind+1, curSum, count, nums, m)                //not take
}
```