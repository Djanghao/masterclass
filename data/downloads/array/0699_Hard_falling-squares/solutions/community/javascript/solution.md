# java solutions

**Author:** Infox_92
**Votes:** 2
**Link:** [https://leetcode.com/problems/falling-squares/solutions/2785708/](https://leetcode.com/problems/falling-squares/solutions/2785708/)

---

```
class Solution {
    public List<Integer> fallingSquares(int[][] positions) {
        int max = 0;
        List<Integer> result = new ArrayList<>();
        TreeSet<Node> nodes = new TreeSet<>((n1, n2) -> n1.l - n2.l);
        // start position 0, height 0
        nodes.add(new Node(0, 0));
        for (int[] position : positions) {
            // failing square
            Node node = new Node(position[0], position[1]);
            // the right position
            int r = node.l+node.h;
            
            // find the node before the failing square
            Node floor = nodes.floor(node);
            
            // maxH is max height between node.l to r; will be add to node.h
            int maxH = floor.h;
            int preH = floor.h;
            if (floor.l == node.l) {
                floor.h = node.h;
                node = floor;
            } else nodes.add(node);
            
            Node prev = null;
            Node curr = nodes.higher(node);
            // iterate existing node till over the range of failing square
            while (curr != null && curr.l < r) {
                if (prev != null) nodes.remove(prev);
                preH = curr.h;
                maxH = Math.max(maxH, preH);
                prev = curr;
                curr = nodes.higher(curr);
            }
            
            if (prev != null) prev.l = r;
            
            node.h += maxH;
            nodes.add(new Node(r, preH));
            max = Math.max(max, node.h);
            result.add(max);
        }
        
        return result;
    }
    
    class Node {
        // start position
        int l;
        // height
        int h;
        public Node(int l, int h) {
            this.l = l;
            this.h = h;
        }
    }
}
```