# JS, C++, Java | O(log n) Time Solution w/ Mathematical Shortcut & Visual Example

**Author:** sgallivan
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/5372315/](https://leetcode.com/problems/count-largest-group/solutions/5372315/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Every other solution I've seen for this problem features a brute force approach in **`O(n log n)`** time. But we can do better; we just have to think of it like it's a **dynamic programming** problem.

The first intuitive move is to realize that if we can count the frequency of the sums for values of **`n`** from **`0-9`**, then those will be the same frequencies for **`10-19`**, just shifted one to the side because of the added **`1`**:

```js
                           sum:
frequency:    0  1  2  3  4  5  6  7  8  9 10
---------------------------------------------------
      0-9:    1  1  1  1  1  1  1  1  1  1
    10-19:       1  1  1  1  1  1  1  1  1  1
```
The same obviously holds true for values of **`n`** from **`0-99`**:
```js
                                       sum:
frequency:    0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18
---------------------------------------------------------------------
      0-9:    1  1  1  1  1  1  1  1  1  1
    10-19:       1  1  1  1  1  1  1  1  1  1
    20-29:          1  1  1  1  1  1  1  1  1  1
    30-39:             1  1  1  1  1  1  1  1  1  1
    40-49:                1  1  1  1  1  1  1  1  1  1
    50-59:                   1  1  1  1  1  1  1  1  1  1
    60-69:                      1  1  1  1  1  1  1  1  1  1
    70-79:                         1  1  1  1  1  1  1  1  1  1
    80-89:                            1  1  1  1  1  1  1  1  1  1
    90-99:                               1  1  1  1  1  1  1  1  1  1
---------------------------------------------------------------------
     0-99:    1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
```
This becomes a shortcut to calculate the frequency of sums for a larger group of numbers, and this intuition holds true for the other powers of **`10`**, as well:
```js
                                                    sum:
frequency:    0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36
---------------------------------------------------------------------------------------------------------------------------
        0:    1
---------------
        0:    1
        1:       1
        2:          1
        3:             1
        4:                1
        5:                   1
        6:                      1
        7:                         1
        8:                            1
        9:                               1
------------------------------------------
      0-9:    1  1  1  1  1  1  1  1  1  1
    10-19:       1  1  1  1  1  1  1  1  1  1
    20-29:          1  1  1  1  1  1  1  1  1  1
    30-39:             1  1  1  1  1  1  1  1  1  1
    40-49:                1  1  1  1  1  1  1  1  1  1
    50-59:                   1  1  1  1  1  1  1  1  1  1
    60-69:                      1  1  1  1  1  1  1  1  1  1
    70-79:                         1  1  1  1  1  1  1  1  1  1
    80-89:                            1  1  1  1  1  1  1  1  1  1
    90-99:                               1  1  1  1  1  1  1  1  1  1
---------------------------------------------------------------------
     0-99:    1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  100-199:       1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  200-299:          1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  300-399:             1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  400-499:                1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  500-599:                   1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  600-699:                      1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  700-799:                         1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  800-899:                            1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
  900-999:                               1  2  3  4  5  6  7  8  9 10  9  8  7  6  5  4  3  2  1
------------------------------------------------------------------------------------------------
    0-999:    1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
1000-1999:       1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
2000-2999:          1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
3000-3999:             1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
4000-4999:                1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
5000-5999:                   1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
6000-6999:                      1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
7000-7999:                         1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
8000-8999:                            1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
9000-9999:                               1  3  6 10 15 21 28 36 45 55 63 69 73 75 75 73 69 63 55 45 36 28 21 15 10  6  3  1
---------------------------------------------------------------------------------------------------------------------------
   0-9999:    1    10    35    84   165   282   415   540   633   670   633   540   415   282   165    84    35    10     1
                 4    20    56   120   220   348   480   592   660   660   592   480   348   220   120    56    20     4
```
(_**Note:** If these numbers look familiar, it's because they're orders of [**simplex numbers from Pascal's Triangle**](https://en.wikipedia.org/wiki/Pascal%27s_triangle#Diagonals). We're building them the same way, by iteratively adding the previous value to the current number._)

We can start from **`0`** and build a reference table of frequency values for each power of **`10`** in order to efficiently find the solution to the problem. If we have **`n = 8342`**, for example, we can quickly figure out the frequencies for values from **`0-7999`** by doing a partial build of the reference table for the fourth power of **`10`** in only **`O(35)`**. We can even store the precalculated values for this reference table globally in order to speed up later function calls.

We can even save some space on the reference tables due to the fact that the resulting arrays are symmetrical, though this does make the later calculations more of a headache. When fully built, the reference table will look like this:
```js
[
  [1],                                     // power 0, used to build power 1 (0-9) frequencies
  [1,1,1,1,1],                             // power 1, used to build power 2 (0-99) frequencies
  [1,2,3,4,5,6,7,8,9,10],                  // power 2, used to build power 3 (0-999) frequencies
  [1,3,6,10,15,21,28,36,45,55,63,69,73,75] // power 3, used to build power 4 (0-9999) frequencies
]

```
(_**Note:** Since each previous power's row is used to build the next power, there's no need to store the row representing **`0-9999`**._)

It's important to remember that when we deal with the a digit, its results need to be shifted to account for "prefix" of the other digits. In the case of the earlier example (**`n = 8342`**), we can quickly calculate the results of **`0-7999`**, but when we calculate the results of **`0-299`** for the next digit, those results will be shifted by **`8`** because they actually represent **`8000-8299`**. The **`0-39`** will then be shifted by **`11`** to represent **`8300-8339`**, and so forth.

In order to process this as efficiently as possible, we can create an array of the digits of **`n`** and iterate through them in increasing power order. This gives us a chance to build out the next row of our reference table, if necessary, before calculating the resulting increases to our solution frequency counts. That means we should start with a prefix sum of the digits and subtract each digit as we process through.

Even in the worst case, when **`n = 1e4`**, this solution only runs through the inner **`for`** loop a total of **`91`** times.

 - _**Time Complexity: `O(log n)`**_
 - _**Space Complexity: `O(log n)`** for the reference and solution arrays_

---

(_**Note 1:** I've simplified the original JavaScript code a bit to make it easier to read. Most importantly, I've restored the reference tables to their full length, as the code to deal with the mirrored iteration was fairly confusing._)

(_**Note 2:** I've added C++ and Java translations, as well._)

---

#### ***Javascript Code (Simplified):***

```javascript
const ref = [[1], new Uint8Array(10), new Uint8Array(19), new Uint8Array(28)]

var countLargestGroup = function(n) {                                           // Increment 1s digit since we're later
    let digits = [1,0,0,0], power = 0, psum = 0, counts = new Uint16Array(37)   //   treating each digit as 1 less
    for (let num = Math.min(n, 9999); num; num = ~~(num / 10))                  //   to simulate undoing carrying the 1,
        psum += digits[power++] += num % 10                                     //   then calculate prefix sum for later
    for (let d = 0; d < digits.length; d++) {                                   //   shifts, & treat 10000 like 9999
        let digit = digits[d], prev = ref[d], curr = ref[d + 1],                //   since they have the same answer
            currSize = !curr || curr.at(-1) ? 0 : curr.length,
            limit = Math.max(d * 9 + digit, currSize)                           // Limit iteration if table row is built
        psum -= digit                                                           // Update the prefix sum
        for (let i = 0, val = 0; i < limit; i++) {
            counts[psum + i] += val += ~~prev[i] - ~~prev[i - digit]            // Update val & add it to the sum count
            if (currSize)                                                       // Build up current reference table
                curr[i] = ~~curr[i - 1] + ~~prev[i] - ~~prev[i - 10]            //   row if it's unfinished
        }
    }
    counts[0] = 0                                                               // Don't include n = 0 now that we're
    let max = Math.max(...counts)                                               //   done calculating, then iterate
    return counts.filter(x => x === max).length                                 //   through counts and find the answer
};
```

---

#### ***C++ Code (Simplified):***

```cpp
class Solution {
public:
    vector<vector<int>> ref = {{1}, vector<int>(10), vector<int>(19), vector<int>(28)};
    
    int countLargestGroup(int n) {
        int digits[4] = {1}, counts[37] = {}, power = 0, psum = 0;
        for (int num = min(n, 9999); num; num /= 10)
            psum += digits[power++] += num % 10;
        for (int d = 0; d < power; d++) {
            int digit = digits[d], prevSize = ref[d].size();
            int currSize = d > 2 || ref[d + 1].back() ? 0 : ref[d + 1].size();
            int limit = max(d * 9 + digit, currSize);
            psum -= digit;
            for (int i = 0, val = 0; i < limit; i++) {
                val += (i < prevSize ? ref[d][i] : 0)
                     - (i >= digit && i - digit < prevSize ? ref[d][i - digit] : 0);
                counts[psum + i] += val;
                if (currSize)
                    ref[d + 1][i] = (i > 0 && i - 1 < currSize ? ref[d + 1][i - 1] : 0)
                            + (i < prevSize ? ref[d][i] : 0)
                            - (i >= 10 && i - 10 < prevSize ? ref[d][i - 10] : 0);
            }
        }
        counts[0] = 0;
        return count(counts, counts + 37, *max_element(counts, counts + 37));
    }
};
```

---

#### ***Java Code (Simplified):***

```java
class Solution {
    int[][] ref = { {1}, new int[10], new int[19], new int[28] };
    
    public int countLargestGroup(int n) {
        int[] digits = {1,0,0,0}, counts = new int[37];
        int power = 0, psum = 0;
        for (int num = Math.min(n, 9999); num > 0; num /= 10)
            psum += digits[power++] += num % 10;
        for (int d = 0; d < power; d++) {
            int digit = digits[d], prevSize = ref[d].length;
            int currSize = d > 2 || ref[d + 1][ref[d + 1].length - 1] > 0 ? 0 : ref[d + 1].length;
            int limit = Math.max(d * 9 + digit, currSize);
            psum -= digit;
            for (int i = 0, val = 0; i < limit; i++) {
                val += (i < prevSize ? ref[d][i] : 0)
                     - (i >= digit && i - digit < prevSize ? ref[d][i - digit] : 0);
                counts[psum + i] += val;
                if (currSize > 0)
                    ref[d + 1][i] = (i > 0 && i - 1 < currSize ? ref[d + 1][i - 1] : 0)
                            + (i < prevSize ? ref[d][i] : 0)
                            - (i >= 10 && i - 10 < prevSize ? ref[d][i - 10] : 0);
            }
        }
        counts[0] = 0;
        int count = 0, max = 0;
        for (int x : counts)
            if (x > max) {
                max = x;
                count = 1;
            } else if (x == max)
                count++;
        return count;
    }
}
```

---

#### ***Javascript Code (Original, w/ shortened table):***

```javascript
const ref = [[1]]

var countLargestGroup = function(n) {
    let digits = [], psum = 0
    // 9999 has the same answer as 10000, so just ignore the extra 1
    for (let x = Math.min(n, 9999); x; x = ~~(x / 10))
        digits.push(x % 10), psum += x % 10
    // Increment ones digit and psum since we'll be treating
    // each digit as one less due to carrying over the remainder
    digits[0]++, psum++
    let power = digits.length, m = (power - 1) * 9 + digits.at(-1) + 1,
        counts = new Uint16Array(m)
    for (let d = 0; d < power; d++) {
        let digit = digits[d], curr, cLen = 0,
            prev = ref[d], pLen = prev.length
        // If we haven't built this level of the reference array,
        // make it ready to receive data
        if (ref.length === d + 1 && d < 3) {
            cLen = 1 + ~~(ref.length * 9 / 2)
            ref.push(curr = new Uint16Array(cLen))
        }
        let len = d * 9 + digit, limit = Math.max(cLen, len), val = 0
        psum -= digit
        for (let i = 0, j = 2 * pLen - 2 + (d & 1); i < limit; i++, j--) {
            // Account for symmetrically mirroring the reference table
            let pVal = ~~prev[i < pLen ? i : j]
            // Update our counts if necessary
            if (i < len) {
                val += pVal - ~~prev[i - digit < pLen ? i - digit : j + digit]
                counts[psum + i] += val
            }
            // Update the reference table, if we're building a new one
            if (i < cLen)
                curr[i] = ~~curr[i - 1] + pVal - ~~prev[i - 10]
        }
    }
    // Now that we're done calculating, don't count n = 0
    counts[0] = 0
    // Iterate through counts and find the answer
    let max = 0, count = 0
    for (let x of counts)
        if (x === max)
            count++
        else if (x > max)
            max = x, count = 1
    return count
};
```

---