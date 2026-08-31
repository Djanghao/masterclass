# [C++, Java, Python3] Union Find with Count

**Author:** tojuna
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3521878/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3521878/)

---


# Intuition
Using union find we can find all components. If the size of the component that `x` is a part of is not equal to number of edges connected to `x` + 1, the component is not complete. 

# Approach
* Use union find to find all the components first
* In the `DSU` class we add a method called `size_of_group_that_x_is_a_part_of`. This will return the size of the groupd that x is part of. The number of edges connected to x must be one less than this.
* Use a counter to count edges connected to each node
* Use a set `groups` to find the number of unique groups/components in the graph. 
* Then just find the `size_of_group_that_x_is_a_part_of` and make sure that the number of edges connected to `x` is one less than this. If it is not the group/component x is a part of is not complete.

# Complexity
- Time complexity: O(max(n, len(edges)))

- Space complexity: O(n)

# Code
**Python3**:
```
class DSU:
    def __init__(self, n):
        self.p = list(range(n))
        self.rank = [0] * n
        self.count = [1] * n
    def find(self, x):
        if x != self.p[x]:
            self.p[x] = self.find(self.p[x])
        return self.p[x]
    def union(self, x, y):
        xx, yy = self.find(x), self.find(y)
        if xx == yy: return
        self.count[xx] = self.count[yy] = self.count[xx] + self.count[yy]
        if self.rank[xx] < self.rank[yy]: self.p[xx] = yy
        else: self.p[yy] = xx
        if self.rank[xx] == self.rank[yy]: self.rank[xx] += 1
    def size_of_group_that_x_is_a_part_of(self, x):
        return self.count[self.find(x)]

class Solution:
    def countCompleteComponents(self, n, edges):
        uf, counter = DSU(n), Counter()
        for x, y in edges: 
            uf.union(x, y)
            counter[x] += 1
            counter[y] += 1

        groups = set(uf.find(i) for i in range(n))

        for i in range(n):
            if uf.size_of_group_that_x_is_a_part_of(i) != counter[i] + 1:
                groups.discard(uf.find(i))

        return len(groups)
```

**C++**:
```
class DSU {
private:
    vector<int> p, rank, count;
public:
    DSU(int n) {
        p.resize(n), rank.resize(n), count.resize(n, 1);
        for (int i = 0; i < n; ++i) p[i] = i;
    }
    int find(int x) {
        if (x != p[x]) p[x] = find(p[x]);
        return p[x];
    }
    void union_set(int x, int y) {
        int xx = find(x), yy = find(y);
        if (xx == yy) return;
        count[xx] = count[yy] = count[xx] + count[yy];
        if (rank[xx] < rank[yy]) p[xx] = yy;
        else p[yy] = xx;
        if (rank[xx] == rank[yy]) ++rank[xx];
    }
    int sizeOfGroupThatXIsAPartOf(int x) {
        return count[find(x)];
    }
};

class Solution {
public:
    int countCompleteComponents(int n, vector<vector<int>>& edges) {
        DSU uf(n);
        set<int> groups;
        vector<int> counter(n, 0);
        for (auto& e : edges) {
            uf.union_set(e[0], e[1]);
            ++counter[e[0]], ++counter[e[1]];
        }
        
        for (int i = 0; i < n; ++i)
            groups.insert(uf.find(i));

        for (int i = 0; i < n; ++i)
            if (uf.sizeOfGroupThatXIsAPartOf(i) != counter[i] + 1) 
                groups.erase(uf.find(i));

        return groups.size();
    }
};

```

**Java**:
```
public class DSU {
    private int[] p, rank, count;

    public DSU(int n) {
        p = new int[n];
        rank = new int[n];
        count = new int[n];
        for (int i = 0; i < n; i++) {
            p[i] = i;
            count[i] = 1;
        }
    }

    public int find(int x) {
        if (x != p[x])
            p[x] = find(p[x]);
        return p[x];
    }

    public void unionSet(int x, int y) {
        int xx = find(x), yy = find(y);
        if (xx == yy) return;
        count[xx] = count[yy] = count[xx] + count[yy];
        if (rank[xx] < rank[yy]) p[xx] = yy;
        else p[yy] = xx;
        if (rank[xx] == rank[yy]) rank[xx]++;
    }

    public int sizeOfGroupThatXIsAPartOf(int x) {
        return count[find(x)];
    }
}

class Solution {
    public int countCompleteComponents(int n, int[][] edges) {
        DSU uf = new DSU(n);
        Set<Integer> groups = new HashSet<>();
        int[] counter = new int[n];
        for (int[] e : edges) {
            uf.unionSet(e[0], e[1]);
            counter[e[0]]++; counter[e[1]]++;
        }

        for (int i = 0; i < n; i++)
            groups.add(uf.find(i));

        for (int i = 0; i < n; i++)
            if (uf.sizeOfGroupThatXIsAPartOf(i) != counter[i] + 1)
                groups.remove(uf.find(i));

        return groups.size();
    }
}

```