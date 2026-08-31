# ✅💯🔥Explanations No One Will Give You🎓🧠3 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 340
**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5438775/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5438775/)

---

<blockquote>
        <p>
            <b>
                It\u2019s a toxic desire to try to be perfect. I realized later in life that the challenge is not to be perfect. It\u2019s to be whole.
            </b>        
        </p>
        <p>
            --- Jane Fonda ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given intger `n` - number of people standing in circle numbered from 1 to `n` (so 1-indexed). Initially game started on player with number 1: we count from this friend `k` and k-th player from this loses and leaves the game (after leaving game continues on player right after one we removed). You want to find index of player that will win.

## \uD83D\uDCE5\u2935\uFE0F Input:
- Integer `n` - number of friends in circle
- Integer `k` - how many you count from i-th friend to eliminate next player

## \uD83D\uDCE4\u2934\uFE0F Output:
Index (1-indexed) of the player who will win the game

---

# 1\uFE0F\u20E3\uD83C\uDFC6 Approach 1: Simulation

# \uD83E\uDD14 Intuition
Pretty normal and understandable approach which first comes to anyone's mind
- We can simulate the circle with array: when we reached the last element in the array we'll go to the first element in the array 
- Since we want to find original index as elements we would use 1-indexed indeces from original circle
- You can find the index (relative in the array) of next player to lose as `(cur_ind + k - 1) % n` where `n` is the current size of array

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize a list `circle` with integers from 1 to `n` representing initiall indeces.
- Set the initial index `cur_ind` to 0.
- Begin a while loop that continues until the length of `circle` is 1 (we've found a winner):   
    - Calculate the index `next_to_remove` of the next person to be removed.
    - Remove the element at `next_to_remove` from `circle`.
    - Update `cur_ind` to `next_to_remove`.
- Return the last remaining element in `circle` (winner original index).

# \uD83D\uDCD5 Complexity Analysis
- \u23F0 Time complexity: O(n^2), since you remove `n - 1` friends from circle with `pop` operation (which is O(n)).
- \uD83E\uDDFA Space complexity: O(n), since we use additional array of size `n` - `circle` 

# \uD83D\uDCBB Code
``` python []
class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        circle: list[int] = [num for num in range(1, n + 1, 1)]
        cur_ind: int = 0

        while len(circle) != 1:
            next_to_remove: int = (cur_ind + k - 1) % len(circle)
            circle.pop(next_to_remove)
            cur_ind = next_to_remove

        return circle[0]
```
``` C++ []
class Solution {
public:
    int findTheWinner(int n, int k) {
        std::vector<int> circle;
        for (int i = 1; i <= n; ++i) {
            circle.push_back(i);
        }
        int cur_ind = 0;

        while (circle.size() > 1) {
            int next_to_remove = (cur_ind + k - 1) % circle.size();
            circle.erase(circle.begin() + next_to_remove);
            cur_ind = next_to_remove;
        }

        return circle[0];
    }
};
```
``` JavaScript []
var findTheWinner = function(n, k) {
    let circle = [];
    for (let i = 1; i <= n; ++i) {
        circle.push(i);
    }
    let cur_ind = 0;

    while (circle.length > 1) {
        let next_to_remove = (cur_ind + k - 1) % circle.length;
        circle.splice(next_to_remove, 1);
        cur_ind = next_to_remove;
    }

    return circle[0];
};
```
``` Java []
class Solution {
    public int findTheWinner(int n, int k) {
        ArrayList<Integer> circle = new ArrayList<>();
        for (int i = 1; i <= n; ++i) {
            circle.add(i);
        }
        int cur_ind = 0;

        while (circle.size() > 1) {
            int next_to_remove = (cur_ind + k - 1) % circle.size();
            circle.remove(next_to_remove);
            cur_ind = next_to_remove;
        }

        return circle.get(0);
    }
}
```
``` C []
int findTheWinner(int n, int k) {
    int* circle = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; ++i) {
        circle[i] = i + 1;
    }
    int cur_ind = 0;
    int size = n;

    while (size > 1) {
        int next_to_remove = (cur_ind + k - 1) % size;
        for (int i = next_to_remove; i < size - 1; ++i) {
            circle[i] = circle[i + 1];
        }
        size--;
        cur_ind = next_to_remove;
    }

    int winner = circle[0];
    free(circle);
    return winner;
}
```


# 2\uFE0F\u20E3\uD83E\uDD18 Approach 2: Recursion With Subproblems

# \uD83E\uDD14 Intuition
This approach in much harder to understand but if you do the most oprimized solution (next) will be easy for you
- If you have circle `[1, 2, 3, 4]` and start index now 0 (0-indexed). Let's say `k = 2`. Then, as said earlier index (0-indexed) of element we want to remove will be `(0 + 2 - 1) % 4 = 1`.
- After removing we will have `[1, 3, 4]` and start index is 1 (0-indexed). But this is circle, so we can rearange this as `[3, 4, 1]` and now say that our start index is one more time 0. Can you see how indeces was changed? Every index `ind` (from the `[1, 2, 3, 4]`) was changed to `ind - k` in this new array. Next state will be `[1, 3]` 
- After removing `3` we will have `[1]` which is our answer we want to return after returning index to normal.
- This example lead us to observation that we can divide problem on small subproblems (in fact, bottom-up DP) - if we know relative index of the winner let's say `winner(n, k)` then we can find `winner(n + 1, k)` as `(winner(n, k) + k) % (n + 1)`. So if we have `winner(1, 2) = 0` then `winner(2, 2) = (0 + 2) % 2 = 0` -> `winner(3, 2) = (0 + 2) % 3 = 2` and `winner(4, 2) = (2 + 2) % 4 = 0` which was answer we've found above (they're the same since 0 is 0-indexed and above we have 1 1-indexed). 
- Some more explanations for you competely understand why this works: 
    - As was shown every time we remove some friend we reduce our subproblem to (n - 1, k).
    - But as we move to smaller subproblem we also change every index on -k (and so result index too), so we want to add this `k` after we calculated smaller subproblem so as we haven't changed indexes at all.
    - We find modulo `n` because we don't want to exceed the size of the array (as shown above `winner(n - 1, k) + k` can be bigger or equal to `n`)

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 

- Inside the method `findTheWinner`, define a recursive function `recursion` that will compute the winner.
- Base case: If `n` (the number of people) is `1`, return `0`.
- Recursive case: Use the formula `(recursion(n - 1, k) + k) % n` to find the winner of the subproblem with `n-1` people.
- Return the result of `recursion(n, k)` adjusted by `+1` to convert from `0`-based indexing to `1`-based indexing, which matches the problem's requirements.


# \uD83D\uDCD8 Complexity Analysis
- \u23F0 Time complexity: O(n), since there's `n` function calls (recursion)
- \uD83E\uDDFA Space complexity: O(n), since there's `n` function calls (recursion)

# \uD83D\uDCBB Code
``` python []
class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        def recursion(n, k):
            if n == 1:
                return 0
            return (recursion(n - 1, k) + k) % n

        return recursion(n, k) + 1
```
``` C++ []
class Solution {
public:
    int findTheWinner(int n, int k) {
        return recursion(n, k) + 1;
    }

private:
    int recursion(int n, int k) {
        if (n == 1) {
            return 0;
        }
        return (recursion(n - 1, k) + k) % n;
    }
};
```
``` JavaScript []
class Solution {
    findTheWinner(n, k) {
        return this.recursion(n, k) + 1;
    }

    recursion(n, k) {
        if (n === 1) {
            return 0;
        }
        return (this.recursion(n - 1, k) + k) % n;
    }
}
```
``` Java []
class Solution {
    public int findTheWinner(int n, int k) {
        return recursion(n, k) + 1;
    }

    private int recursion(int n, int k) {
        if (n == 1) {
            return 0;
        }
        return (recursion(n - 1, k) + k) % n;
    }
}
```
``` C []
int recursion(int n, int k) {
    if (n == 1) {
        return 0;
    }
    return (recursion(n - 1, k) + k) % n;
}

int findTheWinner(int n, int k) {
    return recursion(n, k) + 1;
}
```

# 3\uFE0F\u20E3\uD83C\uDFC6 Approach 3: Bottom-up DP with constant space

# \uD83E\uDD14 Intuition
Intuition for this approach is the same, but now we will iteratively calculate our answers in range `[2, n]` (There's no sense to consider `num_people = 1` since this returns just 0 (base case))

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize the result variable `res` to `0`.
- Iterate through number of players from `2` to `n`. (as in recursion we're starting from bottom)
- Update the result using the formula `(res + k) % player_num`.
- Return the final result **incremented by `1`** to get the winner's position (1-indexed).

# \uD83D\uDCDA Complexity Analysis
- \u23F0 Time complexity: O(n), since we iterate through nums `[2, n]`
- \uD83E\uDDFA Space complexity: O(1), since no extra space is used

# \uD83D\uDCBB Code
``` python []
class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        res = 0
        for player_num in range(2, n + 1):
            res: int = (res + k) % player_num
        return res + 1
```
``` C++ []
class Solution {
public:
    int findTheWinner(int n, int k) {
        int res = 0;
        for (int player_num = 2; player_num <= n; ++player_num) {
            res = (res + k) % player_num;
        }
        return res + 1;
    }
};
```
``` JavaScript []
class Solution {
    findTheWinner(n, k) {
        let res = 0;
        for (let player_num = 2; player_num <= n; ++player_num) {
            res = (res + k) % player_num;
        }
        return res + 1;
    }
}
```
``` Java []
class Solution {
    public int findTheWinner(int n, int k) {
        int res = 0;
        for (int player_num = 2; player_num <= n; ++player_num) {
            res = (res + k) % player_num;
        }
        return res + 1;
    }
}
```
``` C []
int findTheWinner(int n, int k) {
    int res = 0;
    for (int player_num = 2; player_num <= n; ++player_num) {
        res = (res + k) % player_num;
    }
    return res + 1;
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
