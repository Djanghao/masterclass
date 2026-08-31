# Golang Solution. Runtime: 0ms Memory: 2.8Mb

**Author:** ShrimpF
**Votes:** 2
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/378098/](https://leetcode.com/problems/distance-between-bus-stops/solutions/378098/)

---

basic idea:
[counter clockwise distance] = [sum of distance] - [clockwise distance]

this fomula meas
clockwise distance = sum(distance[start:end])
sum of distance = sum(distance)
counter = sum(distance) - sum(distance[start:end])

```
func distanceBetweenBusStops(distance []int, start int, destination int) int {
	if len(distance) == 0 || start == destination {
		return 0
	}

	if start > destination {
		tmp := start
		start = destination
		destination = tmp
	}

	clockwise := sum(distance[start:destination])
	counterClockwise := sum(distance) - clockwise
	if clockwise < counterClockwise {
		return clockwise
	}
	return counterClockwise
}

func sum(ar []int) int {
	var sum int
	for _, v := range ar {
		sum += v
	}
	return sum
}
```