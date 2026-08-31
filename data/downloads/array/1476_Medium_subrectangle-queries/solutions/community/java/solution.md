# Explained with time comp. | 2 Solutions - Brute force, Optimized | Easy to Understand | Java

**Author:** Mrmagician
**Votes:** 40
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/1241055/](https://leetcode.com/problems/subrectangle-queries/solutions/1241055/)

---

> Brute Force

**Approach**

New value replaces old values in the rectangle with every `updateSubrectangle` operation.
For `getValue` operation, we're returning the value from array/rectangle simply.

**Time complexity**

| Operation | Time Complexity |
| ---------- | -----------------|
| `updateSubrectangle` | `O(n*r*c)`; where n= no. of such operation; r = row2 - row1; c = col2 -col1 |
| `getValue` | `O(1)` |

**Code**

```
class SubrectangleQueries {
    int[][] rect;
    public SubrectangleQueries(int[][] rectangle) {
        rect = rectangle;
    }
    
    public void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        for(int r = row1; r <= row2; r++) {
            for(int c = col1; c <= col2; c++ ) {
                rect[r][c] = newValue;
            }
        }
    }
    
    public int getValue(int row, int col) {
        return rect[row][col];
    }
}
```





> Optimized

**Approach**

With every `updateSubrectangle` operation, we just store it in an `ArrayList` (not array becuase in java one would need to specify the length of array beforehand and we don't know the total no. of `updateSubrectangle` operations so, I used an array list; for languages such as `python` lists would suffice) 
For `getValue` operation, we are going through `updateSubrectangle` queries and returning the latest value for the asked `(row, col)`; If there is nothing in the queries array, the value in `rectangle` or `rect` array at `(row, col)` is returned.


**Time complexity**

| Operation | Time Complexity |
| ---------- | -----------------|
| `updateSubrectangle` | `O(1)` |
| `getValue` | `O(g*n)`; where n= no. of `updateSubrectangle` operations a.k.a length of `updates` array (see code below); g = no. of `getValue` operations |

**Code**

```
class SubrectangleQueries {
    int[][] rect;
    ArrayList<int[]> updates;
    public SubrectangleQueries(int[][] rectangle) {
        rect = rectangle;
        updates = new ArrayList<>();
    }
    
    public void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
           updates.add(new int[]{row1, col1, row2, col2, newValue});
    }
    
    public int getValue(int row, int col) {
        int response = rect[row][col];
        for(int[] arr: updates) {
            int row1 = arr[0], col1 = arr[1], row2 = arr[2], col2 = arr[3], newValue = arr[4];
            if(row >= row1 && row <= row2 && col >= col1 && col <= col2) {
                response = newValue;
            }
        }
        return response;
    }
}
```

---


**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38