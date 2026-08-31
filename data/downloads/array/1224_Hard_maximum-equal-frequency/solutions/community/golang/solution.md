# Golang 70ms 100% solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/1596072/](https://leetcode.com/problems/maximum-equal-frequency/solutions/1596072/)

---

```go
func maxEqualFreq(nums []int) int {
	// numberFreq: key-number, value-freq
	numberFreq := make(map[int]int)
	for _, num := range nums {
		numberFreq[num]++
	}
	// freqCounter: key-freq, value-freq count
	freqCounter := make(map[int]int)
	for _, v := range numberFreq {
		freqCounter[v]++
	}
	for i := len(nums)-1; i >= 0; i-- {
		if helper(freqCounter) == true {
			return i+1
		}
		freqCounter[numberFreq[nums[i]]]--
		if freqCounter[numberFreq[nums[i]]] == 0 {
			delete(freqCounter, numberFreq[nums[i]])
		}
		numberFreq[nums[i]]--
		if numberFreq[nums[i]] != 0 {
			freqCounter[numberFreq[nums[i]]]++
		}
	}
	return 0
}

func helper(freq map[int]int) bool {
	if len(freq) == 1 {
		for k, v := range freq {
			return k == 1 || v == 1
		}
	}
	if len(freq) != 2 {
		return false
	}
	magic := make([][]int, 0, 2)
	for k, v := range freq {
		magic = append(magic, []int{k, v})
	}
	if magic[0][0] > magic[1][0] {
		magic[0], magic[1] = magic[1], magic[0]
	}
	if magic[0][0] == 1 && magic[0][1] == 1 {
		return true
	}
	if magic[1][0] - magic[0][0] == 1 && magic[1][1] == 1 {
		return true
	}
	return false
}
```