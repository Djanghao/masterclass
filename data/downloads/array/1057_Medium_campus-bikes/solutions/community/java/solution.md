# Java Fully Explained

**Author:** kiyayeh
**Votes:** 194
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/305603/](https://leetcode.com/problems/campus-bikes/solutions/305603/)

---

The solution is inspireed by @wushangzhen

As the question states, there are  ```n``` workers and ```m``` bikes, and ```m > n```.
We are able to solve this question using a greedy approach.

1. initiate a priority queue of bike and worker pairs. The heap order should be ```Distance ASC, WorkerIndex ASC, Bike ASC```
2. Loop through all workers and bikes, calculate their distance, and then throw it to the queue.
3. Initiate a set to keep track of the bikes that have been assigned.
4. initiate a result array and fill it with ```-1```. (unassigned)
5. poll every possible pair from the priority queue and check if the person already got his bike or the bike has been assigned.
6. early exist on every people got their bike.

This is my first post on LeetCode.
Let me know if you got any questions :D

```
   public int[] assignBikes(int[][] workers, int[][] bikes) {
        int n = workers.length;
        
        // order by Distance ASC, WorkerIndex ASC, BikeIndex ASC
        PriorityQueue<int[]> q = new PriorityQueue<int[]>((a, b) -> {
            int comp = Integer.compare(a[0], b[0]);
            if (comp == 0) {
                if (a[1] == b[1]) {
                    return Integer.compare(a[2], b[2]);
                }
                
                return Integer.compare(a[1], b[1]);
            }
            
            return comp;
        });
            
        // loop through every possible pairs of bikes and people,
        // calculate their distance, and then throw it to the pq.
        for (int i = 0; i < workers.length; i++) {
            
            int[] worker = workers[i];
            for (int j = 0; j < bikes.length; j++) {
                int[] bike = bikes[j];
                int dist = Math.abs(bike[0] - worker[0]) + Math.abs(bike[1] - worker[1]);
                q.add(new int[]{dist, i, j}); 
            }
        }
        
        // init the result array with state of 'unvisited'.
        int[] res = new int[n];
        Arrays.fill(res, -1);
        
        // assign the bikes.
        Set<Integer> bikeAssigned = new HashSet<>();
        while (bikeAssigned.size() < n) {
            int[] workerAndBikePair = q.poll();
            if (res[workerAndBikePair[1]] == -1 
                && !bikeAssigned.contains(workerAndBikePair[2])) {   
                
                res[workerAndBikePair[1]] = workerAndBikePair[2];
                bikeAssigned.add(workerAndBikePair[2]);
            }
        }
        
        return res;
    }
```