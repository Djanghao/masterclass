# Scala - simple using for loop

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5264982/](https://leetcode.com/problems/maximum-swap/solutions/5264982/)

---


```
import scala.util.control.Breaks._

object Solution {
    def maximumSwap(num: Int): Int = {
        val numStr = num.toString.toCharArray
        val n = numStr.length
        
        // Find the maximum digit and its index for each position
        val maxRight = Array.fill(n)((0, 0))
        maxRight(n-1) = (numStr(n-1) - '0', n-1)
        
        for (i <- n-2 to 0 by -1) {
            if (numStr(i) - '0' > maxRight(i + 1)._1) {
                maxRight(i) = (numStr(i) - '0', i)
            } else {
                maxRight(i) = maxRight(i + 1)
            }
        }
        
        breakable {
            for (i <- 0 until n) {
                if (numStr(i) - '0' < maxRight(i)._1) {
                    // Swap the digits
                    val temp = numStr(i)
                    numStr(i) = numStr(maxRight(i)._2)
                    numStr(maxRight(i)._2) = temp
                    break 
                }
            }
        }
        
        numStr.mkString.toInt
    }
}

```