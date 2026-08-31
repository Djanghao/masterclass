# Slow & Fast pointer intuitive approach

**Author:** stan256
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/5990297/](https://leetcode.com/problems/circular-array-loop/solutions/5990297/)

---

```
def circularArrayLoop(nums: Array[Int]): Boolean = {
    def nextPos(current: Int): Int = {
      val i = (current + nums(current)) % nums.length
      if (i < 0) nums.length + i else i
    }

    def sameSign(l: List[Int]) = l.forall(_ > 0) || l.forall(_ < 0)

    def check(i: Int): Boolean = {
      var slow = i
      var fast = i

      while (true) {
        val s1 = nextPos(slow)
        val f1 = nextPos(fast)
        val f2 = nextPos(f1)

        if (!sameSign(List(nums(i), nums(s1), nums(f1), nums(f2)))) return false
        if (s1 == slow || f1 == fast || f1 == f2) return false
        if (s1 == f2) return true

        slow = s1
        fast = f2
      }
      false
    }

    nums.indices.exists(check)
  }
```