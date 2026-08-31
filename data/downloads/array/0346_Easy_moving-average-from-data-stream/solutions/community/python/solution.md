# 4-line Python Solution using deque

**Author:** myliu
**Votes:** 75
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/81495/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/81495/)

---

    import collections
    
    class MovingAverage(object):
    
        def __init__(self, size):
            """
            Initialize your data structure here.
            :type size: int
            """
            self.queue = collections.deque(maxlen=size)
            
    
        def next(self, val):
            """
            :type val: int
            :rtype: float
            """
            queue = self.queue
            queue.append(val)
            return float(sum(queue))/len(queue)
            
    
    
    # Your MovingAverage object will be instantiated and called as such:
    # obj = MovingAverage(size)
    # param_1 = obj.next(val)