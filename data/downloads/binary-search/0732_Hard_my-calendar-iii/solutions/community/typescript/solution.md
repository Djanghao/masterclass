# TypeScript Segment Tree (Beats 100%)

**Author:** mahbubulhaque
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/2938345/](https://leetcode.com/problems/my-calendar-iii/solutions/2938345/)

---

# Intuition
We divide segments; with each divided segment having a count: how many times it appears inside a search [startTime, endTime].
For input: [10, 20), [15, 25), [18, 30)
Our divided segments:
[10, 14] -> 1
[15, 17] -> 2
[18, 19] -> 3
[19, 24] -> 2
[25, 30] -> 1

# Approach
We can use segment tree to track the range and count.
=> Each node has a range: start - end
=> if a segment covers **start to end** then we add a count to this node: **nodeCount** and don't go further with this segment. We process the remaining left or right part of the segment.
=> totalCount for this node = max(left(total) , right(total)) + nodeCount; nodeCount overlaps with everything on the left and right but left and right don't overlap 
=> answer for each query is **root.totalCount**

# Complexity
  N = 1e9, n = number of query
- Time complexity:
 -> Per query: O(log(N))

- Space complexity:
 -> O(nlogN)
 

# Code
```
type TNode = MyTreeNode | null

class MyTreeNode {
    left: TNode = null;
    right: TNode = null;
    start: number;
    end: number;
    nodeCount: number; // completely fill this node -> so we don't go further down
    totalCount: number;// max(left(total) , right(total)) + nodeCount;

    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
        this.nodeCount = 0;
        this.totalCount = 0;
    }
}

class SegmentTree {
    root: TNode = null;
    constructor(start: number, end: number) {
        this.root = new MyTreeNode(start, end);
    }

    _add(node: TNode, start: number, end: number): void {
        //console.log(start, end, node.start, node.end);
        if (start > end) return;
        if (node.start === start && node.end === end) {
            node.nodeCount++;
            node.totalCount++;
            return;
        }
        else {
            let mid = (node.start + node.end) >> 1;
            if (node.left === null) {
                node.left = new MyTreeNode(node.start, mid);
            }
            if (node.right === null) {
                node.right = new MyTreeNode(mid + 1, node.end);
            }

            this._add(node.left, start, Math.min(mid, end));
            this._add(node.right, Math.max(mid + 1, start), end);

            node.totalCount = Math.max(node.left.totalCount, node.right.totalCount) + node.nodeCount;
        }

    }

    add(start: number, end: number) {
        this._add(this.root, start, end);
    }
    getResult() : number {
        return this.root.totalCount;
    }

}

class MyCalendarThree {
    segmentTree: SegmentTree | null = null;
    constructor() {
        this.segmentTree = new SegmentTree(0, 1000000000);
    }

    book(startTime: number, endTime: number): number {
        this.segmentTree.add(startTime, endTime - 1);
        return this.segmentTree.getResult();
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */
```