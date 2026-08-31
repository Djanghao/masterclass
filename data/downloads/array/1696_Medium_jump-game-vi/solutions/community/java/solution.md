# JAVA - Journey from Brute Force to Most Optimized DP + Sliding Window Algorithm (✅)

**Author:** techtutelage
**Votes:** 65
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/1261213/](https://leetcode.com/problems/jump-game-vi/solutions/1261213/)

---

Let's start our discussion from the most obvious initial thought looking at this problem. We need to try out all possible combinations for each index and it's k neighbours and pick the best out of them. Let's start from the initial thought and step by step try to improvise our solution and reach the accepted solutions \u2705

# **BruteForce (Time Limited Exceed)**
In this approach we try out the above thought and try to process all the nodes with their k neighbours and get the max score.

```
private int maxResult(int[] nums, int i, int k) {
        if(i >= nums.length - 1) return nums[nums.length - 1];
        
        int max = Integer.MIN_VALUE;
        
        for(int j = i + 1; j <= Math.min(i + k, nums.length); j++) // Mininum of i + k, nums.length to prevent unnecessary calls for out of bounds. 
            max = Math.max(max, maxResult( nums, j , k));
        
        return max;
    }
```

*Time Complexity* - `O(k^n)` - As at each node we have k next nodes to be processed. So *k,k,k.....n times* gives k^n.

# **Recursive + Memoization -- Top-Down DP (Time Limit Exceed)**

As it might be evident that we are recalculating many of the nodes again and again while their solution would remain the same as from a given node the maximum score to reach end would be same. e.g. 1,2,3,4,5,6,7   k - 3, so when we are at Node 1 - we process Node 2,3,4 and get the maximum value. When we move to node Node 2 - we process Node 3,4,5 So if we see we are again processing the Node 3, 4 which is not required at all.
So, this calls for introducing a memory to store the already processed nodes and just provide a lookup of `O(1)`.

```
public int maxResult(int[] nums, int k) {
        int[] mem = new int[nums.length]; // Lookup table to score max score for given node
        
        for(int i = 0; i < mem.length; i++)
            mem[i] = Integer.MIN_VALUE;
        
        return maxResult(mem, nums, 0, k);
    }
    
    private int maxResult(int[] mem, int[] nums, int i, int k) {
        if(i >= nums.length - 1) return nums[nums.length - 1];
        
        if(mem[i] != Integer.MIN_VALUE) return mem[i];
        
        int max = Integer.MIN_VALUE;
        
        for(int j = i + 1; j <= Math.min(i + k, nums.length); j++)
            max = Math.max(max, maxResult(mem, nums, j , k));
        
        mem[i] = nums[i] + max;
        
        return mem[i];
    }
```

*Time Complexity* - `O(k^n)` - As at each node we have k next nodes to be processed. So *k,k,k.....n times* gives k^n. Even though the lookup prevents further re-processing of already processed nodes(which can make it little faster).

# **DP + Sliding Window -- Optimized using Priority Queue (Accepted) 170ms \u2705**
If we closely look at the problem we can understand that we need to get the maximum score within a given window ( k steps) preceeding current node(inclusive) and it would give us the maximum score for the current node. At a given node we only need the nearest k nodes data to process. For this we use a priority queue(PQ) to fetch maximum score in `O(1)` with overall cost of `O(nlog(n))` for interal sorting of PQ. Also, once we have moved forward we need to remove the element which is beyond the k step window( even if it is the maximum scoring). 

To clear the last statement, we might have some values in Priority Queue which are outside of K step window but when we process a node we make sure we are using the score of the node within the acceptable window.

```
public int maxResult(int[] nums, int k) {
        PriorityQueue<Pair<Integer, Integer>> pq = new PriorityQueue<>(k,
                Comparator.comparing(o -> -o.getValue())) {{
            offer(new Pair<>(0, nums[0]));
        }};

        int max = nums[0], ans;
        for (int i = 1; i < nums.length; i++) {
            while (pq.peek().getKey() < i - k) { // We just compare the top node and see if it is outside of window or not.
                pq.poll();
            }

            max = nums[i] + pq.peek().getValue();
            pq.offer(new Pair<>(i, max));
        }

        return max;
    }
```

*Time Complexity* - `O(nlog(n))` - Although it seem that we have multiple while loops but if we think about we are only processing the nodes atmost twice once for processing that and second time while removing from the window. So, overall complexity depends on the sorting in PQ which is `O(nlog(n))` due to internal heap.

# **DP + Sliding Window -- Deque (Accepted) 70ms \u2705**
Although the above PQ based solution is accepted, we can improve the overall complexity if we can handle getting maximum value for the window without the need to sort them. This can be achieved by maintaining the maximum score element at the front of the queue always. 

Once the front element is out of window we can simply remove the element. Also, if we see once we get a score greater than the previous elements in the window we don't need th earlier elements as the current would be always selected for future elements due to it's score greater than earlier ones and also it is latest processed so would remain in the window for the last.

Seems easy ...right? Let's see the code.


```
public int maxResult(int[] nums, int k) {
        Deque<Pair<Integer, Integer>> deque = new LinkedList<>() {{
            offer(new Pair<>(0, nums[0]));
        }};
        int max = nums[0];

        for (int i = 1; i < nums.length; i++) {
            while (!deque.isEmpty() && deque.peekFirst().getKey() < i - k) {
                deque.pollFirst();
            }

            max = nums[i] + (deque.isEmpty() ? 0 : deque.peekFirst().getValue());

            while (!deque.isEmpty() && deque.peekLast().getValue() <= max) {
                deque.pollLast();
            }

            deque.offerLast(new Pair<>(i, max));
        }

        return max;
    }
```

*Time Complexity* - `O(n)` - At initial glance it might seem that we have multiple loops that might lead to complexity greater than `O(n)`; however, if we take a close look, we can see that each node would be processed maximum of 2 times. Once while the processing of itself and the second time either while removing out of window elements of the onces which are less than the current maximum score. 

Hope that helps!! In case of any improvement or corrections please comment below. Thanks!!