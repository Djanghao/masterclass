# Scala functional

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-subsets/solutions/2822379/](https://leetcode.com/problems/word-subsets/solutions/2822379/)

---

```
import scala.util.chaining._
import scala.collection.mutable

object Solution {
    def wordSubsets(words1: Array[String], words2: Array[String]): List[String] = {
        val mergedPattern = words2
            .map(freqMap)
            .pipe(mergeFreqMaps)
        words1
        .map(w => (w, freqMap(w)))
        .map {
            case (w, word1) =>
                universal(word1, mergedPattern)
                .pipe {
                    case true => Some(w)
                    case false => None
                }
        }.collect {
            case Some(w) => w
        }.toList
    }
    
    def universal(word1: Map[Char, Int], word2: Map[Char, Int]): Boolean = {
        word2.foreach {
            case (char, count) if word1.get(char).getOrElse(0) < count => return false
            case _ => 
        }
        true
    }
    
    def mergeFreqMaps(words: Array[Map[Char, Int]]): Map[Char, Int] = {
        val total = mutable.Map.empty[Char, Int]
        words.foreach {
            word => word.foreach {
                case (char, freq) => total.get(char) match {
                    case Some(oldFreq) => total(char) = freq max oldFreq
                    case None => total += (char -> freq)
                }
            }
        }
        total.toMap
    }
    
    def freqMap(word: String): Map[Char, Int] = {
        word.groupBy(c => c).map{case (c,arr) => (c,arr.length)}
    }
}
```