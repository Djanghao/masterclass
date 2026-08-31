# Go Solution | Easy Explanation | O(N) Time & Space Complexity

**Author:** vibhushit
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/4038917/](https://leetcode.com/problems/number-of-recent-calls/solutions/4038917/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We maintain a queue of timestamps for incoming requests. When a new request comes in, we add its timestamp to the queue. We then remove timestamps from the front of the queue that are outside the 3000 milliseconds window. The length of the queue at any point represents the number of requests within the window.
# Approach
<!-- Describe your approach to solving the problem. -->
1. We use a queue (implemented as a slice) to store timestamps.
2. In the Ping method, we append the current timestamp to the queue.
3. We iterate through the front of the queue and remove timestamps that are older than t - 3000.
4. The length of the queue represents the number of requests within the window.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    - The Constructor method has a time complexity of O(1).
    - The Ping method has a time complexity of O(N), where N is the number of requests within the 3000 milliseconds window. In practice, N is bounded by the number of calls to Ping.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    - The space complexity is O(N), where N is the number of requests within the 3000 milliseconds window.

# Code
```
type RecentCounter struct {
    requests []int
}

func Constructor() RecentCounter {
    return RecentCounter{}
}

func (this *RecentCounter) Ping(t int) int {
    // Add the current timestamp to the queue
    this.requests = append(this.requests, t)
    
    // Remove timestamps that are outside the 3000 milliseconds window
    for this.requests[0] < t-3000 {
        this.requests = this.requests[1:]
    }
    
    // Return the number of requests within the window
    return len(this.requests)
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */
```