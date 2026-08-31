# [GO] Use two heaps

**Author:** zhouhaibing089
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/2876347/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/2876347/)

---

# Intuition

This is a typical use case to find maximum and minimum elements with heap. The buy orders are the ones which we would like to find its highest price at any point of time, and thus is a maximum heap, and similarly, the sell orders are the ones which we would like to find its lowest price at any point of time, and thus is a minimum heap.

# Approach

1. For any new buy order, we look at: a) whethere there is any sell orders, if no, push into buy orders heap. b) is the sell order within the price range, if no, push into buy orders heap. c) if it is within the range, then simply update the amount in the corresponding sell order, and pop it up if it is 100% fullfilled. d) if this buy order is not 100% fullfilled, continue to the next loop
2. For any new sell order, we look at: a) whethere there is any buy orders, if no, push into sell orders heap. b) is the buy order within the price range, if no, push into sell orders heap. c) if it is within the range, then simply update the amount in the corresponding buy order, and pop it up if it is 100% fullfilled. d) if this sell order is not 100% fullfilled, continue to the next loop.

# Complexity
- Time complexity: $$O(n log n)$$

- Space complexity: $$O(n)$$

# Code
```
func getNumberOfBacklogOrders(orders [][]int) int {
    var sells = &sellAsc{}
	var buys = &buyDesc{}

	for i, o := range orders {
		if o[2] == 0 {
			// this is a buy order, find the smallest sell order
			for {

				if len(*sells) == 0 {
					heap.Push(buys, order{price: o[0], amount: o[1], term: i})
					break
				}
				peek := (*sells)[0]
				if peek.price > o[0] {
					heap.Push(buys, order{price: o[0], amount: o[1], term: i})
					break
				}
				// can be fullfilled
				if peek.amount > o[1] {
					(*sells)[0].amount = peek.amount - o[1]
					o[1] = 0
				} else {
					heap.Pop(sells)
					o[1] = o[1] - peek.amount
				}
				if o[1] == 0 {
					break
				}
			}
		} else {
			// this is a sell order, find the largest buy order
			for {
				if len(*buys) == 0 {
					heap.Push(sells, order{price: o[0], amount: o[1], term: i})
					break
				}
				peek := (*buys)[0]
				if peek.price < o[0] {
					heap.Push(sells, order{price: o[0], amount: o[1], term: i})
					break
				}
				// can be fullfilled
				if peek.amount > o[1] {
					(*buys)[0].amount = peek.amount - o[1]
					o[1] = 0
				} else {
					heap.Pop(buys)
					o[1] = o[1] - peek.amount
				}
				if o[1] == 0 {
					break
				}
			}
		}
	}

	var left int
	for _, o := range *buys {
		left = left + o.amount
		if left >= 1000000007 {
			left = left % 1000000007
		}
	}
	for _, o := range *sells {
		left = left + o.amount
		if left >= 1000000007 {
			left = left % 1000000007
		}
	}
	return left
}

type order struct {
	amount int
	price  int
	term   int
}

type sellAsc []order

func (s sellAsc) Len() int {
	return len(s)
}

func (s sellAsc) Less(i, j int) bool {
	if s[i].price < s[j].price {
		return true
	}
	if s[i].price > s[j].price {
		return false
	}
	return s[i].term < s[j].term
}

func (s sellAsc) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s *sellAsc) Push(x interface{}) {
	*s = append(*s, x.(order))
}

func (s *sellAsc) Pop() interface{} {
	old := *s
	n := len(old)
	o := old[n-1]
	*s = old[:n-1]
	return o
}

type buyDesc []order

func (b buyDesc) Len() int {
	return len(b)
}

func (b buyDesc) Less(i, j int) bool {
	if b[i].price > b[j].price {
		return true
	}
	if b[i].price < b[j].price {
		return false
	}
	return b[i].term < b[j].term
}

func (b buyDesc) Swap(i, j int) {
	b[i], b[j] = b[j], b[i]
}

func (b *buyDesc) Push(x interface{}) {
	*b = append(*b, x.(order))
}

func (b *buyDesc) Pop() interface{} {
	old := *b
	n := len(old)
	o := old[n-1]
	*b = old[:n-1]
	return o
}
```