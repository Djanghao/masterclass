# C++  | 100% | Understandable (very detailed)

**Author:** KOCMOHABT
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-reverse-operations/solutions/3369888/](https://leetcode.com/problems/minimum-reverse-operations/solutions/3369888/)

---

# Approach 1
At first glance the problem doesn't look very hard. (But it is :))
What we need to do:
1. Mark banned positions
2. Start the queue from specified position
3. Add to the queue following positions from the current according to the rule from the condition (skip visited positions)
4. Go through all of the queue till the end

Some remarks before we start:

At the begginng we will mark unvisited position as -1. So if position is not visited at the end it will have correct value. The initial position $$p$$ we mark as visited at $$0$$. When we add any position to the queue we get value from current position and increase it by 1.
So at the end our $$visited$$ array will be the result.

And about how we get following positions from the current. 
Let's for example $$k = 6$$ What we can do here:
$$ 0 0 0 0 0 1 0 0 0 0 0 $$
$$|0 0 0 0 0 1|0 0 0 0 0 $$ => $$|1 0 0 0 0 0|0 0 0 0 0 $$
$$ 0|0 0 0 0 1 0|0 0 0 0 $$ => $$ 0|0 1 0 0 0 0|0 0 0 0 $$
$$ 0 0|0 0 0 1 0 0|0 0 0 $$ => $$ 0 0|0 0 1 0 0 0|0 0 0 $$
$$ 0 0 0|0 0 1 0 0 0|0 0 $$ => $$ 0 0 0|0 0 0 1 0 0|0 0 $$
$$ 0 0 0 0|0 1 0 0 0 0|0 $$ => $$ 0 0 0 0|0 0 0 0 1 0|0 $$
$$ 0 0 0 0 0|1 0 0 0 0 0|$$ => $$ 0 0 0 0 0|0 0 0 0 0 1|$$

So the starting position is $$position - k + 1$$. And next we get every even position (even if we count from the starting position, not from 0) up to $$position + k - 1$$
Also we should check edge cases when $$position - k + 1 < 0$$ or $$position + k - 1 >= n$$

# Code
```
class Solution 
{
public:
    vector<int> minReverseOperations(int n, int p, vector<int>& banned, int k) 
    {
        std::vector<int> visited(n, -1);
        std::vector<int> ban(n , 0);
        for (const int& b: banned)
        {
            ban[b] = -1;
            visited[b] = -1;
        }

        std::queue<int> q;
        q.push(p);
        visited[p] = 0;
        while (!q.empty())    
        {
            int curr = q.front();
            q.pop();

            int begin = curr - k + 1;
            int end   = curr + k - 1;

            for (int i = begin, start = begin; i <= end; i += 2, ++start)
            {
                if (start < 0 || start + k - 1 >= n || -1 == ban[i])
                    continue;

                if (-1 == visited[i])
                {
                    q.push(i);
                    visited[i] = visited[curr] + 1;
                }
            }
        }

        return visited;
    }
};
```

This solution is okay, but we get TLE here.

# Approach 2
Improve check for edge cases first

```
class Solution 
{
public:
    vector<int> minReverseOperations(int n, int p, vector<int>& banned, int k) 
    {
        std::vector<int> visited(n, -1);
        std::vector<int> ban(n , 0);
        for (const int& b: banned)
        {
            ban[b] = -1;
            visited[b] = -1;
        }    

        std::queue<int> q;
        q.push(p);
        visited[p] = 0;
        while (!q.empty())    
        {
            int curr = q.front();
            q.pop();

            int begin = std::abs(curr - k + 1);
            int end   = n - 1 - std::abs(n - curr - k);

            for (int i = begin; i <= end; i += 2)
            {
                if (-1 == ban[i])
                    continue;

                if (-1 == visited[i])
                {
                    q.push(i);
                    visited[i] = visited[curr] + 1;
                }
            }
        }

        return visited;
    }
};
```
Obviously we haven't improved anything much, so again we will get TLE here
So, what is  the problem?
We add each position at most once to the queue and we must check each position. So the problem in the way we find following positions from the current one. The larger the window size $$k$$ we have, the greater its intersection for neighboring points. So we have to control positions that we have already checked.

# Approach 3

Here we store all non-banned positions in two arrays for even and odd positions. When ever the position is used we erase it from array.
```
class Solution 
{
public:
    vector<int> minReverseOperations(int n, int p, vector<int>& banned, int k) 
    {
        std::vector<int> visited(n, -1);
        std::vector<int> ban(n , 0);
        for (const int& b: banned)
        {
            ban[b] = -1;
            visited[b] = -1;
        }
        
        std::vector<int> odd;
        std::vector<int> even;
        for (int i = 0; i < n; ++i) 
        {            
            if (!ban[i] && i != p) 
            {
                if (i & 1)
                    odd.push_back(i);
                else
                    even.push_back(i);

            }
        }

        std::queue<int> q;
        q.push(p);
        visited[p] = 0;
        while (!q.empty())    
        {
            int curr = q.front();
            q.pop();

            int begin = std::abs(curr - k + 1);
            int end   = n - 1 - std::abs(n - curr - k);
            
            std::vector<int>& list = begin & 1 ? odd : even;
            for (int pos = list.size() - 1; pos >= 0; --pos)
            {
                if (list[pos] > end)
                    continue;
                if (list[pos] < begin)
                    break;
                
                q.push(list[pos]);
                visited[list[pos]] = visited[curr] + 1;
                list.erase(list.begin() + pos);
            }            
        }

        return visited;
    }
};
```
Unfortunately we will get TLE again. The main reason, because erase operation on a vector is not so fast. 

# Approach 4

To improve the performance of removing an element, replace the vector with a linked list. Let's write a simple implementation.

# Code
```
class Solution 
{
private:
    
    struct ListEntry
    {
        int val;
        ListEntry* next;
        ListEntry* prev;
        
        ListEntry(const int& v)
        {
            val  = v;
            next = nullptr;
            prev = nullptr;
        }
    };
    class LinkedList
    {
    public:
        LinkedList()
        {
            head = nullptr;
            tail = nullptr;
        }
        ~LinkedList()
        {
            while (head)
            {
                ListEntry* temp = head->next;
                delete head;
                head = temp;
            }
            
            head = nullptr;
            tail = nullptr;
        }
        void push(const int& v)
        {
            if (!tail)
            {
                head = new ListEntry(v);
                tail = head;                
            }
            else
            {
                ListEntry* p = new ListEntry(v);
                p->prev = tail;
                tail->next = p;
                tail = p;
            }
        }
        ListEntry* find(const int& v)
        {
            ListEntry* cur = head;
            while (cur && cur->val < v)
            {
                cur = cur->next;                    
            }
            return cur;
        }
        void erase(ListEntry* p)
        {
            if (head == tail && p == head)
            {
                head = nullptr;
                tail = nullptr;
            }
            else if (head == p)
            {
                head = head->next;
                head->prev = nullptr;
            }
            else if (tail == p)
            {
                tail = tail->prev;
                tail->next = nullptr;
            }
            else
            {
                ListEntry* prev = p->prev;
                p->prev->next = p->next;
                p->next->prev = p->prev;
            }
            delete p;
        }
        
    private:
        ListEntry* head;        
        ListEntry* tail;
    };
    
public:
    vector<int> minReverseOperations(int n, int p, vector<int>& banned, int k) 
    {
        std::vector<int> visited(n, -1);
        std::vector<int> ban(n , 0);
        for (const int& b: banned)
        {
            ban[b] = -1;
            visited[b] = -1;
        }
        
        LinkedList odd;
        LinkedList even;
        for (int i = 0; i < n; ++i) 
        {            
            if (!ban[i] && i != p) 
            {
                if (i & 1)
                    odd.push(i);
                else
                    even.push(i);
            }
        }
        

        std::queue<int> q;
        q.push(p);
        visited[p] = 0;
        while (!q.empty())    
        {
            int curr = q.front();
            q.pop();

            int begin = std::abs(curr - k + 1);
            int end   = n - 1 - std::abs(n - curr - k);

            LinkedList& list = begin & 1 ? odd : even;
            ListEntry* entry = list.find(begin), *nextEntry;
            while (entry && entry->val <= end)
            {
                q.push(entry->val);
                visited[entry->val] = visited[curr] + 1;
                nextEntry = entry->next;
                list.erase(entry);
                entry = nextEntry;
            }            
        }

        return visited;
    }
};
```

Hooray, we did it. All tests passed. Cheers :)

# Update. Approach 5: 

We passed all tests, but as mentioned in the comments, we can still get TLE in some edge situations.
For example here:
```
minReverseOperations(100000, 50000, {}, 2);
```
This is because in the previous approach, our $$LinkedList::find$$ method started searching from the beginning of the list and had to go through the entire list to the desired element, which gives us the linear complexity $$O(n)$$.
So let's try to replace linked list with a Binary Search Tree to achieve time complexity for all operations equal to $$O(log n)$$
Since we have a sorted list at the beginning, it will be easy to build a balanced BST.
To leave our main algorithm untouched, we add $$find$$ and $$erase$$ methods to the $$Tree$$ class.

```
class Solution 
{
private:
    
    struct TreeNode
    {
        int val;

        TreeNode* left;
        TreeNode* right;
        TreeNode* parent;

        TreeNode(const int& v)
        {
            val    = v;
            left   = nullptr;
            right  = nullptr;
            parent = nullptr;
        }
    };

    class Tree
    {
    public:

        Tree(const std::vector<int>& v)
        {
            root = initFrom(v, 0, v.size() - 1);
        }
        TreeNode* find(const int& val)
        {
            return find(root, val);
        }
        TreeNode* next(TreeNode* node)
        {
            if (node->right)
            {
                node = node->right;
                while (node->left)
                    node = node->left;

                return node;
            }
        
            TreeNode* parent = node->parent;
            while (parent && node == parent->right) 
            {
                node = parent;
                parent = parent->parent;
            }
            return parent;
        }
        TreeNode* erase(TreeNode* node)
        {
            if (!node)
                return nullptr;

            TreeNode* parent = node->parent;
            if (!node->left && !node->right)
            {
                TreeNode* nextNode = next(node);
                if (!parent)
                {
                    root = nullptr;
                }
                else
                {
                    if (parent->left == node)
                        parent->left = nullptr;
                    else
                        parent->right = nullptr;
                }
                
                return nextNode;
            }
            else if (!node->left) 
            {
                TreeNode* nextNode = next(node);

                if (!parent)
                {
                    root = node->right;
                    node->right->parent = nullptr;
                }
                else if (parent->left == node)
                {
                    parent->left = node->right;
                    node->right->parent = parent;
                }
                else
                {
                    parent->right = node->right;
                    node->right->parent = parent;
                }

                delete node;
                return nextNode;
            }
            else if (!node->right) 
            {
                TreeNode* nextNode = next(node);
                if (!parent)
                {
                    root = node->left;
                    node->left->parent = nullptr;
                }
                else if (parent->left == node)
                {
                    parent->left = node->left;
                    node->left->parent = parent;
                }
                else
                {
                    parent->right = node->left;
                    node->left->parent = parent;
                }

                delete node;
                return nextNode;
            }
            else
            {
                TreeNode* temp = node->right;
                while (temp->left)
                    temp = temp->left;

                node->val = temp->val;

                erase(temp);
                return node;
            }
        }

    private:      
        TreeNode* initFrom(const std::vector<int>& vec, int start, int end)
        {       
            if (start > end)
                return nullptr;
        
            int mid = (start + end) / 2;
            TreeNode* node = new TreeNode(vec[mid]);
            node->left  = initFrom(vec, start, mid - 1);
            node->right = initFrom(vec, mid + 1, end);

            if (node->left)
                node->left->parent = node;
            if (node->right)
                node->right->parent = node;

            return node;
        }
        TreeNode* find(TreeNode* node, const int& val)
        {
            TreeNode* stored = nullptr;
            while (node)
            {
                if (node->val >= val)
                {
                    stored = node;
                    node = node->left;
                }
                else
                {
                    node = node->right;
                }
            }
            return stored;
        }
    private:

        TreeNode* root;
    };
public:    
    std::vector<int> minReverseOperations(int n, int p, std::vector<int>& banned, int k) 
    {
        std::vector<int> visited(n, -1);
        std::vector<int> ban(n , 0);
        for (const int& b: banned)
        {
            ban[b] = -1;
            visited[b] = -1;
        }
        
        std::vector<int> vOdd, vEven;
        for (int i = 0; i < n; ++i) 
        {            
            if (!ban[i] && i != p) 
            {
                if (i & 1)
                    vOdd.push_back(i);
                else
                    vEven.push_back(i);
            }
        }          

        Tree odd(vOdd);
        Tree even(vEven);    
        
        std::queue<int> q;
        q.push(p);
        visited[p] = 0;
        while (!q.empty())    
        {
            int curr = q.front();
            q.pop();

            int begin = std::abs(curr - k + 1);
            int end   = n - 1 - std::abs(n - curr - k);

            Tree& tree = begin & 1 ? odd: even;
            TreeNode* entry = tree.find(begin);
            while (entry && entry->val <= end)
            {
                q.push(entry->val);
                visited[entry->val] = visited[curr] + 1;
                entry = tree.erase(entry);
            }
        }
        return visited;
    };
};
```

We did it again :)
Test passing time has been improved and we didn't get TLE for edge case mentioned in the title of this approach.
