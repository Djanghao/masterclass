# ✅💯🔥Explanations No One Will Give You🎓🧠2 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 135
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/5451537/](https://leetcode.com/problems/crawler-log-folder/solutions/5451537/)

---

<blockquote>
        <p>
            <b>
                Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.
            </b>        
        </p>
        <p>
            --- Ella Fitzgerald ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given a list of strings `logs` where:
    1. `../` represents go to the parent folder if it exists
    2. `./` represents stay in this folder (just trash, forget about this)
    3. `x/` represents go to child directory `x` which is always exists
You want to perform every of this logs and return minimum (actually, doesn't matter, just don't go back and forth) number of steps to return to main (start) folder.

## \uD83D\uDCE5\u2935\uFE0F Input:
- String array `logs`

## \uD83D\uDCE4\u2934\uFE0F Output:
Number of steps to return to main folder

---

# 1\uFE0F\u20E3\u2728 Approach 1: Real Simulation With Path Saving

# \uD83E\uDD14 Intuition
There's no need in this approach if you solve specifically this problem, but what if you were asked to return actual path where user stopped? 
- We start in main folder, so initially our path stack is empty. We want to use stack because as soon as we find `../` we want to pop the last path we added to this stack
- We iterate through logs and every time we face `../` we pop last element from stack (only if it's not empty, which tell us that we are already in main)
- Every time we face not `../` and not `./` we add log to the stack as new path element.
- At the end we want to return len of the stack because it's number of steps we need to return to main (pop every element from path with `../`)

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize an empty list `paths_stack` to keep track of the current directory path.
- Iterate through each log entry in the `logs` list:
    - If the log is `../`, check if `paths_stack` is not empty and pop last element
    - If the log isn't `../` or `./` then add new path element to `paths_stack`
- Return length of the `path_stack` after perfoming all operations

# \uD83D\uDCD2 Complexity Analysis
- \u23F0 Time complexity: O(n), since we iterate through whole array `logs`
- \uD83E\uDDFA Space complexity: O(n), since we use `paths_stack` which can be of size `n` in worst case

# \uD83D\uDCBB Code
``` python []
class Solution:
    def minOperations(self, logs: list[str]) -> int:
        paths_stack: list[str] = []

        for log in logs:
            if log == "../":
                if paths_stack:
                    paths_stack.pop()
            elif log != "./":
                paths_stack.append(log)

        return len(paths_stack)
```
``` C++ []
class Solution {
public:
    int minOperations(vector<string>& logs) {
        vector<string> paths_stack;

        for (const string& log : logs) {
            if (log == "../") {
                if (!paths_stack.empty()) {
                    paths_stack.pop_back();
                }
            } else if (log != "./") {
                paths_stack.push_back(log);
            }
        }

        return paths_stack.size();
    }
};
```
``` JavaScript []
var minOperations = function(logs) {
    let paths_stack = [];

    for (let log of logs) {
        if (log === "../") {
            if (paths_stack.length > 0) {
                paths_stack.pop();
            }
        } else if (log !== "./") {
            paths_stack.push(log);
        }
    }

    return paths_stack.length;
};
```
``` Java []
class Solution {
    public int minOperations(String[] logs) {
        Stack<String> paths_stack = new Stack<>();

        for (String log : logs) {
            if (log.equals("../")) {
                if (!paths_stack.isEmpty()) {
                    paths_stack.pop();
                }
            } else if (!log.equals("./")) {
                paths_stack.push(log);
            }
        }

        return paths_stack.size();
    }
}
```
``` C []
int minOperations(char** logs, int logsSize) {
    int paths_stack_size = 0;
    char* paths_stack[logsSize];  // Array to simulate a stack

    for (int i = 0; i < logsSize; i++) {
        if (strcmp(logs[i], "../") == 0) {
            if (paths_stack_size > 0) {
                paths_stack_size--;
            }
        } else if (strcmp(logs[i], "./") != 0) {
            paths_stack[paths_stack_size++] = logs[i];
        }
    }

    return paths_stack_size;
}
```


# 2\uFE0F\u20E3\uD83D\uDE0E Approach 2: Depth Counting

# \uD83E\uDD14 Intuition
So, as was said there's no need to save path in original problem, all you need - count how far from main you are now.
- If you find any path element except `../` and `./` then you know for sure that you go in next directory and increased your "distance" from main on 1 (you need now one for step to return to main, because now you need to return to parent of this directory first)
- If you find `../` and you are now not in main (so distance counter is bigger than 0) you know that this will reduce number of steps to return to main on 1, because initially you would go to the parent of this directory but now you was moved there with log and so you don't need to do this additional step.

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize counter `res` to keep track of the current depth.
- Iterate through each log entry in the `logs` list:
    - If the log is `../`, check if `res` is not zero and subtract 1 from it
    - If the log isn't `../` or `./` then add 1 do `res` since we found new path element.
- Return `res` which represents current depth

# \uD83D\uDCD7 Complexity Analysis
- \u23F0 Time complexity: O(n), since we iterate through whole array `logs`
- \uD83E\uDDFA Space complexity: O(1), since no extra space is used

# \uD83D\uDCBB Code
``` python []
class Solution:
    def minOperations(self, logs: list[str]) -> int:
        res: int = 0

        for log in logs:
            if log == "../":
                res -= 1 if res > 0 else 0
            elif log != "./":
                res += 1

        return res
```
``` C++ []
class Solution {
public:
    int minOperations(std::vector<std::string>& logs) {
        int res = 0;

        for (const string& log : logs) {
            if (log == "../") {
                if (res > 0) {
                    res--;
                }
            } else if (log != "./") {
                res++;
            }
        }

        return res;
    }
};
```
``` JavaScript []
var minOperations = function(logs) {
    let res = 0;

    for (let log of logs) {
        if (log === "../") {
            if (res > 0) {
                res--;
            }
        } else if (log !== "./") {
            res++;
        }
    }

    return res;
};
```
``` Java []
class Solution {
    public int minOperations(String[] logs) {
        int res = 0;

        for (String log : logs) {
            if (log.equals("../")) {
                if (res > 0) {
                    res--;
                }
            } else if (!log.equals("./")) {
                res++;
            }
        }

        return res;
    }
}
```
``` C []
int minOperations(char** logs, int logsSize) {
    int res = 0;

    for (int i = 0; i < logsSize; i++) {
        if (strcmp(logs[i], "../") == 0) {
            if (res > 0) {
                res--;
            }
        } else if (strcmp(logs[i], "./") != 0) {
            res++;
        }
    }

    return res;
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
