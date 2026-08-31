# [Go] O(2^n) Split in two, brute force one and binary search other

**Author:** sebnyberg
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1514894/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/1514894/)

---

Similar to many other examples here.

* The best possible partition minimizes the distance to half of the total sum.
* Brute-force collecting sums from the entire input is too expensive.
* Brute-forcing collecting sums from half of the input can be done in (2^15 ~= 32k operations). Cheap!
* The trick is to to split the input into two halves, then match `k` items from one half with `n-k` items from the other half.
* Possible sums for one half is sorted to enable binary search.
* If the total sum is not divisible by 2, then 1 needs to be added when calculating the optimal distance from a partition. This is because the search finds the partition closest to half of the total sum, and that side will be 1 closer than the other partition.

Approach:

1. Calculate total sum. The goal is to find a partition sum close to half of that sum.
2. Split nums into left (`nums[:n]`) and right `(nums[n:])` halves.
3. Collect all possible sums for either side. This could be optimized so that only one side is collected, but I opted for a non-optimal solution with less code.
4. Sort possible sums in the left side.
5. For each sum on the right side that uses `k` items, match it with a sum on the left side that uses `n-k` items using binary search. Keep track of the minimum distance to the center point (half of total sum).
6. If the total sum is odd, add 1 to the minimum partition distance.

### Complexity

* The total number of possible partitions on either side is `2^n`.
* The number of possible sums for a given `k` is the binomial coefficient (*n choose k*).
* The max number of permutations of size `k` is given by the largest binomial coefficient, also known as the central binomial coefficient. It's [upper-bound approximation](https://en.wikipedia.org/wiki/Central_binomial_coefficient#Approximations) is `4^(n/2)`.
* Sorting is done in O(n * 4^(n/2) * log(4^(n/2))) => O(4^(n/2))
* Searching is done in O(log(4^(n/2))) => O(n/2)
* This gives O(2^n * log(4^(n/2)) + 4^(n/2)) => O(2^n+4^(n/2)) => O(2^n)

```go
func minimumDifference(nums []int) int {
	n := len(nums) / 2
	left, right := nums[:n], nums[n:]
	leftSums := make([][]int, n+1)
	rightSums := make([][]int, n+1)
	var sum int
	for _, num := range nums {
		sum += num
	}
	collectPossibleSums(0, n, 0, 0, left, &leftSums)
	collectPossibleSums(0, n, 0, 0, right, &rightSums)
	for k := range leftSums {
		sort.Ints(leftSums[k])
	}
	halfSum := sum / 2
	minDist := math.MaxInt32
	// pick k numbers from rightSums
	for k := range rightSums {
		for _, rightSum := range rightSums[k] {
		    // and n-k numbers from the right side
			remains := n - k
			options := leftSums[remains]
			if len(options) == 0 {
				continue
			}
			// Search for closest match
			// recall that searchInts finds the place where the given number would
			// be inserted. That position can be both before and after the optimal
			// match, and beyond the size of the slice.
			idx := sort.SearchInts(options, halfSum-rightSum)
			
			if idx != len(options) {
				minDist = min(minDist, 2*abs(rightSum+options[idx]-halfSum))
			}
			if idx != 0 {
				minDist = min(minDist, 2*abs(rightSum+options[idx-1]-halfSum))
			}
		}
	}
	if abs(sum)%2 == 1 {
		minDist += 1
	}
	return minDist
}

func collectPossibleSums(i, n, nitems, currSum int, nums []int, output *[][]int) {
	if i == n {
		(*output)[nitems] = append((*output)[nitems], currSum)
		return
	}
	collectPossibleSums(i+1, n, nitems+1, currSum+nums[i], nums, output) // pick
	collectPossibleSums(i+1, n, nitems, currSum, nums, output)           // skip
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}

```