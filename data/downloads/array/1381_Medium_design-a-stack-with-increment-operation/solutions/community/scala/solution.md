# stack and list manup scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5853785/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5853785/)

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

import scala.collection.mutable.Stack

class CustomStack(_maxSize: Int) {
    var s :Stack[Int] = Stack[Int]()
    def push(x: Int): Unit = { 
        if (s.size < _maxSize) {
            s.push(x)
        }

        
    }

    def pop(): Int = {
        
        
        
        if (s.isEmpty) return -1
        else s.pop
        
    }

    def increment(k: Int, e: Int): Unit = {
        var ss = s.toList
        if (ss.length <= k) {
            ss =ss.map(_ +e)
            s= Stack(ss: _*)
        }else{
            val begin = ss take (ss.length -k)
            val end   = (ss takeRight k) map {_ + e}
// 4 3 2 1 

            s= Stack(begin ++ end: _*)

        }
        
    }

}

/**
 * Your CustomStack object will be instantiated and called as such:
 * val obj = new CustomStack(maxSize)
 * obj.push(x)
 * val param_2 = obj.pop()
 * obj.increment(k,`val`)
 */
```