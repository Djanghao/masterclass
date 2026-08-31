# Easy solution that beats 100% of submissions

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-compression/solutions/3245602/](https://leetcode.com/problems/string-compression/solutions/3245602/)

---

# Approach
We iterate the array and keep track of a counter until the char changes, after that we update the original array.


# Code
```
object Solution {
    def compress(chars: Array[Char]): Int = {

    var last = chars.head
    var count = 0

    val sb = new StringBuilder()

    for (c <- chars) {

      if (c != last) {
        sb.append(last)

        if (count > 1) {
          sb.append(count)
        }

        last = c
        count = 1

      } else {
        count += 1
      }
    }

    sb.append(last)

    if (count > 1) {
      sb.append(count)
    }

    val arr = sb.toString().toCharArray
    for(i <- arr.indices) {
      
      chars(i) = arr(i)
    }
    
    sb.length
  }
}
```