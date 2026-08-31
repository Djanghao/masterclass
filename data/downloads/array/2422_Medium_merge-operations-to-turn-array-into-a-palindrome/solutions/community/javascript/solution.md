# [PHP/Swift/Kotlin/JavaScript/Dart/C] Two pointers

**Author:** NotTheSwimmer
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/2639112/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/2639112/)

---

# PHP
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumOperations($nums) {
        $ops = 0;
        $i = 0;
        $j = count($nums) - 1;
        while ($j > $i) {
            $l = $nums[$i];
            $r = $nums[$j];
            while ($l != $r && $i != $j) {
                if ($l < $r) {
                    $i++;
                    $l += $nums[$i];
                } else {
                    $j--;
                    $r += $nums[$j];
                }
                $ops++;
            }
            $i++;
            $j--;
        }
        return $ops;
    }
}
```

# Swift
```swift
class Solution {
    func minimumOperations(_ nums: [Int]) -> Int {
        var ops = 0, i = 0, j = nums.count - 1
        while j > i {
            var l = nums[i], r = nums[j]
            while l != r && i != j {
                if l < r {
                    i += 1
                    l += nums[i]
                } else {
                    j -= 1
                    r += nums[j]
                }
                ops += 1
            }
            i += 1
            j -= 1
        }
        return ops
    }
}
```

# Kotlin
```kotlin
class Solution {
    fun minimumOperations(nums: IntArray): Int {
        var ops = 0
        var i = 0
        var j = nums.size - 1
        while (j > i) {
            var l = nums[i]
            var r = nums[j]
            while (l != r && i != j) {
                if (l < r) {
                    i++
                    l += nums[i]
                } else {
                    j--
                    r += nums[j]
                }
                ops++
            }
            i++
            j--
        }
        return ops
    }
}
```

# JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ops = 0;
    let i = 0;
    let j = nums.length - 1;
    while (j > i) {
        let l = nums[i];
        let r = nums[j];
        while (l != r && i != j) {
            if (l < r) {
                i++;
                l += nums[i];
            } else {
                j--;
                r += nums[j];
            }
            ops += 1;
        }
        i++;
        j--;
    }
    return ops
};
```

# Dart
```dart
class Solution {
    int minimumOperations(List<int> nums) {
      var ops = 0;
      var i = 0;
      var j = nums.length - 1;
      while (j > i) {
        var l = nums[i];
        var r = nums[j];
        while (l != r && i != j) {
          if (l < r) {
            i++;
            l += nums[i];
          } else {
            j--;
            r += nums[j];
          }
          ops++;
        }
        i++;
        j--;
      }
      return ops;
    }
}
```

# C
```c
int minimumOperations(int* nums, int numsSize){
    int ops = 0;
    int i = 0;
    int j = numsSize - 1;
    while (j > i) {
        int64_t l = nums[i];
        int64_t r = nums[j];
        while (l != r && i != j) {
            if (l < r) {
                i++;
                l += nums[i];
            } else {
                j--;
                r += nums[j];
            }
            ops++;
        }
        if (j == 0) {
            break;
        }
        i++;
        j--;
    }
    return ops;
}
```