# [Java] Union Find

**Author:** Xiangcan
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/3798630/](https://leetcode.com/problems/number-of-unique-categories/solutions/3798630/)

---

```
class Solution {
	public int numberOfCategories(int n, CategoryHandler categoryHandler) {
    	DSU dsu = new DSU(n);
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (categoryHandler.haveSameCategory(i, j)) {
                    dsu.union(i, j);
                }
            }
        }
        return dsu.count;
	}
}

class DSU {
    int[] parent, size;
    int count;
    public DSU(int n) {
        count = n;
        parent = new int[n];
        size = new int[n];
        Arrays.fill(size, 1);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    public int find(int x) {
        if (x != parent[x]) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    public void union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX == rootY) return;
        if (size[rootX] < size[rootY]) {
            size[rootY] += size[rootX];
            parent[rootX] = rootY;
        } else {
            size[rootX] += size[rootY];
            parent[rootY] = rootX;
        }
        count--;
    }
}
```