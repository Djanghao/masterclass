# Scala - Linear approach

**Author:** user3535JI
**Votes:** 1
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/3412767/](https://leetcode.com/problems/positions-of-large-groups/solutions/3412767/)

---

# Intuition
Start from first char and check if next two characters same [because group is only considered large when it min 3 char], if yes, then start counting the repeated chars till we find diff char

# Approach


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def largeGroupPositions(input: String): List[List[Int]] = {
        var pos = 0
        var result: List[List[Int]] = List[List[Int]]()
        while (pos < input.length - 2) {
            if (input.charAt(pos) == input.charAt(pos + 1) && input.charAt(pos) == input.charAt(pos + 2)) {
                var counter = 0
                var tempPos = pos
                while(tempPos < input.length - 1 && input.charAt(tempPos) == input.charAt(tempPos + 1)){
                    counter += 1
                    tempPos += 1
                }
                var innerArray = List(pos, pos + counter)
                //innerArray.foreach(print)
                result = result :+ innerArray
                pos += counter
            } else pos += 1
        }
    result
    }
}
```