# Golang solution

**Author:** tjucoder
**Votes:** 6
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/1515381/](https://leetcode.com/problems/stock-price-fluctuation/solutions/1515381/)

---

```go
type StockPrice struct {
	hash             map[int]int
	list             []int
	currentPrice     int
	currentTimestamp int
}

func Constructor() StockPrice {
	return StockPrice{
		hash:             make(map[int]int),
		list:             make([]int, 0),
		currentPrice:     0,
		currentTimestamp: 0,
	}
}

func (sp *StockPrice) Update(timestamp int, price int) {
	// refresh current if need
	if timestamp >= sp.currentTimestamp {
		sp.currentTimestamp = timestamp
		sp.currentPrice = price
	}
	// remove oldPrice if need
	if oldPrice, exist := sp.hash[timestamp]; exist {
		l, r := 0, len(sp.list)-1
		for l <= r {
			m := (l + r) >> 1
			if sp.list[m] == oldPrice {
				copy(sp.list[m:], sp.list[m+1:])
				sp.list = sp.list[:len(sp.list)-1]
				break
			} else if sp.list[m] < oldPrice {
				l = m + 1
			} else {
				r = m - 1
			}
		}
	}
	// store/update price
	sp.hash[timestamp] = price
	// insert into list
	l, r := 0, len(sp.list)-1
	for l <= r {
		m := (l + r) >> 1
		if sp.list[m] <= price {
			l = m + 1
		} else {
			r = m - 1
		}
	}
	sp.list = append(sp.list, 0)
	copy(sp.list[l+1:], sp.list[l:])
	sp.list[l] = price
}

func (sp *StockPrice) Current() int {
	return sp.currentPrice
}

func (sp *StockPrice) Maximum() int {
	return sp.list[len(sp.list)-1]
}

func (sp *StockPrice) Minimum() int {
	return sp.list[0]
}
```