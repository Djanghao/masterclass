# [ C++ | Java | Kotlin ] Simple binary search solution, detailed explanation, beats 100% 🚀

**Author:** DmitryNekrasov
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6126268/](https://leetcode.com/problems/two-best-non-overlapping-events/solutions/6126268/)

---

# Intuition
The key insight is that since we can only select up to two non-overlapping events, we can:
1. First sort the events by start time to make it easier to find non-overlapping pairs
2. For each event, try to pair it with the best possible non-overlapping event that comes after it
3. Use preprocessing to quickly find the maximum value available after any given point

# Approach
1. Sort Events:
   - Sort all events by their start time to establish a clear timeline
   - This makes it easier to find non-overlapping events since we know all potential second events must start after the first one ends

2. Precompute Maximum Values (maxSuffix array):
   - Create an array that stores the maximum value achievable from each position onwards
   - For each position i, maxSuffix[i] = max(current event value, maxSuffix[i+1])
   - This lets us quickly find the best possible second event after any point

3. Binary Search for Non-overlapping Events:
   - For each event, we need to find the first event that starts after this event ends
   - Use binary search since the events are sorted by start time
   - This is much more efficient than checking each subsequent event ($$O(log(n)$$) vs $$O(n)$$)

4. Calculate Maximum Value:
   - For each event i:
     * Take its value
     * Find the first non-overlapping event after it using binary search
     * Add the maximum possible value from that point (using maxSuffix)
   - Keep track of the maximum sum found

# Complexity
Time Complexity: $$O(n * log(n))$$ where n is the number of events
- Sorting: $$O(n * log(n))$$
- Creating maxSuffix: $$O(n)$$
- For each event, binary search: $$O(n * log(n))$$

Space Complexity: $$O(n)$$ for the maxSuffix array

This solution efficiently handles the constraints of non-overlapping events while finding the maximum possible value using two key optimizations: precomputed maximum values and binary search for finding valid pairs.

# Code
```kotlin []
class Solution {
    fun maxTwoEvents(events: Array<IntArray>): Int {
        events.sortBy { it.first() }
        val n = events.size
        val maxSuffix = IntArray(n)
        maxSuffix[n - 1] = events[n - 1].last()
        for (i in n - 2 downTo 0) {
            maxSuffix[i] = max(maxSuffix[i + 1], events[i].last())
        }

        fun binSearch(left: Int, right: Int, target: Int): Int {
            if (left >= right) return right
            val mid = left + (right - left) / 2
            return if (events[mid].first() > target) binSearch(left, mid, target) else binSearch(mid + 1, right, target)
        }

        return events.indices.maxOf { i ->
            events[i].last() + binSearch(i + 1, n, events[i][1]).let { if (it < n) maxSuffix[it] else 0 }
        }
    }
}
```
```java []
class Solution {
    public int maxTwoEvents(int[][] events) {
        Arrays.sort(events, Comparator.comparingInt(a -> a[0]));
        
        int n = events.length;
        int[] maxSuffix = new int[n];
        
        maxSuffix[n - 1] = events[n - 1][2];
        for (int i = n - 2; i >= 0; i--) {
            maxSuffix[i] = Math.max(maxSuffix[i + 1], events[i][2]);
        }
        
        int maxValue = 0;
        for (int i = 0; i < n; i++) {
            int currentValue = events[i][2];
            int nextEventIndex = binSearch(i + 1, n, events[i][1], events);
            int additionalValue = (nextEventIndex < n) ? maxSuffix[nextEventIndex] : 0;
            maxValue = Math.max(maxValue, currentValue + additionalValue);
        }
        
        return maxValue;
    }
    
    private int binSearch(int left, int right, int target, int[][] events) {
        if (left >= right) {
            return right;
        }
        
        int mid = left + (right - left) / 2;
        if (events[mid][0] > target) {
            return binSearch(left, mid, target, events);
        } else {
            return binSearch(mid + 1, right, target, events);
        }
    }
}
```
```cpp []
class Solution {
private:
    int binSearch(int left, int right, int target, const vector<vector<int>>& events) {
        if (left >= right) {
            return right;
        }
        
        int mid = left + (right - left) / 2;
        if (events[mid][0] > target) {
            return binSearch(left, mid, target, events);
        } else {
            return binSearch(mid + 1, right, target, events);
        }
    }
    
public:
    int maxTwoEvents(vector<vector<int>>& events) {
        sort(events.begin(), events.end(), 
             [](const vector<int>& a, const vector<int>& b) {
                 return a[0] < b[0];
             });
        
        int n = events.size();
        vector<int> maxSuffix(n);
        
        maxSuffix[n - 1] = events[n - 1][2];
        for (int i = n - 2; i >= 0; i--) {
            maxSuffix[i] = max(maxSuffix[i + 1], events[i][2]);
        }
        
        int maxValue = 0;
        for (int i = 0; i < n; i++) {
            int currentValue = events[i][2];
            int nextEventIndex = binSearch(i + 1, n, events[i][1], events);
            int additionalValue = (nextEventIndex < n) ? maxSuffix[nextEventIndex] : 0;
            maxValue = max(maxValue, currentValue + additionalValue);
        }
        
        return maxValue;
    }
};
```
![image.png](./images/0.png)
