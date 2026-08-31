# Kotlin explained with comments

**Author:** lgsmitty
**Votes:** 1
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/2634300/](https://leetcode.com/problems/ugly-number-iii/solutions/2634300/)

---

**Problem**: find **n<sup>th</sup>** positive integer that is divisible by either **a**, **b** or **c**

What if we can quickly calculate how many numbers are divisible by either **a**, **b** or **c** and less or equal to some number **k**? It is said that answer is not greater than `2 * 10^9` and we can do binary search in this range. Awesome! 

How can we calculate for any **k**? Let's build intuition step-by-step:
1. How many numbers divisible only by **a**? It's **k / a**
2. How many numbers divisible by **a** or **b**? 
2.1 For **a** it is **k / a**. 
2.2 For **b** it is **k / b**. 
2.3 Are there any numbers that can be calculated twice if we sum up **k / a** and **k / b**? Yes!
2.4 What numbers can be calculated twice? The ones divisible by **a** and **b** at the same time. For example, **a * b**, **2 * a * b**, **3 * a * b** and etc
2.5 Is **a * b** the smallest number divible by a and b at the same time? Not always!
2.6 What number is the smallest one? It is known as **[Least Common Multiple](https://en.wikipedia.org/wiki/Least_common_multiple)**. Let's call it **lcm** so that least common multiple for **a** and **b** will be **lcm(a, b)**. It has properties like **lcm(a, b)** divides **a * b** and less or equal to** a * b**.
2.7 Any other numbers not counted or counted more than once? No. 
2.8 Final count is **(k / a) + (k / b) - (k / lcm(a, b))**
3. How many numbers divisible by **a**, **b** or **c**?
3.1 Based on previous steps: **(k / a) + (k / b) + (k / c) - (k / lcm(a, b)) - (k / lcm(a, c)) - (k / lcm(b, c))**
3.2 Are there any numbers that not counted or counted more than once? Yes.
3.3 What numbers? For example, the ones divisible by **a**, **b** and **c** at the same time?
3.4 Why is it so? Let's assume **k** is big enough so that **a * b * c** is equal or smaller then **k**: 
3.4.1 Every multiple of **a** included into **k / a**. Since **a * (b * c)** is a **(b * c)-th** mutliple of **a**, **a * b * c** will be included into **(k / a)** if **k** big enough. This true for **b** with **(k / b)** and **c** with **(k / c)**. As a result of that **a * b * c** will be counted 3 times! 
3.4.2 Since **lcm(a, b)** divides **a * b** then **a * b * c** is also divisible by **lcm(a, b)**. Since **k** is big enough, then **a * b * c** also counted in **k / lcm(a, b)** part of formula above. The same holds true to **k / lcm(a, c)** and **k / lcm(b, c)** parts. As a result of that, **a * b * c** will be subtracted 3 times and not counted at all!
3.4.3 Is **a * b * c** is the smallest number divisible by **a**, **b** and **c** at the same time? From the case for **a** and **b** only, it is [least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple) for **a**, **b**, and **c**. Let's call it **lcm(a, b, c)**. It has the same properties as in the case of 2 numbers: **lcm(a, b, c)** is smaller or equal to **a * b * c** and divides **a * b * c**. As a result of that, conclusions for **a * b * c** above holds true to **lcm(a, b, c)**

Final formula: **(k / a) + (k / b) + (k / c) - (k / lcm(a, b)) - (k / lcm(a, c)) - (k / lcm(b, c)) + (k / lcm(a, b, c))**

Complexity: `O(log(range))`
```
class Solution {
	fun nthUglyNumber(n: Int, _a: Int, _b: Int, _c: Int): Int {
		// intermediate results can be bigger than `Int.MAX_VALUE`
		// let's convert to `Long`
		val a = _a.toLong()
		val b = _b.toLong()
		val c = _c.toLong()

		// greatest common divisor
		fun gcd(a: Long, b: Long): Long = if (a == 0L) b else gcd(b % a, a)

		// least common multiple
		fun lcm(a: Long, b: Long): Long {
			return a * b / gcd(a, b)
		}

		val ab = lcm(a, b)
		val bc = lcm(b, c)
		val ac = lcm(a, c)
		// lcm(a, b, c) = lcm(lcm(a, b), c)
		val abc = lcm(ab, c)

		fun calc(n: Long): Long = n / a + n / b + n / c - n / ab - n / ac - n / bc + n / abc

		var l = 1L
		// Fact 1. As per description, result will fit into 2*10^9
		// Fact 2. We need n-th number which is divisible by either a, b or c. n * minOf(a, b, c) is guarantee to be 
		// equal or bigger than the result we are looking for.
		// Let's grab minimum out of those values to decrease range for search 
		var r = minOf(2_000_000_000L, n * minOf(a, b, c))

		while (l < r) {
			val mid = (l + r) / 2
			if (calc(mid) >= n) r = mid else l = mid + 1
		}

		return l.toInt()
	}
}
```