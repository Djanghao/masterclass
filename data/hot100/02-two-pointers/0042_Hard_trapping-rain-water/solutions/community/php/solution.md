# [Python3] 2 solutions: Monotonic Stack and Two Pointers

**Author:** yourick
**Votes:** 29
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/4486633/](https://leetcode.com/problems/trapping-rain-water/solutions/4486633/)

---

#### Monotonic decreasing stack:
The logic similar to [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/description/)
```python3 []
class Solution:
    def trap(self, h: List[int]) -> int:
        res, stack = 0, []
        
        for r, rightBound in enumerate(h):
            while stack and h[stack[-1]] < rightBound:
                bar = h[stack.pop()]
                if stack:
                    l, leftBound = stack[-1], h[stack[-1]]
                    minBound = min(rightBound, leftBound)
                    res += (r - l - 1) * (minBound - bar)
            stack.append(r)
        
        return res
```
#### Two pointers:
```python3 []
class Solution:   
    def trap(self, h: List[int]) -> int:
        res, l , r, lMax, rMax = 0, 0, len(h) - 1, 0, 0
        
        if r < 2: return res

        while l < r:
            if h[l] < h[r]:
                lMax = max(lMax, h[l])
                res += lMax - h[l]
                l += 1
            else:
                rMax = max(rMax, h[r])
                res += rMax - h[r]
                r -= 1
        
        return res
```
```php []
class Solution {
    function trap($height) {
        $result = 0;
        $left = 0;
        $right = count($height) - 1;
        $lMax = 0;
        $rMax = 0;
        
        while($left < $right) {
            if($height[$left] < $height[$right]){
                $lMax = max($lMax, $height[$left]);
                $result += $lMax - $height[$left];
                $left++;
            } else {
                $rMax = max($rMax, $height[$right]);
                $result += $rMax - $height[$right];
                $right--;
            }
        }
        
        return $result;
    }
}
```