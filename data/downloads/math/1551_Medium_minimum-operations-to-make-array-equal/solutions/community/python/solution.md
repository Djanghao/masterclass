# JS, Python, Java, C++ | Easy O(1) 1-Liner Mathematical Solutions w/ Explanation

**Author:** sgallivan
**Votes:** 123
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/1145020/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/1145020/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem has a very simple mathematical solution.

The obvious thing here is that the array formed by the instructions is a **linear progression**. Mathematically, it should also be obvious that the value to which we need to make each element of our array is the same value found at the middle of the array.

If we were to follow the literal instructions, we could move outward from the middle point and repeatedly shift **1** from the right (higher) side to the left (lower) side. This process would lead to a **triangular number** of operations, modified by the fact that each value starts off **2** less/more than the ones on either side, rather than **1**.

Take, for example, the case of **n = 7**, or **[1,3,5,7,9,11,13]**. We would perform the operation twice on the **5** & **9** pair, four times on the **3** & **11** pair, and six times on the **1** & **13** pair, bringing all values to the median of **7** with a total of **12** operations.

The sum of linearly increasing numbers is the very definition of a triangular number, which is in this case doubled because the numbers are **2** apart, rather than **1**. The standard formula for a triangular number is **n * (n + 1) / 2**. Since our triangular number is only half the length of array, not counting the middle, that equates to **2 * ((n - 1) / 2) * ((n - 1) / 2 + 1) / 2**, which simplifies to **(n^2 - 1) / 4**.

But that's when **n** is odd and the middle is conveniently a point. What if **n** is even?

If **n** is even, then it becomes a slightly different formula, with the midpoint being halfway between the two middle points (*which is incidentally why the problem specified a **2** value difference in each array element, to prevent impossible fractions*). In this case, we're doing the same process, only on **(n - 2) / 2** elements rather than **(n - 1) / 2** elements, omitting the two "middle" elements.

This will leave the entire left side of the array equal to the left-middle element, and the entire right side of the array equal to the right-middle element. In order to even the entire array, we'll just need another **n / 2** operations to move the right side down **1** and the left side up **1**.

That formula becomes **2 * ((n - 2) / 2) * ((n - 2) / 2 + 1) / 2 + n / 2**, which simplifies nicely down to **n^2 / 4.**

Thus the only difference between the two formulas is the **- 1** present in the odd version, which is basically the rounding error if **n** is **odd**, and can be corrected by **floor**ing (or double **bitwise NOT**'ing) the result.

***On a more intuitive note***, if you think of the array as points forming a line on a graph, then you can think of that line as the diagonal of a box of area **n * 2n**, or **2n^2**. If you then think of the triangle of moves that have to be made, you can note that the area of said triangle is **1/8**th the area of the box, or **2n^2 / 8**, or **n^2 / 4**

![Visual 1](https://i.imgur.com/YlyS1Db.png)

---

#### ***Implementation:***

Python's floor division operator will actually take care of the difference for us, as will the natural int-casting of the return value in Java and C++.

---

#### ***Javascript Code:***

The best result for the code below is **76ms / 38.6MB** (beats 95% / 90%).
```javascript
var minOperations = function(n) {
    return ~~(n * n / 4)
};
```

---

#### ***Python Code:***

The best result for the code below is **20ms / 14.2MB** (beats 100% / 75%).
```python
class Solution:
    def minOperations(self, n: int) -> int:
        return n * n // 4
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 35.5MB** (beats 100% / 89%).
```java
class Solution {
    public int minOperations(int n) {
        return n * n / 4;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 5.9MB** (beats 100% / 2.4%).
```c++
class Solution {
public:
    int minOperations(int n) {
        return n * n / 4;
    }
};
```