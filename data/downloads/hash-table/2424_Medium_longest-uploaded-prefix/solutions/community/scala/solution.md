# Scala, just template union find algorithm with finding the max as the parent

**Author:** qiuqiushasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2762125/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2762125/)

---

```scala
  class LUPrefix(_n: Int) {
    type int = Int

    import scala.collection.mutable.{HashSet, HashMap}

    class Uf(n: int) {
      val parents = Array.ofDim[int](n + 1)

      def add(x: int): Unit = {
        parents(x) = x
      }

      def find(x: int): int = {
        if (parents(x) == 0) {
          -1
        } else {
          if (parents(x) == x) x else find(parents(x))
        }
      }

      def union(a: int, b: int): int = {
        val pa = find(a)
        val pb = find(b)
        if (pa > pb) {
          parents(pb) = pa
        } else if (pa < pb) {
          parents(pa) = pb
        }
        Math.max(pa, pb)
      }
    }

    val uf = new Uf(_n)
    var max = 0

    def upload(video: Int) {
      if (uf.parents(video) == 0) {
        uf.add(video)
        if (video -1 >= 0  && uf.parents(video - 1) != 0) {
          uf.union(video, video - 1)
        }
        if (video +1 <= _n && uf.parents(video + 1) != 0) {
          uf.union(video, video + 1)
        }
      }


    }

    def longest(): Int = {
      if (uf.parents(1) != 0) uf.find(1) else 0
    }

  }

```