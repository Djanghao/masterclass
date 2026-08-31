# [Time - O(1), Space - O(1)] Simple 1 line solution with explanation

**Author:** DmitriiSer
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1783382/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1783382/)

---

If you add more examples to the ones in the description, you may start to see a pattern.

*num = 0  ->  []
num = 1  ->  []
num = 2  ->  []
num = 3  ->  [0,1,2]
num = 4  ->  []
num = 5  ->  []
num = 6  ->  [1,2,3]
num = 7  ->  []
num = 8  ->  []
num = 9  ->  [2,3,4]
...
num = 33->  [10,11,12]
...
num = 99-> [32,33,34]*

Based on the above, it looks like the result is not empty only in cases where the num is divisible by 3. Also, if you look at the results, you can notice that the middle number is always a result of division by **3**.  *33 / 3 = 11, 99 / 3 = 33, etc.*

Therefore, we can utilize math to come up with the solution:
**Javascript:**
```Javascript
var sumOfThree = function(num) {
    return (num % 3 === 0) ? [num / 3 - 1, num / 3, num / 3 + 1] : [];
};
```