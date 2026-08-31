# JAVA | Priority-Queue | Explained ✅

**Author:** sourin_bruh
**Votes:** 3
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/3099215/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/3099215/)

---

# Please Upvote \uD83D\uDE07


``` java []
class Solution {
    public List<Integer> filterRestaurants(int[][] restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        // Initilaise a priority queue with custom comparator
        // order by rating (highest to lowest)
        // if rating is same, order by id (highest to lowest)
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (a, b) -> a[1] == b[1]? b[0] - a[0] : b[1] - a[1]
        );
        // go thorugh all restaurants
        for (int[] r : restaurants) {
            // if veganFriendly is true but our restaurant is not vegan friendly
            if (veganFriendly == 1 && r[2] != 1) {
                continue;   // skip the restaurant
            }
            // if price <= maxPrice and distance <= maxDistance
            if (r[3] <= maxPrice && r[4] <= maxDistance) {
                // we can add the whole restaurant but we don't need it
                // because it'll consume unnecessary space
                // {id, rating} of restaurant is enough so add it to heap
                pq.offer(new int[] {r[0], r[1]});   
            }
        }

        // arraylist to store our answer IDs
        List<Integer> ans = new ArrayList<>();
        // keep polling until heap is empty and
        // keep adding the IDs to answer list
        while (!pq.isEmpty()) { 
            ans.add(pq.poll()[0]);   
        }

        return ans;     // return the answer list
    }
}
```
#### Time complexity: $$O(2 * n * logn) => O(n * logn)$$
#### Space complexity: $$O(n)$$
---

### Clean solution:
``` java []
class Solution {
    public List<Integer> filterRestaurants(int[][] restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (a, b) -> a[1] == b[1]? b[0] - a[0] : b[1] - a[1]
        );

        for (int[] r : restaurants) {
            if (veganFriendly == 1 && r[2] != 1) continue;   
            if (r[3] <= maxPrice && r[4] <= maxDistance) {
                pq.offer(new int[] {r[0], r[1]});   
            }
        }

        List<Integer> ans = new ArrayList<>();
        while (!pq.isEmpty()) { 
            ans.add(pq.poll()[0]);   
        }

        return ans;   
    }
}
```