# Scala 3, check prefix and suffix

**Author:** VPuuska
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/5877015/](https://leetcode.com/problems/sentence-similarity-iii/solutions/5877015/)

---

# Intuition & Approach

We can rephrase the definition of similarity in this problem as follows: the two sentences are similar, if the shorter sentence is equal to the concatenation of a prefix and a suffix of the longer sentence.

With this in mind, we can solve the problem with two steps:

- Find how many words at the start of both sentences are equal.
- Then, check if the remaining words in the shorter sentence are a suffix of the longer sentence.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$ thanks to `sentenceX.split(" ")`. Could be made $$O(1)$$ if we instead checked word equalities without splitting.

# Code
```scala []
object Solution {
  def areSentencesSimilar(sentence1: String, sentence2: String): Boolean = {
    val s1 = sentence1.split(" ")
    val s2 = sentence2.split(" ")

    val firstDiff =
      (0 until (s1.length min s2.length)).view.find(i => s1(i) != s2(i))
    firstDiff match
      case None => true
      case Some(ind) =>
        s1.takeRight((s1.length min s2.length) - ind)
          .sameElements(
            s2.takeRight(
              (s1.length min s2.length) - ind
            )
          )

  }
}

```