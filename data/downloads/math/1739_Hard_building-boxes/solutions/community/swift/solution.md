# [PHP, Swift, JavaScript] Easy and faster solutions

**Author:** rozinko
**Votes:** 0
**Link:** [https://leetcode.com/problems/building-boxes/solutions/1032612/](https://leetcode.com/problems/building-boxes/solutions/1032612/)

---

**PHP:**
```
function minimumBoxes($n) {
	$s = 0;
	$x = 0;
	$next = 1;
	while ($s + $x + $next <= $n) {
		$s += $x + $next;
		$x += $next;
		$next++;
	}
	$next = 1;
	while ($s < $n) {
		$s += $next;
		$next++;
		$x++;
	}
	return $x;
}
```
**Swift:**
```
func minimumBoxes(_ n: Int) -> Int {
	var s = 0, x = 0, next = 1
	while s+x+next <= n {
		s += x + next
		x += next
		next += 1
	}
	next = 1
	while s < n {
		s += next
		next += 1
		x += 1
	}
	return x
}
```
**JavaScript:**
```
var minimumBoxes = function (n) {
    let s = 0, x = 0, next = 1
    while (s + x + next <= n) {
        s += x + next
        x += next
        next++
    }
    next = 1
    while (s < n) {
        s += next
        next++
        x++
    }
    return x
};
```