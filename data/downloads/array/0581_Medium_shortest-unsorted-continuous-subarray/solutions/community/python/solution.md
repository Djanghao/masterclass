# JS, Python, Java, C++ | Easy O(N) Solution w/ Explanation

**Author:** sgallivan
**Votes:** 33
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/1082138/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/1082138/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The easiest approach here would be to simply sort a copy of the input array (**N**) and then compare both ends of the two arrays from the outside inward to see how many elements they had in common. The distance between the first discrepancy on either end will be our answer. This solution would be **O(N log N) time**, but we can do better.

To solve this problem in **O(N) time**, we have to consider just how we can tell if one end of an array is properly sorted. For starters, we can easily tell that the left end subarray breaks sort order when an element if smaller than the one before it.

At that point, we know that the subarray is sorted with respect to itself, but what about with respect to the *entire* array? Unfortunately, we can only be sure of this once we've seen every element in the array.

This should point us to our solution: we have to, in essence, iterate backwards from each end of the array in order to find out how many elements on the opposite end are in their proper position. So we will iterate from right to left to figure out how many elements at the left end of the array are correct, and then vice versa from left to right for the right end.

We can do this by keeping track of the **max** (going left to right) and **min** (going right to left) elements seen so far and noting the last time an element wasn't the same as the **max** or **min** values, depending on direction (**left** and **right**).

We can calculate the length of the mid subarray from **left** and **right** and then **return** the answer.

---

#### ***Implementation:***

Rather than performing more calculations on each iteration to store the correct positions for **left** and **right**, we can just store **i** and do our calculation once at the very end instead.

---

#### ***Javascript Code:***

The best result for the code below is **76ms / 41.6MB** (beats 100% / 80%).
```javascript
var findUnsortedSubarray = function(N) {
    let len = N.length - 1, left = -1, right = -1,
        max = N[0], min = N[len]
    for (let i = 1; i <= len; i++) {
        let a = N[i], b = N[len-i]
        a < max ? right = i : max = a
        b > min ? left = i : min = b
    }
    return Math.max(0, left + right - len + 1)
};
```

---

#### ***Python Code:***

The best result for the code below is **192ms / 15.2MB** (beats 88% / 91%).
```python
class Solution:
    def findUnsortedSubarray(self, N: List[int]) -> int:
        lenN, left, right = len(N) - 1, -1, -1
        maxN, minN = N[0], N[lenN]
        for i in range(1, len(N)):
            a, b = N[i], N[lenN-i]
            if a < maxN: right = i
            else: maxN = a
            if b > minN: left = i
            else: minN = b
        return max(0, left + right - lenN + 1)
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 40.1MB** (beats 100% / 83%).
```java
class Solution {
    public int findUnsortedSubarray(int[] N) {
        int len = N.length - 1, left = -1, right = -1,
            max = N[0], min = N[len];
        for (int i = 1; i <= len; i++) {
            int a = N[i], b = N[len-i];
            if (a < max) right = i;
            else max = a;
            if (b > min) left = i;
            else min = b;
        }
        return Math.max(0, left + right - len + 1);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **20ms / 26.4MB** (beats 98% / 90%).
```c++
class Solution {
public:
    int findUnsortedSubarray(vector<int>& N) {
        int len = N.size() - 1, left = -1, right = -1,
            maxN = N[0], minN = N[len];
        for (int i = 1; i <= len; i++) {
            int a = N[i], b = N[len-i];
            if (a < maxN) right = i;
            else maxN = a;
            if (b > minN) left = i;
            else minN = b;
        }
        return max(0, left + right - len + 1);
    }
};
```