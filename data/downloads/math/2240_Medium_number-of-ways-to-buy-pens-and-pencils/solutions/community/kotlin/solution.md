# easy kotlin solution with one while loop(beats 100 time and space complexity )

**Author:** yeraeaa
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3192534/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3192534/)

---

The time complexity of this function is O(N), where N is the value of the input variable 'total'. This is because the while loop will execute N/cost1 times, and the cost of each loop iteration is constant.

The space complexity of this function is O(1), because the function uses a fixed amount of memory to store the input variables, the loop variables, and the output value. The memory used by the function does not depend on the value of the input variable.

# Code
```
class Solution {
  fun waysToBuyPensPencils(total: Int, cost1: Int, cost2: Int): Long {
    var sum  = total
    var counter = 0L
        while (sum>-1) {
            val costb  = sum/cost2
            counter+= costb+1
            sum-=cost1
        }
    return counter
}
}
```