# Scala functional

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/2366858/](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/2366858/)

---

```
object Solution {
    def wordCount(startWords: Array[String], targetWords: Array[String]): Int = {
      Iterator.unfold(
        // convert startWords to Set of SetOfChars
        startWords.map(_.toSet).toSet.toList,
        // convert targetWords to Map(SetOfChars -> Number of Sets)
        targetWords.map(_.toSet).groupBy(v => v).map {
          case (k,arr) => (k,arr.length)
      }) {
        case (Nil,_) => None
        case (startWord :: restStartWords, endCharMap) =>
          ((('a' to 'z').toSet -- startWord).toList.collect {
            // find possible words, making sure that we count permutation of same words
            case c if endCharMap.contains(startWord + c) => (startWord + c, endCharMap(startWord + c))
          }.unzip) match {
            // resume search excluding already constructed words
            case (constructedWordSets, numberOfWordsList) =>
              Some(numberOfWordsList.sum, (restStartWords, endCharMap -- constructedWordSets))
          }
      }.sum
    }
  }
  ```
  
  More efficient solution using BitSet instead of Set[Char]
  
  ```
  import scala.collection.immutable.BitSet

object Solution {
    def wordCount(startWords: Array[String], targetWords: Array[String]): Int = {
      val azSet = BitSet.fromSpecific(('a' to 'z').map(_ - 'a'))
      Iterator.unfold(
        // convert startWords to Set of BitSets
        startWords.map(s => BitSet.fromSpecific(s.map(_ - 'a'))).toSet.toList,
        // convert targetWords to Map(BitSet -> Number of BitSets)
        targetWords.map(s => BitSet.fromSpecific(s.map(_ - 'a'))).groupBy(v => v).map {
          case (k,arr) => (k,arr.length)
        }) {
        case (Nil,_) => None
        case (startWord :: restStartWords, endCharMap) =>
          // find possible words, making sure that we count permutation of same words
          (azSet -- startWord).toList.foldLeft((0,List.empty[BitSet])) {
            case ((total, allWords),c) if endCharMap.contains(startWord + c)
            => (total + endCharMap(startWord + c), (startWord + c) :: allWords)
            case ((total, allWords),_) => (total, allWords)
          } match {
            // resume search excluding already constructed words
            case (numberOfWordsList, constructedWordSets) =>
              Some(numberOfWordsList, (restStartWords, endCharMap -- constructedWordSets))
          }
      }.sum
    }
  }
  ```