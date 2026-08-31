# Easy Understood O(n^2) Solution with explanation

**Author:** leuction
**Votes:** 93
**Link:** [https://leetcode.com/problems/falling-squares/solutions/108766/](https://leetcode.com/problems/falling-squares/solutions/108766/)

---

The idea is quite simple, we use intervals to represent the square. the initial height we set to the square `cur` is `pos[1]`. That means we assume that all the square will fall down to the land. we iterate the previous squares, check is there any square `i` beneath my `cur` square. If we found that we have squares `i` intersect with us, which means my current square will go above to that square `i`. My target is to find the highest square and put square `cur` onto square `i`, and set the height of the square `cur` as 
```java
cur.height = cur.height + previousMaxHeight;
``` 
Actually, you do not need to use the interval class to be faster, I just use it to make my code cleaner

```java
class Solution {
    private class Interval {
        int start, end, height;
        public Interval(int start, int end, int height) {
            this.start = start;
            this.end = end;
            this.height = height;
        }
    }
    public List<Integer> fallingSquares(int[][] positions) {
        List<Interval> intervals = new ArrayList<>();
        List<Integer> res = new ArrayList<>();
        int h = 0;
        for (int[] pos : positions) {
            Interval cur = new Interval(pos[0], pos[0] + pos[1] - 1, pos[1]);
            h = Math.max(h, getHeight(intervals, cur));
            res.add(h);
        }
        return res;
    }
    private int getHeight(List<Interval> intervals, Interval cur) {
        int preMaxHeight = 0;
        for (Interval i : intervals) {
            // Interval i does not intersect with cur
            if (i.end < cur.start) continue;
            if (i.start > cur.end) continue;
            // find the max height beneath cur
            preMaxHeight = Math.max(preMaxHeight, i.height);
        }
        cur.height += preMaxHeight;
        intervals.add(cur);
        return cur.height;
    }
}
```