# Scala (Binary Search)

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5343677/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5343677/)

---

# Code
```
object Solution {
    def maxDistance(position: Array[Int], m: Int): Int = {
        var minForce = 1
        var maxForce = position.max

        position.sortInPlace
        val head = position.head

        def validForce(currentForce: Int): Int = {

            var currentPositionForDistribution = head + currentForce
            var count = 1

            for(pos <- position.tail if pos >= currentPositionForDistribution) {

                currentPositionForDistribution = pos + currentForce
                count += 1

            }

            count

        }

        while(minForce <= maxForce) {

            val currentForce = (minForce + maxForce) / 2

            if(validForce(currentForce) >= m) {
                minForce = currentForce + 1
            } else {
                maxForce = currentForce - 1
            }   

        }

        minForce - 1
    }
}
```