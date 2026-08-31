# [Hash Table + Tutorial] Count Pairs That Form a Complete Day II

**Author:** never_get_piped
**Votes:** 30
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5319811/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5319811/)

---

**Topic** :  HashTable
Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

Thus, it becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data. Hash Table uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from. (Tutorialspoint)
___

## Solution
Does the task of finding two numbers that satisfy a condition sound familiar to you? Yes, this is the first time when you open Leetcode. [Two Sum](https://leetcode.com/problems/two-sum/)

In this task, our objective is to find pairs of numbers whose sum is divisible by `24`. To find pairs of numbers whose sum is divisible by `24`, they must satisfy:
* `(num1 + num2) % 24 = 0` or
* `(24 - num1 % 24) % 24 = num2 % 24`

Deviation
```
(num1 + num2) % 24 = 0
(num1 % 24 + num2 % 24) % 24 = 0

Let x = num1 % 24 and y = num2 % 24 and 0 <= x, y < 24
(x + y) % 24 = 0
(24 - x) % 24 = y as both 0 <= x, y < 24.
```

With the approach described above, we store `hours[i] % 24` in our hashtable for fast look-up. To find an index `j` such that `(hours[j] + hours[i]) % 24 = 0` where `j < i`, we simply check how many `j` satisfy `(24 - hours[i] % 24) % 24 = hours[j] % 24`.  As `hours[j] % 24` is already stored in out hashtable, this allows us to efficiently count pairs of hours that sum to a multiple of 24.


## Code
<iframe src="https://leetcode.com/playground/DPmNUDWw/shared" frameBorder="0" width="800" height="300"></iframe>

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**