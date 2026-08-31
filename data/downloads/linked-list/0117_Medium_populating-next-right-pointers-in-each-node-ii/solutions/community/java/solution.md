# Java solution with constant space

**Author:** talk-is-cheap
**Votes:** 329
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/37813/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/37813/)

---

    public void connect(TreeLinkNode root) {
	    TreeLinkNode dummyHead = new TreeLinkNode(0);
	    TreeLinkNode pre = dummyHead;
	    while (root != null) {
		    if (root.left != null) {
			    pre.next = root.left;
			    pre = pre.next;
		    }
		    if (root.right != null) {
			    pre.next = root.right;
			    pre = pre.next;
		    }
		    root = root.next;
		    if (root == null) {
			    pre = dummyHead;
			    root = dummyHead.next;
			    dummyHead.next = null;
		    }
	    }
    }