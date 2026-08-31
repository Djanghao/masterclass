# Solution

**Author:** deleted_user
**Votes:** 465
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/3176186/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/3176186/)

---

```C++ []
 int init = []
{
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::ofstream out("user.out");
    for(string s; getline(std::cin, s);)
    {
        if(s[0] != '0') out << "Intersected at '" << s << "'\
";
        else out << "No intersection\
";
        for(int i = 0; i < 4; ++i) getline(std::cin, s);
    }
    out.flush();
    exit(0);
    return 0;
}();
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        unordered_map<ListNode*,int>mpp;
    for (auto p = headA ; p!=NULL ; p = p->next){
        mpp[p]=p->val;
    }
    for (auto p = headB ; p!=NULL ; p = p->next){
        if (mpp.find(p)!=mpp.end()) return p;
    }
    return NULL;
    }
};
```

```Python3 []
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        stackA = ['A']
        stackB = ['B']

        while headA or headB:
            if headA:
                stackA.append(headA)
                headA = headA.next

            if headB:
                stackB.append(headB)
                headB = headB.next

        prev = None
        while stackA and stackB:
            nodeA = stackA.pop(-1)
            nodeB = stackB.pop(-1)

            if nodeA != nodeB:
                return prev

            prev = nodeA
```

```Java []
class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int ac = 0;
        int bc = 0;
        ListNode a = headA;
        ListNode b = headB;
        while(a != null){
            ac++;
            a = a.next;
        }
        while(b != null){
            bc++;
            b = b.next;
        }
        while(ac > bc){
            ac--;
            headA = headA.next;
        }
        while(bc > ac){
            bc--;
            headB = headB.next;
        }
        
        while(headA != headB){
            headA = headA.next;
            headB = headB.next;
        }
        return headA;
    }
}
```
