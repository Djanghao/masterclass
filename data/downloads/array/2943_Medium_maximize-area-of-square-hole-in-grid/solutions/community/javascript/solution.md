# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4328964/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4328964/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Sorting:** Both vectors A and B are sorted to identify consecutive elements easily.

1. **Horizontal and Vertical Counts:** The code counts the consecutive elements in vectors A and B horizontally and vertically, respectively, using two loops.

1. **Maximum Consecutive Counts:** Variables mxh and mxv store the maximum consecutive counts for horizontal and vertical sequences, respectively.

1. **Maximum Possible Area:** The maximum possible area of the square-shaped hole is calculated by taking the minimum of mxh and mxv (as the sides of the square) and incrementing it by 1.


# Complexity
- *Time complexity:*
   $$O(NlogN)$$
    

- *Space complexity:*
   $$O(N + M)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to maximize the area of the square-shaped hole
    int maximizeSquareHoleArea(int n, int m, vector<int>& A, vector<int>& B) {
        int N = A.size(); // Number of elements in A vector
        int M = B.size(); // Number of elements in B vector
        
        // Sorting the vectors to identify consecutive elements
        sort(A.begin(), A.end());
        sort(B.begin(), B.end());
        
        int id = 0, mxh = 1, mxv = 1; // Initialization of variables
        
        // Loop through vector A to find the maximum horizontal consecutive count
        for(int i = 0; i < N; ++i) {
            int cnt = 1; // Counter for consecutive elements
            int j = i + 1;
            // Count consecutive elements in A
            while(i + 1 < N && A[i] + 1 == A[i + 1]) {
                ++i;
                ++cnt;
            }
            mxh = max(mxh, cnt); // Update maximum horizontal consecutive count
        }
        
        // Loop through vector B to find the maximum vertical consecutive count
        for(int i = 0; i < M; i++) {
            int cnt = 1; // Counter for consecutive elements
            // Count consecutive elements in B
            while(i + 1 < M && B[i] + 1 == B[i + 1]) {
                ++i;
                ++cnt;
            }
            mxv = max(mxv, cnt); // Update maximum vertical consecutive count
        }
        
        // Calculate the maximum possible area for the square hole
        int ans = (min(mxh, mxv) + 1) * (min(mxh, mxv) + 1);
        return ans; // Return the maximum area of the square-shaped hole
    }
};



```
```C []

class Solution {
public:
    // Function to maximize the area of the square-shaped hole
    int maximizeSquareHoleArea(int n, int m, vector<int>& A, vector<int>& B) {
        int N = A.size(); // Number of elements in A vector
        int M = B.size(); // Number of elements in B vector
        
        // Sorting the vectors to identify consecutive elements
        sort(A.begin(), A.end());
        sort(B.begin(), B.end());
        
        int id = 0, mxh = 1, mxv = 1; // Initialization of variables
        
        // Loop through vector A to find the maximum horizontal consecutive count
        for(int i = 0; i < N; ++i) {
            int cnt = 1; // Counter for consecutive elements
            int j = i + 1;
            // Count consecutive elements in A
            while(i + 1 < N && A[i] + 1 == A[i + 1]) {
                ++i;
                ++cnt;
            }
            mxh = max(mxh, cnt); // Update maximum horizontal consecutive count
        }
        
        // Loop through vector B to find the maximum vertical consecutive count
        for(int i = 0; i < M; i++) {
            int cnt = 1; // Counter for consecutive elements
            // Count consecutive elements in B
            while(i + 1 < M && B[i] + 1 == B[i + 1]) {
                ++i;
                ++cnt;
            }
            mxv = max(mxv, cnt); // Update maximum vertical consecutive count
        }
        
        // Calculate the maximum possible area for the square hole
        int ans = (min(mxh, mxv) + 1) * (min(mxh, mxv) + 1);
        return ans; // Return the maximum area of the square-shaped hole
    }
};




```
```Java []


class Solution {
    public int maximizeSquareHoleArea(int n, int m, int[] A, int[] B) {
        Arrays.sort(A);
        Arrays.sort(B);
        int N = A.length;
        int M = B.length;
        int mxh = 1, mxv = 1;

        int i = 0;
        while (i < N) {
            int cnt = 1;
            int j = i + 1;
            while (j < N && A[i] + 1 == A[j]) {
                j++;
                cnt++;
            }
            mxh = Math.max(mxh, cnt);
            i = j;
        }

        i = 0;
        while (i < M) {
            int cnt = 1;
            int j = i + 1;
            while (j < M && B[i] + 1 == B[j]) {
                j++;
                cnt++;
            }
            mxv = Math.max(mxv, cnt);
            i = j;
        }

        int ans = (Math.min(mxh, mxv) + 1) * (Math.min(mxh, mxv) + 1);
        return ans;
    }
}



```
```python3 []
class Solution:
    def maximizeSquareHoleArea(self, n, m, A, B):
        A.sort()
        B.sort()
        N = len(A)
        M = len(B)
        mxh, mxv = 1, 1

        i = 0
        while i < N:
            cnt = 1
            j = i + 1
            while j < N and A[i] + 1 == A[j]:
                j += 1
                cnt += 1
            mxh = max(mxh, cnt)
            i = j

        i = 0
        while i < M:
            cnt = 1
            j = i + 1
            while j < M and B[i] + 1 == B[j]:
                j += 1
                cnt += 1
            mxv = max(mxv, cnt)
            i = j

        ans = (min(mxh, mxv) + 1) ** 2
        return ans



```
```javascript []
function maximizeSquareHoleArea(n, m, A, B) {
    // Sorting the arrays to identify consecutive elements
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let mxh = 1, mxv = 1; // Initialization of variables
    
    // Loop through array A to find the maximum horizontal consecutive count
    for (let i = 0; i < A.length; ++i) {
        let cnt = 1; // Counter for consecutive elements
        // Count consecutive elements in A
        while (i + 1 < A.length && A[i] + 1 === A[i + 1]) {
            ++i;
            ++cnt;
        }
        mxh = Math.max(mxh, cnt); // Update maximum horizontal consecutive count
    }
    
    // Loop through array B to find the maximum vertical consecutive count
    for (let i = 0; i < B.length; i++) {
        let cnt = 1; // Counter for consecutive elements
        // Count consecutive elements in B
        while (i + 1 < B.length && B[i] + 1 === B[i + 1]) {
            ++i;
            ++cnt;
        }
        mxv = Math.max(mxv, cnt); // Update maximum vertical consecutive count
    }
    
    // Calculate the maximum possible area for the square hole
    let ans = Math.pow(Math.min(mxh, mxv) + 1, 2);
    return ans; // Return the maximum area of the square-shaped hole
}



```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---