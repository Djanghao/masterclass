# ✅ O(n) very simple, java | c | python | javascript | php | go | ruby | racket etc

**Author:** codeninja8
**Votes:** 1
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/5011639/](https://leetcode.com/problems/trapping-rain-water/solutions/5011639/)

---

# Intuition

The volume of water on each step is `min(maxLeft, maxRight) - height[i]`

`maxLeft` is easy to calculate `maxLeft = max(maxLeft, height[i])`

`maxRight` has to be caclulate using dynamic programming appoach, but fortunatly in this case it's very simple. Use count down loop to do it.

# Approach
1. Calculate `rights` array in count down loop
2. Calcualte amount of `water` on each step and update `maxLeft` and `volume`

# Complexity
- Time complexity:
we use 2 loops. so 2*n is $$O(n)$$

- Space complexity:
we use `rights` array to store `maxRight` on each step, therefore $$O(n)$$

# Code
``` java []
class Solution {
    public int trap(int[] height) {
        int maxLeft = 0;
        int maxRight = 0;
        int volume = 0;

        int[] rights = new int[height.length];

        for (int i = height.length - 2; i >= 0; i--) {
            rights[i] = Math.max(rights[i + 1], height[i + 1]);

        }

        for (int i = 0; i < height.length; i++) {
            int water = Math.min(maxLeft, rights[i]) - height[i];
            if (water > 0) {
                volume += water;
            }

            maxLeft = Math.max(maxLeft, height[i]);
        }

        return volume;
    }
}
```
``` python []
class Solution(object):
    def trap(self, height):
        rights = [0] * len(height)
        maxLeft = 0
        volume = 0

        for i in reversed(range(len(height) - 1)):
            rights[i] = max(rights[i + 1], height[i + 1])
        
        for i in range(len(height)):
            water = min(maxLeft, rights[i]) - height[i]
            if water > 0:
                volume += water
            maxLeft = max(maxLeft, height[i])
        
        return volume
```
``` c []
#define MAX(x, y) (((x) > (y)) ? (x) : (y))
#define MIN(x, y) (((x) < (y)) ? (x) : (y))

int trap(int* height, int heightSize) {
    int rights[heightSize];
    rights[heightSize - 1] = 0;
    int maxLeft = 0;
    int volume = 0;

    for (int i = heightSize - 2; i >= 0; i--) {
        rights[i] = MAX(height[i + 1], rights[i + 1]);
    }

    for (int i = 0; i < heightSize; i++) {
        int water = MIN(maxLeft, rights[i]) - height[i];
        if (water > 0) {
            volume += water;
        }

        maxLeft = MAX(maxLeft, height[i]);
    }

    return volume;
}
```
``` cpp []
class Solution {
public:
    int trap(vector<int>& height) {
        vector<int> right(height.size(), 0);
        int volume = 0;
        int maxLeft = 0;

        for (int i = height.size() - 2; i >= 0; i--) {
            right[i] = max(height[i + 1], right[i + 1]);
        }

        for (int i = 0; i < height.size(); i++) {
            int water = min(maxLeft, right[i]) - height[i];
            if (water > 0) {
                volume += water;
            }
            maxLeft = max(maxLeft, height[i]);
        }

        return volume;
    }
};
```
``` javascript []
var trap = function(height) {
    var rights = Array(height.length).fill(0);
    var maxLeft = 0;
    var volume = 0;

    for (var i = height.length - 2; i >= 0; i--) {
        rights[i] = Math.max(rights[i + 1], height[i + 1]);
    }

    for (var i = 0; i < height.length; i++) {
        var water = Math.min(maxLeft, rights[i]) - height[i];
        if (water > 0) {
            volume += water;
        }

        maxLeft = Math.max(maxLeft, height[i]);
    }

    return volume;
};
```
``` php []
class Solution {
    function trap($height) {
        $rights = array_fill(0, count($height), 0);
        $maxLeft = 0;
        $volume = 0;

        for ($i = count($height) - 2; $i >= 0; $i--) {
            $rights[$i] = max($rights[$i + 1], $height[$i + 1]);
        }

        for ($i = 0; $i < count($height); $i++) {
            $water = min($maxLeft, $rights[$i]) - $height[$i];
            if ($water > 0) {
                $volume += $water;
            }

            $maxLeft = max($maxLeft, $height[$i]);
        }

        return $volume;
    }
}
```
``` golang []
func min(x, y int) int {
    if x < y {
        return x
    }
    return y
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}

func trap(height []int) int {
    rights := make([]int, len(height))
    maxLeft := 0
    volume := 0

    for i := len(height) - 2; i >= 0; i-- {
        rights[i] = max(rights[i + 1], height[i + 1])
    }

    for i := 0; i < len(height); i++ {
        volume += max(0, min(maxLeft, rights[i]) - height[i])
        maxLeft = max(maxLeft, height[i])
    }

    return volume
}
```
``` rust []
use std::cmp;

impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        let mut right = vec![0; height.len()];
        let mut volume = 0;
        let mut maxLeft = 0;

        for i in (0..height.len() - 1).rev() {
            right[i] = cmp::max(right[i + 1], height[i + 1]);
        }

        for i in (0..height.len()) {
            let water = cmp::min(maxLeft, right[i]) - height[i];
            if water > 0 {
                volume += water;
            }
            maxLeft = cmp::max(maxLeft, height[i]);
        }

        return volume;

    }
}
```
``` ruby []
def trap(height)
    rights = Array.new(height.length, 0)
    maxLeft = volume = 0

    (0 .. height.length - 2).reverse_each do |i|
        rights[i] = [rights[i + 1], height[i + 1]].max
    end

    height.each_index do |i|
        volume += [0, [maxLeft, rights[i]].min - height[i]].max
        maxLeft = [maxLeft, height[i]].max
    end

    return volume
end
```
``` racket []
(define (trap height)
  (let ([rights (foldr (lambda (a r) (cons (max a (car r)) r)) '(0) height)])
    (let loop ([height height]
               [rights rights]
               [maxLeft 0]
               [volume 0])
      (cond [(null? height) volume]
            [else (loop (cdr height) (cdr rights) (max maxLeft (car height)) (+ volume (max 0 (- (min maxLeft (car rights)) (car height)))))]))))
```

\uD83D\uDC4D