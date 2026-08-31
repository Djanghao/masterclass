# Scala SegmentTree solution, beats 100%

**Author:** user8644oW
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/4863304/](https://leetcode.com/problems/my-calendar-iii/solutions/4863304/)

---


```
class SegmentTree(private val l: Int,
                  private val r: Int,
                  var x: Int = 0) {
  private var delayed: Int = 0
  private var left: SegmentTree = _
  private var right: SegmentTree = _

  def query(i: Int, j: Int): Int = {
    if (i <= r && j >= l) {
      if (i <= l && r <= j) x
      else {
        normalize()
        math.max(left.query(i, j), right.query(i, j))
      }
    } else 0
  }

  def update(i: Int, j: Int, value: Int): Unit = {
    if (i <= r && j >= l) {
      if (i <= l && r <= j) {
        x += value
        delayed += value
      }
      else {
        normalize()
        left.update(i, j, value)
        right.update(i, j, value)
        x = math.max(left.x, right.x)
      }
    }
  }

  private def normalize(): Unit = {
    if (left == null || right == null) {
      val m = (l + r) / 2
      left = new SegmentTree(l, m, x)
      right = new SegmentTree(m + 1, r, x)
    }
    else if (delayed > 0) {
      left.x += delayed
      left.delayed += delayed
      right.x += delayed
      right.delayed += delayed
    }
    delayed = 0
  }
}

class MyCalendarThree() {
  private val root = new SegmentTree(0, 1_000_000_000)

  def book(start: Int, end: Int): Int = {
    root.update(start, end - 1, 1)
    root.x
  }
}

```