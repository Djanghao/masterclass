# Legitmate SkipList implementation C++ (handdrafted based on wikipedia pseduocode)

**Author:** psmao8
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/4213243/](https://leetcode.com/problems/design-skiplist/solutions/4213243/)

---

# Approach

To find a node, we walk from the top left head and move rightwards as much node as we can (as long as $target\\geq x$ the condition satisfies).

For adding node, we can simply find the greatest node that is less than our target on the lowest level, and insert it. Then we toss a coin, if it is head, we find the node that exists on the one level up, and insert the new node after it, continue this untill we tossed a tail.

For deletion node, its easy, find it at the lowest level and delete all of the copy of this node at higher levels.

# Complexity

I have a big question in my head while implementing this solution, why the time complexity is $O(n\\log n)$? 

It turns out that, there is an interesting rule, formally speaking, if a node does exist at level $k$, then it should also exist at level $k-1$. This tells us that for a node to exist at level $k$, the probability is $(\\frac{1}{2})^{k-1}$. 

Intuitively, from the mathematics prospective (and I believe this is provable but i am too shit at maths and I am lazy for details), there are at $\\log N$ levels and each level has $\\log N$ nodes in the armotized way, thus the operation time complexities is $O(N\\log N)$.

# Code
```
class Skiplist {
private:
    class Node;
public:
    
    Skiplist() {
        srand(time(NULL));
        topLeft_head = nullptr;
        this->add(-inf);
    }
    bool coinflip() {
        return (rand()%2 == 0);
    }
    
    Node* findNode(int target) {
        if (topLeft_head == nullptr) return nullptr;
        Node* p = topLeft_head;
        while (p->bottom != nullptr) {
            p = p->bottom;
            while (p->next != nullptr && target >= p->next->val) {
                p = p->next;
            }
        }
        while (p->next != nullptr && target >= p->next->val) {
            p = p->next;
        }
        return p;
    }
    bool search(int target) {
        if (topLeft_head == nullptr) return false;
        Node* p = findNode(target);
        return p->val == target;
    }
    
    void createNewLevel() {
        Node* new_topleft = new Node(topLeft_head->val);
        new_topleft->bottom = topLeft_head;
        topLeft_head->up = new_topleft;
        topLeft_head = new_topleft;
    }
    
    void insert(Node* a, Node* b) {
        // insert b after a
        b->next = a->next;
        if (a->next != nullptr) a->next->prev = b;
        a->next = b;
        b->prev = a;
    }
    
    void add(int num) {
        if (topLeft_head == nullptr) {
            // empty skiplist
            topLeft_head = new Node(num);
            level = 1;
            return;
        }
        
        Node* p = findNode(num);
        Node* q = new Node(num);
        int i = 1;
        insert(p, q);
        while (coinflip()) {
            // insert into this layer
            i = i + 1;
            if (i > level) {
                level = level + 1;
                createNewLevel();
            }
            while (p->up == nullptr) {
                p = p->prev;
            }
            p = p->up;
            Node* new_q = new Node(num);
            new_q->bottom = q;
            q->up = new_q; 
            q = new_q;
            insert(p, q);
        }
    }
    
    bool erase(int num) {
        Node* p = findNode(num);
        if (p == nullptr || p->val != num) return false;
        while (1) {
            p->prev->next = p->next;
            if (p->next != nullptr) p->next->prev = p->prev;
            if (p->up == nullptr) break;
            p = p->up;
            delete p->bottom;
            p->bottom = nullptr;
        }
        return true;
    }
    
private:
    class Node{
    public:
        Node(int _val) {
            this->val = _val;
            this->prev = nullptr;
            this->next = nullptr;
            this->up = nullptr;
            this->bottom = nullptr;
        }
        Node(int _val, Node* _prev, Node* _next, Node* _up, Node* _bottom) {
            this->val = _val;
            this->prev = _prev;
            this->next = _next;
            this->up = _up;
            this->bottom = _bottom;
        }
        
        Node* prev;
        Node* next;
        Node* up;
        Node* bottom;
        int val;
    };
    
    Node* topLeft_head;
    int level;
    const int inf = (1<<30);
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist* obj = new Skiplist();
 * bool param_1 = obj->search(target);
 * obj->add(num);
 * bool param_3 = obj->erase(num);
 */
```