# Python | HashMap + Heap

**Author:** sr_vrd
**Votes:** 16
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/2322510/](https://leetcode.com/problems/design-a-number-container-system/solutions/2322510/)

---

For each `number` we have a set and a heap of indexes. The set lets us check quick if `number` is at `index` or not. The heap lets us return quick what is the smallest `index` at which `number` is.

```
class NumberContainers:
    def __init__(self):
        self.numbersByIndex = {}
        self.numberIndexes = defaultdict(set)
        self.numberIndexesHeap = defaultdict(list)

    def change(self, index: int, number: int) -> None:
        if index in self.numbersByIndex:
            if number != self.numbersByIndex[index]:
                self.numberIndexes[self.numbersByIndex[index]].remove(index)
                self.numbersByIndex[index] = number
                self.numberIndexes[number].add(index)
                heappush(self.numberIndexesHeap[number], index)
        else:
            self.numbersByIndex[index] = number
            self.numberIndexes[number].add(index)
            heappush(self.numberIndexesHeap[number], index)

    def find(self, number: int) -> int:
        while self.numberIndexesHeap[number] and self.numberIndexesHeap[number][0] not in self.numberIndexes[number]:
                heappop(self.numberIndexesHeap[number])  # make sure the smallest index in heap is still an index for number
        return self.numberIndexesHeap[number][0] if self.numberIndexesHeap[number] else -1

```