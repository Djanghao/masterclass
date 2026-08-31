# C++ || easy solution

**Author:** saiteja_balla0413
**Votes:** 87
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/1244927/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/1244927/)

---

```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<ListNode*> splitListToParts(ListNode* root, int k) {
        //first calculate the length
        int len=0;
        ListNode* temp=root;
        while(temp)
        {
            len++;
            temp=temp->next;
        }
        
        int numNodes=len/k; //the number of nodes that are to be in each group
        int extra=len%k;  //the extra nodes that are left
        int i=0;
        vector<ListNode*> res;
        temp=root;
        while(temp)
        {
            res.push_back(temp);
            //get the numNodes and make the last node next to NULL
            int currLen=1;
            while(currLen<numNodes)
            {
                temp=temp->next;
                currLen++;
            }
            if(extra>0 && len>k)
            {
                temp=temp->next;
                extra--;
            }
            ListNode* x=temp->next;
            temp->next=NULL;
            temp=x;
        }
        //if the number of nodes are less than k we add NULL
        while(len<k)
        {
            res.push_back(NULL);
            len++;
        }
        return res;
        
    }
};
```

**Please upvote if this helps you :)**