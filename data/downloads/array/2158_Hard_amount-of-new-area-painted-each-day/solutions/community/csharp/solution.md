# Segment Tree Implementation

**Author:** SquirrelN
**Votes:** 2
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2116090/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2116090/)

---

Classic Segment Tree problem, inserting new nodes and searching for nodes happens in logarithmic time.
```
SegmentTreeNode _root = null; //Root of Segment Tree
int MAX = 50000; //Upper limit set by problem constraints
public int[] AmountPainted(int[][] paint) {
    _root = new SegmentTreeNode{IntervalStart = 0, IntervalEnd = MAX};
    var n = paint.Length;
    var result = new int[n];
    for(int i=0;i<n;i++) result[i] = AddToSegmentTree(paint[i][0],paint[i][1], _root);
    return result;
}

int AddToSegmentTree(int start, int end, SegmentTreeNode node){ //log N operation, N is number of nodes in the tree
    if(start==node.IntervalStart && end == node.IntervalEnd){
        if(node.Painted) return 0; //Whole node is already Painted
        if(node.LChild==null && node.RChild==null){ //Node was not encountered earlier, paint it and return size
            node.Painted = true; return end - start;
        }
    }
    var intervalMid = node.IntervalStart + (node.IntervalEnd-node.IntervalStart)/2;
    if(node.LChild ==null){ //Split the node: [start-mid] [mid-end]
        node.LChild = new SegmentTreeNode{IntervalStart = node.IntervalStart, IntervalEnd = intervalMid, Painted = node.Painted};
        node.RChild = new SegmentTreeNode{IntervalStart = intervalMid, IntervalEnd = node.IntervalEnd, Painted = node.Painted};
    }
    int left = 0, right = 0; //Tracks paint done on each side
    if(start>=intervalMid) right = AddToSegmentTree(start, end, node.RChild); //Only look to the right
    else if(end<=intervalMid) left = AddToSegmentTree(start, end, node.LChild); //Only look to the left
    else{ //Check both children
        left = AddToSegmentTree(start, intervalMid, node.LChild);
        right = AddToSegmentTree(intervalMid, end, node.RChild);
    }
    node.Painted = node.LChild.Painted && node.RChild.Painted; //Node's paint status depends on its children
    return left + right;
}

class SegmentTreeNode{
    public int IntervalStart{get;set;}
    public int IntervalEnd{get;set;}
    public SegmentTreeNode LChild {get;set;} = null;
    public SegmentTreeNode RChild {get;set;} = null;
    public bool Painted {get;set;} = false;
}
```