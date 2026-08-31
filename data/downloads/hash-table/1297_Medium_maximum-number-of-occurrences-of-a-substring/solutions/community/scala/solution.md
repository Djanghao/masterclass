# Scala

**Author:** vashistak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/1416386/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/1416386/)

---

**Runtime: 964 ms, faster than 50.00% of Scala online submissions for Maximum Number of Occurrences of a Substring.
Memory Usage: 58.6 MB, less than 50.00% of Scala online submissions for Maximum Number of Occurrences of a Substring.
**
```
    def maxFreq(s: String, maxLetters: Int, minSize: Int, maxSize: Int): Int = {
       val d = scala.collection.mutable.HashMap[String,Int]()
        
       for(i <- 0 to s.length-minSize) {
       
           val ss = s.substring(i,i+minSize)
           
        if(ss.split("").distinct.length<=maxLetters){
           if(d.contains(ss)) {
            d.put(ss, d(ss) + 1)
           }
            else {
                d.put(ss, 1 )
            }
        }
           
       }
       if(!d.values.isEmpty) d.values.max else 0

    }
	```