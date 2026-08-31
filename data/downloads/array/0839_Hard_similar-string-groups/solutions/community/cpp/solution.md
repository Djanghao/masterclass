# Short C++ solution at 220ms, using disjoint set

**Author:** mzchen
**Votes:** 157
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/132374/](https://leetcode.com/problems/similar-string-groups/solutions/132374/)

---

```cpp []
bool similar(string &a, string &b) {
    int n = 0;
    for (int i = 0; i < a.size(); i++)
        if (a[i] != b[i] && ++n > 2)
            return false;
    return true;
}

int numSimilarGroups(vector<string>& A) {
    disjoint_set ds(A.size());
    for (int i = 0; i < A.size(); i++)
        for (int j = i + 1; j < A.size(); j++)
            if (similar(A[i], A[j]))
                ds.join(i, j);
    return ds.size();
}
```

The standard `disjoint_set` class is defined below:
```cpp []
class disjoint_set {
    vector<int> v;
    int sz;
public:
    disjoint_set(int n) {
        makeset(n);
    }

    void makeset(int n) {
        v.resize(n);
        iota(v.begin(), v.end(), 0);
        sz = n;
    }

    int find(int i) {
        if (i != v[i])
            v[i] = find(v[i]);
        return v[i];
    }
    
    void join(int i, int j) {
        int ri = find(i), rj = find(j);
        if (ri != rj) {
            v[ri] = rj;
            sz--;
        }
    }
    
    int size() {
        return sz;
    }
};
```