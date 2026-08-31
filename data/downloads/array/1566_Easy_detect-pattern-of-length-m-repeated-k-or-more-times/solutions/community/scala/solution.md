# [ Scala ] Using while loop

**Author:** shu_sh
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/4741552/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/4741552/)

---

# Intuition
1. iterate the list given
2. if arr(i) == arr(i+m) then increment the counter else reset the counter to 0
3. if counter is greater than equal to (k*m) - k then return true else false

credit - @reema_mahabooba

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def containsPattern(arr: Array[Int], m: Int, k: Int): Boolean = {
        var i = 0
        var cnt = 0
        var res = false
        while(i+m < arr.length){
            if(arr(i) != arr(i + m)) cnt = 0
            else cnt += 1
            i += 1
            if(cnt >= (m*k)-m) res = true
        }
        res
    }
}
```