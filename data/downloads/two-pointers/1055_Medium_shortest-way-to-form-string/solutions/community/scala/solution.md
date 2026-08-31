# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/3281874/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/3281874/)

---

# Complexity
- Time complexity: O(S * T)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def shortestWay(source: String, target: String): Int = {

        var minimum = 0

        var index = 0
        
        while(index < target.length) {
            
            minimum += 1

            val initPos = index
            
            var j = 0

            while(index < target.length && j < source.length) {
                
                if(target.charAt(index) == source.charAt(j)) index += 1
                
                j += 1
                
            }

            if(initPos == index) return -1

        }

        minimum
    }
}
```