# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4547887/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4547887/)

---

# Code
```
import scala.collection.mutable

object Solution {
    def hasGroupsSizeX(deck: Array[Int]): Boolean = 
        deck.foldLeft(mutable.Map[Int,Int]().withDefaultValue(0)) { (m, v) => m(v) += 1; m}.values
            .foldLeft(0) { gcd(_,_) } > 1
        
    def gcd(a: Int, b: Int): Int = if (b==0) a else gcd(b,a%b)
}
```