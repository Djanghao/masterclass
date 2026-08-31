# Javascript detailed explanation beats 99.76%  O(n) time O(n) space

**Author:** coleykins88
**Votes:** 32
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/322357/](https://leetcode.com/problems/number-of-recent-calls/solutions/322357/)

---

Similar to the rate limiter question. Represent the calls at time T as a streaming array of integers using a queue.
1. For each call, add t to the end of the queue.
2. Maintain the queue so that the front is always within the time frame of t - 3000 (we trim the values that dont appear in this interval)
```
Ping(1)
stream = [ 1 ] 
Ping(100)
stream = [ 1, 100 ] 
ping(3001)
stream = [ 1, 100, 3001 ]
ping(3002)
stream = [ 100, 3001, 3002 ] 
Return the stream's count after each call
```
```
var RecentCounter = function() {
    this.stream = []
};
RecentCounter.prototype.ping = function(t) {
    this.stream.push(t) // Everytime we recieve a ping, add the time to the stream of integers
  /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
    while(this.stream[0] < t - 3000){ 
      this.stream.shift()
  } 
    // When the loop ends the length of calls will be the length of the array
    return this.stream.length
};
```