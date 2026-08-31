# DFS || Combinatorics || DP || Java

**Author:** rs9
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1300951/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1300951/)

---

If a tree has k subtrees with s_i sizes and subtrees can be build in n_i ways then the number of ways in which can the tree be build

sum(s_i)! * mul(n_i) / mul(s_i!)

So we use dfs/bfs to traverse all nodes and compute sizes of their subtrees and ways in which can they be built.

As we calculate in modular arithmetics we can substitute division by number with multiplication with it's mod inverse.

```
import java.math.BigInteger;
import java.util.*;

public class Solution {
    private static final int p = 1_000_000_007;
    private static final BigInteger bigP = BigInteger.valueOf(p);


    public int waysToBuildRooms(int[] prevRoom) {
        int n = prevRoom.length;
        List<Integer>[] children = new List[n];
        for (int i = 1; i < n; i++) {
            int father = prevRoom[i];
            if (children[father] == null) children[father] = new LinkedList<>();
            children[father].add(i);
        }

        int[] factors = new int[n];
        int[] inverses = new int[n];
        int[] reverseFactors = new int[n];
        factors[0] = 1;
        reverseFactors[0] = 1;
        for (int i = 1; i < n; i++) {
            factors[i] = (int) (factors[i - 1] * (long) i % p);
            inverses[i] = BigInteger.valueOf(i).modInverse(bigP).intValue();
            reverseFactors[i] = (int) (reverseFactors[i - 1] * (long) inverses[i] % p);
        }

        int[] size = new int[n];
        Arrays.fill(size, 1);
        long[] dp = new long[n];
        Arrays.fill(dp, -1);
        Deque<Integer> queue = new ArrayDeque<>();
        queue.addLast(0);
        while (!queue.isEmpty()) {
            Integer peek = queue.peekLast();
            if (dp[peek] == -1) {
                dp[peek] = 1;
                if (children[peek] != null) {
                    for (Integer child : children[peek]) {
                        queue.addLast(child);
                    }
                }
            } else {
                queue.pollLast();
                if (children[peek] != null) {
                    for (Integer child : children[peek]) {
                        size[peek] += size[child];
                        dp[peek] = dp[peek] * dp[child] % p * reverseFactors[size[child]] % p;
                    }
                    dp[peek] = dp[peek] * factors[size[peek] - 1] % p;
                }
            }
        }
        return (int) dp[0];
    }
}
```
