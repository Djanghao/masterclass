# [Python3] Stack + Counter O(N), Clean & Concise

**Author:** xil899
**Votes:** 57
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2678792/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2678792/)

---

**Implementation**
We use a stack (`t` defined in the question) to maintain the temporary string, and use a counter (hashmap) `dic` to maintain the count of all letters in the suffix string. For each character `char` in `s`, we first append it to `t` and remove its count from `dic`. Then, while top element of `t` is smaller of equal to the lexicographically smallest character in the remaining suffix string (excluding `char`), we keep popping it from the stack and appending it to the final answer.

**Complexity**
Time Complexity: `O(26 * N)`
Space Complexity: `O(N)`, for the use of stack `t`
 
 **Solution**
```
class Solution:
    def robotWithString(self, s: str) -> str:
        dic, t, ans = Counter(s), [], []
        for char in s:
            t.append(char)
            if dic[char] == 1:
                del dic[char]
            else:
                dic[char] -= 1
            while dic and t and min(dic) >= t[-1]:
                ans += t.pop()
        ans += t[::-1]
        return ''.join(ans)
```
**Remark:** We can further improve the time complexity by replacing `dic` with an array `min_suffix` to pre-record the lexicographically smallest character in the suffix string.

**Complexity**
Time Complexity: `O(N)`
Space Complexity: `O(N)`, for the use of stack `t` and suffix array `min_suffix`

 **Solution**
```
class Solution:
    def deleteString(self, s: str) -> int:
        n = len(s)
        min_suffix, t, ans = [s[-1]] * n, [], []
        for i in range(n - 2, -1, -1):
            min_suffix[i] = min(s[i], min_suffix[i + 1])
        for i, char in enumerate(s):
            t.append(char)
            while i + 1 < n and t and min_suffix[i + 1] >= t[-1]:
                ans += t.pop()
        ans += t[::-1]
        return ''.join(ans)
```