# detailed explanation

**Author:** kamvis
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/5669174/](https://leetcode.com/problems/super-ugly-number/solutions/5669174/)

---

# Intuition


Initial values:
 we add 1 (the first super ugly number) to the dp list. We fill the index and uglyNums lists with size length 0 and 1.


At each step, we check for each prime number in the list of primes: If uglyNums[j] is equal to the super ugly number (ugly) we're currently using, that means the value in index[j] is already used and we need to update it. We replace uglyNums[j] with the next possible super ugly number.

Then we find the smallest uglyNums value (which will be the new super ugly number) and add it to the dp list.

Result: The loop continues until we find the nth super ugly number, and at the end we return that value.

With this approach, we can solve the problem without needing a PriorityQueue. The uglyNums list simply simulates the functionality of PriorityQueue.
# Approach
Problem Details:

n = 12 (The super ugly number we want to find).
primes = [2, 7, 13, 19] (The given prime numbers).

Initial Values:

dp = [1] (List storing the super ugly numbers).
index = [0, 0, 0, 0] (Tracks the current position in the dp list for each prime number).
uglyNums = [1, 1, 1, 1] (List storing the next possible super ugly numbers for each prime number).
ugly = 1 (The current super ugly number).


```
1st Iteration (i = 1):
For Loop:

j = 0: uglyNums[0] = dp[index[0]] * primes[0] = 1 * 2 = 2
j = 1: uglyNums[1] = dp[index[1]] * primes[1] = 1 * 7 = 7
j = 2: uglyNums[2] = dp[index[2]] * primes[2] = 1 * 13 = 13
j = 3: uglyNums[3] = dp[index[3]] * primes[3] = 1 * 19 = 19

Finding the Minimum:
ugly = min([2, 7, 13, 19]) = 2

Updating dp List:
dp = [1, 2]

Updating index:
index[0] is incremented, so index = [1, 0, 0, 0] 

dp: [1, 2]
uglyNums: [2, 7, 13, 19]
index: [1, 0, 0, 0]
ugly: 2


```
```
2nd Iteration (i = 2):
For Loop:

j = 0: uglyNums[0] = dp[index[0]] * primes[0] = 2 * 2 = 4
j = 1: uglyNums[1] = dp[index[1]] * primes[1] = 1 * 7 = 7
j = 2: uglyNums[2] = dp[index[2]] * primes[2] = 1 * 13 = 13
j = 3: uglyNums[3] = dp[index[3]] * primes[3] = 1 * 19 = 19
Finding the Minimum:
ugly = min([4, 7, 13, 19]) = 4

Updating dp List:
dp = [1, 2, 4]

Updating index:
index[0] is incremented, so index = [2, 0, 0, 0]

State:

dp: [1, 2, 4]
uglyNums: [4, 7, 13, 19]
index: [2, 0, 0, 0]
ugly: 4
```
```
3rd Iteration (i = 3):
For Loop:

j = 0: uglyNums[0] = dp[index[0]] * primes[0] = 4 * 2 = 8
j = 1: uglyNums[1] = dp[index[1]] * primes[1] = 1 * 7 = 7
j = 2: uglyNums[2] = dp[index[2]] * primes[2] = 1 * 13 = 13
j = 3: uglyNums[3] = dp[index[3]] * primes[3] = 1 * 19 = 19
Finding the Minimum:
ugly = min([8, 7, 13, 19]) = 7

Updating dp List:
dp = [1, 2, 4, 7]

Updating index:
index[1] is incremented, so index = [2, 1, 0, 0]

State:

dp: [1, 2, 4, 7]
uglyNums: [8, 7, 13, 19]
index: [2, 1, 0, 0]
ugly: 7
```
```
10th Iteration (i = 10):
For Loop:

j = 0: uglyNums[0] = dp[index[0]] * primes[0] = 16 * 2 = 32
j = 1: uglyNums[1] = dp[index[1]] * primes[1] = 7 * 7 = 49
j = 2: uglyNums[2] = dp[index[2]] * primes[2] = 4 * 13 = 52
j = 3: uglyNums[3] = dp[index[3]] * primes[3] = 2 * 19 = 38
Finding the Minimum:
ugly = min([32, 49, 52, 38]) = 32

Updating dp List:
dp = [1, 2, 4, 7, 8, 13, 14, 16, 19, 28, 32]

Updating index:
index[0] is incremented, so index = [5, 3, 1, 1]

State:

dp: [1, 2, 4, 7, 8, 13, 14, 16, 19, 28, 32]
uglyNums: [34, 49, 52, 38]
index: [5, 3, 1, 1]
ugly: 32
         
```

```
End of iteration dp = dp: [1, 2, 4, 7, 8, 13, 14, 16, 19, 28, 32]

Return dp.last;
```







# Complexity
- Time complexity:O(N*K)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(K)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart [] 
class Solution {
int nthSuperUglyNumber(int n, List<int> primes) {
    int size = primes.length;
    int ugly = 1;
    List<int> dp = [1];
    List<int> index = List<int>.filled(size , 0);
    List<int> uglyNums = List<int>.filled(size , 1);


    for(int i = 1 ; i < n ; i++){
        for(int j = 0 ; j < size ; j++){
            if(uglyNums[j] == ugly){
                uglyNums[j] = dp[index[j]] * primes[j];
                index[j]++;
            }
        }
         ugly = uglyNums.reduce((a , b ) => a < b ? a : b);
            dp.add(ugly);
    }
    return dp.last;
    
}
}
``` 
