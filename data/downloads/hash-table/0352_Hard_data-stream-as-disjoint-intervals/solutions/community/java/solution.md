# Java solution using TreeMap, real O(logN) per adding.

**Author:** qianzhige
**Votes:** 217
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/82553/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/82553/)

---

Use TreeMap to easily find the lower and higher keys, the key is the start of the interval. 
Merge the lower and higher intervals when necessary. The time complexity for adding is O(logN) since lowerKey(), higherKey(), put() and remove() are all O(logN). It would be O(N) if you use an ArrayList and remove an interval from it. 

    public class SummaryRanges {
        TreeMap<Integer, Interval> tree;
    
        public SummaryRanges() {
            tree = new TreeMap<>();
        }
    
        public void addNum(int val) {
            if(tree.containsKey(val)) return;
            Integer l = tree.lowerKey(val);
            Integer h = tree.higherKey(val);
            if(l != null && h != null && tree.get(l).end + 1 == val && h == val + 1) {
                tree.get(l).end = tree.get(h).end;
                tree.remove(h);
            } else if(l != null && tree.get(l).end + 1 >= val) {
                tree.get(l).end = Math.max(tree.get(l).end, val);
            } else if(h != null && h == val + 1) {
                tree.put(val, new Interval(val, tree.get(h).end));
                tree.remove(h);
            } else {
                tree.put(val, new Interval(val, val));
            }
        }
    
        public List<Interval> getIntervals() {
            return new ArrayList<>(tree.values());
        }
    }