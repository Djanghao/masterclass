# 1396. Design Underground System, Go / Golang solution (short)

**Author:** joric
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/1119098/](https://leetcode.com/problems/design-underground-system/solutions/1119098/)

---

I solved this problem way back then at weekly contest 182 in Python (took maybe a few minutes), and it popped up today in a daily contest, so this is my Golang version (it accumulates time as [sum, count] so GetAverageTime is constant). I was going to use typeless interface (Pair struct) as in Python but ended up with typed structures.

```go
type StationTime struct {
	station string
	time    int
}

type UndergroundSystem struct {
	ids map[int]StationTime
	avg map[[2]string][2]int
}

func Constructor() UndergroundSystem {
	return UndergroundSystem{map[int]StationTime{}, map[[2]string][2]int{}}
}

func (this *UndergroundSystem) CheckIn(id int, stationName string, t int) {
	this.ids[id] = StationTime{stationName, t}
}

func (this *UndergroundSystem) CheckOut(id int, stationName string, t int) {
	start := this.ids[id]
	delete(this.ids, id)
	key := [2]string{start.station, stationName}
	v := this.avg[key]
	this.avg[key] = [2]int{v[0] + t - start.time, v[1] + 1}
}

func (this *UndergroundSystem) GetAverageTime(startStation string, endStation string) float64 {
	v := this.avg[[2]string{startStation, endStation}]
	return float64(v[0]) / float64(v[1])
}
```

"Pythonic" solution with interfaces is about 2x slower:

```go
type UndergroundSystem [2]map[interface{}]interface{}
func Constructor() UndergroundSystem {
	return [2]map[interface{}]interface{}{{}, {}}
}
func (us *UndergroundSystem) CheckIn(i, s, t interface{}) {
	us[0][i] = [2]interface{}{s, t}
}
func (us *UndergroundSystem) CheckOut(i, s, t interface{}) {
	place := us[0][i].([2]interface{})
	route := [2]string{place[0].(string), s.(string)}
	state, _ := us[1][route].([2]int)
	us[1][route] = [2]int{state[0] + t.(int) - place[1].(int), state[1] + 1}
}
func (us *UndergroundSystem) GetAverageTime(s, e string) float64 {
	state := us[1][[2]string{s, e}].([2]int)
	return float64(state[0]) / float64(state[1])
}
```
