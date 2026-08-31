# Go solution using golang's concurrency

**Author:** hosszukalman
**Votes:** 8
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/1735092/](https://leetcode.com/problems/richest-customer-wealth/solutions/1735092/)

---

```
// Accepted, Runtime: 0 ms, Memory Usage: 3.3 MB
// Runtime: 0 ms, faster than 100.00% of Go online submissions for Richest Customer Wealth.
func maximumWealth(accounts [][]int) (max int) {
	calculateWealth := func(account []int, sumCh chan int) {
		sum := 0
		for _, val := range account {
			sum += val
		}
		sumCh <- sum
	}

	for _, account := range accounts {
		sumCh := make(chan int)
		go calculateWealth(account, sumCh)
		accountWealth := <-sumCh
		if accountWealth > max {
			max = accountWealth
		}
		close(sumCh)
	}
	return
}
```