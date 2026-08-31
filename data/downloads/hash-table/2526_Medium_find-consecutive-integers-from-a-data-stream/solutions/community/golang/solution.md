# Golang simple O(n) solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3968563/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3968563/)

---

# Code
```go
type DataStream struct {
	value int
	needRepeat int
	currRepeat int
}


func Constructor(value int, k int) DataStream {
	return DataStream{
		value: value,
		needRepeat: k,
		currRepeat: 0,
	}
}


func (ds *DataStream) Consec(num int) bool {
	if num == ds.value {
		ds.currRepeat++
		return ds.currRepeat >= ds.needRepeat
	}
	ds.currRepeat = 0
	return false
}
```