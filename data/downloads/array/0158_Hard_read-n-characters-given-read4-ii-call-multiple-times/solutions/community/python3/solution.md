# python solution easy understand

**Author:** Yqyzdq
**Votes:** 10
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/4029828/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/4029828/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

buffer is a fixed size array, filling with '' if the content is shorter than the buffer size

The intention of this question is to implement a buffer with size n(`buf`), 
given buffer with size 4(`buf4`)


# Approach
<!-- Describe your approach to solving the problem. -->
main logic is: load data into buf4 first, and then put it into buf

the edge case is that file may be shorter than n

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
# The read4 API is already defined for you.
# def read4(buf4: List[str]) -> int:


class Solution:
    def __init__(self):
        self.to_load = collections.deque() # this is used to analyze data in buf4
    
    def read(self, buf: List[str], n: int) -> int:
        read_count = 0
        buf4 = ['']*4 
        while read_count < n: # main logic: read until arrive at n
            if len(self.to_load) > 0: # load from buffer to buf
                buf[read_count] = self.to_load.popleft() # O(1)
                read_count += 1
            else: # load file to buf4
                for i in range(read4(buf4)):
                    self.to_load.append(buf4[i])
                if len(self.to_load) == 0: # edge case, nothing to load(even read_count not reach n yet)
                    break
        return read_count
                




                

        
```