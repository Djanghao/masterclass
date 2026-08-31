# Java, min heap, clean code

**Author:** gthor10
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/366845/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/366845/)

---

We can solve this using min heap. On every step we need to take two most cheapest sticks and join them. This can be achieved by the min heap. We poll two top (most cheap) elements, summarize them, add to the result and put the sum back to the min heap cause this is our new stick.

Complexity - runtime is O(n x lgn) to create the min heap, then n x (O(1) to get the min elements + O(lgn) to put combined stick back) = O(nlgn), so overall is O(n x lgn). For space we need O(n) for the min heap.

```
    public int connectSticks(int[] sticks) {
        int res = 0;
        //add all elements to the min heap
        PriorityQueue<Integer> pq = new PriorityQueue();
        for (int s : sticks)
            pq.add(s);
        
        //iterate over all elements in the heap
        while (pq.size() > 1) {
            int cost = pq.poll() + pq.poll();
            res += cost;
            pq.add(cost);
        }
        
        return res;
    }
```