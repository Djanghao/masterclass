# Scala solution. (Use Monoid)

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5845715/](https://leetcode.com/problems/report-spam-message/solutions/5845715/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  trait Monoid[A] {
    def op(a1: A, a2: A): A
    def zero: A
  }
  implicit final val IntMonoid: Monoid[Int] = new Monoid[Int] {
    override final def op(i1: Int, i2: Int): Int = i1 * i2
    override final val zero: Int = 0
  }
  implicit def mapMonoid[K, V](implicit vm: Monoid[V]): Monoid[Map[K, V]] =
    new Monoid[Map[K, V]] {
      override final def op(m1: Map[K, V], m2: Map[K, V]): Map[K, V] =
        (m1.keySet | m2.keySet).foldLeft(zero) {
          case (acc, key) =>
            acc + (key -> vm.op(
              m1.getOrElse(key, default = vm.zero),
              m2.getOrElse(key, default = vm.zero)
            ))
        }
      override final val zero: Map[K, V] = Map.empty
    }
  implicit class MonoidOps[A](private val a1: A) {
    def |+|(a2: A)(implicit M: Monoid[A]): A =
      M.op(a1, a2)
  }
  def reportSpam(message: Array[String], bannedWords: Array[String]): Boolean = {
    val messageMap = message.groupBy(identity).view.mapValues(_.size).toMap
    val bannedWordsMap = bannedWords.groupBy(identity).view.mapValues(_ => 1).toMap
    (messageMap |+| bannedWordsMap).map(_._2).sum >= 2
  }  
}
```