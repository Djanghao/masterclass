# Scala FP

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/2864141/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/2864141/)

---

```Scala
object Solution {
    def longestSubsequenceRepeatedK(s: String, k: Int): String = {
		// remove the minimum length prefix of @s that contains a subsequence equal to @t,
		// return the remained string after removal, if a subsequence equal to @t is found
		// return None, otherwise
        def removeSub(s: String, t: String): Option[String] = (s, t) match {
			// if @t is empty, return the original string
            case (_, "") => Some(s)
            case _ => s.indexOf(t.head) match {
				// if the first character of @t is not found, return None
                case -1 => None
				// otherwise, search from the index
                case i => removeSub(s.drop(i + 1), t.tail)
            }
        }
		// recursively search if @t appears @k times as subsequences of @s
        def repeated(s: String, k: Int)(t: String): Boolean = (t, k) match {
            case (_, 0) => true
            case ("", _) => true
            case _ => removeSub(s, t) match {
                case Some(rs) => repeated(rs, k - 1)(t)
                case None => false
            }
        }
		// only characters appearing more than k times should be considered in final result
		// and it can appear in the final result for at most (total num) / k times
		// so we reduced the search space
		// https://leetcode.com/problems/longest-subsequence-repeated-k-times/discuss/1471930/Python-Answer-is-not-so-long-explained
		// thank this post for the inspiration
        val hot = s.groupBy(identity).mapValues(_.size).toSeq.map(x => x._1.toString * (x._2/k)).reduce(_ + _)
		// all the 2^m permutations of comninations of the candidate characters
        val subs = (0 to hot.size).flatMap(hot.combinations(_).flatMap(_.permutations))
		// check each of them in the required order
        subs.sortBy(x => (x.size, x)).reverse.find(repeated(s, k)).get
    }
}
```