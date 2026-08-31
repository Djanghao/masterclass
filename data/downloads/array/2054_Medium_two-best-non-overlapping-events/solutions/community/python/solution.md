# Simple Solution with Priority Queue | ✅Beats 100% | C++ | Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 22
**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6124771/](https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6124771/)

---



# \u2B06\uFE0FUpvote if it helps \u2B06\uFE0F  

---

## Connect with me on Linkedin [Bijoy Sing](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/).  

---


## Follow me also on Codeforces: [Bijoy Sing](https://codeforces.com/profile/BijoySingh7)  

---


###### *Solution in C++, Python, Java, and JavaScript*  

```cpp []
class Solution {
public:
    int maxTwoEvents(vector<vector<int>>& events) {
        sort(events.begin(), events.end());
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
        int maxVal = 0, ans = 0;

        for (const auto& event : events) {
            int start = event[0], end = event[1], value = event[2];

            while (!pq.empty() && pq.top().first < start) {
                maxVal = max(maxVal, pq.top().second);
                pq.pop();
            }

            ans = max(ans, maxVal + value);
            pq.push({end, value});
        }

        return ans;
    }
};
```

```python []
import heapq

class Solution:
    def maxTwoEvents(self, events):
        events.sort()
        pq = []
        max_val = 0
        ans = 0

        for start, end, value in events:
            while pq and pq[0][0] < start:
                max_val = max(max_val, heapq.heappop(pq)[1])
            ans = max(ans, max_val + value)
            heapq.heappush(pq, (end, value))

        return ans
```

```java []
import java.util.*;

class Solution {
    public int maxTwoEvents(int[][] events) {
        Arrays.sort(events, (a, b) -> Integer.compare(a[0], b[0]));
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        int maxVal = 0, ans = 0;

        for (int[] event : events) {
            int start = event[0], end = event[1], value = event[2];

            while (!pq.isEmpty() && pq.peek()[0] < start) {
                maxVal = Math.max(maxVal, pq.poll()[1]);
            }

            ans = Math.max(ans, maxVal + value);
            pq.add(new int[]{end, value});
        }

        return ans;
    }
}
```

```javascript []
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    events.sort((a, b) => a[0] - b[0]);
    const n = events.length;
    const prefixMax = new Array(n).fill(0);
    
    prefixMax[n - 1] = events[n - 1][2];
    for (let i = n - 2; i >= 0; i--) {
        prefixMax[i] = Math.max(prefixMax[i + 1], events[i][2]);
    }
    
    let maxResult = 0;
    
    for (let i = 0; i < n; i++) {
        const currValue = events[i][2];
        const currEnd = events[i][1];
        
        let left = i + 1, right = n - 1;
        let maxNextValue = 0;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][0] > currEnd) {
                maxNextValue = Math.max(maxNextValue, prefixMax[mid]);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        maxResult = Math.max(maxResult, currValue + maxNextValue);
    }
    
    return maxResult;
};
```

# Intuition  
To solve the problem, we need to find two non-overlapping events that maximize the total value. Sorting the events by start time helps us efficiently determine which events can be paired.  

# Approach  
1. Sort the events based on their start time.  
2. Use a priority queue to keep track of events that end before the current event starts.  
3. Track the maximum value of completed events (`maxVal`) to calculate the best combination with the current event.  
4. Update the global maximum (`ans`) and continue processing.  

# Complexity  
- Time complexity:  
  $$O(n \\log n)$$ (due to sorting and priority queue operations).  

- Space complexity:  
  $$O(n)$$ (to store events in the priority queue).  

### *If you have any questions or need further clarification, feel free to drop a comment! \uD83D\uDE0A*