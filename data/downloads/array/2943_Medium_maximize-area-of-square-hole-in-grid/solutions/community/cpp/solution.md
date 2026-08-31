# Explained - find max gap || Very simple

**Author:** kreakEmp
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4328787/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4328787/)

---

# Intuition
- We remove a bar means its add the squar of prev and next line/vertical.
- When we remove n consecutive bars then the size of the connected small squar width/height becom n+1.
- So we need to check for max continuos bars length we can remove from horizontal and max consecutive bars we can remove from vertical.

# Approach
- Sort the vBar and hBar 
- Check the max gap in horizontal and max gap in vertical 
- Take min of the (max horizontal gap , max vertical gap) and return its square as answer.


### C++
```
class Solution {
  int getMaxGap(vector<int> bars){
      sort(bars.begin(), bars.end());
      int count = 2, res = 2;
      for(int i = 1; i < bars.size(); ++i) {
          count = (bars[i-1]+1 == bars[i])? count + 1: 2;
          res = max(res, count);
      }
      return res;
  }

  int maximizeSquareHoleArea(int n, int m, vector<int>& hBars, vector<int>& vBars) {
      int gap = min(getMaxGap(hBars), getMaxGap(vBars));
      return gap * gap;
  }
};
```

### Java
```
class Solution {
    public int getMaxGap(int[] bars){
        Arrays.sort(bars);
        int count = 2, res = 2;
        for(int i = 1; i < bars.length; ++i){
            count = (bars[i-1] + 1 == bars[i])? count + 1: 2;
            res = Math.max(res, count);
        }
        return res;
    }
    public int maximizeSquareHoleArea(int n, int m, int[] hBars, int[] vBars) {
        int gap = Math.min(getMaxGap(hBars), getMaxGap(vBars));
        return gap * gap;
    }
}
```

---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---