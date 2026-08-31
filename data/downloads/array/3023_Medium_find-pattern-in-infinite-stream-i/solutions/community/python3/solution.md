# Python solution - deque to track last characters of stream

**Author:** adamrbeier
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4655559/](https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/4655559/)

---

# Approach
Since the stream is infinite, memory usage is important.  Since the pattern that we're looking to match is given as a list, using a list-style structure to track the last elements in the stream.  Using m to denote the length of the pattern, this solution uses the deque() structure to track elements in the stream in a LIFO manner, appending the latest element in the stream to the end of the deque, and using the deque popleft() function to remove the "oldest" element in the steam.

For the actual implementation, start by assigning the length of the pattern input to m, and set up a deque, which this solution calls queue.  Call the ```stream.next()``` function m times and append those characters to the queue.  This will function as the initial list to compare to pattern.  Initialize an "overall index" (ovridx) which will represent the index of the stream (which is technically the current index of the stream minus the m characters in the queue).  Compare the queue to the pattern.  If they match, return ovridx as that will be the index of the stream where the next m characters match the pattern.  If they do not match, use popleft() to remove the first element of the queue, and call stream.next() and append that to the queue, and increment ovridx by 1.  Rinse and repeat until the pattern has been matched.

# Code
```
# Definition for an infinite stream.
# class InfiniteStream:
#     def next(self) -> int:
#         pass
class Solution:
    def findPattern(self, stream: Optional['InfiniteStream'], pattern: List[int]) -> int:
        m = len(pattern)

        queue = deque()

        for _ in range(m):
            queue.append(stream.next())
        
        ovridx = -1
        while True:
            ovridx += 1
            if list(queue) == pattern:
                return ovridx
            test = queue.popleft()
            queue.append(stream.next())
```