# Python O(1) Solution using two dictionaries with explanation

**Author:** Anjani10
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/1114852/](https://leetcode.com/problems/maximum-frequency-stack/solutions/1114852/)

---

Initialise two dictionaries **set** and **freq** and a variable **max_freq**.
**freq** is used to store the frequency of the elements provided, i.e., Key: Element; Value: Count of that element
**set** is used to store the group of elements having the same frequency. Key: Count; Value: List of elements
**max_freq** is used to store the frequency of most common element.
For example, let's say we have an input stack and we start adding the following elements:
**Push 5:** freq: {5: 1}; set: {1: [5]}; max_freq = 1
**Push 7:** freq: {5: 1, 7: 1}; set: {1: [5, 7]}; max_freq = 1
**Push 5:** freq: {5: 2, 7: 1}; set: {1: [5, 7], 2:[5]}; max_freq = 2
**Pop**: 
- Use max_freq to access the set dictionary and pop the last element from the list.
- val = set[max_freq].pop()
- Since, our set[2] is empty, decrement max_freq by 1.
- Also, decrement freq[val] by 1.
- freq: {5:1, 7: 1}; set: {1: [5, 7], 2: []}; max_freq = 1
- return val

```
class FreqStack:

    def __init__(self):
        self.set = defaultdict(list)
        self.freq = defaultdict(int)
        self.max_freq = 0

    def push(self, val: int) -> None:
        self.freq[val] += 1
        self.max_freq = max(self.max_freq, self.freq[val])
        self.set[self.freq[val]].append(val)

    def pop(self) -> int:
        val = self.set[self.max_freq].pop()
        self.freq[val] -= 1
        if not self.set[self.max_freq]:
            self.max_freq -= 1
        return val
```