# Simple solution O(n) Runtime 💪 | 92.17%✅ / 98.00%✅

**Author:** Delta7Actual
**Votes:** 1
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/5455785/](https://leetcode.com/problems/crawler-log-folder/solutions/5455785/)

---

# Intuition

- The problem revolves around navigating a file system with commands to move up one directory (`"../"`), stay in the current directory (`"./"`), or move into a subdirectory (`"x/"`).
- **Each command modifies the current directory path.**

---

# Approach

### 1. Initialization: 
- Start with a counter `steps` set to **0** to keep track of the current level of depth in the file system.

---

### 2. Iterate through Logs:
**For each log entry:**
- If the entry is `"../"`, check if steps is **greater than** 0. If it is, **decrement steps by 1**.
- If the entry is `"./"`, do nothing.
- Otherwise, **increment steps by 1** *(since it's a valid subdirectory)*.

---

### 3. Return Result: 
- The value of `steps` at the end will be the ***minimum number of operations*** needed to go back to the main directory.

---

# Complexity
- Time complexity: $$O(n)$$ where $$n$$ is the length of `logs`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ since we are using only a fixed amount of extra space (`steps`).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---

# Code
``` Python3 []
class Solution:
    def minOperations(self, logs: List[str]) -> int:
        steps: int = 0
        for log in logs:
            if log == "../":
                if steps != 0:
                    steps -= 1
            else:
                if log != "./":
                    steps += 1
        return steps
```
``` Python []
class Solution(object):
    def minOperations(self, logs):
        steps = 0
        for log in logs:
            if log == "../":
                if steps != 0:
                    steps -= 1
            else:
                if log != "./":
                    steps += 1
        return steps
```
``` C# []
public class Solution {
    public int MinOperations(string[] logs) {
        int steps = 0;
        for (int i = 0; i < logs.Length; i++)
        {
            if (logs[i] == "../")
            {
                if (steps != 0) steps--;
            }
            else
            {
                if (logs[i] == "./") continue;
                else steps++;
            }
        }

        return steps;
    }
}
```
``` C++ []
class Solution {
public:
    int minOperations(vector<string>& logs) {
        unsigned int steps = 0;
        for (int i = 0; i < logs.size(); i++)
        {
            if (logs[i] == "./") continue;
            else
            {
                if (logs[i] == "../") 
                {
                    if (steps != 0) steps--;
                }
                else steps++;
            }
        }

        return steps;
    }
};
```
``` Javascript []
var minOperations = function(logs) {
        let steps = 0;
    for (let log of logs) {
        if (log === "../") {
            if (steps > 0) {
                steps--;
            }
        } else if (log !== "./") {
            steps++;
        }
    }
    return steps;
};
```
``` Typescript []
function minOperations(logs: string[]): number {
    let steps: number = 0;
    for (let log of logs) {
        if (log === "../") {
            if (steps > 0) {
                steps--;
            }
        } else if (log !== "./") {
            steps++;
        }
    }
    return steps;
};
```