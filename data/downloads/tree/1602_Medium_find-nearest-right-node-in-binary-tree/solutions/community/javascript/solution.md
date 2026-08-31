# JS, BFS, no queue req'd

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1044623/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1044623/)

---

Here's a way to do BFS - without a queue.
I use 2 arrays: 1 for the parent-level that I call "us",
and on for the children of all the parents - the next level.  "Them."
I walk throught the parents, adding children to them and processing as req'd.
And when I run out of parents, I copy them to us, and reset them to [].
As with the queue, we're done when we run out of children.
No popping, shifting or unshifting req'd.  Also no queues.
```
var findNearestRightNode = function(root, u) {
    if(!root) { return null; }
    if(root.val == u.val) { return null; }
    let i, us = [], them = [], first = 0;
    them.push(root);
    while(them.length > 0) {
        us = them; them = []; first = 0;
        while(first<us.length) {
            if(us[first].left) { them.push(us[first].left); }
            if(us[first].right) { them.push(us[first].right); }
            first++;
        }
        for(i = 0; i < them.length-1; i++) {
            if(them[i].val == u.val) return them[i+1];
        }
        if(them[i].val == u.val) return null;
    }
    return null;
};
```