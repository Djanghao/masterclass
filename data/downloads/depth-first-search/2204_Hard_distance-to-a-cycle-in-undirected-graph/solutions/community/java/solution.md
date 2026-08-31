# Java | DFS + DFS | Explained

**Author:** Student2091
**Votes:** 5
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/2111416/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/2111416/)

---

**Steps**
- First we locate all the nodes that are in the cycle.

- From each node in the cycle, we start a DFS with distance 0, and add 1 to the distance each DFS recursive call.

- The answer for each node explored above is the distance, given that it is not a cycle node.

- We do not explore neighboring cycle nodes.

**Explanations**
It works because each node not in the cycle can only be reached by exactly 1 cycle node (as we don't explore neighboring cycle nodes), 
otherwise it would have been included in the cycle.
```Java
class Solution {
    public int[] distanceToCycle(int n, int[][] edges) {
        int[] ans = new int[n];
        Set<Integer> cycle = new HashSet<>();
        Map<Integer, List<Integer>> map = new HashMap<>();
        for (int[] e : edges){ // connection map
            map.computeIfAbsent(e[0], o -> new ArrayList<>()).add(e[1]);
            map.computeIfAbsent(e[1], o -> new ArrayList<>()).add(e[0]);
        }
        findCycle(0, -1, cycle, new boolean[n], map); // populate the cycle node set
        for (int c : cycle){ // do dfs for each cycle node
            dfs(c, 0, ans, cycle, map);
        }
        return ans;
    }

    private int findCycle(int i, int p, Set<Integer> cycle, boolean[] seen, Map<Integer, List<Integer>> map){
        if (seen[i])
            return i; // cycle found!
        seen[i] = true;
        for (int next : map.get(i)){
            if (next != p){
                int n = findCycle(next, i, cycle, seen, map);
                if (n > -1){ // part of the cycle
                    cycle.add(i);
                }
                if (n != -1) // return -2 when the cycle ends otherwise return n to indicate there are more.
                    return n == i? -2 : n;
            }
        }
        return -1; // not found
    }

    private void dfs(int i, int d, int[] ans, Set<Integer> cycle, Map<Integer, List<Integer>> map){
        ans[i] = d; // this is the answer.
        for (int next : map.get(i)){
            if (ans[next] == 0 && !cycle.contains(next)){
                dfs(next, d+1, ans, cycle, map);
            }
        }
    }
}
```