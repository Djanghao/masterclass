# [C++] Stack Solution Improved to one pass from two pass.

**Author:** shivanshu_0
**Votes:** 21
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/749033/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/749033/)

---

Solution 1: Two Pass
firstly i counted the number of elements in linked list
then using same logic as for finding next greater element in array using stack
in stack i used a pair to store {value,index} so as to find correct position in ans array

```
	int count(ListNode *head){
        int res=0;
        while(head){
            res++;
            head=head->next;
        }
        return res;
    }
    vector<int> nextLargerNodes(ListNode* head) {
        int n=count(head);
        vector<int> ans(n,0);
        stack<pair<int,int>> s;
        int i=0;
        while(head){
            while(!s.empty() && s.top().first<head->val){
                int idx=s.top().second;
                s.pop();
                ans[idx]=head->val;
            }
            s.push({head->val,i++});
            head=head->next;
        }
        return ans;
    }
```

Solution 2: One-Pass
I realised that we don't need to count number of elements in linked list
we can directly push 0 in ans vector for every itertion


```
	vector<int> nextLargerNodes(ListNode* head) {
        vector<int> ans;
        stack<pair<int,int>> s;
        int i=0;
        while(head){
            while(!s.empty() && s.top().first<head->val){
                int idx=s.top().second;
                s.pop();
                ans[idx]=head->val;
            }
            s.push({head->val,i++});
            head=head->next;
            ans.push_back(0);
        }
        return ans;
    }
```