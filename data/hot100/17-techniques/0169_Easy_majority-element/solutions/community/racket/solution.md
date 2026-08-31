# ✅ O(n) O(1) solution Java || JavaScript || Python || Go || PHP || Racket

**Author:** codeninja8
**Votes:** 1
**Link:** [https://leetcode.com/problems/majority-element/solutions/4715291/](https://leetcode.com/problems/majority-element/solutions/4715291/)

---

# Code
```java []
class Solution {
    public int majorityElement(int[] nums) {
        int major = nums[0];
        int count = 1;

        for (int i = 1; i < nums.length; i++) {
            if (major == nums[i]) {
                count++;
            } else if (count > 0) {
                count--;
            } else {
                major = nums[i];
                count++;
            }
        }

        return major;
    }
}
```
```javascript []
var majorityElement = function(nums) {
    var major = nums[0];
    var count = 1;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] == major) {
            count++;
        } else if (count > 0) {
            count--;
        } else {
            major = nums[i];
            count++;
        }
    }

    return major;
};
```
```golang []
func majorityElement(nums []int) int {
    major := nums[0];
    count := 1

    for i := 1; i < len(nums); i++ {
        if major == nums[i] {
            count++;
        } else if count > 0 {
            count--;
        } else {
            major = nums[i];
            count++;
        }
    }

    return major;
}
```
```python []
class Solution(object):
    def majorityElement(self, nums):
        major = nums[0]
        count = 1
        for i in range(1, len(nums)):
            if nums[i] == major:
                count += 1
            elif count > 0:
                count -= 1
            else:
                major = nums[i]
                count = 1
        return major
```
```php []
class Solution {
    function majorityElement($nums) {
        $major = $nums[0];
        $count = 1;

        for ($i = 1; $i < sizeof($nums); $i++) {
            if ($nums[$i] == $major) {
                $count++;
            } else if ($count > 0) {
                $count--;
            } else {
                $major = $nums[$i];
                $count++;
            }
        }

        return $major;
    }
}
```
``` c []
int majorityElement(int* nums, int numsSize) {
    int count = 1;
    int major = nums[0];

    for (int i = 1; i < numsSize; i++) {
        if (major == nums[i]) {
            count++;
        } else if (count > 0) {
            count--;
        } else {
            major = nums[i];
            count++;
        }
    }

    return major;
}
```
``` cpp []
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int major = -1;
        int count = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == major) {
                count++;
            } else if (count > 0) {
                count--;
            } else {
                major = nums[i];
                count++;
            }
        }

        return major;
    }
};
```
``` csharp []
public class Solution {
    public int MajorityElement(int[] nums) {
        int major = nums[0];
        int count = 0;
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] == major) {
                count++;
            } else if (count == 0) {
                major = nums[i];
            } else {
                count--;
            }
        }

        return major;
    }
}
```
``` ruby []
def majority_element(nums)
    count = 0
    major = nums[0]
    nums.each do |val|
        if val == major
            count += 1
        elsif count > 0
            count -= 1
        else
            major = val
            count += 1
        end
    end

    return major
end
```
``` rust []
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut major = nums[0];
        let mut count = 0;
        for val in nums {
            if val == major {
                count += 1;
            } else if count > 0 {
                count -= 1;
            } else {
                major = val;
                count += 1;
            }
        }

        return major;
    }
}
```
```racket []
(define (majority-element nums)
  (car (foldl (lambda (val acc)
           (let ([major (car acc)]
                 [count (cdr acc)])
             (cond [(eq? major val) (cons major (add1 count))]
                   [(> count 0) (cons major (sub1 count))]
                   [else (cons val 1)])))
         (cons (car nums) 0) nums)))
```
