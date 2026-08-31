# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/4320300/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/4320300/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution(_radius: Double, _x_center: Double, _y_center: Double) {

    def randPoint(): Array[Double] = {
        val a = 2 * math.Pi * math.random()
        val h = math.sqrt(math.random()) * _radius
        Array(_x_center + math.cos(a) * h, _y_center + math.sin(a) * h)
    }

}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
```