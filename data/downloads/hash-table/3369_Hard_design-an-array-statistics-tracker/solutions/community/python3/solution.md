# Decomposed with classes python3 solution | SortedList + SortedDict

**Author:** TigProg
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-array-statistics-tracker/solutions/6100675/](https://leetcode.com/problems/design-an-array-statistics-tracker/solutions/6100675/)

---

# Complexity
- Time complexity: $$O(n \\cdot \\log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
from sortedcontainers import SortedList, SortedDict

class StatisticTracker:
    def add(self, elem):
        ...
    def remove(self, elem):
        ...
    def calc(self):
        ...

class MeanStatisticTracker(StatisticTracker):
    def __init__(self):
        # trivial implementation
        self._sum = 0
        self._cnt = 0

    def add(self, elem):
        self._sum -= elem
        self._cnt -= 1

    def remove(self, elem):
        self._sum += elem
        self._cnt += 1

    def calc(self):
        return self._sum // self._cnt

class MedianStatisticTracker(StatisticTracker):
    def __init__(self):
        # also can be implemented by max and mean heaps
        # also O(n log(n))
        self._list = SortedList()
    
    def add(self, elem):
        self._list.add(elem)
    
    def remove(self, elem):
        self._list.remove(elem)
    
    def calc(self):
        index = len(self._list) // 2
        return self._list[index]

class ModeStatisticTracker(StatisticTracker):
    def __init__(self):
        # also can be implemented by dict + linked list
        self._number_to_cnt = Counter()
        self._cnt_to_numbers = SortedDict()  # int -> SortedList
    
    def add(self, elem):
        old_cnt = self._number_to_cnt[elem]
        self._number_to_cnt[elem] += 1

        if old_cnt != 0:
            self._cnt_to_numbers[old_cnt].remove(elem)
            if len(self._cnt_to_numbers) == 0:
                del self._cnt_to_numbers[old_cnt]
        
        if (old_cnt + 1) not in self._cnt_to_numbers:
            self._cnt_to_numbers[old_cnt + 1] = SortedList()
        self._cnt_to_numbers[old_cnt + 1].add(elem)
    
    def remove(self, elem):
        old_cnt = self._number_to_cnt[elem]
        if old_cnt == 1:
            del self._number_to_cnt[elem]
        else:
            self._number_to_cnt[elem] -= 1

        self._cnt_to_numbers[old_cnt].remove(elem)
        if len(self._cnt_to_numbers[old_cnt]) == 0:
            del self._cnt_to_numbers[old_cnt]

        if old_cnt != 1:
            if (old_cnt - 1) not in self._cnt_to_numbers:
                self._cnt_to_numbers[old_cnt - 1] = SortedList()
            self._cnt_to_numbers[old_cnt - 1].add(elem)
    
    def calc(self):
        key = self._cnt_to_numbers.keys()[-1]
        return self._cnt_to_numbers[key][0]

class StatisticsTracker:
    def __init__(self):
        self._numbers = deque()
        self._mean_tracker = MeanStatisticTracker()
        self._median_tracker = MedianStatisticTracker()
        self._mode_tracker = ModeStatisticTracker()
        self._trackers = [
            self._mean_tracker, self._median_tracker, self._mode_tracker,
        ]

    def addNumber(self, number: int) -> None:
        self._numbers.append(number)
        for tracker in self._trackers:
            tracker.add(number)

    def removeFirstAddedNumber(self) -> None:
        number_to_delete = self._numbers.popleft()
        for tracker in self._trackers:
            tracker.remove(number_to_delete)

    def getMean(self) -> int:
        return self._mean_tracker.calc() 

    def getMedian(self) -> int:
        return self._median_tracker.calc()

    def getMode(self) -> int:
        return self._mode_tracker.calc()
```