# [Java/C++/Python/JavaScript/Kotlin]1LINE O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/1977609/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/1977609/)

---

***Java***
```
class Solution {
    public int findClosestNumber(int[] nums) {
       int smallestDis = nums[0];
        
            for (int j = 1; j < nums.length; j++) {

                if (Math.abs(smallestDis) == (nums[j])){
                    smallestDis = nums[j];
                }
                if(Math.abs(nums[j]) < Math.abs(smallestDis)){
                    smallestDis = nums[j];
                }
            }
        return smallestDis;
    }
}
```

***Python***
```
class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        m = 10 ** 6
        for i in nums:
            x = abs(i-0)
            if x < m:
                m = x
                val = i
            elif x == m and val < i:
                val = i
        return val
```

***C++***
```
class Solution {
public:
    int findClosestNumber(vector<int>& nums) {
    return *min_element(begin(nums), end(nums), [](int a, int b) {
        return abs(a) < abs(b) || (abs(a) == abs(b) && a > b);
    });
}
};
```

***JavaScript***
```
var findClosestNumber = function(nums) {
  let closest = Infinity;

  for (let num of nums) {
    if (Math.abs(num) < Math.abs(closest)) {
      closest = num
    } else if (Math.abs(num) === Math.abs(closest)) {
      closest = Math.max(num, closest)
    }
  }

  return closest;
};
```

***Kotlin***
```
import kotlin.math.abs

class Solution {
    fun findClosestNumber(nums: IntArray): Int {
        var closest: Int? = null
        for (num in nums) {
            if (closest == null) {
                closest = num
            } else {
                if (abs(num) < abs(closest)) {
                    closest = num
                } else if (abs(num) == abs(closest)) {
                    if (num > closest) {
                        closest = num
                    }
                }
            }
        }
        return closest!!
    }
}
```

***Consider upvote if useful!***