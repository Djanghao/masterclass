# Simple formula solution

**Author:** nikalaikina
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/4565314/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/4565314/)

---

# Intuition
Each iteration I would mirror the number in its row.
If l is the biggest poweer of two smaller than x, the mirror number is
```
l * 3 - x - 1
```

# Code
```
object Solution {
    def pathInZigZagTree(label: Int): List[Int] = {
        LazyList
            .iterate(2)(_ * 2)
            .takeWhile(_ <= label)
            .toList
            .reverse
            .scanLeft(label) { case (x, l) => (l * 3 - x - 1) / 2 }
            .reverse
    }
}

```