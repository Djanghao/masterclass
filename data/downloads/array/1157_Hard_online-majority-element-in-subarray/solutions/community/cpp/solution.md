# c++ | easy | short

**Author:** venomhighs7
**Votes:** 3
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/2711817/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/2711817/)

---


# Code
```
class MajorityChecker {
  const int kMax = 2e4+5;
    struct Node {
        int majority; 
        int count;  
    };
    int n;
    vector<Node> tree;
    vector<int> nums;
    vector<vector<int>> indice;

    
    Node merge(const Node& a, const Node& b) {
        if (a.majority == b.majority) return {a.majority, a.count + b.count};
        if (a.count > b.count) return {a.majority, a.count - b.count};
        return {b.majority, b.count - a.count};
    }

    void build(int i, int l, int r) {
        if (l == r) {  
            tree[i] = {nums[l-1], 1}; 
            return;
        }
        int mid = l+(r-l)/2;
        build(i*2, l, mid);
        build(i*2+1, mid+1, r);
        tree[i] = merge(tree[i*2], tree[i*2+1]);
    }

    Node query_majority(int i, int l, int r, int L, int R) {
        if (L > r || R < l) return {0, 0};
        if (L <= l && R >= r) return tree[i];
        int mid = l+(r-l)/2;
        Node a = query_majority(i*2, l, mid, L, R);
        Node b = query_majority(i*2+1, mid+1, r, L, R);
        return merge(a, b);
    }

public:
    MajorityChecker(vector<int>& arr) {
        n = arr.size();
        tree.resize(kMax<<2);
        nums = arr;
        indice.resize(kMax);
        for (int i = 0; i < n; ++i) indice[arr[i]].push_back(i);
        build(1, 1, n);
    }

    int query(int left, int right, int threshold) {
        int num = query_majority(1, 1, n, left+1, right+1).majority;
        if (num == 0) return -1;
        const auto& ni = indice[num];
        int l = lower_bound(ni.begin(), ni.end(), left)-ni.begin();
        int r = upper_bound(ni.begin(), ni.end(), right)-ni.begin();
        if (r-l >= threshold) return num;
        return -1;
    }
};

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * MajorityChecker* obj = new MajorityChecker(arr);
 * int param_1 = obj->query(left,right,threshold);
 */
```