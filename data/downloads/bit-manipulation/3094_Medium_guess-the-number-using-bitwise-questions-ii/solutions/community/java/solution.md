# Java Bit Trick Beats 100% + Explanation + Comments

**Author:** _velasoka
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4936810/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4936810/)

---

**Intuition:** Don't get exhausted by seeing XOR operation in the problem statement.
**Hint:** `N XOR 0 == N`

**Approach:** Repeat the following 2 steps 30 time
1. Check how many zeros are there in `N`
2. for each `1<<i` check how many common bits are there, if number of common bits are greater than step 1, then current bit is set in `N` (add `1<<i` into answer)


```
assume 4 bit representation of N
zerosCount = how many zeros in N? = `commonBits(0)`
 
`mask = 1<<i` if current Bit is set in N,
commonBits(mask) returns `zerosCount+1`

(eg.1) N = 5, binary = 0101
zerosCount = commonBits(0); //2
5=> 0101
0=> 0000 
common bits are 0th index, 2nd index

Now i = 0, mask = 1<<0 which is 0001
now compare how many common bits 
5=>0101
1=>0001
common bits are 0th index, 2nd index, 3rd index

if zerosCount+1==commonBits(mask) == TRUE, then current bit is set
--------------------------------------------

(eg.2) N = 4, binary = 0100
zerosCount = commonBits(0); //3
4=> 0100
0=> 0000 
common bits are 0th index, 2nd index, 3rd index

Now i = 0, mask = 1<<0 which is 0001
now compare how many common bits 
4=>0100
1=>0001
common bits are 0th index, 2nd index

if zerosCount<commonBits(mask) == FALSE, then current bit is set
```


**Time & Space complexity:** O(1)
```
/** 
 * Definition of commonBits API (defined in the parent class Problem).
 * int commonBits(int num);
 */

public class Solution extends Problem {
    public int findNumber() {
        int answer = 0;
        for(int i = 0;i<=30; i++) {
            int mask = 1<<i;
            int zeroBits = commonBits(0);
            if(zeroBits<commonBits(mask)) {
                answer|=mask;
            }
        }
        return answer;
    }
}
```
Please **UPVOTE**, if you find the solution helpful