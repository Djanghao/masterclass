# java faster than 100%

**Author:** 20136916
**Votes:** 6
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/1418913/](https://leetcode.com/problems/rle-iterator/solutions/1418913/)

---

Runtime: 4 ms, faster than 100.00% of Java online submissions for RLE Iterator.
Memory Usage: 39.4 MB, less than 47.86% of Java online submissions for RLE Iterator.

```
class RLEIterator {
    int index;
    int[] encoding;
    public RLEIterator(int[] encoding) {
        index = 0;
        this.encoding = encoding;
    }
    
    public int next(int n) {
        while (index < encoding.length && n > encoding[index]) {
            n -= encoding[index];
            index += 2;
            
        }
        if (index >= encoding.length) {
            return -1;
        }
        encoding[index] -= n;
        return encoding[index + 1]; 
    }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * RLEIterator obj = new RLEIterator(encoding);
 * int param_1 = obj.next(n);
 */
```