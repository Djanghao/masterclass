# scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/5125574/](https://leetcode.com/problems/multiply-strings/solutions/5125574/)

---

# Code
```
object Solution {
    def multiply(num1: String, num2: String): String = {
        val ns1 = mkIntList(num1).reverse
        
        val result = 
            mkIntList(num2).reverse
            .map(mul(ns1, _))   // multiply num1 by each digit of num2
            .zipWithIndex.map{case (ns, s) => // shift results by idx of digit of num2
                List.fill(s)(0) ++ ns}
            .foldLeft(List.empty[Int])(add) // get sum
            .reverse

        result.dropWhile(_ == 0) match { // handle leading zeros
            case Nil => "0"
            case lst => lst.mkString
        }
    }
    
    /**
      * string to list of digits
      *
      * @param str
      * @return
      */
    def mkIntList(str: String) = 
        str.map(_.asDigit).toList

    /** 
      * multiply num with multiple digits by single digit
      *
      * @param ns num represented by list of digits
      * @param n digit to multiply by
      * @return result of multiplication represeneted as a list of digits
      */
    def mul(ns: List[Int], n: Int) = {
        val t = ns.scanLeft((0,0)){case ((toAdd,_), i) => 
            val upd = i * n + toAdd
            (upd / 10, upd % 10)
        }.tail
        val t2 = if(t.last._1 == 0) t else t :+ (0, t.last._1)
        t2.map(_._2)
    }

    /**
      * add two nums represented as lists of digits
      *
      * @param ns1
      * @param ns2
      * @return sum result as list of digits
      */
    def add(ns1: List[Int], ns2: List[Int]): List[Int] = 
        Iterator.unfold((ns1, ns2, 0)){case (r1, r2, toAdd) => (r1,r2) match {
            case (Nil, Nil) if toAdd == 0 => None
            case (Nil, Nil) => Some(toAdd, (r1, r2, 0))
            case (Nil, y :: ys) => 
                val upd = y + toAdd
                Some(upd % 10, (Nil, ys, upd / 10))
            case (x :: xs, Nil) =>
                val upd = x + toAdd
                Some(upd % 10, (xs, Nil, upd / 10))
            case (x :: xs, y :: ys) => 
                val upd = x + y + toAdd
                Some(upd % 10, (xs, ys, upd / 10))
        }}.toList
}
```