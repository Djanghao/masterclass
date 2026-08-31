# Python || Easy || Beats 94% || Deque || Two-Pointer

**Author:** subin_nair
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/2070317/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/2070317/)

---

Appending a element to the left of a list (insert operation) takes `O(N)` time.
Hence we can use a deque to append a element to the left of list in `O(1)` time.
We maintain two deques `a` and `b` and keep checking if they are equal while traversing `text` in a 2-Pointer approach.
We add characters to the right in `a` and add characters to the left in `b`.
```
eg , text="abcabc"
Iteration 1: a=>[a] b=>[c]
Iteration 2: a=>[a,b] b=>[b,c]
Iteration 3: a=>[a,b,c] b=>[a,b,c]
```

```py

class Solution:
    def longestDecomposition(self, text: str) -> int:
        left, right = 0, len(text) - 1
        sol, last_left = 0, 0
        a, b = deque(), deque()
        while right > left:
            a.append(text[left])
            b.appendleft(text[right])
            if a == b:
                sol += 2
                last_left = left
                a, b = deque(), deque()
            right -= 1
            left += 1
        if left == right or left > last_left + 1:
            sol += 1
        return max(sol, 1)


```

![image](./images/0.png)

**Happy Coding !!**

If you have any questions , feel free to ask.
