# Short Union-Find in Python / Ruby / C++

**Author:** StefanPochmann
**Votes:** 49
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/77625/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/77625/)

---

Simple union-find with path compression.

---

**Python solution 1**

    def countComponents(self, n, edges):
        p = range(n)
        def find(v):
            if p[v] != v:
                p[v] = find(p[v])
            return p[v]
        for v, w in edges:
            p[find(v)] = find(w)
        return len(set(map(find, p)))

---

**Python solution 2**

    def countComponents(self, n, edges):
        p = range(n)
        def find(v):
            if p[v] != v:
                p[v] = find(p[v])
            return p[v]
        for e in edges:
            v, w = map(find, e)
            p[v] = w
            n -= v != w
        return n

---

**Ruby solution**

    def count_components(n, edges)
      p = (0...n).to_a
      find = ->(v) { p[v] == v ? v : p[v] = find[p[v]] }
      edges.each do |v, w|
        v, w = find[v], find[w]
        p[v] = w
        n -= 1 if v != w
      end
      n
    end

---

**C++ solution 1**

    int countComponents(int n, vector<pair<int, int>>& edges) {
        vector<int> p(n);
        iota(begin(p), end(p), 0);
        for (auto& edge : edges) {
            int v = edge.first, w = edge.second;
            while (p[v] != v) v = p[v] = p[p[v]];
            while (p[w] != w) w = p[w] = p[p[w]];
            p[v] = w;
            n -= v != w;
        }
        return n;
    }

---

**C++ solution 2**

    int countComponents(int n, vector<pair<int, int>>& edges) {
        vector<int> p(n);
        iota(begin(p), end(p), 0);
        function<int (int)> find = [&](int v) {
            return p[v] == v ? v : p[v] = find(p[v]);
        };
        for (auto& edge : edges) {
            int v = find(edge.first), w = find(edge.second);
            p[v] = w;
            n -= v != w;
        }
        return n;
    }