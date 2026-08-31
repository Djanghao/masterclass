# [Python3, Java, C++] 1 liners O(length(num))

**Author:** tojuna
**Votes:** 32
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1784711/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1784711/)

---

**Brute force**:
Iterate through all the numbers from 1 to num inclusive and check if the sum of the digits of each number in that range is divisible by 2. 
<iframe src="https://leetcode.com/playground/jnt4pAME/shared" frameBorder="0" width="670" height="280"></iframe>


**Observation**:
```
Integers:             [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
Sums:                 [1, 2, 3, 4, 5, 6, 7, 8, 9,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,  2,  3,  4,  5,  6]
Sum is Even? :        [0, 1, 0, 1, 0, 1, 0, 1, 0,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  1,  0,  1,  0,  1]
Count(Even sums):     [0, 1, 1, 2, 2, 3, 3, 4, 4,  4,  5,  5,  6,  6,  7,  7,  8,  8,  9, 10, 10, 11, 11, 12]  
```
For a `num` with even sum of its digits, count of Integers With Even Digit Sum less than or equal to `num` is `num`/2
For a `num` with odd sum of its digits, count of Integers With Even Digit Sum less than or equal to `num` is (`num`-1)/2

**Optimized solution:**
<iframe src="https://leetcode.com/playground/RdZeyXuk/shared" frameBorder="0" width="830" height="190"></iframe>
