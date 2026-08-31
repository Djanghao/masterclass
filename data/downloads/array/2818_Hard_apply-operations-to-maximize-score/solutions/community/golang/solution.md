# 👍Runtime 303 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/5160437/](https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/5160437/)

---

# Code
```
const MOD = 1e9 + 7

type MyNum struct {
	value int
	left  int
	right int
	idx   int
	score int
}

// Function to calculate the number of distinct prime factors
func score(x int) int {
	count := 0
	if x%2 == 0 {
		count++
		for x%2 == 0 {
			x /= 2
		}
	}
	for i := 3; i <= int(math.Sqrt(float64(x))); i += 2 {
		if x%i == 0 {
			count++
			for x%i == 0 {
				x /= i
			}
			if x == 1 {
				return count
			}
		}
	}
	if x > 2 {
		count++
	}
	return count
}

// Function to calculate x^p % MOD
func power(x, p int) int64 {
	if p == 0 {
		return 1
	}
	ans := int64(1)
	if p&1 == 1 {
		ans = int64(x)
	}
	res := power(x, p>>1)
	res = (res * res) % MOD
	ans = (ans * res) % MOD
	return ans
}

func maximumScore(nums []int, k int) int {
	n := len(nums)
	d := make([]MyNum, n)

	for i := 0; i < n; i++ {
		d[i] = MyNum{value: nums[i], left: i + 1, right: n - i, idx: i, score: score(nums[i])}
	}

	stack := []int{}
	for i := 0; i < n; i++ {
		for len(stack) > 0 && d[stack[len(stack)-1]].score < d[i].score {
			idx := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			d[idx].right = i - idx
		}
		stack = append(stack, i)
	}
	stack = []int{}
	for i := n - 1; i >= 0; i-- {
		for len(stack) > 0 && d[stack[len(stack)-1]].score <= d[i].score {
			idx := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			d[idx].left = idx - i
		}
		stack = append(stack, i)
	}

	sort.Slice(d, func(i, j int) bool {
		return d[i].value > d[j].value
	})

	ans := int64(1)
	for i := 0; i < n && k > 0; i++ {
		ops := d[i].right * d[i].left
		realOps := min(k, ops)
		k -= realOps
		ans = ans * power(d[i].value, realOps) % MOD
	}

	return int(ans)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```