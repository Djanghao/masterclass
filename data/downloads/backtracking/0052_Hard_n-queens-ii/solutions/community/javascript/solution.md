# JS, Python, Java, C++ | Easy Recursive Solution w/ Explanation

**Author:** sgallivan
**Votes:** 29
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/1237780/](https://leetcode.com/problems/n-queens-ii/solutions/1237780/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

_(**Note**: This problem is an easier duplicate to the previous problem, [**51: N-Queens**](https://leetcode.com/problems/n-queens), except that it doesn't require us to return the actual boards, just the count.)_

A naive approach here would attempt every possible combination of locations, but there are **(N^2)! / (N^2 - N)!** different combinations, which is up to **~1e17** when **N = 9**. Instead, we need to make sure we only attempt to place queens where it's feasible to do so, based on the instructions. This would seem to call for a **depth first search** (**DFS**) approach with a **recursive** helper function (**place**), so that we only pursue workable combinations without wasting time on known dead-ends.

First, we should consider how the queens will be placed. Since each row can only have one queen, our basic process will be to **place** a queen and then recurse to the next row. On each row, we'll have to iterate through the possible options, check the cell for validity, then **place** the queen on the board.

Rather than store the whole board, we can save on **space complexity** if we only keep track of the different axes of attack in which a queen might be placed. Since a queen has four axes of attack, we'll need to check the three remaining axes (other than the horizontal row, which our iteration will naturally take care of) for validity.

There are **N** possible columns and **2 * N - 1** possible left-downward diagonals and right-downward diagonals. With a constraint of **1 <= N <= 9,** each of the two diagonal states represents up to **17 bits**' worth of data and the vertical state up to **9 bits**, so we can use **bit manipulation** to store these states efficiently.

So for each recursive call to **place** a queen, we should pass along the board state in the form of only three integers (**vert, ldiag, rdiag**). We can then use **bitmasks** to check for cell validity before attempting to recurse to the next row.

If we successfully reach the end of the board without failing, we should increment our answer counter (**ans**).

 - _**Time Complexity: O(N!)** which represents the maximum number of queens placed_
 - _**Space Complexity: O(N)** for the recursion stack_

---

#### ***Javascript Code:***

The best result for the code below is **68ms / 38.0MB** (beats 100% / 99%).
```javascript
var totalNQueens = function(N) {
    let ans = 0
    
    const place = (i, vert, ldiag, rdiag) => {
        if (i === N) ans++
        else for (let j = 0; j < N; j++) {
            let vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (N-i-1+j)
            if (vert & vmask || ldiag & lmask || rdiag & rmask) continue
            place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask)
        }
    }

    place(0,0,0,0)
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **44ms / 13.9MB** (beats 90% / 99%).
```python
class Solution:
    def totalNQueens(self, N: int) -> int:
        self.ans = 0
        
        def place(i: int, vert: int, ldiag: int, rdiag:int) -> None:
            if i == N: self.ans += 1
            else:
                for j in range(N):
                    vmask, lmask, rmask = 1 << j, 1 << (i+j), 1 << (N-i-1+j)
                    if vert & vmask or ldiag & lmask or rdiag & rmask: continue
                    place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask)
            
        place(0,0,0,0)
        return self.ans
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 35.2MB** (beats 100% / 99%).
```java
class Solution {
    int ans;
    
    public int totalNQueens(int N) {
        ans = 0;
        place(0,0,0,0,N);
        return ans;
    }
    
    private void place(int i, int vert, int ldiag, int rdiag, int N) {
        if (i == N) ans++;
        else for (int j = 0; j < N; j++) {
            int vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (N-i-1+j);
            if ((vert & vmask) + (ldiag & lmask) + (rdiag & rmask) > 0) continue;
            place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask, N);
        }
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 5.8MB** (beats 100% / 99%).
```c++
class Solution {
public:
    int totalNQueens(int N) {
        ans = 0;
        place(0,0,0,0,N);
        return ans;
    }
    
private:
    int ans;
    
    void place(int i, int vert, int ldiag, int rdiag, int N) {
        if (i == N) ans++;
        else for (int j = 0; j < N; j++) {
            int vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (N-i-1+j);
            if (vert & vmask || ldiag & lmask || rdiag & rmask) continue;
            place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask, N);
        }
    }
};
```