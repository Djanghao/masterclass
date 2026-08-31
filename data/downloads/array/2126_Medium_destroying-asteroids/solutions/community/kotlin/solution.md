# [C++ | Python | Java | Javascript | Go | Kotlin | Ruby] Sort and Check Accumulation

**Author:** SailorMoons
**Votes:** 1
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/1660950/](https://leetcode.com/problems/destroying-asteroids/solutions/1660950/)

---

## C++
```
bool asteroidsDestroyed(int mass, vector<int>& x) {
	long long y = mass;
	sort(x.begin(), x.end());
	for (int i = 0; i < x.size(); i++) {
		if (y < x[i])
			return false;
		y += x[i];
	}
	return true;
```

## Python
```
def asteroidsDestroyed(self, mass: int, x: List[int]) -> bool:
	x.sort()
	for i in range(len(x)):
		if mass < x[i]:
			return False
		mass += x[i]
	return True
```

## Java
```
public boolean asteroidsDestroyed(int mass, int[] x) {
	Arrays.sort(x);
	long y = mass;
	for (int n : x) {
		if (y < n)
			return false;
		y += n;
	}
	return true;
}
```

## Javascript
```
var asteroidsDestroyed = function(mass, x) {
    x.sort(function(a, b) { return a - b });
    for (let i = 0; i < x.length; i++) {
        if (mass < x[i])
            return false;
        mass += x[i];
    }
    return true;
};
```

## Go
```
func asteroidsDestroyed(mass int, x []int) bool {
    sort.Ints(x[:])
    var y int64 = int64(mass)
    var n int64
    for _, num := range x {
        n = int64(num)
        if (y < n) {
            return false
        }
        y += n
    }
    return true
}
```

## Kotlin
```
class Solution {
    fun asteroidsDestroyed(mass: Int, x: IntArray): Boolean {
        x.sort()
        var y : Long = mass.toLong()
        for (n in x) {
            if (y < n) {
                return false
            }
            y += n
        }
        return true
    }
}
```

## Ruby
```
def asteroids_destroyed(mass, asteroids)
    x = asteroids.sort
    x.each do |n|
        if (mass < n)
            return false
        end
        mass += n
    end
    return true
end
```