# 1 LINER PYTHON AND 3 LINER CPP

**Author:** speedyy
**Votes:** 12
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/3672605/](https://leetcode.com/problems/construct-the-rectangle/solutions/3672605/)

---

```
For 64 : The answer is 8, why? sqrt(64) = 8, so 8 * 8 = 64 and the difference between
         8 and 8 is the minimum than 2 and 32, 4 and 16.

For 27 : sqrt(27) = 5.1962, so 5.1962 * 5.1962 = 27 (27.000494 44).
         But we need integer number, so from 5 to 1 the first number which can divide 27
         is the 'W' in [L,W] and L = area / W.
         From 5 to 1, 3 is the first number which can divide 27. So return [27/3, 3] 
```
```CPP []
class Solution 
{
public:
    vector<int> constructRectangle(int area) 
    {
        int s = int(sqrt(area));
        while(area % s != 0) s--;
        return {area/s, s};
    }
};
```
```Python []
class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        return next( [area//w, w] for w in range(int(area**0.5), 0, -1) if area % w == 0 )
```
```
Time  complexity : O(sqrt)
Space complexity : O(1)
```
## Plz upvote if you liked my solution. Thank You.