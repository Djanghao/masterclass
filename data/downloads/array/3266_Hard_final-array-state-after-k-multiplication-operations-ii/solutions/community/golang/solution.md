# The code is in Golang, I implemented the Heap tree completely from scratch

**Author:** hosseinhashemi
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5984225/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5984225/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []

var MOD = 1_000_000_007

type Pair struct {
	first  int
	second int
}

var arrayWithIndex []Pair
var maxNumber int

func minHeapifyDown(arr []Pair, i, n int) bool {
	leftIndex := i*2 + 1
	rightIndex := i*2 + 2
	minNumberIndex := i

	for true {
		if leftIndex < n && ((arr[minNumberIndex].first > arr[leftIndex].first) || (arr[minNumberIndex].first == arr[leftIndex].first && arr[minNumberIndex].second > arr[leftIndex].second)) {
			minNumberIndex = leftIndex
		}
		if rightIndex < n && ((arr[minNumberIndex].first > arr[rightIndex].first) || (arr[minNumberIndex].first == arr[rightIndex].first && arr[minNumberIndex].second > arr[rightIndex].second)) {
			minNumberIndex = rightIndex
		}
		if minNumberIndex != i {
			arr[i], arr[minNumberIndex] = arr[minNumberIndex], arr[i]
			i = minNumberIndex
			leftIndex = minNumberIndex*2 + 1
			rightIndex = minNumberIndex*2 + 2
		} else if i == n-1 {
			return true
		} else {
			return false
		}
	}

	return false
}

func maxHeapifyDown(arr []Pair, i, n int) {
	leftIndex := i*2 + 1
	rightIndex := i*2 + 2
	maxNumberIndex := i

	for true {
		if leftIndex < n && ((arr[maxNumberIndex].first < arr[leftIndex].first) || (arr[maxNumberIndex].first == arr[leftIndex].first && arr[maxNumberIndex].second < arr[leftIndex].second)) {
			maxNumberIndex = leftIndex
		}
		if rightIndex < n && ((arr[maxNumberIndex].first < arr[rightIndex].first) || (arr[maxNumberIndex].first == arr[rightIndex].first && arr[maxNumberIndex].second < arr[rightIndex].second)) {
			maxNumberIndex = rightIndex
		}
		if maxNumberIndex != i {
			arr[i], arr[maxNumberIndex] = arr[maxNumberIndex], arr[i]
			i = maxNumberIndex
			leftIndex = maxNumberIndex*2 + 1
			rightIndex = maxNumberIndex*2 + 2
		} else {
			break
		}
	}
}

func heapSort(arr []Pair) {
	n := len(arr)

	if n == 1 {
		return
	}

	for i := n/2 - 1; i >= 0; i-- {
		maxHeapifyDown(arr, i, n)
	}

	for n > 1 {
		n--
		arr[0], arr[n] = arr[n], arr[0]
		maxHeapifyDown(arr, 0, n)
	}

}

func initialize(arr []int) {
	arrayWithIndex = make([]Pair, 0)
	maxNumber = 0
	for index, value := range arr {
		if value > maxNumber {
			maxNumber = value
		}
		arrayWithIndex = append(arrayWithIndex, Pair{value, index})
	}

}

func output(arr []Pair) []int {
	var output = make([]int, len(arr))

	for _, value := range arr {
		output[value.second] = value.first
	}

	return output
}

func modularExp(base, exp int) int {
	result := 1

	base = base % MOD

	for exp > 0 {
		if exp%2 == 1 {
			result = (result * base) % MOD
		}

		exp = exp/2
		base = ((base % MOD) * (base % MOD)) % MOD
	}

	return result
}

func getFinalState(nums []int, k int, multiplier int) []int {
    initialize(nums)
	heapSort(arrayWithIndex)

    n := len(arrayWithIndex)
	for i := 0; i < k; i++ {
		if arrayWithIndex[0].first*multiplier > maxNumber || n == 1 || multiplier == 1{
			heapSort(arrayWithIndex)
			k1 := modularExp(multiplier, (k-i)/n)
			k2 := ((k1 % MOD) * (multiplier % MOD)) % MOD
			for j := 0; j < min(n, k-i); j++ {
				if j < ((k - i) % n) {
					arrayWithIndex[j].first = ((arrayWithIndex[j].first % MOD) * (k2 % MOD)) % MOD
				} else {
					arrayWithIndex[j].first = ((arrayWithIndex[j].first % MOD) * (k1 % MOD)) % MOD
				}
			}
			break
		} else {
			arrayWithIndex[0].first = (arrayWithIndex[0].first * multiplier)
			minHeapifyDown(arrayWithIndex, 0, len(arrayWithIndex))
		}
	}

    return output(arrayWithIndex);
}
```