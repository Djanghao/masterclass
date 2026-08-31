# C++ Simple and Short Solution, O(n) TC O(1) SC, Explained

**Author:** YehudisK
**Votes:** 85
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427037/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427037/)

---

**Idea:**
We use stringstream to split the string by commas.
We use `nodes` to count the nodes we are allowed to have next.
Every time we get a new node we decrease `nodes`, if we got below zero it's false.
If we get a non-null node, we can have after it two more nodes.
At the end, we are supposed to end up with `nodes == 0`, otherwise the tree is not good.
```
class Solution {
public:
    bool isValidSerialization(string preorder) {
        stringstream ss(preorder);
        string curr;
        int nodes = 1;
        while (getline(ss, curr, ',')) {
            nodes--;
            if (nodes < 0) return false;
            if (curr != "#") nodes += 2;
        }
        return nodes == 0;
    }
};
```
**Like it? please upvote!**