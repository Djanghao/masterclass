# Scala Solution

**Author:** kratos_and_boy
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/3860277/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/3860277/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), no space is used
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def equalizeWater(buckets: Array[Int], loss: Int): Double = {


        def helper(curr: Double): Boolean = {

            var gallons = 0.0
            for (bucket <- buckets){

                if (bucket>=curr){
                    gallons += (bucket-curr) * (1-loss/100.0)
                }
                else{
                    gallons -= (curr-bucket)
                }
            }
            gallons>=0
        }

        var l = buckets.min.toDouble
        var r = buckets.max.toDouble
        val error = 1e-5

        while (l<=r){
            val midpoint = (l+r)/2.0

            if (helper(midpoint)){
                l = midpoint + error
            }
            else{
                r = midpoint - error
            }
        }
        l
    }
}
```