# [Java/Python 3] three easy iterative codes w/ brief explanation, analysis and follow-up.

**Author:** rock
**Votes:** 111
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/294964/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/294964/)

---

**Method 1: ArrayDeque**

If current char is same as previous char in the ArrayDeque, pop out the previous char; 
Otherwise, add current char into the ArrayDeque.


```
    public String removeDuplicates(String S) {
        Deque<Character> dq = new ArrayDeque<>();
        for (char c : S.toCharArray()) {
            if (!dq.isEmpty() && dq.peekLast() == c) { 
                dq.pollLast();
            }else {
                dq.offer(c);
            }
        }
        StringBuilder sb = new StringBuilder();
        for (char c : dq) { sb.append(c); }
        return sb.toString();
    }
```
```
    def removeDuplicates(self, S: str) -> str:
        dq = collections.deque()
        for c in S:
            if dq and dq[-1] == c:
                dq.pop()
            else:
                dq.append(c)
        return ''.join(dq)
```
Or just use list:
```
    def removeDuplicates(self, S: str) -> str:
        stack = []
        for c in S:
            if stack and stack[-1] == c:
                stack.pop()
            else:
                stack.append(c)
        return ''.join(stack)
```

**Method 2: StringBuilder.**

Get rid of the ArrayDeque in method 1, use only StringBuilder.

If current char is same as the end of the StringBuilder, delete the char at end; otherwise, append it at the end.

```
    public String removeDuplicates(String S) {
        StringBuilder sb = new StringBuilder();
        for (char c : S.toCharArray()) {
            int size = sb.length();
            if (size > 0 && sb.charAt(size - 1) == c) { 
                sb.deleteCharAt(size - 1); 
            }else { 
                sb.append(c); 
            }
        }
        return sb.toString();
    }
``` 

**Method 3: two pointers**

If current char is same as the end of non-adjacent-duplicate chars, decrease the counter `end` by 1;
otherwise, copy the current char to its end.

```
    public String removeDuplicates(String S) {
        char[] a = S.toCharArray();
        int end = -1;
        for (char c : a) {
            if (end >= 0 && a[end] == c) { 
                --end; 
            }else { 
                a[++end] = c; 
            }
        }
        return String.valueOf(a, 0, end + 1);
    }
```
```
    def removeDuplicates(self, S: str) -> str:
        end, a = -1, list(S)
        for c in a:
            if end >= 0 and a[end] == c:
                end -= 1
            else:
                end += 1
                a[end] = c
        return ''.join(a[: end + 1])
```
**Analysis for all methods:**

Time & space: O(n), where n = S.length().

----

**Follow-up:**

See follow up [1209. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/discuss/393149/JavaPython-3-O(n)-codes-using-Stack-w-brief-explanation-and-analysis.)

Q: What if we are required to **remove all k-in-a-row duplicates in a string (for more-than-k-in-a-row, remove only first k duplicates)**? - credit to **@betterztt**.

A: Use 2 stacks, one for characters, and the other for the count of adjacent characters.

```java
    public String removeDuplicates(String S, int k) {
        Deque<Character> charStk = new ArrayDeque<>();
        Deque<Integer> cntStk = new ArrayDeque<>();
        for (int i = 0; i < S.length(); ++i) {
            char c = S.charAt(i);
            if (charStk.isEmpty() || charStk.peek() != c) { // no char in stack yet, or top char is different from the current.
                charStk.push(c);
                cntStk.push(1);
            }else if (cntStk.peek() + 1 < k) { // top char is same as the current, but less than k after appending the current.
                cntStk.push(cntStk.pop() + 1);
            }else { // found k-in-a-row duplicates, remove them.
                charStk.pop();
                cntStk.pop();
            }
        }
        StringBuilder sb = new StringBuilder();
        for (char c : charStk) {
            int cnt = cntStk.pop();
            while (cnt-- > 0) {
                sb.append(c);
            }
        }
        return sb.reverse().toString(); // Do NOT forget reverse().
    }
```
```python
    def removeDuplicates(self, S: str, k: int) -> str:
         stk = []
        for char in S:
            if not stk or stk[-1][0] != char:
                stk.append([char, 1])
            elif stk[-1][1] + 1 < k:
                stk[-1][1] += 1
            else:
                stk.pop()
        return ''.join(char * cnt for char, cnt in stk)
```
