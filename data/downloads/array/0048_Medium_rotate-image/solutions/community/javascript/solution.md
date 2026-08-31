# JS, Python, Java, C++ | Easy 4-Way Swap Solution w/ Explanation

**Author:** sgallivan
**Votes:** 199
**Link:** [https://leetcode.com/problems/rotate-image/solutions/1175496/](https://leetcode.com/problems/rotate-image/solutions/1175496/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The trick here is to realize that cells in our matrix (**M**) can be swapped out in groups of four in a self-contained manner. This will allow us to keep our **space complexity** down to **O(1)**.

The remaining difficulty lies in setting up our **nested for loops** to accomplish the entirety of these four-way swaps. If we consider each ring of data as a larger iteration, we can notice that each successive ring shortens in the length of its side by **2**. This means that we will need to perform this process to a maximum **depth** of **floor(n / 2)** times. We can use floor here because the center cell of an odd-sided matrix will not need to be swapped.

For each ring, we'll need to perform a number of iterations equal to the length of the side minus 1, since we will have already swapped the far corner as our first iteration. As noticed earlier, the length of the side of a ring is shortened by **2** for each layer of depth we've achieved (**len = n - 2 * i - 1**).

Inside the nested for loops, we need to perform a four-way swap between the linked cells. In order to save on some processing, we can store the value of the opposite side of **i** (**opp = n - 1 - i**) as that value will be reused many times over.

![Visual 1](https://i.imgur.com/LbkYex3.png)

Once the nested loops are finished, **M** has been successfully transformed in-place.

 - _**Time Complexity: O(N^2)** where N is the length of each side of the matrix_
 - _**Space Complexity: O(1)**_

---

#### ***Implementation:***

There are only minor differences between the code of all four languages.

---

#### ***Javascript Code:***

The best result for the code below is **72ms / 38.4MB** (beats 94% / 92%).
```javascript
var rotate = function(M) {
    let n = M.length, depth = ~~(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = M[i][i+j]
            M[i][i+j] = M[opp-j][i]
            M[opp-j][i] = M[opp][opp-j]
            M[opp][opp-j] = M[i+j][opp]
            M[i+j][opp] = temp
        }
    }
};
```

---

#### ***Python Code:***

The best result for the code below is **28ms / 14.2MB** (beats 95% / 84%).
```python
class Solution:
    def rotate(self, M: List[List[int]]) -> None:
        n = len(M)
        depth = n // 2
        for i in range(depth):
            rlen, opp = n - 2 * i - 1, n - 1 - i
            for j in range(rlen):
                temp = M[i][i+j]
                M[i][i+j] = M[opp-j][i]
                M[opp-j][i] = M[opp][opp-j]
                M[opp][opp-j] = M[i+j][opp]
                M[i+j][opp] = temp
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 38.7MB** (beats 100% / 96%).
```java
class Solution {
    public void rotate(int[][] M) {
        int n = M.length, depth = n / 2;
        for (int i = 0; i < depth; i++) {
            int len = n - 2 * i - 1, opp = n - 1 - i;
            for (int j = 0; j < len; j++) {
                int temp = M[i][i+j];
                M[i][i+j] = M[opp-j][i];
                M[opp-j][i] = M[opp][opp-j];
                M[opp][opp-j] = M[i+j][opp];
                M[i+j][opp] = temp;
            }
        }
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 7.0MB** (beats 100% / 68%).
```c++
class Solution {
public:
    void rotate(vector<vector<int>>& M) {
        int n = M.size(), depth = n / 2;
        for (int i = 0; i < depth; i++) {
            int len = n - 2 * i - 1, opp = n - 1 - i;
            for (int j = 0; j < len; j++) {
                int temp = M[i][i+j];
                M[i][i+j] = M[opp-j][i];
                M[opp-j][i] = M[opp][opp-j];
                M[opp][opp-j] = M[i+j][opp];
                M[i+j][opp] = temp;
            }
        }
    }
};
```