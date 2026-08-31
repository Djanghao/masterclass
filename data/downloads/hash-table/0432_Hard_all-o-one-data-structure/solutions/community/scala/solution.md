# consistency is the key scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-oone-data-structure/solutions/5849414/](https://leetcode.com/problems/all-oone-data-structure/solutions/5849414/)

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
class AllOne() {
    import scala.collection.mutable.Map
    var all = Map[String,Int]()
    def inc(key: String): Unit = {
        if (all.contains(key)) all(key)+=1
        else all(key) = 0
    }

    def dec(key: String): Unit = {
        all(key)-=1
        if (all(key) < 0) all -= key
    }

    def getMaxKey(): String = {
       if (all.isEmpty) "" 
       else all.maxBy(_._2)._1
    }


    def getMinKey(): String = {
        if (all.isEmpty) ""
        else all.minBy(_._2)._1
    }

}

/**
 * Your AllOne object will be instantiated and called as such:
 * val obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * val param_3 = obj.getMaxKey()
 * val param_4 = obj.getMinKey()
 */
```