# Python easy to understand solutions

**Author:** OldCodingFarmer
**Votes:** 107
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/43689/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/43689/)

---

```
def copyRandomList1(self, head):
        if not head:
            return 
        # copy nodes
        cur = head
        while cur:
            nxt = cur.next
            cur.next = RandomListNode(cur.label)
            cur.next.next = nxt
            cur = nxt
        # copy random pointers
        cur = head
        while cur:
            if cur.random:
                cur.next.random = cur.random.next
            cur = cur.next.next
        # separate two parts
        second = cur = head.next
        while cur.next:
            head.next = cur.next
            head = head.next
            cur.next = head.next
            cur = cur.next
        head.next = None
        return second
    
    # using dictionary    
    def copyRandomList(self, head):
        if not head:
            return 
        cur, dic = head, {}
        # copy nodes
        while cur:
            dic[cur] = RandomListNode(cur.label)
            cur = cur.next
        cur = head
        # copy random pointers
        while cur:
            if cur.random:
                dic[cur].random = dic[cur.random]
            if cur.next:
                dic[cur].next = dic[cur.next]
            cur = cur.next
        return dic[head]
```