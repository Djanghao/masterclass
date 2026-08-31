# Beats 100% in Runtime and Memory Usage - c# Double DFS

**Author:** Cocamo1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/4385873/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/4385873/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Because the edges describe a valid tree, it is safe to assume that all n nodes are included in the tree and that there aren't any cycles. 

Therefore there are 3 primary parts to solving:

1. Create our edges data structure - To quickly access what nodes have edges to other nodes in future functions.
2. Do a DFS for bobs path starting at node bob / day 0 and ending at 0. This DFS function should also count the "days" along the path and save the current node with the current day in a data structure. It also needs to be able to backtrack on a path that never reached 0, and remove those current node-current day pairs from that data strucutre for invalid paths.
3. Do a DFS for alices path starting at node 0 / day 0, where at each node we do 1 of 3 things: 
            1. If the current node either isn't in bobs path, or the day which bob would reach it is greater than the current day, add the full amount of amount[currNode] to a local variable "res".
            2. If the current node is in bobs path and bobsPath[currNode] is less than the current day, don't add anything to "res".
            3. If the current node is in bobs path and bobsPath[currNode] is equal to the current day, add amount[currNode] / 2 to "res".
4. Then inside the alicePath DFS, select the maximal-scoring path that can be taken from the current node by recursively calling the alicePath function with an incremented currDay and a new currNode. Make sure to not call the function on a node that you just came from.
5. Finally return that "res" variable I mentioned plus the maximal-path found.



# Approach
<!-- Describe your approach to solving the problem. -->
Do a lot of DFS stuff and hope it works out

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

Because the DFS function never goes to a previous node, and there are no cycles in the graph, the worst case scenario for bobsPath is that he has to visit all n nodes.

The same goes for alicesPath except she actually needs to check every path to make sure she gets the maximal score - therefore she must visit n nodes in every scenario.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

We must store n Lists of integers for our effecient access to a nodes list of edges. A relatively hefty cost.

Additionally in a worst-case scenario, bobs path would require O(n) space as well.

# Code
```
public class Solution {
    List<int>[] edges;
    Dictionary<int, int> bobPath = new();
    int[] amount;
    public int MostProfitablePath(int[][] ed, int bob, int[] am) {
        amount = am;
        int len = ed.Length + 1;
        edges = new List<int>[len];
        foreach (var pair in ed){
            if (edges[pair[0]] == null) edges[pair[0]] = new();
            if (edges[pair[1]] == null) edges[pair[1]] = new();
            edges[pair[0]].Add(pair[1]);
            edges[pair[1]].Add(pair[0]);
        }

        bobPathing(bob, 0, bob);
        return alicePathing(0, 0, 0);
    }
    private int alicePathing(int curr, int currDay, int prev){
        int res = 0;

        if (!bobPath.ContainsKey(curr)){
            res += amount[curr];
        }
        else{
            if (bobPath[curr] > currDay){
                res += amount[curr];
            }
            else if (bobPath[curr] == currDay){
                res += amount[curr] / 2;
            }
        }
        int max = int.MinValue;
        foreach (var edge in edges[curr]){
            if (edge == prev) continue;
            max = Math.Max(max, alicePathing(edge, currDay + 1, curr));
        }
        if (max == int.MinValue){
            return res;
        }
        return res + max;
    }

    private bool bobPathing(int curr, int currDay, int prev){
        bobPath[curr] = currDay;
        if (curr == 0) return true;

        foreach (var edge in edges[curr]){
            if (edge == prev) continue;
            if (bobPathing(edge, currDay + 1, curr)) return true;
        }
        bobPath.Remove(curr);
        return false;
    }
}
```