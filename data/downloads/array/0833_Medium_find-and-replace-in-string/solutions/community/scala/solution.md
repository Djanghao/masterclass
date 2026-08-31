# Scala functional

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/2341532/](https://leetcode.com/problems/find-and-replace-in-string/solutions/2341532/)

---

```
  object Solution {
    def findReplaceString(s: String, indices: Array[Int], sources: Array[String], targets: Array[String]): String = {
      val sourceMap = (indices zip sources).toMap
      val sourceMapTracker = sourceMap.map{case (k,v) => (k,mutable.Queue.from(v))}
      val replacementMap = (indices zip targets).toMap
      // add extra symbol to handle a case when we need to replace the last char
      (s+"_").zipWithIndex.toList.foldLeft((List.empty[Char],Option.empty[Int])) {
        // new replacement starts
        case ((list,None),(char,index)) if sourceMapTracker.contains(index) && sourceMapTracker(index).head == char =>
          sourceMapTracker(index).dequeue()
          (char :: list, Some(index))
        // replacement complete
        case ((list,Some(replacementIndex)),(char,index)) if sourceMapTracker(replacementIndex).isEmpty =>
          (char :: (
            // append replacement
            replacementMap(replacementIndex).toList.reverse
              ++
              // remove old chars
              (1 to sourceMap(replacementIndex).length).foldLeft(list){
                case (h :: tail, _) => tail
                case _ => List()
              }),
            // corner case when we start new replacement immediately after previous one
            if(sourceMapTracker.contains(index) && sourceMapTracker(index).head == char) {
              sourceMapTracker(index).dequeue()
              Some(index)
            } else {
              None
            }
          )
        // ongoing replacement matching tracked pattern
        case ((list,Some(replacementIndex)),(char,index)) if sourceMapTracker(replacementIndex).head == char =>
          sourceMapTracker(replacementIndex).dequeue()
          (char :: list, Some(replacementIndex))
        // ongoing replacement not matching match pattern
        case ((list,Some(replacementIndex)),(char,index)) =>
          (char :: list, None)
        // regular character
        case ((list,_),(char,_)) => (char :: list, None)
      }._1 match {
        // remove "_"
        case _ :: tail => tail.reverse.mkString("")
        //
        case _ => ""
      }
    }
  }
  ```