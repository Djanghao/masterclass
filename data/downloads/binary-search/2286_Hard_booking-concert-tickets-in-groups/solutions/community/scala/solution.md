# [scala] - bruteforce version is accepted

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2087119/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2087119/)

---

During the contest I tried to solve the problem in O(log*(n)) and failed to complete it in time. After the contest I read the discussions and found out that bruteforce approach was accepted. So that's the bruteforce version:

```scala
class BookMyShow(_n: Int, _m: Int) {

  val nonPossible = Array.empty[Int]

  val arr = Array.fill(_n)(_m)

  def gather(k: Int, maxRow: Int): Array[Int] = {
    val ind = arr.indexWhere(_ >= k)
    if(ind == -1) nonPossible
    else if(ind > maxRow) nonPossible
    else {
      arr(ind) = arr(ind) - k
      Array(ind, _m - arr(ind) - k)
    }
  }

  def scatter(k: Int, maxRow: Int): Boolean = {
    def checkScatter(i: Int, acc: Int): Boolean =
      if(i > maxRow) false
      else {
        val nAcc = acc + arr(i)
        if(nAcc >= k) true else checkScatter(i + 1, nAcc)
      }

    val check = checkScatter(0, 0)
    if(check) book(0, k)
    check
  }

  def book(i: Int, k: Int): Unit =
    if(k > 0) {
      val subtr = math.min(arr(i), k)
      arr(i) -= subtr
      book(i + 1, k - subtr)
    }
}
```