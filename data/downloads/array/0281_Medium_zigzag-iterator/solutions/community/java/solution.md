# Simple Java solution for K-vector

**Author:** kevinhsu
**Votes:** 359
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/71779/](https://leetcode.com/problems/zigzag-iterator/solutions/71779/)

---

Uses a linkedlist to store the iterators in different vectors. Every time we call next(), we pop an element from the list, and re-add it to the end to cycle through the lists.

    public class ZigzagIterator {
        LinkedList<Iterator> list;
        public ZigzagIterator(List<Integer> v1, List<Integer> v2) {
            list = new LinkedList<Iterator>();
            if(!v1.isEmpty()) list.add(v1.iterator());
            if(!v2.isEmpty()) list.add(v2.iterator());
        }
    
        public int next() {
            Iterator poll = list.remove();
            int result = (Integer)poll.next();
            if(poll.hasNext()) list.add(poll);
            return result;
        }
    
        public boolean hasNext() {
            return !list.isEmpty();
        }
    }