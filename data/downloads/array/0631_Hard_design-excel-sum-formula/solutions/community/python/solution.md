# [Python] Recursive Solution - Problem Explained

**Author:** rowe1227
**Votes:** 36
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/1114449/](https://leetcode.com/problems/design-excel-sum-formula/solutions/1114449/)

---

**Problem:**

This problem asks us to design a small excel spread sheet (less than 27 columns)
that is capable of setting certain cells to either integer values or the dynamic 
sum of other cells.

<hr>

**The Tricky Bits:**

1. The sum can include individual cells, a 2D range of cells, or both. 
Furthermore, if a sum contains cell "A1" and range "A1:B2" we should
count the value in "A1" twice.

2. The sum must be dynamic.  If the sum contains "A1" and the value of 
"A1" changes from 2 to 3, then the sum should also increase by 1.

3. The sum can include cells that also contain a dynamic sum.
But there are no test cases that result in an infinite loop.

<hr>

**Implementation:**

1. Create a 2D array `form` of dimensions `H` and `W` to store your values.
2. When setting a value change `form[r][c]` to the integer value `v`.
3. When setting a sum change `form[r][c]` to a multiset (counter)
of the cells included in the sum.  We can keep track of how many times
each cell occurs in the sum using the multiset.

    >The `form` now contains two data types, integers and multisets.
	
4. When getting the value for a cell, check if the value is an integer.
If so, simply return the integer.
However, if the value is a multiset, then recursively call the `get` function on
the cells included in the multiset.  Remember to multiply the value of each
cell by the number of times the cell occurs in the multiset.

<hr>

**Things to Remember:**

1. Because the sum must be dynamic we cannot simply store the value
of the current sum at `(r, c)`.  Instead we must record the summed cells
at `(r, c)` and calculate the sum only when `get` is called.

2. The given `r` is 1-based so we need to subtract 1 from `r`.

3. The given `c` is a string so we make use of the unicode value `ord(c)` 
to convert `c` to an integer and subtract `ord("A") = 65` from `ord(c)` so that 
the columns will range from 0 to the width of `form`. **Note: extra steps will
need to be taken if larger column inputs such as "AA", ..., "ZZZZ" are allowed.**


```python
class Excel:

    def __init__(self, H: int, W: str):
        self.height, self.width = H, self._map(W) + 1
        self.form = [[0]*self.width for _ in range(self.height)]
    
    def _map(self, char):
        return ord(char) - 65

    def set(self, r: int, c: str, v: int) -> None:
        self.form[r-1][self._map(c)] = v

    def get(self, r: int, c: str) -> int:
        r, c = r-1, self._map(c)
        if type(self.form[r][c]) is int:
            return self.form[r][c]
        return sum(self.get(i+1, chr(j+65)) * self.form[r][c][(i, j)] for i, j in self.form[r][c])
    
    def _parse(self, string: str):
        i = int(''.join(char for char in string if char.isdigit())) - 1
        j = self._map([char for char in string if char.isalpha()][0])
        return i, j
        
    def sum(self, r: int, c: str, strs: List[str]) -> int:
        cells = collections.defaultdict(int)
        for string in strs:
            if ':' not in string:
                i, j = self._parse(string)
                cells[(i, j)] += 1
            else:
                start, end = string.split(':')
                i0, j0 = self._parse(start)
                i1, j1 = self._parse(end)
                for i in range(i0, i1+1):
                    for j in range(j0, j1+1):
                        cells[(i, j)] += 1
        self.form[r-1][self._map(c)] = cells
        return self.get(r, c)
```