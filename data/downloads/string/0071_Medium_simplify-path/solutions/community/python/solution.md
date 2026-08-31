# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 194
**Link:** [https://leetcode.com/problems/simplify-path/solutions/3407361/](https://leetcode.com/problems/simplify-path/solutions/3407361/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires to convert a given absolute path to a simplified canonical path. The simplified canonical path should have the following format:
- The path starts with a single slash '/'.

- Any two directories are separated by a single slash '/'.

- The path does not end with a trailing '/'.

- The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..').
# Approach
<!-- Describe your approach to solving the problem. -->
The problem can be solved using a stack to keep track of the directories in the path. We split the input path by slash '/', iterate over the directories, and perform the following operations:

- Ignore the current directory '.' and empty directories.
- Go one level up for double period '..' by popping the top element from the stack if it is not empty.
- For any other directory, push it to the stack.
- Finally, we join the directories in the stack with slash '/' and add a slash at the beginning to form the simplified canonical path.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the algorithm is $$O(n)$$, where n is the length of the input path. This is because we iterate over each directory in the path only once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 The space complexity of the algorithm is $$O(n)$$ where n is the length of

 
![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
class Solution {
    public String simplifyPath(String path) {
        Stack<String> stack = new Stack<>(); // create a stack to keep track of directories
        String[] directories = path.split("/"); // split the path by slash '/'
        for (String dir : directories) { // iterate over the directories
            if (dir.equals(".") || dir.isEmpty()) { // ignore the current directory '.' and empty directories
                continue;
            } else if (dir.equals("..")) { // go one level up for double period '..'
                if (!stack.isEmpty()) { // if stack is not empty, pop the top element
                    stack.pop();
                }
            } else { // for any other directory, push it to the stack
                stack.push(dir);
            }
        }
        return "/" + String.join("/", stack); // join the directories in the stack with slash '/' and add a slash at the beginning
    }
}
```
```JavaScript []
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const directories = path.split("/");
    for (const dir of directories) {
        if (dir === "." || !dir) {
            continue;
        } else if (dir === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(dir);
        }
    }
    return "/" + stack.join("/");
};

```
```C++ []
class Solution {
public:
    string simplifyPath(string path) {
        stack<string> s;
        stringstream ss(path);
        string dir;
        while (getline(ss, dir, '/')) {
            if (dir.empty() || dir == ".") {
                continue;
            } else if (dir == "..") {
                if (!s.empty()) {
                    s.pop();
                }
            } else {
                s.push(dir);
            }
        }
        string res;
        while (!s.empty()) {
            res = "/" + s.top() + res;
            s.pop();
        }
        return res.empty() ? "/" : res;
    }
};

```
``` Python []
class Solution(object):
    def simplifyPath(self, path):
        stack = []
        directories = path.split("/")
        for dir in directories:
            if dir == "." or not dir:
                continue
            elif dir == "..":
                if stack:
                    stack.pop()
            else:
                stack.append(dir)
        return "/" + "/".join(stack)

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```