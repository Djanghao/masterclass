# JAVA Implementation || Using Segment Tree

**Author:** langesichhtt_
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-ii/solutions/6136225/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-ii/solutions/6136225/)

---

This is java implementation of c++ solution:- https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-ii/submissions/1473309875/


# Code
```java []
import java.util.*;
class Node {
    long val;
    public Node() {
        val = -1l; 
    }
    public Node(long p1) {
        val = p1;
    }
    public void merge(Node l, Node r) {
        this.val = Math.max(l.val, r.val);
    }
}
class Update {
    long val;
    public Update(long p1) {
        val = p1;
    }
    public void apply(Node a) {
        a.val = val;
    }
}
class SegTree {
    List<Node> tree;
    List<Long> arr;
    int n;
    int s;
    public SegTree(int a_len, List<Long> a) {
        arr = a;
        n = a_len;
        s = 1;
        while (s < 2 * n) {
            s = s << 1;
        }
        tree = new ArrayList<>();
        for(int i=0; i<=s; i++){
            tree.add(new Node());
        }
        build(0, n - 1, 1);
    }
    public void build(int start, int end, int index) {
        if (start == end) {
            tree.set(index, new Node(arr.get(start)));
            return;
        }
        int mid = (start + end) / 2;
        build(start, mid, 2 * index);
        build(mid + 1, end, 2 * index + 1);
        tree.get(index).merge(tree.get(2 * index), tree.get(2 * index + 1));
    }
    //_______________loook update____________________________________________________
    // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    // ________________________________________________________________-________________
    public void update(int start, int end, int index, int query_index, Update u) {
        if (start == end) {
            // System.out.println("base case : "+ start);
            // u.apply(tree.get(index));
            tree.get(index).val=u.val;
            return;
        }
        int mid = (start + end) / 2;
        if (mid >= query_index)
            update(start, mid, 2 * index, query_index, u);
        else
            update(mid + 1, end, 2 * index + 1, query_index, u);
        tree.get(index).merge(tree.get(2 * index), tree.get(2 * index + 1));
    }
    //""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    public Node query(int start, int end, int index, int left, int right) {
        if (start > right || end < left)
            return new Node();
        if (start >= left && end <= right)
            return tree.get(index);
        int mid = (start + end) / 2;
        Node l = query(start, mid, 2 * index, left, right);
        Node r = query(mid + 1, end, 2 * index + 1, left, right);
        Node ans = new Node();
        ans.merge(l, r);
        return ans;
    }
    public void makeUpdate(int index, long val) {
        Update newUpdate = new Update(val);
        update(0, n - 1, 1, index, newUpdate);
    }
    public Node makeQuery(int left, int right) {
        // System.out.println("makequery: "+left+" : "+right);
        return query(0, n - 1, 1, left, right);
    }
    public void print(){
        System.out.println("size : "+tree.size());
        for(Node n : tree){
            System.out.print(n.val+" ");
        }
        System.out.println();
    }
}
public class Solution {
    public long maxRectangleArea(int[] x, int[] y) {
        int n = x.length;
        TreeMap<Integer, List<Integer>> allXForY = new TreeMap<>();
        Set<Integer> allX = new TreeSet<>();

        for (int i = 0; i < n; i++) {
            allXForY.computeIfAbsent(y[i], k -> new ArrayList<>()).add(x[i]);
            allX.add(x[i]);
        }
        int totalX = 1;
        Map<Integer, Integer> allXToIndex = new HashMap<>();
        for (int xVal : allX) {
            allXToIndex.put(xVal, totalX++);
        }
        List<Long> arr = new ArrayList<>(Collections.nCopies(totalX + 2,-1l));
        SegTree tree = new SegTree(totalX + 2, arr);
        // System.out.println("Print Segment:_________________");
        // tree.print();
        long ans = -1l;
        for (Map.Entry<Integer, List<Integer>> entry : allXForY.entrySet()) {
            int yCoordinate = entry.getKey();
            List<Integer> allXForYCoordinate = entry.getValue();
            Collections.sort(allXForYCoordinate);
            if (allXForYCoordinate.size() >= 2) {
                for (int i = 0; i < allXForYCoordinate.size() - 1; i++) {
                    long last1 = tree.makeQuery(allXToIndex.get(allXForYCoordinate.get(i)),
                            allXToIndex.get(allXForYCoordinate.get(i))).val;
                    long last2 = tree.makeQuery(allXToIndex.get(allXForYCoordinate.get(i + 1)),
                            allXToIndex.get(allXForYCoordinate.get(i + 1))).val;

                    // System.out.println(yCoordinate+" "+last1+" "+last2);

                    if (last1 == last2 && last1 != -1) {
                        int z1 = allXForYCoordinate.get(i);
                        int z2 = allXForYCoordinate.get(i+1);
                        // System.out.println(allXToIndex.getOrDefault(z1,0)+" "+allXToIndex.getOrDefault(z2,0));
                        // System.out.println("Print Segment:_________________");
                        // tree.print();
                        long between = tree.makeQuery(allXToIndex.getOrDefault(allXForYCoordinate.get(i),0) + 1,
                                allXToIndex.getOrDefault(allXForYCoordinate.get(i + 1),0) - 1).val;
                        // System.out.println("between "+between);
                        if (between < last1) {
                            long length = allXForYCoordinate.get(i + 1) - allXForYCoordinate.get(i);
                            long breadth = yCoordinate - last1;
                            // System.out.println("length: "+length+", breadth: "+breadth);
                            long area = length * breadth;
                            // System.out.println("area: "+area+", ans : "+ans);
                            ans  = area>ans?area:ans;  // max of (area,ans)
                        }
                    }
                    // System.out.println("***************************************************************");
                }
            }
            // System.out.println("__________________________________________________________________________");
            // Update the segment tree with current x-coordinates
            for (int xVal : allXForYCoordinate) {
                // System.out.println(allXToIndex.get(xVal)+": #*# :"+yCoordinate);
                tree.makeUpdate(allXToIndex.get(xVal), yCoordinate);
            }
            // System.out.println("Print Segment:_________________");
            // tree.tree.get(1).val = -100000;
            // tree.print();
        }
        return ans;
    }
}
```
THANKS!! PLEASE UPVOTE
.
.
.