# [Fastest Solution Explained][0ms][100%] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 15
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/2383649/](https://leetcode.com/problems/container-with-most-water/solutions/2383649/)

---


(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).
* *** Java ***

The first thing we should realize is that the amount of water contained is always going to be a rectangle whose area is defined as length * width. The width of any container will be the difference between the index of the two lines (i and j), and the height will be whichever of the two sides is the lowest (min(H[i], H[j])).

The brute force approach would be to compare every single pair of indexes in H, but that would be far too slow. Instead, we can observe that if we start with the lines on the opposite ends and move inward, the only possible time the area could be larger is when the height increases, since the width will continuously get smaller.

```

class Solution {
    public int maxArea(int[] H) {
        int ans = 0, i = 0, j = H.length-1, res = 0;
        while (i < j) {
            if (H[i] <= H[j]) {
                res = H[i] * (j - i);
                i++;
            } else {
                res = H[j] * (j - i);
                j--;
            }
            if (res > ans) ans = res;
        }
        return ans;
    }
}

```

```
```

```
```

The best result for the code below is ***0ms / 10MB*** (beats 100.00% / 95.49%).
* *** Python ***

```

class Solution:
    def maxArea(self, H: List[int]) -> int:
        ans, i, j = 0, 0, len(H)-1
        while (i < j):
            if H[i] <= H[j]:
                res = H[i] * (j - i)
                i += 1
            else:
                res = H[j] * (j - i)
                j -= 1
            if res > ans: ans = res
        return ans

```

```
```

```
```

The best result for the code below is ***0ms / 23.7MB*** (beats 59.24% / 60.42%).
* *** C++ ***


```

class Solution {
public:
    int maxArea(vector<int>& H) {
        int ans = 0, i = 0, j = H.size()-1, res = 0;
        while (i < j) {
            if (H[i] <= H[j]) {
                res = H[i] * (j - i);
                i++;
            } else {
                res = H[j] * (j - i);
                j--;
            }
            if (res > ans) ans = res;
        }
        return ans;
    }
};

```

```
```

```
```

The best result for the code below is ***0ms / 78MB*** (beats 100.00% / 100.00%).
* *** JavaScript ***


```

var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};

```

```
```

```
```

The best result for the code below is ***0ms / 15.23MB*** (beats 89.94% / 90.99%).
* *** Python3 ***

First, we check the widest possible container starting from the first line to the last one. Next, we ask ourselves, how is it possible to form an even bigger container? Every time we narrow the container, the width becomes smaller so the only way to get a bigger area is to find higher lines. So why not just greedily shrink the container on the side that has a shorter line? Every time we shrink the container, we calculate the area and save the maximum.

Time: **O(n)**
Space: **O(1)**

Runtime: 819 ms, faster than 75.10% of Python3 online submissions for Container With Most Water.
Memory Usage: 27.4 MB, less than 58.32% of Python3 online submissions for Container With Most Water.

```

class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r, area = 0, len(height) - 1, 0
        while l < r:
            area = max(area, (r - l) * min(height[l], height[r]))
            if height[l] < height[r]:
				l += 1
            else:
				r -= 1
				
        return area

```

```
```

```
```

The best result for the code below is ***0ms / 33.33MB*** (beats 99.00% / 60.12%).
* *** Kotlin ***


```

/**
 * author: Leon
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * Time Complexity:     O(N)
 * Space Complexity:    O(1)
 * 
 * References:
 *  https://leetcode.com/problems/container-with-most-water/discuss/6091/Easy-Concise-Java-O(N)-Solution-with-Proof-and-Explanation
 */
 class Solution {
    fun maxArea(heights: IntArray): Int {
        // sanity check
        if(heights.isEmpty()) return 0
        
        val size = heights.size
        var lo = 0
        var hi = size -1 
        var maxArea = 0
        
        while(lo < hi){
            val area = minOf(heights[lo], heights[hi]) * (hi - lo)
            maxArea = maxOf(maxArea, area)
            
            if(heights[lo] < heights[hi])
                ++lo
            else --hi
        }
        
        return maxArea
    }
}

```

```
fun maxArea(height: IntArray): Int {
    tailrec fun calc(startIdx: Int, endIdx: Int, max: Int): Int =
        if (startIdx >= endIdx)
            max
        else
            if (height[startIdx] <= height[endIdx])
                calc(
                    startIdx = startIdx + 1,
                    endIdx = endIdx,
                    max = max(max, height[startIdx] * (endIdx - startIdx))
                )
            else
                calc(
                    startIdx = startIdx,
                    endIdx = endIdx - 1,
                    max = max(max, height[endIdx] * (endIdx - startIdx))
                )

    return calc(startIdx = 0, endIdx = height.size - 1, max = 0)
}
```

```
```

```
```

The best result for the code below is ***0ms / 13.17MB*** (beats 79.34% / 99.92%).
* *** Swift ***


```

class Solution {
    func maxArea(_ h: [Int]) -> Int {
        guard h.count > 2 else { return min(h[0], h[1]) }
        var val = 0, lhs = 0, rhs = h.count - 1
        while lhs < rhs {
            val = max(val, min(h[lhs], h[rhs]) * (rhs - lhs))
            h[lhs] < h[rhs] ? (lhs += 1) : (rhs -= 1)
        }
        return val
    }
}

```

```
```

```
```

The best result for the code below is ***0ms / 62.07MB*** (beats 99.99% / 99.99%).
* *** PHP ***


```

class Solution {
    function maxArea($height) {
        
        $count = count($height);
        $r = 0;
        $i = 0;
        $j = $count - 1;
        
        while ($i < $count - 1)
        {    
            if ($height[$i] <= $height[$j])
            {
                $t = $height[$i] * ($j - $i);
                $i++;
            }
            else
            {
                $t = $height[$j] * ($j - $i);
                $j--;
            }

            if ($t > $r) 
            {
                $r = $t;
            }
        }
        
        return $r;
    }
}

```

```
```

```
```

The best result for the code below is ***0ms / 1.17MB*** (beats 99.64% / 99.92%).
* *** C ***


```

int maxArea(int* heights, int n) {
    int water = 0, *i = heights, *j = i + n - 1;
    while (i < j) {
        int h = *i < *j ? *i : *j;
        int w = (j - i) * h;
        if (w > water) water = w;
        while (*i <= h && i < j) i++;
        while (*j <= h && i < j) j--;
    }
    return water;
}

```

```
int maxArea(int* height, int heightSize){
    /* Given an integer array height of
     * length n. There are n vertical lines
     * drawn such that the two endpoints of the
     * ith line are (i, 0) and (i, height[i]).
     * Finds two lines that together with the
     * x-axis form a container, such that the
     * container contains the most water and
     * returns the maximum amount of water a
     * container can store. */
    int minIdx = 0, maxIdx = (heightSize - 1);
    int minHeight, area;
    int res = 0;
    while(minIdx < maxIdx){
        minHeight = (height[minIdx] < height[maxIdx]) ? height[minIdx] : height[maxIdx];
        area = minHeight * (maxIdx - minIdx);
        if(area > res){res = area;}
        if(height[minIdx] <= height[maxIdx]){minIdx++;}
        else{maxIdx--;}
    }
    return res;
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
