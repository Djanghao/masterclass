# ✔ JAVA | Solution using Disjoint Set Union + HashMap

**Author:** norman22194plus1
**Votes:** 11
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/1592773/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/1592773/)

---

```
class DSU {
    ArrayList<Integer> parent = new ArrayList();
    public DSU (int n) {
        for (int i = 0; i < n; i++)
            parent.add(i);
    }
    int findParent(int n) {
        if(parent.get(n) == n)
            return n;
        parent.set(n, findParent(parent.get(n)));
        return parent.get(n);
    }
    void union(int u, int v) {
        int uParent = findParent(u);
        int vParent = findParent(v);
        
        if(uParent != vParent)
            parent.set(uParent, parent.get(vParent));
    }
}
class Solution {
    public int largestComponentSize(int[] nums) {
        int n = nums.length;
        int x = nums[0];
        for (int num : nums)
            x = Math.max(x, num);
        DSU dsu = new DSU(x + 1);
        
        for (int num : nums) {
            for (int i = 2; i * i <= num; i++) {
                if (num % i == 0) {
                    dsu.union(num, i);
                    dsu.union(num, num/i);
                }
            }
        }
        Map<Integer, Integer> map = new HashMap();
        int ans = 1;
        for (int num : nums) {
            int par = dsu.findParent(num);
            map.put(par, map.getOrDefault(par, 0) + 1);
            ans = Math.max(ans, map.get(par));
        }
        return ans;
    }
}
```
Please **upvote** :-)