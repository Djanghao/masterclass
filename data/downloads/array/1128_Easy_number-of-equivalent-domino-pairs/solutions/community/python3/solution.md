# [python3] dictionary count

**Author:** zhanweiting
**Votes:** 26
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/348400/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/348400/)

---

* Use a dictionary to count how many times an intrinsic domino appeared. Here we define intrinsic domino as a sorted domino. By sort the list, we can easily identify the intrinsic domino.  Use the intrinsic domino as key, the intrinsic domino frequency as value, store the information we need in a dictionary.
```
Example:
index     0     1      2     3
input = [[1,2],[2,1],[1,2],[1,2]]
d = { [1,2] : 4}
The number of equivalent domino pairs of the input will be 4 * 3 / 2 = 6
          index               index
pair  1 :   0    [1,2]   and     1        [2,1]
pair  2 :   0    [1,2]   and     2        [1,2]
pair  3 :   0    [1,2]   and     3        [1,2]
pair  4 :   1    [2,1]   and     0        [1,2]
pair  5 :   1    [2,1]   and     2        [1,2]
pair  6 :   1    [2,1]   and     3        [1,2]
pair  7 :   2    [1,2]   and     0        [1,2]
pair  8 :   2    [1,2]   and     1        [1,2]
pair  9 :   2    [1,2]   and     3        [1,2]
pair 10 :   3    [1,2]   and     0        [1,2]
pair 11 :   3    [1,2]   and     1        [1,2]
pair 12 :   3    [1,2]   and     2        [1,2]

apparently, 
pair 1 (index 0, 1) and pair 4  (index 1,0)  are considered the same pair. 
pair 2 (index 0, 2) and pair 7  (index 2,0)  are considered the same pair. 
pair 3 (index 0, 3) and pair 10 (index 3,0)  are considered the same pair. 
pair 5 (index 1, 2) and pair 8 (index 2,1)  are considered the same pair. 
pair 6 (index 1, 3) and pair 11 (index 3,1)  are considered the same pair. 
pair 9 (index 2, 3) and pair 12 (index 3,2)  are considered the same pair. 


                    
```
* Calculate how many pairs of Equivalent domino:
For each domino, the number of pairs = n*(n-1)//2, 
where n is the domino frequency.
Explanation:
	For the first domino in the pair, we have n options, 
	For the second domino in the pair, we have (n - 1) options. 
	Since the order of domino in the pair doesn't matter, which means
```
Pair 1 : [1,2],[2,1]
Pair 2 : [2,1],[1,2]
are considered the same pair.
```
We need to divide by 2 to eliminate the duplicate.
```
import collections
class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        # step 1: count the dominoes
        d = {}
        for domi in dominoes:
            p = tuple(sorted(domi))
            if p in d:
                d[p] += 1
            else:
                d[p] = 1
        # step 2: caculate the pairs. for each pair, number of pairs = n*(n-1)//2
        c = 0
        for n in d.values():
            s = n*(n-1)//2
            c += s
        return c
```
**Complexity Analysis**
* Time complexity: O(n)
Dictionary takes O(1) to store. 
To generate the dictionary takes n*O(1) and calculate pairs takes O(n), the total time complexity is O(n), where n is the length of the input list.
* Space complexity: O(n)
At worst case (every item in the input list appeared once), the algorithm needs a dictionary which it's size equals the length of the list, where n is the length of the input list.
