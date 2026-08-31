# Java DFS (14 lines main logic) TC: O(n) SC: O(max(n,k))

**Author:** mvahidalizadeh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/5001283/](https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/5001283/)

---

# Intuition
You need to explore left and right subs and keep track of the k least values and the total children count for each node.

# Approach
I create a custom object for answer. I do a DFS. Each time we explore the left sub and right sub. Then, we find the k least values in both left and right subs. If the value of the current node is greater than the peek of the max heap and children count is >= k, then, the current node is great. 
We count the number of greats in left and right. Then, if the current node is great, we add 1 to the number of greats and return the value. After exploring each node, we return an Ans which has the least k values including the value of the current node and the counts of the sub-tree including the current node and the number of greats in the current sub including the current node.
I added a lot of comments in the code as well.

# Complexity
- Time complexity:
O(n): n is the number of nodes in the tree.

- Space complexity:
O(max(n,k)): since we keep at most 2K values in the max heap (k left and k right). However, we need to consider n as well since our approach is recursive. 

# Code
```
    public int countGreatEnoughNodes(TreeNode root, int k) {
        return dfs(root,k).great; // you just need to return the number of greats of the root
    }

    private Ans dfs(TreeNode node,int k){
        if(node==null) return new Ans(); // if null node, return an empty ans
        Ans left=dfs(node.left,k); // explore left branch
        Ans right=dfs(node.right,k); // explore right branch
        Ans ans=new Ans(); // Make a new ans
        ans.maxHeap=left.maxHeap; 
        ans.maxHeap.addAll(right.maxHeap); // merge left and right max heaps
        ans.count=left.count+ right.count; // sub count is left count + right count
        ans.great=left.great+ right.great; // number of greats are left greats + right greats
        while(ans.maxHeap.size()>k) ans.maxHeap.poll(); // we only need k least values in the sub
        if(ans.count>=k&&node.val>ans.maxHeap.peek()) ans.great++; // check if the current node is great
        ans.maxHeap.add(node.val); // add the current node val to the max heap
        while(ans.maxHeap.size()>k) ans.maxHeap.poll(); // make sure you send at most k values in the max heap
        ans.count++; // count the current node 
        return ans; // return the ans
    }

    class Ans {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder()); // we need a max heap to be able to quickly remove the max if sub size is greater than k
        int count=0,great=0; // count and great are zero for a null node
    }
```