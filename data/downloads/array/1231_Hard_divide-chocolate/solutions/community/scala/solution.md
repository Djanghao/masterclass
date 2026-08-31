# scala binary search

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/4698026/](https://leetcode.com/problems/divide-chocolate/solutions/4698026/)

---

# Code
```
object Solution {
  def maximizeSweetness(sweetness: Array[Int], k: Int): Int = {
    var numPeople = k + 1
    var maxSweetness = 0
    var left = 0
    var right = 0
    for (sweet <- sweetness) {
      maxSweetness += sweet
    }
    right = maxSweetness / numPeople
    while (left < right) {
      val mid = (left + right + 1) / 2
      var sum = 0
      var peopleCandy = 0
      for (sweet <- sweetness) {
        sum += sweet
        if (sum >= mid) {
          sum = 0
          peopleCandy += 1
        }
      }
      if (peopleCandy >= numPeople) {
        left = mid
      } else {
        right = mid - 1
      }
    }
    right
  }
}


```