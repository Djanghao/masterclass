# [Java] Code with comments || HashMap + PriorityQueue

**Author:** vj98
**Votes:** 8
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2083925/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2083925/)

---

```
class Solution {
    
    class Pair {
        String name;
        int cnt;
        
        public Pair(String n, int c) {
            this.name = n;
            this.cnt = c;
        }
    }
    
    class Compare implements Comparator<Pair> {
        public int compare(Pair a, Pair b) {
            if (a.cnt == b.cnt) {
                return b.name.compareTo(a.name);
            }
            
            return b.cnt - a.cnt;
        }
    }
    
    public String largestWordCount(String[] messages, String[] senders) {
        PriorityQueue <Pair> pq = new PriorityQueue<>(new Compare());
        /* Pair ==> key   -> name
                ==> Value -> cnt
           
           new Compare() ==> it sort the queue on the cnt in descending order.
                         ==> if cnt are same than sort on the name
        */
        
        HashMap <String, Integer> hash = new HashMap<>();
        
        for (int i = 0; i < messages.length; i++) {
            String []str = messages[i].split(" ");  // total words in a message
            int len = str.length + hash.getOrDefault(senders[i], 0);
            hash.put(senders[i], len);
        }
        
        for (Map.Entry <String, Integer> map: hash.entrySet()) {
            pq.add(new Pair(map.getKey(), map.getValue()));
        }
        
        return pq.poll().name;
    }
    
}
```