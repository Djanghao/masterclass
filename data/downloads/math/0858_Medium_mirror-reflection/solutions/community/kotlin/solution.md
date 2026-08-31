# Kotlin | GCD/LCM/Euclidean/AND | Time O(1) | Space O(1) | Two solutions

**Author:** misoft
**Votes:** 0
**Link:** [https://leetcode.com/problems/mirror-reflection/solutions/2379620/](https://leetcode.com/problems/mirror-reflection/solutions/2379620/)

---

#### First solution: GCD/LCM/Euclidean  
#### Time ~O(log(min(p, q))) 
```

fun mirrorReflection(p: Int, q: Int): Int {
	val LCM = (p * q) / findGCD(p, q)
	return when {
		LCM / q % 2 == 0 -> 2
		LCM / p % 2 == 0 -> 0
		else -> 1
	}
}
    
private fun findGCD(a: Int, b: Int): Int {
	var x = a
	var y = b
	while (x != 0 && y != 0) {
		if (x > y) x %= y else y %= x
	}
	return x + y
}
```

#### Second solution: operation AND
#### Time O(1)

```
fun mirrorReflection(p: Int, q: Int) = (p and -p).compareTo(q and -q) + 1
```