# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3095674/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3095674/)

---

# Code
```
class DataStream(_value: Int, _k: Int) {
  var count = 0
  def consec(num: Int): Boolean =
    if(num != _value) {count = 0; false} else {count += 1; count>= _k}
}
