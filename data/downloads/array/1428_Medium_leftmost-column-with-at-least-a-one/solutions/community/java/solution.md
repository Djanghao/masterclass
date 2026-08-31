# Java 100% faster | short and simple

**Author:** vpatil28
**Votes:** 1
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/971617/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/971617/)

---

```
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface BinaryMatrix {
 *     public int get(int row, int col) {}
 *     public List<Integer> dimensions {}
 * };
 */

class Solution {
    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        
        List<Integer> dim = binaryMatrix.dimensions();
        
        int r = dim.get(0);
        int c = dim.get(1);
        int s = c-1;
        int j=s, i=0;
        for(i=0; i<r; i++){
            j = s;
            while(j>0 && binaryMatrix.get(i, j-1) == 1) j--;
            s = Math.min(s,j);
        }
        if(j == c-1 && binaryMatrix.get(i-1, j) == 0) return -1;
        
        return j;
    }
}
```