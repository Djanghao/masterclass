# Segment Tree Walk

**Author:** BoostedSperm
**Votes:** 0
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/5534997/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/5534997/)

---

# Code
```
//Segment Tree walk
class BookMyShow {
public:
    int n,m;
    struct SegTree{
        long long sum;  // sum of every node in segment
        int max_id;     // index in segment with max empty seats 
        SegTree *left, *right;
        SegTree(): sum(0), max_id(0), left(NULL), right(NULL){}
    };

    SegTree *root;
    vector<int> seats;  // seat rows
    int min_row;        // first row that has empty seats (min index)

    // Build tree
    void build(SegTree *node, int l, int r){
        if(l == r){
            node->sum = seats[l];
            node->max_id = l;
            return;
        }
        int mid = (l+r) >> 1;
        node->left = new SegTree();
        node->right = new SegTree();
        build(node->left, l, mid);
        build(node->right, mid+1, r);
        node->sum = node->right->sum + node->left->sum;
        node->max_id = node->left->max_id;
    }

    BookMyShow(int n, int m): n(n), m(m) {
        root = new SegTree();
        min_row = 0;
        seats.resize(n, m);
        build(root, 0, n-1);
    }

    // Find the first row that has >= k empty seats
    int walk_row(SegTree *node, int l, int r, int k){
        if(l == r) return node->max_id;
        int mid = (l+r) >> 1;
        if(seats[node->left->max_id] >= k) return walk_row(node->left, l, mid, k);
        else return walk_row(node->right, mid+1, r, k);
    }

    // Find the first x rows that have >= k empty seats
    // Return the x
    int walk_sum(SegTree *node, int l, int r, int k){
        if(l == r) return l;
        int mid = (l+r) >> 1;
        if(node->left->sum >= k) return walk_sum(node->left, l, mid, k);
        else return walk_sum(node->right, mid+1, r, k - node->left->sum);
    }

    // Update tree after changing seats[pos] = val
    void update(SegTree *node, int l, int r, int pos, int val){
        if(pos < l || r < pos) return;
        if(l == r){
            node->sum = val;
            return;
        }
        int mid = (l+r) >> 1;
        update(node->left, l, mid, pos, val);
        update(node->right, mid+1, r, pos, val);
        node->sum = node->right->sum + node->left->sum;
        if(seats[node->left->max_id] < seats[node->right->max_id]) node->max_id = node->right->max_id;
        else node->max_id = node->left->max_id;
    }

    // Return sum of seats[0, ..., R];
    long long get_sum(SegTree *node, int l, int r, int R){
        if(l > R) return 0;
        if(r <= R) return node->sum;
        int mid = (l+r) >> 1;
        return get_sum(node->left, l, mid, R) + get_sum(node->right, mid+1, r, R);
    }

    //  Return the index in [0,R] that seats[index] is max
    int get_max_id(SegTree *node, int l, int r, int R){
        if(l > R) return -1;
        if(r <= R) return node->max_id;
        int mid = (l+r) >> 1;
        int idl = get_max_id(node->left, l, mid, R);
        int idr = get_max_id(node->right, mid+1, r, R);
        if(idl == idr) return -1;
        if(idl == -1 || (idr!=-1 && seats[idr] > seats[idl])) return idr;
        return idl;
    }

    vector<int> gather(int k, int maxRow) {
        if(seats[get_max_id(root, 0, n-1, maxRow)] < k) return {};
        int id = walk_row(root, 0, n-1, k);
        int val = m-seats[id];
        seats[id] -= k;
        update(root, 0, n-1, id, seats[id]);
        return {id, val};
    }
    
    bool scatter(int k, int maxRow) {
        if(get_sum(root, 0, n-1, maxRow) < k) return 0;
        int id = walk_sum(root, 0, n-1, k);
        while(min_row < id){
            k -= seats[min_row];
            seats[min_row] = 0;
            update(root, 0, n-1, min_row, 0);
            min_row++;
        }
        seats[id] -= k;
        update(root, 0, n-1, id, seats[id]);
        return 1;
    }
};

/**
 * Your BookMyShow object will be instantiated and called as such:
 * BookMyShow* obj = new BookMyShow(n, m);
 * vector<int> param_1 = obj->gather(k,maxRow);
 * bool param_2 = obj->scatter(k,maxRow);
 */
```