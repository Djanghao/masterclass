# Easy to understand✅ | 95.77%🔥| DRY Run 🎯| 2 Approach 💯Explained | Stack | Counter variable

**Author:** Prathamesh18X
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4970551/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4970551/)

---

# Intuition
The given string represents a valid parentheses string (VPS). Therefore, we only need to consider bracket `()` counts for nesting depth calculation, disregarding other characters like integers and operators.

# Approach 1 : Counter Variable
1. Initialize a variable `maxDepth` to 0 to store the maximum nesting depth so far.
2. Initialize a variable `count` to 0 to store the current open brackets count.
3. Iterate over the characters in the string `s`. For each character `c`:
   - If `char` is equal to `'('`, increment the counter `count`.
   - If `char` is equal to `')'`, decrement the counter `count`.
   - Update `maxDepth` as the maximum of itself `maxDepth` and `count`.
4. Return `count`.

# DRY Run\uD83C\uDFAF
- Example `"((()))"`:

| Iteration | Character | Count | Max Depth |
|-----------|-----------|-------|-----------|
| 1         | '('       | 1     | 1         |
| 2         | '('       | 2     | 2         |
| 3         | '('       | 3     | 3         |
| 4         | ')'       | 2     | 3         |
| 5         | ')'       | 1     | 3         |
| 6         | ')'       | 0     | 3         |

Both approaches produce the same maximum depth of 3 for the given input `"((()))"`.

# Code
```javascript []
var maxDepth = function(s) {
    let maxDepth = 0;
    let count = 0;
    for (let char of s){
        if(char === '(')
            count++
        else if(char === ')')
            count--

    maxDepth = Math.max(maxDepth, count);
    }
    return maxDepth
};
```
```python []
def maxDepth(s):
    maxDepth = 0
    count = 0
    for char in s:
        if char == '(':
            count += 1
        elif char == ')':
            count -= 1

        maxDepth = max(maxDepth, count)

    return maxDepth
```
```cpp []
int maxDepth(string s) {
    int maxDepth = 0;
    int count = 0;
    for (char ch : s) {
        if (ch == '(')
            count++;
        else if (ch == ')')
            count--;

        maxDepth = max(maxDepth, count);
    }
    return maxDepth;
}
```
```java []
int maxDepth(string s) {
    int maxDepth = 0;
    int count = 0;
    for (char ch : s) {
        if (ch == '(')
            count++;
        else if (ch == ')')
            count--;

        maxDepth = max(maxDepth, count);
    }
    return maxDepth;
}
```
```kotlin []
fun maxDepth(s: String): Int {
    var maxDepth = 0
    var count = 0
    for (char in s) {
        if (char == '(')
            count++
        else if (char == ')')
            count--
        maxDepth = maxOf(maxDepth, count)
    }
    return maxDepth
}

```

# Approach 2 : Stack
1. Initialize a variable `maxDepth` to 0 to store the maximum nesting depth so far.
2. Initialize an empty stack `stack`.
3. Iterate over the characters in the string `s`. For each character `c`:
    - If `char` is equal to `'('`, add it to the stack `stack`.
    - If `char` is equal to `')'`, pop one element from the stack `st`.
    - Update `maxDepth` as the maximum of itself `maxDepth` and `stack.size()`.
4. Return `maxDepth`.
# DRY Run \uD83C\uDFAF
- Example `"((()))"`:

| Iteration | Character | Stack        | Max Depth |
|-----------|-----------|--------------|-----------|
| 1         | '('       | (            | 1         |
| 2         | '('       | ( (          | 2         |
| 3         | '('       | ( ( (        | 3         |
| 4         | ')'       | ( (          | 3         |
| 5         | ')'       | (            | 3         |
| 6         | ')'       |              | 3         |


# Code
```javascript []
var maxDepth = function (s) {
    let maxDepth = 0;
    let stack = [];
    for (let char of s) {
        if (char == '(')
            stack.push(char);
        else if (char == ')')
            stack.pop(char);
    
    maxDepth = Math.max(maxDepth, stack.length);
}
return maxDepth
};
```
```python []
def maxDepth(s):
    maxDepth = 0
    stack = []
    for char in s:
        if char == '(':
            stack.append(char)
        elif char == ')':
            stack.pop()

        maxDepth = max(maxDepth, len(stack))

    return maxDepth
```
```cpp []
int maxDepth(string s) {
    int maxDepth = 0;
    stack<char> stack;
    for (char ch : s) {
        if (ch == '(')
            stack.push(ch);
        else if (ch == ')')
            stack.pop();
        
        maxDepth = max(maxDepth, static_cast<int>(stack.size()));
    }
    return maxDepth;
}
```
```kotlin []
fun maxDepth(s: String): Int {
    var maxDepth = 0
    var stack = mutableListOf<Char>()
    for (char in s) {
        if (char == '(')
            stack.add(char)
        else if (char == ')')
            stack.removeAt(stack.size - 1)
        maxDepth = maxOf(maxDepth, stack.size)
    }
    return maxDepth
}

```

Thanks you...\uD83E\uDD73
![image.png](./images/0.png)

