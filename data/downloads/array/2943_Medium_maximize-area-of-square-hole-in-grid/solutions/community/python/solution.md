# Easy Video Solution (Visualization 🔥) || square of min(max continuous in two arrays)

**Author:** ayushnemmaniwar12
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4329355/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4329355/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to remove few bars at different locations and visualize the grid.

# **Detailed and easy Video Solution**

https://youtu.be/6c6Mnh0WU5k


# Approach
<!-- Describe your approach to solving the problem. -->
The code finds the maximum area of a square-shaped hole in a grid with removable horizontal and vertical bars. It sorts the bars, calculates the consecutive lengths of horizontal (mh) and vertical (mv) bars, and finds the minimum of (mh+1) and (mv+1). The result is the square of this minimum, representing the maximum area after removing some bars. The algorithm has a time complexity of O(nlog(n) + mlog(m)), where n and m are the lengths of the horizontal and vertical bars, respectively.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)



```C++ []
class Solution {
public:
    int maximizeSquareHoleArea(int n, int m, vector<int>& hBars, vector<int>& vBars) {
        vector<int>h;
        vector<int>v;
        sort(hBars.begin(),hBars.end());
        sort(vBars.begin(),vBars.end());
        for(auto i:hBars)
            h.push_back(i);
        for(auto i:vBars)
            v.push_back(i);
        int mv=1,mh=1;
        int c=1;
        for(int i=1;i<h.size();i++)
        {   
            
            if(h[i]==h[i-1]+1)
                c++;
            else
                c=1;
            mh=max(mh,c);
        }
        c=1;
        for(int i=1;i<v.size();i++)
        {   
            if(v[i]==v[i-1]+1)
                c++;
            else
                c=1;
            mv=max(mv,c);
        }
        int x=min(mh+1,mv+1);
        return x*x;
    }
};
```
```JAVA []
import java.util.Arrays;

public class Solution {
    public int maximizeSquareHoleArea(int n, int m, int[] hBars, int[] vBars) {
        Arrays.sort(hBars);
        Arrays.sort(vBars);
        int mh = 1, mv = 1, c = 1;
        
        for (int i = 1; i < hBars.length; i++) {
            if (hBars[i] == hBars[i - 1] + 1)
                c++;
            else
                c = 1;
            mh = Math.max(mh, c);
        }
        
        c = 1;
        for (int i = 1; i < vBars.length; i++) {
            if (vBars[i] == vBars[i - 1] + 1)
                c++;
            else
                c = 1;
            mv = Math.max(mv, c);
        }
        
        int x = Math.min(mh + 1, mv + 1);
        return x * x;
    }
}

```
```PYTHON []
class Solution:
    def maximizeSquareHoleArea(self, n, m, hBars, vBars):
        hBars.sort()
        vBars.sort()
        mh, mv, c = 1, 1, 1
        
        for i in range(1, len(hBars)):
            if hBars[i] == hBars[i - 1] + 1:
                c += 1
            else:
                c = 1
            mh = max(mh, c)
        
        c = 1
        for i in range(1, len(vBars)):
            if vBars[i] == vBars[i - 1] + 1:
                c += 1
            else:
                c = 1
            mv = max(mv, c)
        
        x = min(mh + 1, mv + 1)
        return x * x


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00