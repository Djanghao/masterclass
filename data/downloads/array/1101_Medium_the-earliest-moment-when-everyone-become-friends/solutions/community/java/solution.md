# C++, Java, Javascript, C# union find, path compression, union by rank

**Author:** leonenko
**Votes:** 9
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/322941/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/322941/)

---

C++
```
int earliestAcq(vector<vector<int>>& logs, int N) {
    sort(logs.begin(), logs.end());
    int ids[N]; int size[N];
    for(auto i = 0; i < N; ++i) { ids[i] = i; size[i] = 1;}

    for(auto& log : logs) {
        auto root1 = find(ids, log[1]);
        auto root2 = find(ids, log[2]);
        if (root1 != root2) {
            unite(size, ids, root1, root2);
            if (--N == 1) return log[0];
        }
    }
    return -1;
}

void unite(int size[], int ids[], int root1, int root2) {
    if (size[root2] > size[root1]) unite(size, ids, root2, root1);
    ids[root2] = root1;
    size[root1] += size[root2];
}

int find(int ids[], int id) {
    while (ids[id] != id) {
        ids[id] = ids[ids[id]];
        id = ids[id];
    }
    return id;
}
```
Java
```
public int earliestAcq(int[][] logs, int N) {
    Arrays.sort(logs, (a, b) -> a[0] - b[0]);
    int[] ids = new int[N]; int[] size = new int[N];
    for(int i = 0; i < N; i++) { ids[i] = i; size[i] = 1;}

    for(int[] log : logs) {
        int root1 = find(ids, log[1]);
        int root2 = find(ids, log[2]);
        if (root1 != root2) {
            union(size, ids, root1, root2);
            if (--N == 1) return log[0];
        }
    }
    return -1;
}
    
void union(int[] size, int[] ids, int root1, int root2) {
    if (size[root2] > size[root1]) union(size, ids, root2, root1);
    ids[root2] = root1;
    size[root1] += size[root2];
}

int find(int[] ids, int id) {
    while (ids[id] != id) {
        ids[id] = ids[ids[id]];
        id = ids[id];
    }
    return id;
}
```

Javascript
```
var earliestAcq = function(logs, N) {
    logs.sort((a,b) => a[0] - b[0]);

    const ids = [], size = [];
    for(let i = 0; i < N; i++) { ids.push(i); size.push(1); }
    
    const union = (root1, root2) => {
        if (size[root2] > size[root1]) union(root2, root1);
        ids[root2] = root1;
        size[root1] += size[root2];
    }
    
    const find = (id) => {
        while (ids[id] != id) {
            ids[id] = ids[ids[id]];
            id = ids[id];
        }
        return id;
    }
    
    for(let log of logs) {
        const root1 = find(log[1]);
        const root2 = find(log[2]);
        if (root1 != root2) {
            union(root1, root2);
            if (--N == 1)
                return log[0];
        }
    }
    return -1;
};
```

C#
```
public int EarliestAcq(int[][] logs, int N) {
    logs = logs.OrderBy(r => r[0]).ToArray();
    var ids = new int[N]; var size = new int[N];
    for(var i = 0; i < N; i++) { ids[i] = i; size[i] = 1;}
    
    foreach(var log in logs) {
        var root1 = find(ids, log[1]);
        var root2 = find(ids, log[2]);
        if (root1 != root2) {
            union(size, ids, root1, root2);
            if (--N == 1) return log[0];
        }
    }
    return -1;
}

void union(int[] size, int[] ids, int root1, int root2) {
    if (size[root2] > size[root1]) union(size, ids, root2, root1);
    ids[root2] = root1;
    size[root1] += size[root2];
}

int find(int[] ids, int id) {
    while (ids[id] != id) {
        ids[id] = ids[ids[id]];
        id = ids[id];
    }
    return id;
}
```