# Kotlin || Easy solution with Priority Queue

**Author:** mahrezz
**Votes:** 0
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2518552/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2518552/)

---

```
class Solution {
fun largestWordCount(messages: Array<String>, senders: Array<String>): String {


        /*
                ["Hello userTwooo", "Hi userThree", "Wonderful day Alice"," Nice day userThree"], 
                ["Alice",            "userTwo",        "userThree",          "Alice"]
        
        */

        val freqMap = mutableMapOf<String,Int>().apply{
            for(indx in senders.indices){
                val sender = senders[indx]
                val wordCount = messages[indx].split(" ").size
                put(sender,getOrDefault(sender,0) + wordCount)
            }
        }
        
        val maxHeap = PriorityQueue<Pair<String,Int>>{
            firstWord,secondWord -> 
                if(firstWord.second != secondWord.second){
                    secondWord.second - firstWord.second 
                }else{
                   secondWord.first.compareTo(firstWord.first) 
                }
        }
        
        for((key,value) in freqMap){
            maxHeap.offer(Pair(key,value))
        }
        

        return maxHeap.poll().first


    }
}
```