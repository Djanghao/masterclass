# Easy Video Solution (Pictorial Explanation) 🔥 || How to 🤔 in Interview || Priority_queue

**Author:** ayushnemmaniwar12
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5474149/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5474149/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can calculate min operation cost



***Easy Video Explanation***
    
https://youtu.be/AEuvSLMJIzk

# Code


```C++ []
class Solution {
public:
    int minimumCost(int m, int n, vector<int>& horizontalCut, vector<int>& verticalCut) {
    priority_queue<pair<int, char>> cuts;
    for (int cost : horizontalCut) {
        cuts.push({cost, 'H'});
    }
    for (int cost : verticalCut) {
        cuts.push({cost, 'V'});
    }
    
    int horizontal_pieces = 1;
    int vertical_pieces = 1;
    
    long long total_cost = 0;
    
    while (!cuts.empty()) {
        auto cut = cuts.top();
        cuts.pop();
        
        int cost = cut.first;
        char cut_type = cut.second;
        if (cut_type == 'H') {
            total_cost += (long long)(cost) * vertical_pieces;
            horizontal_pieces++;
        } else {
            total_cost += (long long)(cost) * horizontal_pieces;
            vertical_pieces++;
        }
    }

    return total_cost;
    }
};
```
```python []
import heapq

class Solution:
    def minimumCost(self, m, n, horizontalCut, verticalCut):
        # Create a max-heap for cuts by negating the costs
        cuts = [(-cost, 'H') for cost in horizontalCut] + [(-cost, 'V') for cost in verticalCut]
        heapq.heapify(cuts)
        
        horizontal_pieces = 1
        vertical_pieces = 1
        
        total_cost = 0
        
        while cuts:
            cost, cut_type = heapq.heappop(cuts)
            cost = -cost  # Convert back to positive cost
            
            if cut_type == 'H':
                total_cost += cost * vertical_pieces
                horizontal_pieces += 1
            else:
                total_cost += cost * horizontal_pieces
                vertical_pieces += 1
                
        return total_cost

```
```Java []
import java.util.PriorityQueue;
import java.util.List;
import java.util.Collections;

class Solution {
    public int minimumCost(int m, int n, List<Integer> horizontalCut, List<Integer> verticalCut) {
        PriorityQueue<int[]> cuts = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        
        for (int cost : horizontalCut) {
            cuts.add(new int[]{cost, 'H'});
        }
        for (int cost : verticalCut) {
            cuts.add(new int[]{cost, 'V'});
        }
        
        int horizontal_pieces = 1;
        int vertical_pieces = 1;
        
        long total_cost = 0;
        
        while (!cuts.isEmpty()) {
            int[] cut = cuts.poll();
            int cost = cut[0];
            char cut_type = (char) cut[1];
            
            if (cut_type == 'H') {
                total_cost += (long) cost * vertical_pieces;
                horizontal_pieces++;
            } else {
                total_cost += (long) cost * horizontal_pieces;
                vertical_pieces++;
            }
        }
        
        return (int) total_cost;
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00