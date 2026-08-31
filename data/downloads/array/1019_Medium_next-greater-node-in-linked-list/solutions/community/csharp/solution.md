# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/4923947/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/4923947/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    vector<int> nextLargerNodes(ListNode* head) 
    {
        vector<int>v;
        while(head)
        {
            v.push_back(head->val);
            head = head->next;
        }

        stack<int>st;
        int i = 0, n = v.size();
        vector<int>result(n ,0);
        while(i < n)
        {
            while(!st.empty() and v[i] > v[st.top()])
            {
                int idx = st.top(); st.pop();
                result[idx] = v[i];
            }
            st.push(i++);
        }
        return result;
    }
};
```