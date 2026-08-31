# MAKING BABIES OF 2 NODES✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 4
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763354/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763354/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to insert the gcd of the 2 nodes in between each pair of nodes
its value should be the gcd of the 2 parents lets see how
# Approach
<!-- Describe your approach to solving the problem. -->
we first have 2 pointers that will point out to the 2 parents
we will create a child node with value of the gcd of the two parents and insert it in between 2 parents 
gcd is greatest common divisor
thats it we have a gcd maker function that takes in 2 numbers and gicves us the gcd 
we just have to insert in between 2 oparents
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven-l8x1pr.jpg](./images/0.jpeg)

# Code
```javascript []

var insertGreatestCommonDivisors = function(head) {
    let p1=head
    let p2=head.next
    function gcdmaker(a,b){
        if(a==0)return b
        if(b==0)return a
        while(b){
            let rem=a%b
            a=b
            b=rem
        }
        return a
    }
    while(p1&&p2){
        let gcd=new ListNode(gcdmaker(p1.val,p2.val))
        p1.next=gcd
        gcd.next=p2
        p1=p2
        p2=p2.next
    }
    return head
};
```
```python []
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def insert_greatest_common_divisors(head: ListNode) -> ListNode:
    def gcdmaker(a: int, b: int) -> int:
        while b:
            a, b = b, a % b
        return a

    p1 = head
    p2 = head.next

    while p1 and p2:
        gcd = ListNode(gcdmaker(p1.val, p2.val))
        gcd.next = p2
        p1.next = gcd
        p1 = p2
        p2 = p2.next

    return head

```
```java []
public class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        ListNode p1 = head;
        ListNode p2 = head.next;

        while (p1 != null && p2 != null) {
            int gcd = gcdmaker(p1.val, p2.val);
            ListNode gcdNode = new ListNode(gcd);
            gcdNode.next = p2;
            p1.next = gcdNode;
            p1 = p2;
            p2 = p2.next;
        }

        return head;
    }

    private int gcdmaker(int a, int b) {
        while (b != 0) {
            int rem = a % b;
            a = b;
            b = rem;
        }
        return a;
    }
}

```
```c []
#include <stdio.h>
#include <stdlib.h>

typedef struct ListNode {
    int val;
    struct ListNode *next;
} ListNode;

int gcdmaker(int a, int b) {
    while (b != 0) {
        int rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}

ListNode* insertGreatestCommonDivisors(ListNode* head) {
    ListNode *p1 = head;
    ListNode *p2 = head ? head->next : NULL;

    while (p1 && p2) {
        int gcd = gcdmaker(p1->val, p2->val);

        ListNode *gcdNode = (ListNode *)malloc(sizeof(ListNode));
        gcdNode->val = gcd;
        gcdNode->next = p2;
        
        p1->next = gcdNode;
        p1 = p2;
        p2 = p2->next;
    }

    return head;
}
```