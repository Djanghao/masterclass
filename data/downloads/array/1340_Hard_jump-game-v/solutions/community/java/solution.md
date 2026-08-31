# Java || 9 ms  (> 86%)| Explained || Brute-Force || Easy

**Author:** ud240
**Votes:** 16
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/1261551/](https://leetcode.com/problems/jump-game-v/solutions/1261551/)

---

**Runtime:** 9 ms
**Memory Usage:** 38.8 MB

Approach:
- The idea here is to go to each index and calculate how much is the max. count of nodes that can be visited.

- At each node, we check recursively (which uses memoization in-turn then to make it fast) for each of the `(i+x)th node`, where `1<=x<=d`, the max. no. of jumps/nodes that can be visited.
- Then, for the same node, we check recursively only, for nodes on the other side, i.e. `(i-x)th node, where 1<=x<=d`.
- We take the max. of both the evaluations and assign it to `maxJumpsFromHere[i]` which denotes the max. no. of nodes that can be visited if we start from index `i` in the array.

Here is my code:
 

```
class Solution {
    public int maxJumps(int[] arr, int d) {
        int[] maxJumpsFromHere = new int[arr.length];
        int maxJumps = 0;

        for (int i=0; i<arr.length; i++) {
            maxJumps = Math.max(maxJumps, calMaxJumps(i, maxJumpsFromHere, arr, d));
        }
        return maxJumps;
    }

    private int calMaxJumps(int i, int[] maxJumpsFromHere, int[] arr, int d) {
        if (maxJumpsFromHere[i] != 0)
            return maxJumpsFromHere[i];
        int maxJumpsCount = 0;
        for (int x = i+1; x <= (i+d) && x < arr.length; x++) {
            if (arr[x] >= arr[i])
                break;
            maxJumpsCount = Math.max(maxJumpsCount, calMaxJumps(x, maxJumpsFromHere, arr, d));
        }
        for (int x = i-1; x >= (i-d) && x >= 0; x--) {
            if (arr[x] >= arr[i])
                break;
            maxJumpsCount = Math.max(maxJumpsCount, calMaxJumps(x, maxJumpsFromHere, arr, d));
        }
        maxJumpsFromHere[i] = 1 + maxJumpsCount;
        return maxJumpsFromHere[i];
    }
}
```

Do upvote if you find this helpful!
Happy Coding!