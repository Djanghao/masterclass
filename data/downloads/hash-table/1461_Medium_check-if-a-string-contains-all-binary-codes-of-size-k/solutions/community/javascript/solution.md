# JS, Python, Java, C++ | Fast Sliding Window Solution w/ Explanation

**Author:** sgallivan
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/1105899/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/1105899/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The naive solution would be to iterate through the possible binary strings and check through the input string (**S**) to see if each one exists, but this would quickly run into a **TLE**.

Instead, we'll have an easier time solving this problem from the opposite direction. We can iterate through **S** and make a note of every number that's been **seen**. This also brings up a more interesting point: with such a relatively small constraint upon the length of **S**, it limits how many possible numbers a string can produce.

If we think of a **sliding window** of **K** width moving down **S**, then it becomes obvious that there can be at most **S.length - K + 1** possible different numbers. Since the length of **S** is constrained to **5e5**, that means that the answer will automatically be **false** at **K** values of **19** and **20**, for example.

In our solution, however, we can just choose to iterate through **S** backwards, and use our index (**i**) as a way to keep track of how many iterations remain, and therefore how many chances are left to find any remaining numbers. If at any time the amount of numbers left to find (**count**) is less than than **i**, then there's no way to get to true, so we should **return false**.

On the other hand, if **count** is reduced to **0**, then we have found all the numbers and can **return true**.

In order to be as performant as possible, we can use a lightweight **typed array** for **seen**. To keep from having to repeatedly obtain and convert **substrings**, we can use **bit manipulation** to modify the previous **num** with the new character from **S** to obtain the new **num**.

---

#### ***Implementation:***

Javascript doesn't have a boolean typed array, but we can use a **Uint8Array** instead.

Python doesn't have a faster typed array and it deals with slices faster than other languages, so it actually makes sense to use a **set()** and leave the binary strings as strings.

---

#### ***Javascript Code:***

The best result for the code below is **76ms / 45.1MB** (beats 100% / 86%).
```javascript
var hasAllCodes = function(S, K) {
    let len = S.length, count = 1 << K,
        seen = new Uint8Array(count),
        num = parseInt(S.slice(len - K + 1), 2) << 1
    for (let i = len - K; ~i; i--) {
        num = ((S.charAt(i) << K) + num) >> 1
        if (!seen[num]) seen[num] = 1, count--
        if (!count) return true
        if (i < count) return false
    }
};
```

---

#### ***Python Code:***

The best result for the code below is **124ms / 19.1MB** (beats 100% / 88%).
```python
class Solution:
    def hasAllCodes(self, S: str, K: int) -> bool:
        count = 1 << K
        seen = set()
        for i in range(len(S) - K, -1, -1):
            num = S[i:i+K]
            if num not in seen:
                seen.add(num)
                count -= 1
            if not count: return True
            if i < count: return False
```

---

#### ***Java Code:***

The best result for the code below is **4ms / 40.4MB** (beats 100% / 97%).
```java
class Solution {
    public boolean hasAllCodes(String S, int K) {
        int len = S.length(), count = 1 << K;
        if (K > len) return false;
        int num = K > 1 ? Integer.parseInt(S.substring(len - K + 1), 2) << 1 : 0;
        boolean[] seen = new boolean[count];
        for (int i = len - K; i >= 0; i--) {
            num = (((S.charAt(i) - '0') << K) + num) >> 1;
            if (!seen[num]) {
                seen[num] = true;
                count--;
            }
            if (count == 0) return true;
            if (i < count) return false;
        }
        return false;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **40ms / 18.1MB** (beats 99% / 93%).
```c++
class Solution {
public:
    bool hasAllCodes(string S, int K) {
        int len = S.size(), count = 1 << K;
        if (K > len) return false;
        int num = K > 1 ? stoi(S.substr(len - K + 1), 0, 2) << 1 : 0;
        vector<bool> seen(count, false);
        for (int i = len - K; ~i; i--) {
            num = (((S[i] - '0') << K) + num) >> 1;
            if (!seen[num]) seen[num] = true, count--;
            if (!count) return true;
            if (i < count) return false;
        }
        return false;
    }
};
```