# Python one pass method O(n)

**Author:** owen1605
**Votes:** 26
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907308/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907308/)

---

In overall, they are only looking for '101' and '010'.
We keep track of previous '0' and '1' using variable 'z' and 'o'.
When entering the next building, the previous '0' and '1' can be upgraded into '01' and '10' respectively as variable 'oz' and 'zo'.
Again, from the previous '01' and '10', we can upgrade them into '010' and '101' and put them both into variable 'total', which will be the total valid ways to select 3 buildings.
```
def sumScores(self, s):
	# Idea 1: count 0, 1, 01, 10
        z, o, zo, oz, total = 0, 0, 0, 0, 0
        for c in s:
            if c == '1':
                total += oz
                zo += z
                o += 1
            elif c == '0':
                total += zo
                oz += o
                z += 1
        return total
