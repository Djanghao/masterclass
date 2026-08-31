# [Scala] bruteforce accepted

**Author:** js321
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/823688/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/823688/)

---

```
def largestTimeFromDigits(A: Array[Int]): String = {
         
        def firstDigitCondition(i: Int): Boolean = {
            i >= 0 && i <= 2
        }

        def secondDigitCondition(i: Int, prev: Int): Boolean = {
            if (prev == 2) {
                i >= 0 && i <=3
            } else {
                true
            }
        }

        def thirdDigitCondition(i: Int): Boolean = {
            i >= 0 && i <= 5
        }
        
        A.permutations
            .filter{ p =>
  firstDigitCondition(p(0)) && secondDigitCondition(p(1), p(0)) && thirdDigitCondition(p(2))
        }
            .map(_.mkString)
			.toStream
            .sortWith(_>_)
            .headOption match {
                case None => ""
                case Some(date) => date.toString.take(2) + ":" + date.toString.drop(2)
            }
    }