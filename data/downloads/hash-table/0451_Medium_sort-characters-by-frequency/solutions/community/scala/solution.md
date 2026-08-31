# Scala - 2 lines - using Hashmap

**Author:** rajeshsantha
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/645235/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/645235/)

---

```
object Solution {
    def frequencySort(s: String): String = {
        val map = scala.collection.mutable.HashMap[Char, Int]()
		
	//build the map with frequency key value pair
    for (i <- s) if (map contains i) map update(i, map(i) + 1) else map put(i, 1)
	
	//apply descending sort by 'value'(frequency count) and build the string with number of occurances  , and mege all list of strings to one string (mkString)
	map.toList.sortBy(-_._2).map(x => x._1.toString * x._2).mkString

    }
	
	//Approach 2 - one-liner
	
	def frequencySortFunctional(s: String): String = 
	s.groupBy(identity).toList .sortBy(- _._2.length).map(_._2.mkString) .mkString
  
}


```