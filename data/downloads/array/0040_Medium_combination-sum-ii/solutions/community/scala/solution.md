# Scala solution using Stateful Iterator monad & traverse

**Author:** Abastro
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/1827675/](https://leetcode.com/problems/combination-sum-ii/solutions/1827675/)

---

Many of the lines were put into implementing the Stateful Iterator for backtracking.
The iterator is for iterating the possible cases, while the state is to store the current sum of the tracked numbers.
WARNING: requires previous knowledge of `traverse` and `monad` to understand.

`bag`: input candidates converted into multiset.
`cols`: for a number `i` occurring `k` times, gives iterator over `(i, 0) ~ (i, k)`, until `s + i * c`(next sum) is no bigger than `target`. (`s` is the state denoting previous sum)
`toFill`: turn number `i` & occurrences `k` back into iterator of `i` repeated `k` times - Used to convert Multiset back into List.
Return value is the traversal, check for target reach, then converting back into the desired result.

```scala
object Solution {
    case class StIte[S, A] ( runSt: S => Iterator[(S, A)] ) {
        def map[B] (f: A => B) =
            StIte ((s: S) => runSt (s) map { case (t, x) => (t, f (x)) })
        def flatMap[B] (f: A => StIte[S, B]): StIte[S, B] =
            StIte ((s: S) => runSt (s) flatMap { case (t, x) => f (x).runSt (t) })
    }
    object StIte {
        def pure[S, A] (v: A) = StIte ((s: S) => Iterator.single ((s, v)))
        def traverse[S, A, B] (f: A => StIte[S, B]) (l: List[A]): StIte[S, List[B]] = l match {
            case Nil => pure (Nil)
            case h :: t => for {
                hd <- f (h)
                tl <- traverse (f) (t)
            } yield hd :: tl
        }
    }
    type IPair = (Int, Int)

    def combinationSum2(candidates: Array[Int], target: Int): List[List[Int]] = {
        def cols: IPair => StIte[Int, IPair] = { case (i, occ) =>
            StIte (s => Iterator.range (0, occ+1)
                   .map ( c => (s + i * c, (i, c)) ).takeWhile (_._1 <= target) )
        }
        def toFill: IPair => Iterator[Int] = { case (i, occ) => Iterator.fill (occ) (i) }
        val bag = candidates.groupBy (identity).mapValues (_.length).toList
        StIte.traverse (cols) (bag).runSt (0).filter (_._1 == target)
            .map (_._2 flatMap toFill).toSet.toList
    }
}
```