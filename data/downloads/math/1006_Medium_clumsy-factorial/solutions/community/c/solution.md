# Cpp Solution O(1) Time Complexity and O(1) Space Complexity

**Author:** Indominous1
**Votes:** 9
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/2818008/](https://leetcode.com/problems/clumsy-factorial/solutions/2818008/)

---

# Approach
As defined in the Description that
> Clumsy factorial of 10=12, and that of 4=7

Let's take some cases to solve the problem according to the given description.....

**If n%4==0**
Ex- n=8 => (8*7)/6 +5 - (4*3)/2 + 1 = 9 [n+1]
Ex- n=12 => (12*11)/10 + 9 -(8*7)/6 + 5 - (4*3)/2 + 1 = 13 [n+1]

**If n%4==1**
Ex- n=9 => (9*8)/7 + 6 - (5 *4)/3 + 2 - 1 = 11 [n+2]
Ex- n=13 => (13*12)/11 + 10 - (9*8)/7 + 6 - (5 *4)/3 + 2 - 1 = 15 [n+2]

**If n%4==2**
Ex- n=10 => (10*9)/8 + 7 - (6*5)/4 + 3 - (2*1) = 12 [n+2]
Ex- n=14 => (14*13)/12 + 11 - (10*9)/8 + 7 - (6*5)/4 + 3 - (2*1) = 16 [n+2]

**If n%4==3**
Ex- n=11 => (11*10)/9 + 8 - (7*6)/5 + 4 - (3*2)/1 = 10 [n-1]
Ex- n=15 => (15*14)/13 + 12 - (11*10)/9 + 8 - (7*6)/5 + 4 - (3*2)/1 = 14 [n-1]

We can clearly see the pattern of answer how it is interdependent on the input N

# Complexity
- Time complexity: O(1),100% better than online Cpp Submissions

- Space complexity: O(1),78.50% better than online Cpp Submissions

# Code
```
class Solution {
public:
    int clumsy(int N) {
    if (N == 1) return 1;
	if (N == 2) return 2;
	if (N == 3) return 6;
	if (N == 4) return 7;
	if (N % 4 == 1) return N + 2;
	if (N % 4 == 2) return N + 2;
	if (N % 4 == 3) return N - 1;
	return N + 1;
    }
};
```
~~~
Please 'Upvote' if you like the explanation 

