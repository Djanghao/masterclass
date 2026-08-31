# Easy Video Solution (For Beginners) || Sorting + Swapping

**Author:** ayushnemmaniwar12
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4450791/](https://leetcode.com/problems/minimum-number-game/solutions/4450791/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort it and swap

# ***Easy Video Explanation***

https://youtu.be/e6w_Wy61uaI


# Approach
<!-- Describe your approach to solving the problem. -->
The code takes an array, sorts it, and then swaps adjacent elements in pairs. It ensures the array length is even to prevent index out-of-bounds. The result is a sorted array with adjacent elements swapped, useful for certain game algorithms or reordering strategies.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)->we are modifying the array
    

# Code

```C++ []
class Solution {
public:
    vector<int> numberGame(vector<int>& v) {
        int n=v.size();
        sort(v.begin(),v.end());
        for(int i=0;i<n;i+=2) {
            swap(v[i],v[i+1]);
        }
        return v;
    }
};
```
```python []
class Solution:
    def numberGame(self, v):
        n = len(v)
        v.sort()
        for i in range(0, n, 2):
            if i + 1 < n:
                v[i], v[i + 1] = v[i + 1], v[i]
        return v

```
```Java []
import java.util.Arrays;

public class Solution {
    public int[] numberGame(int[] v) {
        int n = v.length;
        Arrays.sort(v);
        for (int i = 0; i < n; i += 2) {
            if (i + 1 < n) {
                int temp = v[i];
                v[i] = v[i + 1];
                v[i + 1] = temp;
            }
        }
        return v;
    }
}

```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00