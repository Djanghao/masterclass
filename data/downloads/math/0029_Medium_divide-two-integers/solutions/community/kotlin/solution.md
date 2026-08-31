# Kotlin solution simpe

**Author:** jafar260698
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/2748276/](https://leetcode.com/problems/divide-two-integers/solutions/2748276/)

---

	 fun divide(dividend: Int, divisor: Int): Int {

		  var isNegative: Boolean = false
		  var counter : Int = 0


		  if((dividend < 0 && divisor > 0) || (dividend >0 && divisor < 0)) { 
			  isNegative = true 
		  }

		  var a : Long = Math.abs(dividend.toLong())
		  var b : Long = Math.abs(divisor.toLong())
		  if(b > a) return 0;
		  if(a == 1L || b == 1L) {
			if(dividend == Int.MIN_VALUE && divisor == -1) return Int.MAX_VALUE
			return dividend * divisor
		  }

		  while (a >= b) {
			a = a - b
			counter++
		  }

		  if(isNegative) {
			  counter = counter * (-1);
		  }
		  return counter
		}