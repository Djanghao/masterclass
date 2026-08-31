# Extremely simple solution using C++

**Author:** someone_s
**Votes:** 657
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/811151/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/811151/)

---

```
class Solution {
public:
    Node* copyRandomList(Node* head) {
        map<Node*, Node*> m;
        int i=0;
        Node* ptr = head;
        while (ptr) {
            m[ptr] =new Node(ptr->val);
            ptr = ptr->next;
        }
        ptr = head;
        while (ptr) {
            m[ptr]->next = m[ptr->next];
            m[ptr]->random = m[ptr->random];
            ptr = ptr->next;
        }
        return m[head];
    }
};
```

Edit : Since this post has gained a lot of upvotes, I thought to mention the source from where I got this solution - Youtube channel of back to back swe