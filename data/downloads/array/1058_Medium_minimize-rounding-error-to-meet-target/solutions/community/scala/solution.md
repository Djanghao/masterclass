# Scala greedy solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3110268/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3110268/)

---

# Intuition
The problem is as a Knapsack problem. We can view diff as a cost. For each number we have cost to make floor operation, and to make ceil operation. 

# Approach
First let's calculate min and max possible result by calculating ceil and floor for each number. The target should be in range of [min, max], otherwise, return -1. target - min will give us number of the ceil operation required. All other numbers should be under the floor operation. Now we can make (target - min) cost operations by picking the cheapest numbers for the ceil operation. 

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(n)

# Code
```
import scala.collection.mutable

object Solution {
    object Asc extends Ordering[Int] {
        def compare(a: Int, b: Int) = {
            b compare a
        }
    }
    def minimizeError(prices: Array[String], target: Int): String = {
        val nums = prices.map(new Number(_))
        val minDiff = nums.map(_.floor).sum
        val maxDiff = nums.map(_.ceil).sum
        if(minDiff > target * 1000 || maxDiff < target * 1000) {
            return "-1"
        }
        // do not include numbers where ceil operation doesn't give increment of a number
        val ceilCosts = mutable.PriorityQueue.from(nums.collect { 
            case n if n.ceil != n.toInt => n.ceil - n.toInt
        })(Asc)
        var numberOfCeilRequired = (target * 1000 - minDiff) / 1000
        var costPaidToFloor = nums.map(n => n.toInt - n.floor).sum
        while(numberOfCeilRequired > 0) {
            val costToCeil = ceilCosts.dequeue()
            // since costPaidToFloor already includes floor cost for every option,
            // and we want to do ceil instead of floor,
            // we need to deduct the paid cost first
            costPaidToFloor -= (1000 - costToCeil)
            // add cost to ceil
            costPaidToFloor += costToCeil
            numberOfCeilRequired -= 1
        }
        "%.3f".format(costPaidToFloor.toDouble / 1000)
    }

}

class Number(numStr: String) {
    private val numInt = numStr.split('.') match {
        case Array(a,b) => a.toInt * 1000 + b.toInt
        case _ => throw new Exception("Invalid input")
    }
    val floor = numInt - numInt % 1000
    val ceil = if(numInt != floor) {
        floor + 1000
    } else {
        floor
    }
    def toInt = numInt
}
```