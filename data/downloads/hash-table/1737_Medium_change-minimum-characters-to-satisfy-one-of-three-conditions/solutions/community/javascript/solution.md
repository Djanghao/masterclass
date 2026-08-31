# JS, Python, Java, C++ | Frequency Map DP Solution w/ Explanation | beats 100% / 100%

**Author:** sgallivan
**Votes:** 10
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1032693/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1032693/)

---

*(Note: This is part of a series of Leetcode solution explanations ([**index**](https://dev.to/seanpgallivan/leetcode-solutions-index-57fl)). If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

***Idea:***

This problem is actually much more simple than it appears. Since we're going to dealing entirely with the counts of different characters, we will obviously need to create **frequency maps** (**fmA**, **fmB**) for both input strings (**A**, **B**).

We can check for the third condition by comparing the frequencies of any given character in both strings. The sum of those two frequencies (**fmA[i] + fmB[i]**) would be the number of characters we would *not* need to shift, so the **best** answer would be the total number of characters in both strings (**lenA + lenB**) minus the largest possible frequency sum.

For the first two conditions we can think logically about the distribution of the values in our frequency maps. Consider the example below:
```javascript
       fmA =        [<------- C ------->|<--- D --->]
               a b c d e f g h i j k l m|n o p q r s t u v w x y z
       fmB =                [<--- E --->|<------- F ------->]
```
For any border between two characters (in this case "m" and "n"), we could make condition **A > B** by pushing all the characters in **A** before "n" (**sum of range C**) forward and also pushing all the characters in **B** after "m" (**sum of range F**) backward. Similarly, we could make condition **B > A** by pushing **E** forward and pushing **D** backward.
```javascript
       conditionA = sumC + sumF
       conditionB = sumE + sumD
```
We also can figure out that **sumC + sumD =  lenA** and **sumE + sumF = lenB**, so we can rewrite these as:
```javascript
       conditionA = sumC + (lenB - sumE) = sumC - sumE + lenB
       conditionB = sumE + (lenA - sumC) = sumE - sumC + lenA
```
This allows us to iterate in one direction and keep a running sum of **A** and **B** up to that midpoint in order to check these possibilities. As we're checking the boundaries between characters, we only need to iterate through this check **25** times instead of **26**.

Conveniently, **conditionA** and **conditionB** are also the inverse of each other, as they both sum up to **lenA + lenB**, so they can be used as either the number needing to change, or the number needing to stay the same.
```javascript
       lenA + lenB - conditionA = conditionB
       lenA + lenB - conditionB = conditionA
```
That means we can use them with the same **best** from when we checked the third condition to find the maximum value of characters that don't need to be shifted in order to match one of the conditions.

Then we just need to find the difference between that number and the total number of characters, so we should **return lenA + lenB - best**.

---

***Implementation:***

In Javascript, we can use the much more efficient **Uint32Array** for our frequency maps by converting the characters to **0-indexed** integers.

Python has the very convenient **Counter()** class, so we can make full use of that.

For Java and C++, the ability to convert characters to **0-indexed** numbers simply by subtracting **'a'** is very useful. But both languages only allow two arguments for **max()**, which requires nesting them to evaluate three values.

---

***Javascript Code:***

The best result for the code below is **76ms / 44.0MB** (beats 100% / 100%).
```javascript
var minCharacters = function(A, B) {
    let lenA = A.length, fmA = new Uint32Array(26),
        lenB = B.length, fmB = new Uint32Array(26),
        best = sumA = sumB = 0
    for (let i = 0; i < lenA; i++) fmA[A.charCodeAt(i)-97]++
    for (let i = 0; i < lenB; i++) fmB[B.charCodeAt(i)-97]++
    for (let i = 0; i < 26; i++) best = Math.max(best, fmA[i]+fmB[i])
    for (let i = 0; i < 25; i++) {
        sumA += fmA[i], sumB += fmB[i]
        best = Math.max(best, sumA-sumB+lenB, sumB-sumA+lenA)
    }
    return lenA + lenB - best
};
```

---

***Python Code:***

The best result for the code below is **88ms / 14.8MB** (beats 100% / 98%).
```python
class Solution:
    def minCharacters(self, A: str, B: str) -> int:
        lenA, lenB = len(A), len(B)
        fmA, fmB = Counter(A), Counter(B)
        best, sumA, sumB = 0, 0, 0
        for i in string.ascii_lowercase:
            best = max(best, fmA[i]+fmB[i])
        for i in string.ascii_lowercase[:-1]:
            sumA += fmA[i]
            sumB += fmB[i]
            best = max(best, sumA-sumB+lenB, sumB-sumA+lenA)
        return lenA + lenB - best
```

---

***Java Code:***

The best result for the code below is **7ms / 39.8MB** (beats 100% / 67%).
```java
class Solution {
    public int minCharacters(String A, String B) {
        int lenA = A.length(), lenB = B.length();
        int[] fmA = new int[26], fmB = new int[26];
        int best = 0, sumA = 0, sumB = 0;
        for (char c: A.toCharArray()) fmA[c - 'a']++;
        for (char c: B.toCharArray()) fmB[c - 'a']++;
        for (int i = 0; i < 26; i++) best = Math.max(best, fmA[i]+fmB[i]);
        for (int i = 0; i < 25; i++) {
            sumA += fmA[i];
            sumB += fmB[i];
            best = Math.max(best, Math.max(sumA-sumB+lenB, sumB-sumA+lenA));
        }
        return lenA + lenB - best;
    }
}
```

---

***C++ Code:***

The best result for the code below is **36ms / 14.7MB** (beats 99% / 71%).
```c++
class Solution {
public:
    int minCharacters(string A, string B) {
        int lenA = A.size(), lenB = B.size();
        int fmA [26] = {}, fmB [26] = {};
        int best = 0, sumA = 0, sumB = 0;
        for (char c: A) fmA[c - 'a']++;
        for (char c: B) fmB[c - 'a']++;
        for (int i = 0; i < 26; i++) best = max(best, fmA[i]+fmB[i]);
        for (int i = 0; i < 25; i++) {
            sumA += fmA[i];
            sumB += fmB[i];
            best = max(best, max(sumA-sumB+lenB, sumB-sumA+lenA));
        }
        return lenA + lenB - best;
    }
};
```