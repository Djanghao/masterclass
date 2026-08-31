# [Binary Search on Answer Tutorial] Magnetic Force Between Two Balls

**Author:** never_get_piped
**Votes:** 66
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5339191/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5339191/)

---

**Topic** :  Binary Search
Binary search is a search algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. The search interval is halved by comparing the target element with the middle value of the search space. (GFG Reference)

___

## Binary Search on Answer
To understand the concept of **Binary Search on Answer**, I recommend you to go through this [First Bad Version](https://leetcode.com/problems/first-bad-version/description/)  easy practice as a reference first.

You can also refer to yesterday's challenge and tutorial on applying **Binary Search on Answer** : [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334518/binary-search-on-answer-tutorial-minimum-number-of-days-to-make-m-bouquets/)


Let's pose and address the following question:
```
Is it feasible to position `m` balls such that the minimum distance
between any two distinct balls is at least `x`?
```

Let's denote the answer to the above question with a function `f`, such that `f(x)` is true when we can position `m` balls such that the minimum distance between any two distinct balls is at least `x`. otherwise, it returns false. The pattern of `f(x)` will appear as follow:
```
true, true, true ... false, false, false ... false
```
The pattern arises because if we can place `m` balls with a distance `x`, then we can also place `m` balls with a distance `x - n`, where `n` is any nonnegative integer smaller than `x`.

This pattern is similar with [First Bad Version](https://leetcode.com/problems/first-bad-version/description/) and we can solve it with binary search. We need to determine the index of the last `true`. The only thing we need to handle is adjusting the range for the binary search according to each specific problem situation.



## Solution
Initialize a variable `l` to `1` and `r` to the difference between the maximum and minimum positions, representing the range for our binary search.

We use `<=` template for our binary search.

Let `mid = l + (r - l) / 2`. If `f(mid)` evaluates to true, it signifies that `mid` can be used as the minimum distance between each distinct ball, allowing us to place `m` balls. This is a potential answer, and we use `ans` to record it. At the same time, if `f(mid)` is true, we can shift `l` to the right to potentially find a greater distance that still satisfies the condition. Otherwise, if `f(mid)` is false, we need to shift `r` to the left as we need to decrease the distance.

To implement `f(x)`, start by sorting the `position` array. Then, use a greedy approach to select `m` positions such that each pair of adjacent positions has a distance of at least `x`.

<br/><br/>
Credict to @AlecLC, we can optimize the right bound of the binary search as :
```
r = (position[-1] - position[0]) // (m - 1) 
```
<br/>


```c++ []
class Solution {
public:
    int maxDistance(vector<int>& position, int m) {
        sort(position.begin(), position.end());
        int l = 1, r = position.back() - position[0];
        int ans = -1;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            int lastPosition = position[0], balls = 1;
            for(int i = 1; i < position.size(); i++) {
                if(position[i] - lastPosition >= mid) {
                    lastPosition = position[i];
                    balls++;
                }
            }
            if(balls >= m) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int maxDistance(int[] position, int m) {
        Arrays.sort(position);
        int l = 1, r = position[position.length - 1] - position[0];
        int ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int lastPosition = position[0], balls = 1;
            for (int i = 1; i < position.length; i++) {
                if (position[i] - lastPosition >= mid) {
                    lastPosition = position[i];
                    balls++;
                }
            }
            if (balls >= m) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }
}
```
```python []
class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()
        l, r = 1, position[-1] - position[0]
        ans = -1
        while l <= r:
            mid = l + (r - l) // 2
            last_position, balls = position[0], 1
            for i in range(1, len(position)):
                if position[i] - last_position >= mid:
                    last_position = position[i]
                    balls += 1
            if balls >= m:
                ans = mid
                l = mid + 1
            else:
                r = mid - 1
        return ans
```
```Go []
func maxDistance(position []int, m int) int {
    sort.Ints(position)
    l, r := 1, position[len(position)-1] - position[0]
    ans := -1
    for l <= r {
        mid := l + (r - l) / 2
        lastPosition, balls := position[0], 1
        for i := 1; i < len(position); i++ {
            if position[i] - lastPosition >= mid {
                lastPosition = position[i]
                balls++
            }
        }
        if balls >= m {
            ans = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $position
     * @param Integer $m
     * @return Integer
     */
    function maxDistance($position, $m) {
        sort($position);
        $l = 1;
        $r = end($position) - $position[0];
        $ans = -1;
        while ($l <= $r) {
            $mid = $l + floor(($r - $l) / 2);
            $lastPosition = $position[0];
            $balls = 1;
            for ($i = 1; $i < count($position); $i++) {
                if ($position[$i] - $lastPosition >= $mid) {
                    $lastPosition = $position[$i];
                    $balls++;
                }
            }
            if ($balls >= $m) {
                $ans = $mid;
                $l = $mid + 1;
            } else {
                $r = $mid - 1;
            }
        }
        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    let l = 1, r = position[position.length - 1] - position[0];
    let ans = -1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let lastPosition = position[0], balls = 1;
        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPosition >= mid) {
                lastPosition = position[i];
                balls++;
            }
        }
        if (balls >= m) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
};
```


**Complexity**:
* Time Complexity : `O(n log n + n log (max(position) - min(position)))`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**