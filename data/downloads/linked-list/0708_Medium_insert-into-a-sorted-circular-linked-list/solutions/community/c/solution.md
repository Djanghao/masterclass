# 4ms c++ o(n) short, intuitive, easy code with explanation. 97%

**Author:** LakshyaFaang
**Votes:** 2
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/1860423/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/1860423/)

---

Borrowed main idea from user @bevis.

2 -> 4 -> 7 -> 9 -> 13 -> 15 -> 16 (where 16 is connected back to 2)

* If the number to be inserted is between 2 and 16, it will be inserted on one of the links between 2 and 16
* If the number to be inserted is less than 2 or greater than 16 than it will be inserted on the link from 16 to 2

```
class Solution {
public:
    Node* insert(Node* head, int insertVal) {
        Node* p = head;
        Node* temp = new Node(insertVal);
        temp->next = temp;
        if (!head) return temp;

        do {
            if ((p->val <= insertVal && insertVal <= p->next->val) || // insertVal is between 2 and 16
            (p->val > p->next->val && insertVal < p->next->val) || // insertVal is beyond 16
            (p->val > p->next->val && insertVal > p->val)) { // insertVal is under 2
                temp->next = p->next;
                p->next = temp;
                break;
            }
            p = p->next;
        } while (p != head);
    
        if (temp->next == temp) {
            temp->next = head->next;
            head->next = temp;
        }
        return head;
    }
};