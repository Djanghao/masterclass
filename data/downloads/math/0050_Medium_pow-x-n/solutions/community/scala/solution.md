# The best scala solution

**Author:** caps_lock
**Votes:** 2
**Link:** [https://leetcode.com/problems/powx-n/solutions/567917/](https://leetcode.com/problems/powx-n/solutions/567917/)

---

```scala
object Solution {
	def myPow(x: Double, n: Int): Double = {
		n match {
			case 0 => 1
			case 1 => x
			case _ =>  {
				val f = myPow(x, n/2)
				n % 2 match {
					case 0 => f * f
					case 1 => f * f * x
					case -1 => f * f / x
				}
			}
		}
	}
}
```