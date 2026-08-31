# ✅[cpp || Two Solution || Greedy || O(n) TC || O(1) SC || Recursion || O(n) TC || O(n) SC]✅

**Author:** mayanksinghchouhan
**Votes:** 10
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/4174597/](https://leetcode.com/problems/integer-replacement/solutions/4174597/)

---

# Approach
- Explore all the possibilities at each level on the recursion tree, calculate all possible value of count (number of operation) for which n become 1 and then return the minimum value of count.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution {
public:
    int count = 0;

    void solution(long n, int osf) {
        if(n == 1) {
            if(count == 0 || osf < count)  count = osf;
            return;
        }

        if(n % 2 == 0) {
            solution(n / 2, osf + 1);
        } else {
            solution(n - 1, osf + 1);
            solution(n + 1, osf + 1);
        }
    }

    int integerReplacement(int n) {
        solution(n, 0);
        return count;
    }
};
```

# Intution 
At each step instead of exploring all the possibilities go for the most promising one and skip the ones the that you know will not take you to the desired output.

- If n is even we have only one option.
- If n is odd we can either do +1 or -1.
- Instead of exploring both +1 and -1 we will go for the operation that will minimize the total number of operation required to reduce n to 1.
- If odd number is of 4n + 1 nature then -1 is the best option.
- If odd number is of 4n + 3 nature then +1 is the best option.
- 3 is a unique case even though it is of 4n + 3 (0n + 3 = 3) nature -1 is the best option for it.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
public:
    int integerReplacement(long n) {
        int count = 0;
        while(n != 1) {
            if(n % 2 == 0) {
                n /= 2;
            } else if(n == 3 || (n & 3) == 1) {
                n -= 1;
            } else if((n & 3) == 3) {
                n += 1;
            }

            count++;
        }
        return count;
    }
};
```
# \u270C\uFE0FUpvote if it helps
![UPVOTE](./images/0.gif)