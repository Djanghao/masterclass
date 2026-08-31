# [Java/Python 3] TreeSet/SortedList w/ brief explanation and analysis.

**Author:** rock
**Votes:** 47
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/2322402/](https://leetcode.com/problems/design-a-number-container-system/solutions/2322402/)

---

**Q & A**

Q1: How many third party packages are pre installed on leetcode server? And where to get such list?
A1: Please see [What are the environments for the programming languages?](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-).

Q2: Why `find` is `O(logn)` since the values are sorted?
A2:  


1)  In Python 3 code `SortedList[i]` is actually `SortedList.__getitem__`, which cost time `O(logn)`. Please refer to [source code](https://grantjenks.com/docs/sortedcontainers/_modules/sortedcontainers/sortedlist.html#SortedList.__getitem__) for more details.
2)  In Java code, the `TreeSet` is implemented based on `TreeMap`, which is implemented using Red-Black Tree. [Red-Black Tree](https://en.m.wikipedia.org/wiki/Red%E2%80%93black_tree)  is a self-balancing binary search tree, and any search operation cost `O(logn)`. Hence the `TreeSet.first()` cost `O(logn)`.


**End of Q & A**

----

Since the problem request that the smallest index of a given `number` be returned, a `TreeSet/SortedList` is a reasonable choice.

Therefore, we can use `2` `HashMap/dict` to store `number/indices` and `index/number` bindings respectively.

Note: For each call of `change`, we first check if there has already been a `number` filled at the `index`: if yes, discard the old value at the `index` first, then update/insert the new value.

```java
    private Map<Integer, TreeSet<Integer>> numToIndices = new HashMap<>();
    private Map<Integer, Integer> indexToNum = new HashMap<>();

    public NumberContainers() {}
    
    public void change(int index, int number) {
        if (indexToNum.containsKey(index)) {
            int old = indexToNum.get(index);
            numToIndices.get(old).remove(index);
            if (numToIndices.get(old).isEmpty()) {
                numToIndices.remove(old);
            }
        }
        indexToNum.put(index, number);
        numToIndices.computeIfAbsent(number, s -> new TreeSet<>()).add(index);
    }
    
    public int find(int number) {
        if (numToIndices.containsKey(number)) {
            return numToIndices.get(number).first();
        }
        return -1;
    }
```
```python
from sortedcontainers import SortedList

class NumberContainers:

    def __init__(self):
        self.num_to_indices = defaultdict(SortedList)
        self.index_to_num = {}

    def change(self, index: int, number: int) -> None:
        if index in self.index_to_num:
            old = self.index_to_num[index]
            self.num_to_indices[old].discard(index)
            if not self.num_to_indices[old]:
                del self.num_to_indices[old]
        self.num_to_indices[number].add(index)
        self.index_to_num[index] = number
            

    def find(self, number: int) -> int:
        if number in self.num_to_indices:
            return self.num_to_indices[number][0]
        return -1
```

**Analysis:**

Overall space: `O(n)`

Time for both `change` and `find`: `O(logn)`, where `n` is the total count of numbers in the container.