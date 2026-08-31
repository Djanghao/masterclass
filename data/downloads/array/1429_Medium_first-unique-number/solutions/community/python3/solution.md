# Python Easy Solution (HashMap + Queue)

**Author:** maydanny
**Votes:** 3
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/5913811/](https://leetcode.com/problems/first-unique-number/solutions/5913811/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. initialize queue and count hashmap
2. when add, append the number to queue and increase the count on hashmap
3. when showFirstUnique, iterate through the queue from the beginning if the number's count is bigger than 1 from hashmap
4. if it is, popleft the number
5. else, return the number but if queue becomes empty, return -1

# Complexity
- Time complexity: 
O(k) for constructor, O(1) for add, O(1) for showFirstUnique
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n), total count of numbers that get added to queue
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class FirstUnique:

    def __init__(self, nums: List[int]):
        self.q = deque(nums)
        self.count = Counter(nums)

    def showFirstUnique(self) -> int:
        while self.q and self.count[self.q[0]] > 1:
            self.q.popleft()

        if not self.q:
            return -1

        return self.q[0] 

    def add(self, value: int) -> None:
        self.q.append(value)
        self.count[value] += 1
    
# Your FirstUnique object will be instantiated and called as such:
# obj = FirstUnique(nums)
# param_1 = obj.showFirstUnique()
# obj.add(value)
```