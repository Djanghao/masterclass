# Simple Java 0ms iterative solution in 0(n) that beats 100% with explanation

**Author:** jay_fyi
**Votes:** 22
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/282340/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/282340/)

---

1. Just loop throught the linked list until you meet one of those 3 conditions:
	* Pre and Next's value are in **ascendent** order and the target val is the **same as pre value** OR **between pre and next**.
		* e.g [1 -> 3] with val=1 or 2.
	* Pre and Next's value are in **desendent** order and the target val is the **same as pre value** OR **higher**.
		* e.g [3 -> 1] with val=3 or higher.
	* Pre and Next's value are in **desendent** order and the target val is the **same as next value** OR **lower**.
		* e.g [3 -> 1] with val=1 or lower.

2. Insert the new node in between the pre and next
 
```
	public Node insert(Node head, int val) {
        Node node = new Node(val);
        
        if(head == null) {
            node.next = node;
            return node;
        }

        Node pre = head;
        Node next = head.next;

        while(next != head) {

            if(( val < next.val && pre.val <= val)           // e.g [1 -> 3] with val=1 or 2      (same as pre OR between pre and next)
                || (pre.val <= val && pre.val > next.val )   // e.g [3 -> 1] with val=3 or higher (same as pre OR higher than pre)
                || (pre.val > next.val && val <= next.val )){// e.g [3 -> 1] with val=1 or lower  (same as next OR lower than next)
                break;
            }
            pre = next;
            next = next.next;
        }

        pre.next = node;
        node.next = next;
        return head;
    }