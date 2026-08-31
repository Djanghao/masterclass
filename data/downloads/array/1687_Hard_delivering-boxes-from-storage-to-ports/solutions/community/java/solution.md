# Java Step by Step (O(n3) -> O(n)) explained

**Author:** qwerjkl112
**Votes:** 26
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/1022004/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/1022004/)

---

This problem took me a lot of time to understand and finally get an answer for. Sharing my journey here to help those who are also having a hard time.

I started this question by using dp asking myself if there are `x1, x2, ... xn` boxes. My optimal answer `f(0, n)` will be sum  of `f(0,i) + f(i+1, n)` (optimal answer from 0 to i plus optimal from i+1 to n)

This landed me a simple 2d graph to explore
Basically the idea here is to calculate dp[i][j] - I check if \u03A3(i-j) weights and (i-j+1) boxes fit the limitation of the problem. If fits, set `dp[i][j]` as `dp[i][i] + diffCity(i-j)` (diffCity from boxes i to boxes j). `dp[i][j] = dp[i][i] + diffCity[i] - diffCity[j]`
If it does **not** fit, I then loop through from (i to j as k) to find `(Math.min(dp[i][j], dp[i][k] + dp[k+1][j])`
*note that computing the weight from i - j and differentCitys from i - j can be reduced to O(1) by using prefix*
```
	 [[1,4],[1,2],[2,1],[2,1],[3,2],[3,4]]
[1,4]    2     2     3     4     5     6
[1,2]          2     3     3     4     5 
[2,1]                2     2     3     4
[2,1]                      2     3     3
[3,2]                            2     2
[3,4]                                  2
```

The complexity here is O(n^3).
The probelm here is that I didn't use the greedy nature of the problem. 
The greedy approach here guarantees that only by adding more boxes to my current trip can I then reduce the number of total trips.
So reorganizing my approach... 

example:
[[1,4],[1,2],[2,1],[2,1],[3,2],[3,4]]
at [1,2] (index 1) I have two options: 
1. ship [1,2] and take + 2 trips
2. ship [1,4] and [1,2] and take + 2 trips
--> `p[1] = min(dp[0] + 2, dp[-1] + 2)`

simiarily at the first [2,1] (index 2)
1. ship [2,1] and take + 2 trips
2. ship [1,2], [2,1] and take + 3 trips
3. ship [1,4], [1,2], [2,1] and take + 3 trips
--> `p[2] = min(dp[1] + 2 + 1, dp[0] + 2 + 1, dp[-1] + 2 + 1)`

Then reduces the complexity of my dp from 2d to 1d.

```
class Solution {
    public int boxDelivering(int[][] boxes, int portsCount, int maxBoxes, int maxWeight) {
        int[] diffCity = new int[boxes.length+1];
        int[] weights = new int[boxes.length+1];
        
        for (int i = 0; i < boxes.length; i++) {
            diffCity[i+1] = diffCity[i] + ((i != 0 && boxes[i][0] == boxes[i-1][0]) ? 0 : 1);
            weights[i+1] = weights[i] + boxes[i][1];
        }
        int[] dp = new int[boxes.length+1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        diffCity[0] = 1;
        for (int i = 1; i <= boxes.length; i++) { // offset by 1 since our above logic reaches dp[-1]
            for (int j = i - 1; j >= 0; j--) {
                int dC= diffCity[i] - diffCity[j+1]; // computes # of different cities from i to j. (add 1 to j is necessary here)
                int w = weights[i] - weights[j]; 
                int b = i - j;
                if (b <= maxBoxes && w <= maxWeight) {
                    dp[i] = Math.min(dp[i], 2 + dC + dp[j]); 
                }
            }
        }
        return dp[boxes.length];
    }
}
```

time: O(N^2) when maxBoxes and maxWeight is at max

Moving from N^2 to N lg N solution here is bit tricky because you have multiple factors like weights, boxes, and differentCities that comes into play here.

But the idea is simple... Since we calculate dp[i] as `2 + dC + dp[j]`
When we are at dp[i] we want to find the minimum value of (dC + dp[j]) from dp[0] to dp[i-1].

This is the tricky part because dC relies on current index i and index j. 
We can split this apart and refine dp relationship as `2 + diffCity[i] - diffCity[j+1] + dp[j]`.
Notice that `diffCity[j+1] and dp[j]` is dependent on j, we can put them in a min heap to easily retrieve it later.
`diffCity[i] and 2` is a constant we can build at the start of every index i
to take care of limiting factors like weights and number of boxes, we can append the index at the beginning of an int array `[index, diffCity[j+1] and dp[j]]` so we can filter out those choices by arr[0] before polling our min at arr[1]

```
class Solution {
    public int boxDelivering(int[][] boxes, int portsCount, int maxBoxes, int maxWeight) {
        int[] diffCity = new int[boxes.length+1];
        int[] weights = new int[boxes.length+1];
        
        for (int i = 0; i < boxes.length; i++) {
            diffCity[i+1] = diffCity[i] + ((i != 0 && boxes[i][0] == boxes[i-1][0]) ? 0 : 1);
            weights[i+1] = weights[i] + boxes[i][1];
        }
        int[] dp = new int[boxes.length+1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        PriorityQueue<int[]> pq = new PriorityQueue<>((o1, o2) -> o1[1] - o2[1]); // {index, (dp[x] - c[x+1])}
        pq.offer(new int[] {0, -1}); // necessary offset for dp[1]
        for (int i = 1; i <= boxes.length; i++) {
            while (!pq.isEmpty() && (i - pq.peek()[0] > maxBoxes || weights[i] - weights[pq.peek()[0]] > maxWeight)) {
                pq.poll();  // filter out those mins values no longer in range
            }
            
            dp[i] = pq.peek()[1] + diffCity[i] + 2; // reassemble (dp[i] = min(2 + dC + dp[j])
            if (i != boxes.length) {
                pq.offer(new int[] {i, dp[i] - diffCity[i+1]}); // add current val into min heap
            }
        }
        return dp[boxes.length];
    }
}
```
Time: O(N lg N). 
Its not easy to come up with dp[i] - diffCity[i+1] by just looking at this. 

Last optimization: Use Monoqueue 
The idea is simple. Just throw away values that are greater than current value you are able to put into the queue.

```
class Solution {
    public int boxDelivering(int[][] boxes, int portsCount, int maxBoxes, int maxWeight) {
        int[] diffCity = new int[boxes.length+1];
        int[] weights = new int[boxes.length+1];
        
        for (int i = 0; i < boxes.length; i++) {
            diffCity[i+1] = diffCity[i] + ((i != 0 && boxes[i][0] == boxes[i-1][0]) ? 0 : 1);
            weights[i+1] = weights[i] + boxes[i][1];
        }
        int[] dp = new int[boxes.length+1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        Deque<int[]> dq = new ArrayDeque<>();
        dq.offer(new int[] {0, -1});
        for (int i = 1; i <= boxes.length; i++) {
            while (!dq.isEmpty() && (i - dq.peek()[0] > maxBoxes || weights[i] - weights[dq.peek()[0]] > maxWeight)) { // filter values no longer can be used.
                dq.poll();
            }
            
            dp[i] = dq.peek()[1] + diffCity[i] + 2;
            if (i != boxes.length) {
                while (dq.peekLast()[1] >= dp[i] - diffCity[i+1]) { // throw away greater values than current value.
                    dq.pollLast();
                }
                dq.offer(new int[] {i, dp[i] - diffCity[i+1]});
            }
            
        return dp[boxes.length];
    }
}
```
O(N)

There are still few tips and tricks to impove the overall runtime #ms. But time complexity wise, this is the best we can do.