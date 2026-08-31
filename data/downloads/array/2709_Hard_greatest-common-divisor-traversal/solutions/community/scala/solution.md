# Scala: Boolean Array Set, terrible time Union 6500ms but short & simple

**Author:** SerhiyShaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4781679/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4781679/)

---

# Code
```
object Solution {
  val primes = (2 to 100000).collect { case i if BigInt(i).isProbablePrime(i) => i }.reverse.toList // without .reverse 1.5 times slower :-)

  def canTraverseAllPairs(numsAll: Array[Int]): Boolean = {
    val nums = numsAll.distinct
    val primesSet = Array.ofDim[Boolean](100000)
    val numPrimes = nums.foldLeft(List.empty[List[Int]]) { (list, n) => 
      (primes.collect { case i if n % i == 0 => i } ) :: list
    }

    @annotation.tailrec
    def canJoinAll(primesList: List[List[Int]]): Boolean = {
      val hasNotCommon = primesList.filterNot { nPrimes => 
        val hasCommon = nPrimes.exists(primesSet)
        if (hasCommon) nPrimes.foreach(primesSet(_) = true)
        hasCommon
      }
      if (hasNotCommon.isEmpty) true
      else if (hasNotCommon.lengthCompare(primesList) == 0) false
      else canJoinAll(hasNotCommon)
    }

    numPrimes.head.foreach(primesSet(_) = true)
    numsAll.toSeq == Seq(1) || !nums.contains(1) && canJoinAll(numPrimes.tail)
  }

  //// the following does not pass test918 due to Memory Limit:

  // val primes = (2 to 100000).collect { case i if BigInt(i).isProbablePrime(i) => i }.toSet

  // def canTraverseAllPairs(numsAll: Array[Int]): Boolean = {
  //   val nums = numsAll.distinct

  //   def factors(n: Int): Set[Int] = primes.collect { case i if n % i == 0 => i }

  //   val joinedNeighbors = nums.iterator.drop(1).map(factors).foldLeft(factors(nums.head) :: Nil) { (jsl, set) =>
  //     if (jsl.head.exists(set(_))) (jsl.head | set) :: jsl.tail else set :: jsl
  //   }

  //   @annotation.tailrec
  //   def canJoinAll(set: Set[Int], sets: List[Set[Int]]): Boolean = {
  //     val (hasCommon, hasNotCommon) = sets.partition(_.exists(set(_)))
  //     if (hasNotCommon.isEmpty) true
  //     else if (hasCommon.isEmpty) false
  //     else canJoinAll((set :: hasCommon).toSet.flatten, hasNotCommon)
  //   }

  //   numsAll.toSeq == Seq(1) || !nums.contains(1) && canJoinAll(joinedNeighbors.head, joinedNeighbors.tail)
  // }
}
```