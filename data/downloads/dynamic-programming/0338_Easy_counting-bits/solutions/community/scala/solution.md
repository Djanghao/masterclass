# scala manupulation list string make it easy

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-bits/solutions/5768204/](https://leetcode.com/problems/counting-bits/solutions/5768204/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def countBits(n: Int): Array[Int] = {
        var l = List[String]()
        for( i <- 0 until n+1){
            l =  i.toBinaryString :: l
        }
        return l.reverse.map(x => x.toList.map(x => x -'0').sum).toArray
    }
}
```