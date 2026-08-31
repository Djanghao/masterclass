# SSS: Simple Swift Solution ★★

**Author:** mishe1e
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1988349/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1988349/)

---

```
func nearestValidPoint(_ x: Int, _ y: Int, _ points: [[Int]]) -> Int {
	var (result, dMin) = (-1, Int.max)

	for (i, point) in points.enumerated() {
		let x1 = point[0], y1 = point[1]
		guard x == x1 || y == y1 else { continue }
		let d = abs(x - x1) + abs( y - y1)
		if d < dMin {
			dMin = d
			result = i
		}
	}

	return result
}
```

or

```
func nearestValidPoint(_ x: Int, _ y: Int, _ points: [[Int]]) -> Int {
    let notFoundIndexValue = -1
    var (result, mdMin) = (notFoundIndexValue, 0)

    for (i, point) in points.enumerated() {
        let (x1, y1) = (point[0], point[1])
        guard x == x1 || y == y1 else { continue }
        let md = abs(x - x1) + abs(y - y1)
        guard result != notFoundIndexValue else {
            (result, mdMin) = (i, md)
            continue
        }
        if md < mdMin { (result, mdMin) = (i, md) }
    }

    return result
}
```