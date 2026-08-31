# Beats 100% ✅🔥(Both time and space) | Java, Python, C++ | Detailed Explanation

**Author:** Vedant_Tiwari
**Votes:** 104
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/5390658/](https://leetcode.com/problems/number-of-recent-calls/solutions/5390658/)

---

![image.png](./images/0.png)

# Intuition
The goal of the RecentCounter class is to count the number of requests that occurred in the last `3000` milliseconds (ms). Each time a request is made (using the ping method), we record the time and maintain a count of all requests within the last `3000` ms. By efficiently tracking only the relevant requests, we can quickly compute the `result`.

# Approach
1. `Data Structure`: Use an array `records` to store timestamps of requests. The start and end indices mark the window of valid requests within the last `3000` ms.
2. `ping(int t)` Method:
    - **Add Timestamp**: Insert the current timestamp t at the position indicated by `end`.
    - **Remove Outdated Requests**: Increment the `start` index until the requests are within the `3000` ms window (`t - records[start] <= 3000`).
    - **Count Valid Requests**: Return the count of requests within the window (`end - start`), which represents the number of valid requests in the last 3000 ms.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```java []
class RecentCounter {
    private static final int[] records = new int[10000]; //
    private int start;
    private int end;

    public RecentCounter() {        
        start = 0;
        end = 0;
    }
    
    public int ping(int t) {
        while (start < end && (t - records[start] > 3000)) { 
            start++; // if the difference in time is greater than 3000ms, 
            // than increase the value of start unitl it's equal or less than 3000ms.
        }
        records[end++] = t; // Inserting the current time at the end
        return end - start; // Returning the answer including the element added just now.
    }
}

```
```python []
class RecentCounter:
    def __init__(self):
        self.records = []
        self.start = 0

    def ping(self, t: int) -> int:
        self.records.append(t)
        while self.records[self.start] < t - 3000:
            self.start += 1
        return len(self.records) - self.start

```
```cpp []
#include <vector>

class RecentCounter {
private:
    std::vector<int> records;
    int start;

public:
    RecentCounter() : start(0) {}

    int ping(int t) {
        records.push_back(t);
        while (records[start] < t - 3000) {
            start++;
        }
        return records.size() - start;
    }
};

```
![Upvote.jpg](./images/1.jpeg)
