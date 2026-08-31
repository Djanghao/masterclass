# Python super-simple and easy solution

**Author:** YehudisK
**Votes:** 7
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/789676/](https://leetcode.com/problems/iterator-for-combination/solutions/789676/)

---

```
class CombinationIterator:
    def __init__(self, characters: str, combinationLength: int):
        self.allCombinations = list(combinations(characters, combinationLength))
        self.count = 0

    def next(self) -> str:
        self.count += 1
        return "".join(self.allCombinations[self.count-1])
        
    def hasNext(self) -> bool:
        return self.count < len(self.allCombinations)

```