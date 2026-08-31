# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/3458898/](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/3458898/)

---

```C++ []
class Solution {
public:
    Node* intersect(Node* quadTree1, Node* quadTree2) {
        if(quadTree1 -> isLeaf)
        {
            if(quadTree1 -> val == 1) return quadTree1;
            return quadTree2;
        }
        if(quadTree2 -> isLeaf)
        {
            if(quadTree2 -> val == 1) return quadTree2;
            return quadTree1;
        }
        vector<Node*> arr;
        arr.push_back(intersect(quadTree1 -> topLeft, quadTree2 -> topLeft));
        arr.push_back(intersect(quadTree1 -> topRight, quadTree2 -> topRight));
        arr.push_back(intersect(quadTree1 -> bottomLeft, quadTree2 -> bottomLeft));
        arr.push_back(intersect(quadTree1 -> bottomRight, quadTree2 -> bottomRight));
        for(Node* node : arr)
        {
            if(!node -> isLeaf)
            {
                return new Node(
                    true, false,
                    arr[0], arr[1], arr[2], arr[3]
                );
            }
        }
        for(Node *node : arr)
        {
            if(!node -> val) return new Node(
                true, false,
                arr[0], arr[1], arr[2], arr[3]
            );
        }
        return new Node(true, true);
    }
};
```

```Python3 []
class Solution:
    def intersect(self, q1: 'Node', q2: 'Node') -> 'Node':
        if q1.isLeaf:
            return q1.val and q1 or q2
        elif q2.isLeaf:
            return q2.val and q2 or q1
        else:
            tLeft = self.intersect(q1.topLeft, q2.topLeft)
            tRight = self.intersect(q1.topRight, q2.topRight)
            bLeft = self.intersect(q1.bottomLeft, q2.bottomLeft)
            bRight = self.intersect(q1.bottomRight, q2.bottomRight)
            if tLeft.isLeaf and tRight.isLeaf and bLeft.isLeaf and bRight.isLeaf and tLeft.val == tRight.val == bLeft.val == bRight.val:
                node = Node(tLeft.val, True, None, None, None, None) 
            else:
                node = Node(False, False, tLeft, tRight, bLeft, bRight)
        return node
```

```Java []
class Solution {
    public Node intersect(Node a, Node b) {
        if(a.isLeaf){
            return a.val ? a : b;
        }
        if(b.isLeaf){
            return b.val ? b : a;
        }
        a.topLeft = intersect(a.topLeft,b.topLeft);
        a.topRight = intersect(a.topRight,b.topRight);
        a.bottomLeft = intersect(a.bottomLeft,b.bottomLeft);
        a.bottomRight = intersect(a.bottomRight,b.bottomRight);

        if (a.topLeft.isLeaf && a.topRight.isLeaf 
            && a.bottomLeft.isLeaf && a.bottomRight.isLeaf
            && a.topLeft.val == a.topRight.val 
            && a.topRight.val == a.bottomLeft.val 
            && a.bottomLeft.val == a.bottomRight.val) {
            return new Node(true,a.topLeft.val);
        }
        return a;
    }
}
```
