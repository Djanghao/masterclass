# 0ms java solution with explanation

**Author:** tmtmtt
**Votes:** 5
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/572570/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/572570/)

---

```
class Solution {
    public List<Integer> pathInZigZagTree(int label) {
        int level = 0;
        int tmp = label;
        
        while (tmp != 0){
            tmp /= 2;
            level ++;
        }
        List<Integer> res = new ArrayList<>();
        while (level > 0){
            res.add(label);
			/*At level n, the smallest label is 2^(n-1), the greatest label is 2^n - 1. 
			Thus a label plus its complementary label is equal to 2^(n-1) + 2^n - 1.
			The predecessor of a node with label n has label n/2 if the labels are not reversed. 
			Now that the labels are reversed every two levels, either the node itself or its predecessor is at a reversed level. 
			So to calculate the label of its predecessor, we use its complementary label / 2.*/
            label = (3 * (int)Math.pow(2, level - 1) - 1 -label);
            label /= 2;
            level --;
        }
        Collections.reverse(res);
        return res;
    }
}
```