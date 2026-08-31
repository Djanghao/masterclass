# [C++/Java/C#/Python] 11 Solution Approaches || No Brainer, Easy to Understand

**Author:** nitishhsinghhh
**Votes:** 23
**Link:** [https://leetcode.com/problems/add-two-integers/solutions/2059072/](https://leetcode.com/problems/add-two-integers/solutions/2059072/)

---

# Solution

**1. Return the Sum**
```C++ []
class Solution {
public:
    int sum(int num1, int num2) {
        return num1 + num2;
    }
};
```
```Java []
class Solution {
    public int sum(int num1, int num2) {
        return num1 + num2;
    }
}
```
```csharp []
public class Solution {
    public int Sum(int num1, int num2) {
        return num1 + num2;
    }
}
```
```Python []
class Solution(object): sum=add
```

****2. **Using Singly Linked List******
```C++ []
class Solution {
    struct ListNode {
        int val;
        ListNode* next;
        ListNode(int x) : val(x), next(NULL) {}
        ListNode(int x, ListNode* next) : val(x), next(next) {}
    };

public:
    int sum(int num1, int num2) {
        ListNode* head = new ListNode(num1, new ListNode(num2));
        int sum = 0;
        while (head != NULL) {
            sum += head->val;
            head = head->next;
        }
        return sum;
    }
};
```
**3. Using Doubly Linked List**
```C++ []
class Solution {
public:
    struct Node {
        int val;
        Node *prev, *next;
        Node(int x) : val(x), prev(nullptr), next(nullptr) {}
    };
    int sum(int num1, int num2) {
        Node *head1 = new Node(num1), *head2 = new Node(num2);
        head1->next = head2;
        head2->prev = head1;
        int sum = 0;
        Node* curr = head1;
        while (curr != nullptr) {
            sum += curr->val;
            curr = curr->next;
        }
        return sum;
    }
};
```
**4. Using Stack**
```C++ []
class Solution {
public:
    int sum(int num1, int num2) {
        stack<int> st;
        st.push(num1);
        st.push(num2);
        int sum = 0;
        while (!st.empty()) {
            sum += st.top();
            st.pop();
        }
        return sum;
    }
};
```
**5. Using Queue**
```C++ []
class Solution {
public:
    int sum(int num1, int num2) {
        queue<int> que;
        que.push(num1);
        que.push(num2);
        int sum = 0;
        while (!que.empty()) {
            sum += que.front();
            que.pop();
        }
        return sum;
    }
};
```
**6. Using Max Heap**
```C++ []
class Solution {
public:
    int sum(int num1, int num2) {
        priority_queue<int> pq;
        pq.push(num1);
        pq.push(num2);
        int sum = 0;
        while (!pq.empty()) {
            sum += pq.top();
            pq.pop();
        }
        return sum;
    }
};
```
**7. Using Min heap**
```C++ [] 
class Solution {
public:
    int sum(int num1, int num2) {
        priority_queue<int, vector<int>, greater<int>> pq;
        pq.push(num1);
        pq.push(num2);
        int sum = 0;
        while (!pq.empty()) {
            sum += pq.top();
            pq.pop();
        }
        return sum;
    }
};
```
**8. Using std Vector**
```C++ [] 
class Solution {
public:
    int sum(int num1, int num2) {
        vector<int> v = {num1, num2};
        int sum = 0;
        for (int i = 0; i < v.size(); i++)
            sum += v[i];
        return sum;
    }
};
```
**9. Using Binary Tree**
```C++ [] 
class Solution {
    struct TreeNode {
        int val;
        TreeNode *left, *right;
        TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    };

public:
    int sum(int num1, int num2) {
        TreeNode* root = new TreeNode(num1);
        root->right = new TreeNode(num2);
        return treeSum(root);
    }

private:
    int treeSum(TreeNode* root) {
        if (root == nullptr)
            return 0;
        return root->val + treeSum(root->right);
    }
};
```
**10. Using Two Pointers**
```C++ [] 
class Solution {
public:
    int sum(int num1, int num2) {
        int *p1 = &num1, *p2 = &num2;
        int sum = 0;
        while (p1 <= &num1 + 1 && p2 <= &num2 + 1) {
            sum = *p1 + *p2;
            p1++;
            p2++;
        }
        return sum;
    }
};
```
**11. Using Bit Manipulation**
```C++ [] 
class Solution {
public:
    int sum(int num1, int num2) {
        while (num2 != 0) {
            int carry = num1 & num2;
            num1 = num1 ^ num2;
            num2 = carry << 1;
        }
        return num1;
    }
};
```

# Frequently encountered in technical interviews
```
std::vector<std::pair<std::string, int>> interview_frequency = {{}};
```


