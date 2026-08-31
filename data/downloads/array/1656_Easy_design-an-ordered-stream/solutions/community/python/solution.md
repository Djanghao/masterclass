# Latest Python solution explained for newly updated description: Faster than 90%

**Author:** er1shivam
**Votes:** 33
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/1336087/](https://leetcode.com/problems/design-an-ordered-stream/solutions/1336087/)

---

The idea behind this problem is simple but the description is confusing.
So let me explain a bit.

Basically , we need to store every incoming value at the given index. And 
with every incoming index, we have to check

* If the current index is less than the incoming index, the we have to return
    an empty list

* Else , we have to return an sliced list from the incoming index to the first index
    where there is no insertion till yet.

Solution:
* Initialize a list of size n with None
* Maintain the current index with self.ptr
* For every insert call, with idKey, value 
    * Assign the list[idKey-1] to the value # Since array is 0-index reduce 1
    * Check if the current index is less than incoming index(idKey-1) and return []
    * Else return sliced list from incoming index(idKey-1) till we do not encounter  None.


```
class OrderedStream:

    def __init__(self, n):
        self.stream = [None]*n
        self.ptr = 0

    def insert(self, idKey, value):
        idKey -= 1
        self.stream[idKey] = value
        if self.ptr < idKey:
            return []
        else:
            while self.ptr < len(self.stream) and self.stream[self.ptr] is not None:
                self.ptr += 1
            return self.stream[idKey:self.ptr]


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)
```