# [2 Minute Read] Easy Binary Lifting

**Author:** dead_lock
**Votes:** 11
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/1298231/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/1298231/)

---

So, I tried it using the Brute Force way, but it gave TLE. The Brute Force was to move through the parent array one by one, till you got k parents up, and then return that.
This got me the hint of using **Binary Lifting**, what we do in Binary Lifting is basically we minimize the steps required to reach the k<sup>th</sup> parent of a node.
How do we do that? Using the properties of Binary Number System. So here goes a breif description of how we can use Binary Lifting to solve our problem.

This technique is similar to *Binary Exponentiation*. What we do is, we store the parent of a node which are at power's of 2 above the node, i.e. we store the 1<sup>st</sup> parent (2<sup>0</sup>), the 2<sup>nd</sup> parent (2<sup>1</sup>), the 4<sup>th</sup> parent (2<sup>2</sup>), the 8<sup>th</sup> parent (2<sup>3</sup>), and so on till ```log(n) + 1``` where `n` is the number of nodes, because in the worst case, the tree could be  linear, and since you can represent any number in at max `log(n) + 1 ` bits, hence we store till 2<sup>log(n) + 1</sup>.

Now when we get a query to report the `k`<sup>th</sup> parent of a node, for example, let's say `k = 11`, we would use the magic of Binary Representation of `k`, which in this case is `1011`. Now starting from the Least Significant bit, we would move right, and if a bit is `1`, let's say at a position `i`, we would change our node to 2<sup>i</sup> th parent of that node, and repeat this process again. This way, we would be jumping up the tree, from parent to parent, not one parent at a time, but in powers of 2 which would drastically reduce our Time Complexity from `O(n)` to `O(log n)`.

If you wan't to learn more about Binary Lifting and the complete thinking and applying process behind it, there is wonderfull [tutorial video by Algorithms Live](https://is.gd/JRaSbv).

Below is the Java Code of the above approach.

```java
class TreeAncestor {
    
    int dp[][];
    int m;
    int n;
    
    public TreeAncestor(int n, int[] parent) {
        this.n = n;
        this.m = (int) (Math.log(n) / Math.log(2)) + 1;
        dp = new int[m][n];
        for(int i[] : dp) {
            Arrays.fill(i, -1);
        }
        
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(i == 0) {
                    dp[i][j] = parent[j];
                }
                else {
                    if(dp[i - 1][j] == -1) dp[i][j] = -1;
                    else dp[i][j] = dp[i - 1][dp[i - 1][j]];
                }
            }
        }
    }
    
    public int getKthAncestor(int node, int k) {
        int row = 0;
        while(k > 0) {
            if((k & 1) == 1) {
                if(node == -1) return -1;
                node = dp[row][node];
            }
            k >>= 1;
            row++;
        }
        return node;
    }
}
```