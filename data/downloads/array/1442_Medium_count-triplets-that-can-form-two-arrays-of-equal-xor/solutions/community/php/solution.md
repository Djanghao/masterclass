# ✅ XOR solution in 10 languages

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5678934/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5678934/)

---

The idea is that if `a == b` then `a ^ b = 0`.
To solve the problem, we need to find a subarray where `xor` sum of the elements equals to `0`.

Number of subarrays is calculated as `count += right - left`. 
Explanation:
Let's say we have an array where `xor == 0` of `length`. With respect to the conditions of the problem, we can split it into subarrays in `length - 1` ways. 

Example:
We have an array `[2, 3, 1]` where `2 ^ 3 ^ 1 = 0` and the length is `3`.
This array can be split in 2 ways: `[2, 3], [1]` and `[2], [3, 1]`
The length of the arrays is `right - left + 1` or `j - i + 1`. Subtract `1` and we get our formula `count += j - i`

# Code
``` java []
class Solution {
    public int countTriplets(int[] arr) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            int xor = 0;
            for (int j = i; j < arr.length; j++) {
                xor ^= arr[j];
                if (xor == 0) count += j - i;
            }
        }

        return count;
    }
}
```
``` c []
int countTriplets(int* arr, int arrSize) {
    int count = 0;
    for (int i = 0; i < arrSize; i++) {
        int xor = 0;
        for (int j = i; j < arrSize; j++) {
            xor ^= arr[j];
            if (xor == 0) count += j - i;
        }
    }

    return count;
}
```
``` cpp []
class Solution {
public:
    int countTriplets(vector<int>& arr) {
        int rs = 0;
        for (int i = 0; i < arr.size(); i++) {
            int x0r = 0;
            for (int j = i; j < arr.size(); j++) {
                x0r ^= arr[j];
                if (x0r == 0) {
                    rs += j - i;
                }
            }
        }

        return rs;
    }
};
```
``` python []
class Solution(object):
    def countTriplets(self, arr):
        count = 0
        for i in range(len(arr)):
            xor = 0
            for j in range(i, len(arr)):
                xor ^= arr[j]
                if xor == 0:
                    count += j - i
        return count
```
``` javascript []
var countTriplets = function(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var xor = 0;
        for (var j = i; j < arr.length; j++) {
            xor ^= arr[j];
            if (xor == 0) count += j - i;
        }
    }

    return count;
};
```
``` php []
class Solution {
    function countTriplets($arr) {
        $count = 0;
        for ($i = 0; $i < count($arr); $i++) {
            $xor = 0;
            for ($j = $i; $j < count($arr); $j++) {
                $xor ^= $arr[$j];
                if ($xor == 0) $count += $j - $i;
            }
        }

        return $count;
    }
}
```
``` golang []
func countTriplets(arr []int) int {
    count := 0
    for i := 0; i < len(arr); i++ {
        xor := 0
        for j := i; j < len(arr); j++ {
            xor ^= arr[j]

            if (xor == 0) {
                count += j - i
            }
        }
    }

    return count
}
```
``` ruby []
def count_triplets(arr)
    count = 0
    arr.each_index do |i|
        xor = 0
        (i..(arr.length - 1)).each do |j|
            xor ^= arr[j]
            count += j - i if xor == 0
        end
    end

    return count

end
```
``` rust []
impl Solution {
    pub fn count_triplets(arr: Vec<i32>) -> i32 {
        let mut rs = 0;
        for i in 0..arr.len() {
            let mut xor = arr[i];
            for j in (i + 1)..arr.len() {
                xor ^= arr[j];
                if xor == 0 {
                    rs += j - i;
                }
            }
        }

        return rs as i32;
    }
}
```
```racket []
(define (count0 xor lst len)
    (match lst
        [(list head tail ...) 
            #:when (zero? (bitwise-xor xor head)) 
                (+ len (count0 (bitwise-xor xor head) tail (add1 len)))]
        [(list head tail ...) (count0 (bitwise-xor xor head) tail (add1 len))]
        [otherwise 0]))

(define (count-triplets arr)
    (match arr
        [(list head tail ...) (+ (count0 head tail 1) (count-triplets tail))]
        [otherwise 0]))
```