# [C++|Java|Python3] scan - one pass

**Author:** ye15
**Votes:** 32
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2946519/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2946519/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/3ffc910c12ff8c84890fb15351216a0fa85dc3ac) for solutions of biweekly 94. 

**Intuition**
Effectively, this problem can be translated into "finding the number of 0's between a 1 and a -1". 
**Implementation**
**C++**
```
class Solution {
public: 
    int captureForts(vector<int>& forts) {
        int ans = 0; 
        for (int i = 0, ii = 0; i < forts.size(); ++i) 
            if (forts[i]) {
                if (forts[ii] == -forts[i]) ans = max(ans, i-ii-1); 
                ii = i; 
            }
        return ans; 
    }
};
```
**Java**
```
class Solution {
	public int captureForts(int[] forts) {
		int ans = 0; 
		for (int i = 0, ii = 0; i < forts.length; ++i) 
			if (forts[i] != 0) {
				if (forts[ii] == -forts[i]) ans = Math.max(ans, i-ii-1); 
				ii = i; 
			}
		return ans; 
	}
}
```
**Python3**
```
class Solution: 
    def captureForts(self, forts: List[int]) -> int:
        ans = ii = 0 
        for i, x in enumerate(forts): 
            if x: 
                if forts[ii] == -x: ans = max(ans, i-ii-1)
                ii = i 
        return ans 
```
**Complexity**
Time `O(N)`
Space `O(1)`