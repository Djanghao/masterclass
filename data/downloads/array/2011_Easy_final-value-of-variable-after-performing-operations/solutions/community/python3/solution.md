# Python 3 simple with dict and generator

**Author:** mxmb
**Votes:** 52
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1538977/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1538977/)

---

```python
def finalValueAfterOperations(self, operations: List[str]) -> int:
        op_dict = {"--X" : -1, "X--" : -1,
                 "++X" : 1, "X++" : 1}
        return sum(op_dict[op] for op in operations)
```