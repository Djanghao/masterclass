# ✅ the best solution in 10 languages

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5397738/](https://leetcode.com/problems/three-consecutive-odds/solutions/5397738/)

---


# Code
``` java []
class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int count = 0;
        for (int val : arr) {
            if (val % 2 == 0) {
                count = 0;
            } else {
                count++;
            }
            if (count == 3) return true;
        }

        return false;
    }
}
```
``` python []
class Solution(object):
    def threeConsecutiveOdds(self, arr):
        count = 0
        for val in arr:
            if val % 2 == 0:
                count = 0
            else:
                count += 1
            
            if count == 3:
                return True
        return False
```
``` c []
bool threeConsecutiveOdds(int* arr, int arrSize) {
    int count = 0; 
    for (int i = 0; i < arrSize; i++) {
        if (arr[i] % 2 == 0) {
            count = 0;
        } else {
            count++;
        }

        if (count == 3) return true;
    }

    return false;
}
```
``` cpp []
class Solution {
public:
    bool threeConsecutiveOdds(vector<int>& arr) {
        int count = 0;
        for (int i = 0; i < arr.size(); i++) {
            if (arr[i] % 2 == 0) {
                count = 0;
            } else {
                count++;
            }

            if (count == 3) return true;
        }

        return false;
    }
};
```
``` javascript []
var threeConsecutiveOdds = function(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count = 0;
        } else {
            count++;
        }

        if (count == 3) return true;
    }

    return false;
};
```
``` php []
class Solution {
    function threeConsecutiveOdds($arr) {
        $count = 0;
        foreach ($arr as $val) {
            if ($val % 2 == 0) {
                $count = 0;
            } else {
                $count++;
            }

            if ($count == 3) return true;
        }

        return false;
    }
}
```
``` golang []
func threeConsecutiveOdds(arr []int) bool {
    count := 0
    for _, val := range arr {
        if val % 2 == 0 {
            count = 0
        } else {
            count++
        }

        if count == 3 {
            return true
        }
    }

    return false
}
```
``` ruby []
def three_consecutive_odds(arr)
    count = 0
    arr.each do |val|
        if val % 2 == 0
            count = 0
        else
            count += 1
        end

        return true if count == 3
    end

    false
end
```
``` rust []
impl Solution {
    pub fn three_consecutive_odds(arr: Vec<i32>) -> bool {
        let mut count = 0;
        for val in arr {
            if val % 2 == 0 {
                count = 0;
            } else {
                count += 1;
            }

            if count == 3 {
                return true;
            }
        }

        return false;
    }
}
```
``` kotlin []
class Solution {
    fun threeConsecutiveOdds(arr: IntArray): Boolean {
        var count = 0;
        for (item in arr) {
            if (item % 2 == 0) {
                count = 0;
            } else {
                count++;
            }

            if (count == 3) return true;
        }

        return false;
    }
}
```
``` racket []
(define (three-consecutive-odds arr [count 0])
    (match arr
        [_ #:when (eq? count 3) #t]
        [(list head tail ...) (three-consecutive-odds tail (if (odd? head) (add1 count) 0))]
        ['() #f]))
```
