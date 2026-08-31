# ✅ O(n) solution explained in java | go | python | javascript | c | php | ruby | racket

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5181425/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5181425/)

---


You don't need ```edges``` since ```(u1 xor k) xor k = u1```
Therefore, in a sequence ```u1 -> u2 -> u3``` we can skip ```u2 xor k``` as it doesn't change. We do ```xor``` only for ```u1``` and ```u3```.

Additionally, in a tree graph, we can reach any node from any other node.

To achieve the maximum, we need to xor ```nums``` in pairs and choose the pairs that yield the highest value. We can use a greedy approach. The ```edges``` are no longer needed.


We'll consider all ```nums[i] xor k``` that increase the sum. In other words ```(nums[i] xor k) - nums[i]``` (diff) must be positive. 
We'll also count how many such ```nums[i]``` we've selected. If the ```count``` is even, it means all selected ```nums[i]``` are paired; if it's odd, we'll need to adjust the final sum by adding or subtracting somw value to make it even. We'll subtract the node with the smallest positive diff.


Actually, There are 3 main scenarios
1. The count is even. All selected elements are in pairs. Return sum.
2. The count is odd. We've selected one extra node and need to xor it back. We choose the value with the smallest positive diff and subtract the difference from the sum.
3. The count is odd, and we need to add some node with a negative difference. We choose the value closest to zero.

Scenarios 2 and 3 can be simplified by taking the minimum difference:  ```minDiff = min(abs(diff), minDiff)```


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
``` java []
class Solution {
    public long maximumValueSum(int[] nums, int k, int[][] edges) {
        long sum = 0;
        int count = 0;
        long minDiff = Integer.MAX_VALUE;

        for (int val : nums) {
            int diff = (val ^ k) - val;
            if (diff > 0) {
                sum += val ^ k;
                count++;
            } else {               
                sum += val;
            }
            minDiff = Math.min(Math.abs(diff), minDiff);
        }

        if (count % 2 == 0) {
            return sum;
        } else {
            return sum - minDiff;
        }
    }
}
```
``` c []
long min(int a, int b) {
   return a < b ? a : b;
}

long long maximumValueSum(int* nums, int numsSize, int k, int** edges, int edgesSize, int* edgesColSize) {
    long sum = 0;
    int count = 0;
    long minDiff = INT_MAX;

    for (int i = 0; i < numsSize; i++) {
        int diff = (nums[i] ^ k) - nums[i];
        if (diff > 0) {
            sum += nums[i] ^ k;
            count++;
        } else {
            sum += nums[i];
        }

        minDiff = min(abs(diff), minDiff);       
    }

    if (count % 2 == 0) {
        return sum;
    } else {
        return sum - minDiff;
    }
}
```
``` python []
class Solution(object):
    def maximumValueSum(self, nums, k, edges):
        sum = 0
        count = 0
        minDiff = float('inf')

        for val in nums:
            diff = (val ^ k) - val
            if diff > 0:
                sum += val ^ k
                count += 1
            else:
                sum += val
            
            minDiff = min(abs(diff), minDiff)
        
        if count % 2 == 0:
            return sum
        else:
            return sum - minDiff
```
``` javascript []
var maximumValueSum = function(nums, k, edges) {
    var sum = 0;
    var count = 0;
    var minDiff = Number.MAX_VALUE;

    for (var i = 0; i < nums.length; i++) {
        var diff = (nums[i] ^ k) - nums[i];
        if (diff > 0) {
            sum += nums[i] ^ k;
            count++;
        } else {
            sum += nums[i];
        }

        minDiff = Math.min(Math.abs(diff), minDiff);
    }

    return count % 2 == 0 ? sum : sum - minDiff;
};
```
``` php []
class Solution {
    function maximumValueSum($nums, $k, $edges) {
        $sum = 0;
        $count = 0;
        $minDiff = PHP_INT_MAX;

        foreach ($nums as $val) {
            $diff = ($val ^ $k) - $val;
            if ($diff > 0) {
                $sum += $val ^ $k;
                $count++;
            } else {
                $sum += $val;
            }

            $minDiff = min(abs($diff), $minDiff);
        }

        return $count % 2 == 0 ? $sum : $sum - $minDiff;
    }
}
```
``` golang []
func maximumValueSum(nums []int, k int, edges [][]int) int64 {
    var sum int64
    sum = 0
    count := 0
    minDiff := 1000000

    for _, val := range nums {
        diff := (val ^ k) - val
        if diff > 0 {
            sum += int64(val ^ k)
            count++
            if minDiff > diff {
                minDiff = diff
            }
        } else {
            sum += int64(val)
            if minDiff > -diff {
                minDiff = -diff
            }
        }
    }

    if count % 2 == 0 {
        return sum
    } else {
        return sum - int64(minDiff)
    }
}
```
``` ruby []
def maximum_value_sum(nums, k, edges)
    sum = 0
    count = 0
    minDiff = 1000000

    nums.each do |val|
        diff = (val ^ k) - val
        if diff > 0
            sum += val ^ k
            count += 1
        else
            sum += val
        end

        minDiff = [minDiff, diff.abs()].min()
    end

    return count % 2 == 0 ? sum : sum - minDiff
end
```
``` racket []
(define (max-sum nums k)
    (let while ([nums nums]
                [count 0]
                [sum 0]
                [minDiff 1000000])
        (if (null? nums) (values sum count minDiff)
            (let* ([val (car nums)]
                   [xorVal (bitwise-xor val k)]
                   [diff (- xorVal val)])
                (if (> diff 0)
                    (while (cdr nums) (add1 count) (+ sum xorVal) (min minDiff diff))
                    (while (cdr nums) count (+ sum val) (min minDiff (abs diff))))))))

(define (maximum-value-sum nums k edges)
    (call-with-values (lambda () (max-sum nums k)) (lambda (sum count minDiff)
        (if (even? count) sum (- sum minDiff)))))
```
