# Kotlin Code

**Author:** saku1
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546338/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546338/)

---

# Code
```
  fun numberOfSubstrings(s: String): Int {
    val cumulative0 = IntArray(s.length + 1) { 0 }
    val cumulative1 = IntArray(s.length + 1) { 0 }
    for (i in s.indices) {
      cumulative0[i + 1] = cumulative0[i] + if (s[i] == '0') 1 else 0
      cumulative1[i + 1] = cumulative1[i] + if (s[i] == '1') 1 else 0
    }
    var sum = 0
    val nextZero = TreeSet<Int>()
    for (i in s.indices) {
      if (s[i] == '0') {
        nextZero.add(i)
      }
    }
    for (i in s.indices) {
      var count0 = 0
      var count1 = 0
      var j = i
      while (j < s.length) {
        if (s[j] == '0') count0++
        else count1++
        val count02 = count0 * count0
        if (count02 <= count1) {
          sum++
        }
        if (count02 < count1) {
          val next = nextZero.higher(j)
          if (next == null) {
            sum += s.length - j - 1
            break
          } else {
            sum += next - j - 1
            count1 += next - j - 1
            j = next
          }
        } else if (count02 > count1) {
          val diff = count02 - count1
          val nextJ = minOf(diff+j, s.length)
          count0 = count0 + cumulative0[nextJ] - cumulative0[j+1]
          count1 = count1 + cumulative1[nextJ] - cumulative1[j+1]
          j = nextJ
        } else {
          j++
        }
      }
    }
    return sum
  }
```