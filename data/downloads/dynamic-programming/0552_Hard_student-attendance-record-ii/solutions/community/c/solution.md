# ✅Detailed Explanation🔥2 Approaches🔥🔥Extremely Simple and effective🔥🔥🔥 Beginner-friendly🔥

**Author:** heir-of-god
**Votes:** 82
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/5209610/](https://leetcode.com/problems/student-attendance-record-ii/solutions/5209610/)

---

# \uD83C\uDFAFProblem Explanation:
You are given an integer ```n``` and want to return number of string of length ```n``` which satisfy this conditions:
1. n[i] is either "P" or "L" or "A"
2. There isn't any 3 consecutive "P"
3. String contains 0 or 1 "A"
 
# \uD83D\uDCE5Input:
- Integer ```n``` which represents the length of the string

# \uD83D\uDCE4Output:
Number of strings we can make which satisfy conditions.

# \uD83E\uDDE0 Approach 1: Recursion with memoization

# \uD83E\uDD14 Intuition
Okay, so first thing that come up in my mind is just recursion and this approach is quite simple.
- We will start from the empty string and each time we will choose which character to add.
- We don't want to pass the string into the function because all we interested in is just how many consecutive "L" we have so far and how many "A" already in the string.
- We want to call recursion with this rules
    - If we reached the end of the string we want to return result (this string is eligable because of steps I describe below)
    - On every recursion we will call recursion with every of three characters but only if this string will be eligable after we add this new character **(So, if there's already 1 "A" we can't add another of if there's already 2 consecutive "L" we can't add another)**
    - We will find the sum of all callings and return it
- This is sufficient to write code for this approach but there's some interesting things I want to mention:
    1. Recursion without memoization will give TLE because we recalculate many states wich we've seen already. As was said every state is defined only by 3 parameters: cur_ind, count_a, count_l 
    2. I have no idea why but ```temp[cur_ind][count_a][count_l]``` is much faster than ```temp[cur_ind][count_l][count_a]```.
    3. If you don't take the mod on this step: ```total: int = (with_a_next + with_l_next + with_p_next) % MOD``` you will get MLE error.

# \uD83D\uDCBB Coding 
Let's code this up and move to the next approach
- Define variables ```temp``` for memoization and ```MOD=10**9 + 7```. 
- Define recursive function with this rules:
    - If we've reached the end of the string then return 1 (we've found new eligable string)
    - If another case check whether we've already seen this state. If ```True``` then just return it and if ```False``` calculate with recursion every possible state from this, sum them up, write in memoization and return result
- From every ```total``` we want to get modulo by ```MOD``` and only then memo result. 

# \uD83D\uDCD2 Complexity
- \u23F0 Time complexity: O(n), due to memoization we will have only 2 * 3 * n unique states which is O(n)
- \uD83E\uDDFA Space complexity: O(n) we use O(n) for recursion stack and O(2 * 3 * n) for memoization so O(7n) in total or just O(n)

# \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def checkRecord(self, n: int) -> int:
        temp: list[list[list[int]]] = [
            [[-1 for _ in range(3)] for _ in range(2)] for _ in range(n)
        ]  # temp[cur_ind][count_a][count_l]
        MOD: int = 10**9 + 7

        def check_all_records(cur_ind, count_a, count_l) -> int:
            if cur_ind == n:
                return 1
            if temp[cur_ind][count_a][count_l] != -1:
                return temp[cur_ind][count_a][count_l]
            with_a_next: int = check_all_records(cur_ind + 1, count_a + 1, 0) if count_a == 0 else 0
            with_l_next: int = 0 if count_l == 2 else check_all_records(cur_ind + 1, count_a, count_l + 1)
            with_p_next: int = check_all_records(cur_ind + 1, count_a, 0)
            total: int = (with_a_next + with_l_next + with_p_next) % MOD

            temp[cur_ind][count_a][count_l] = total
            return total

        return check_all_records(0, 0, 0)
```
``` C++ []
class Solution {
public:
    static const int MOD = 1000000007;

    int check_all_records(int cur_ind, int count_a, int count_l, int n, vector<vector<vector<int>>>& temp) {
        if (cur_ind == n) {
            return 1;
        }
        if (temp[cur_ind][count_a][count_l] != -1) {
            return temp[cur_ind][count_a][count_l];
        }
        int with_a_next = (count_a == 0) ? check_all_records(cur_ind + 1, count_a + 1, 0, n, temp) : 0;
        int with_l_next = (count_l == 2) ? 0 : check_all_records(cur_ind + 1, count_a, count_l + 1, n, temp);
        int with_p_next = check_all_records(cur_ind + 1, count_a, 0, n, temp);
        int total = ((with_a_next + with_l_next) % MOD + with_p_next) % MOD;

        temp[cur_ind][count_a][count_l] = total;
        return total;
    }

    int checkRecord(int n) {
        vector<vector<vector<int>>> temp(n, vector<vector<int>>(2, vector<int>(3, -1)));
        return check_all_records(0, 0, 0, n, temp);
    }
};
```
``` JavaScript []
var checkRecord = function(n) {
    const MOD = 1000000007;

    // Initialize the memoization array
    let temp = new Array(n).fill(0).map(() => 
        new Array(2).fill(0).map(() => 
            new Array(3).fill(-1)
        )
    );

    const check_all_records = (cur_ind, count_a, count_l) => {
        if (cur_ind === n) {
            return 1;
        }
        if (temp[cur_ind][count_a][count_l] !== -1) {
            return temp[cur_ind][count_a][count_l];
        }
        let with_a_next = (count_a === 0) ? check_all_records(cur_ind + 1, count_a + 1, 0) : 0;
        let with_l_next = (count_l === 2) ? 0 : check_all_records(cur_ind + 1, count_a, count_l + 1);
        let with_p_next = check_all_records(cur_ind + 1, count_a, 0);
        let total = ((with_a_next + with_l_next) % MOD + with_p_next) % MOD;

        temp[cur_ind][count_a][count_l] = total;
        return total;
    };

    return check_all_records(0, 0, 0);
};
```
``` Java []
class Solution {
    private static final int MOD = 1000000007;

    private int check_all_records(int cur_ind, int count_a, int count_l, int n, int[][][] temp) {
        if (cur_ind == n) {
            return 1;
        }
        if (temp[cur_ind][count_a][count_l] != -1) {
            return temp[cur_ind][count_a][count_l];
        }
        int with_a_next = (count_a == 0) ? check_all_records(cur_ind + 1, count_a + 1, 0, n, temp) : 0;
        int with_l_next = (count_l == 2) ? 0 : check_all_records(cur_ind + 1, count_a, count_l + 1, n, temp);
        int with_p_next = check_all_records(cur_ind + 1, count_a, 0, n, temp);
        int total = ((with_a_next + with_l_next) % MOD + with_p_next) % MOD;

        temp[cur_ind][count_a][count_l] = total;
        return total;
    }

    public int checkRecord(int n) {
        int[][][] temp = new int[n][2][3];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 3; k++) {
                    temp[i][j][k] = -1;
                }
            }
        }
        return check_all_records(0, 0, 0, n, temp);
    }
}
```
``` C []
#define MOD 1000000007

int check_all_records(int cur_ind, int count_a, int count_l, int n, int temp[n][2][3]) {
    if (cur_ind == n) {
        return 1;
    }
    if (temp[cur_ind][count_a][count_l] != -1) {
        return temp[cur_ind][count_a][count_l];
    }
    int with_a_next = 0;
    if (count_a == 0) {
        with_a_next = check_all_records(cur_ind + 1, count_a + 1, 0, n, temp);
    }
    int with_l_next = 0;
    if (count_l < 2) {
        with_l_next = check_all_records(cur_ind + 1, count_a, count_l + 1, n, temp);
    }
    int with_p_next = check_all_records(cur_ind + 1, count_a, 0, n, temp);

    int total = ((with_a_next + with_l_next) % MOD + with_p_next) % MOD;
    temp[cur_ind][count_a][count_l] = total;
    return total;
}

int checkRecord(int n) {
    int temp[n][2][3];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 3; k++) {
                temp[i][j][k] = -1;
            }
        }
    }
    return check_all_records(0, 0, 0, n, temp);
}
```

# \uD83E\uDDE0 Approach 2: Space-optimized DP

# \uD83E\uDD14 Intuition
After my recursive solution was accepted I thinked about whether there's more optimized approach and here is is - Dynamic Programming (DP)
- As was said every state is defined only by ```count_a```, ```count_l``` and ```cur_ind```.
- But what we can see that for ```cur_ind``` we always check in memo for ```cur_ind - 1``` so on step when we calculated all states for ```cur_ind=3``` we don't care about others ```cur_ind``` which are lower.
- So let's say we have step with ```cur_ind=n``` how we will calculate states for it knowing all states for ```cur_ind=n-1```?
    - We want to iterate trough every legal combination from ```cur_ind=n-1``` of ```count_a``` and ```count_l``` so (0, 0), (0, 1), (0, 2) and (1, 0), (1, 1), (1, 2) and for every this state we want to try to add "A", "P" and "L" if this possible and add this result to the state with ```cur_ind=n```
    - On every adding we want to add modulo by ```MOD``` to avoid MLE (described above)
    - On every iteration we copy current state to previous and reset it 
- After we calculated dp ```n``` times our result is stored in ```dp_last``` so we just need to sum up every possible state and return the result


# \uD83D\uDCBB Coding 
We can use some piece of code from the recursive solution so this will be fast
- Initialize 2d ```dp_last``` with size 2x3 and 2d ```dp_current``` with size 2x3.
- initialize base case (empty string which contain 0 "A" and 0 "L")
- Write loops as described above
    - Always add to the result adding "P" (we always can add it)
    - Add "A" only if previous state have 0 "A"
    - Add "L" only if previous state have 0 or 1 consecutive "L"
- Sum up eligable strings from states and return result

# \uD83D\uDCD2 Complexity
- \u23F0 Time complexity: O(n), due to the fact that we have 2 * 3 * n iterations.
- \uD83E\uDDFA Space complexity: O(1) since we have only two arrays of constant size 2x3

# \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def checkRecord(self, n: int) -> int:
        MOD = 1000000007

        dp_last: list[list[int]] = [[0 for _ in range(3)] for _ in range(2)]  # previous state
        dp_current: list[list[int]] = [[0 for _ in range(3)] for _ in range(2)]  # current state

        dp_last[0][0] = 1  # empty string

        for _ in range(n):
            for count_a in range(2):
                for count_l in range(3):
                    # choose "P"
                    dp_current[count_a][0] = (dp_current[count_a][0] + dp_last[count_a][count_l]) % MOD
                    # choose "A"
                    if count_a == 0:
                        dp_current[count_a + 1][0] = (dp_current[count_a + 1][0] + dp_last[count_a][count_l]) % MOD
                    # Choose "L"
                    if count_l < 2:
                        dp_current[count_a][count_l + 1] = (
                            dp_current[count_a][count_l + 1] + dp_last[count_a][count_l]
                        ) % MOD

            dp_last = dp_current  # Reference current to previous
            dp_current = [[0 for _ in range(3)] for _ in range(2)]  # make new current

        # Sum up the counts for all combinations of length 'n' with different count_a and count_l.
        res: int = sum(dp_last[count_a][count_l] for count_a in range(2) for count_l in range(3)) % MOD
        return res
```
``` C++ []
class Solution {
public:
    int checkRecord(int n) {
        const int MOD = 1000000007;
        vector<vector<int>> dp_last(2, vector<int>(3, 0)); // previous state
        vector<vector<int>> dp_current(2, vector<int>(3, 0)); // current state

        dp_last[0][0] = 1; // empty string

        for (int i = 0; i < n; i++) {
            for (int count_a = 0; count_a < 2; count_a++) {
                for (int count_l = 0; count_l < 3; count_l++) {
                    // choose "P"
                    dp_current[count_a][0] = (dp_current[count_a][0] + dp_last[count_a][count_l]) % MOD;
                    // choose "A"
                    if (count_a == 0) {
                        dp_current[count_a + 1][0] = (dp_current[count_a + 1][0] + dp_last[count_a][count_l]) % MOD;
                    }
                    // Choose "L"
                    if (count_l < 2) {
                        dp_current[count_a][count_l + 1] = (dp_current[count_a][count_l + 1] + dp_last[count_a][count_l]) % MOD;
                    }
                }
            }
            dp_last = dp_current; // Reference current to previous
            dp_current = vector<vector<int>>(2, vector<int>(3, 0)); // make new current
        }

        // Sum up the counts for all combinations of length 'n' with different count_a and count_l.
        int res = 0;
        for (int count_a = 0; count_a < 2; count_a++) {
            for (int count_l = 0; count_l < 3; count_l++) {
                res = (res + dp_last[count_a][count_l]) % MOD;
            }
        }
        return res;
    }
};
```
``` JavaScript []
var checkRecord = function(n) {
    const MOD = 1000000007;

    // Initialize dp arrays
    let dp_last = Array.from({ length: 2 }, () => Array(3).fill(0)); // previous state
    let dp_current = Array.from({ length: 2 }, () => Array(3).fill(0)); // current state

    dp_last[0][0] = 1; // empty string

    for (let i = 0; i < n; i++) {
        for (let count_a = 0; count_a < 2; count_a++) {
            for (let count_l = 0; count_l < 3; count_l++) {
                // choose "P"
                dp_current[count_a][0] = (dp_current[count_a][0] + dp_last[count_a][count_l]) % MOD;
                // choose "A"
                if (count_a === 0) {
                    dp_current[count_a + 1][0] = (dp_current[count_a + 1][0] + dp_last[count_a][count_l]) % MOD;
                }
                // Choose "L"
                if (count_l < 2) {
                    dp_current[count_a][count_l + 1] = (dp_current[count_a][count_l + 1] + dp_last[count_a][count_l]) % MOD;
                }
            }
        }
        dp_last = dp_current; // Reference current to previous
        dp_current = Array.from({ length: 2 }, () => Array(3).fill(0)); // make new current
    }

    // Sum up the counts for all combinations of length 'n' with different count_a and count_l.
    let res = 0;
    for (let count_a = 0; count_a < 2; count_a++) {
        for (let count_l = 0; count_l < 3; count_l++) {
            res = (res + dp_last[count_a][count_l]) % MOD;
        }
    }
    return res;
};
```
``` Java []
class Solution {
    private static final int MOD = 1000000007;

    public int checkRecord(int n) {
        // Initialize dp arrays
        int[][] dp_last = new int[2][3]; // previous state
        int[][] dp_current = new int[2][3]; // current state

        dp_last[0][0] = 1; // empty string

        for (int i = 0; i < n; i++) {
            for (int count_a = 0; count_a < 2; count_a++) {
                for (int count_l = 0; count_l < 3; count_l++) {
                    // choose "P"
                    dp_current[count_a][0] = (dp_current[count_a][0] + dp_last[count_a][count_l]) % MOD;
                    // choose "A"
                    if (count_a == 0) {
                        dp_current[count_a + 1][0] = (dp_current[count_a + 1][0] + dp_last[count_a][count_l]) % MOD;
                    }
                    // Choose "L"
                    if (count_l < 2) {
                        dp_current[count_a][count_l + 1] = (dp_current[count_a][count_l + 1] + dp_last[count_a][count_l]) % MOD;
                    }
                }
            }
            dp_last = dp_current; // Reference current to previous
            dp_current = new int[2][3]; // make new current
        }

        // Sum up the counts for all combinations of length 'n' with different count_a and count_l.
        int res = 0;
        for (int count_a = 0; count_a < 2; count_a++) {
            for (int count_l = 0; count_l < 3; count_l++) {
                res = (res + dp_last[count_a][count_l]) % MOD;
            }
        }
        return res;
    }
}
```
``` C []
#define MOD 1000000007

int checkRecord(int n) {
    // Initialize dp arrays
    int dp_last[2][3] = {0};
    int dp_current[2][3] = {0};

    dp_last[0][0] = 1; // empty string

    for (int i = 0; i < n; i++) {
        for (int count_a = 0; count_a < 2; count_a++) {
            for (int count_l = 0; count_l < 3; count_l++) {
                // choose "P"
                dp_current[count_a][0] = (dp_current[count_a][0] + dp_last[count_a][count_l]) % MOD;
                // choose "A"
                if (count_a == 0) {
                    dp_current[count_a + 1][0] = (dp_current[count_a + 1][0] + dp_last[count_a][count_l]) % MOD;
                }
                // Choose "L"
                if (count_l < 2) {
                    dp_current[count_a][count_l + 1] = (dp_current[count_a][count_l + 1] + dp_last[count_a][count_l]) % MOD;
                }
            }
        }
        // Reference current to previous
        for (int a = 0; a < 2; a++) {
            for (int l = 0; l < 3; l++) {
                dp_last[a][l] = dp_current[a][l];
                dp_current[a][l] = 0; // make new current
            }
        }
    }

    // Sum up the counts for all combinations of length 'n' with different count_a and count_l.
    int res = 0;
    for (int count_a = 0; count_a < 2; count_a++) {
        for (int count_l = 0; count_l < 3; count_l++) {
            res = (res + dp_last[count_a][count_l]) % MOD;
        }
    }
    return res;
}
```

## \uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning! \uD83D\uDCDA

### Please consider *upvote* because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
