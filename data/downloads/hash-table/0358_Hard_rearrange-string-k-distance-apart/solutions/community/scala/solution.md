# scala priority queue with explanations

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4681802/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4681802/)

---


# Complexity
- Time complexity:
$$O(nlogm)$$ 

- Space complexity:
 $$O(n)$$ 

# Code
```
// Define an object named Solution.
object Solution {
    // Method to rearrange a string based on the given distance k between the same characters.
    def rearrangeString(s: String, k: Int): String = {
        // StringBuilder to build the result string.
        val sb = new StringBuilder
        
        // Mutable map to keep track of character frequencies, with default value 0.
        val mm = scala.collection.mutable.Map[Char,Int]().withDefaultValue(0)
        
        // Count the occurrences of each character in the input string.
        s.foreach(ch => mm += (ch -> (mm(ch) + 1)))
        
        // Priority queue to sort characters by their frequencies, in descending order.
        val pq = scala.collection.mutable.PriorityQueue[(Char, Int)]()(Ordering.by((_ : (Char,Int))._2))
        
        // Add all character frequencies to the priority queue.
        mm.foreach(p => pq.enqueue(p))
        
        // Map to keep track of the last position where each character was placed.
        val lastPos = scala.collection.mutable.Map[Char,Int]()
        // Index to track the current position in the rearranged string.
        var i = 0;
        
        // Loop until the priority queue is empty.
        while(!pq.isEmpty) {
            // ListBuffer to temporarily hold characters that cannot be placed yet.
            val lb = scala.collection.mutable.ListBuffer[(Char, Int)]()
            // Dequeue characters that cannot be placed at the current position.
            while(!pq.isEmpty && lastPos.get(pq.head._1).exists(p => p+k > i)) {
                lb += pq.dequeue()
            }
            
            // Check if there is a valid character to place at the current position.
            if(!pq.isEmpty) {
                // Dequeue the next character to be placed.
                val (ch, count) = pq.dequeue()
                // Update its last placed position.
                lastPos += (ch -> i)
                // Add the character to the result string.
                sb += ch
                // If the character still has remaining occurrences, enqueue it with decremented count.
                if(count > 1) pq.enqueue((ch, count-1))
                // Re-enqueue characters that were temporarily removed.
                lb.toList.foreach(p => pq.enqueue(p))
            
                // Move to the next position.
                i += 1
            }
        }
        
        // Check if we have rearranged all characters. If yes, return the rearranged string; otherwise, return an empty string.
        if(i == s.length) sb.toString else ""
    }
}

```