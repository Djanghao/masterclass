# ✅ O(n) solution explained in many languages 👍

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5465338/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5465338/)

---

# Intuition
Let's use the next considerations:

1. A subarray is divided by `k` when its remainder from division by `k` is `0`
2. The remainder of a subarray `[5, 0]` in the array `[4,5,0]` is `remainder([4,5,0]) - remainder([4])`. To be divided by `k` this sum has to be `0`.
3. The problem can be reduced to finding all the equal remainders and counting the combination of them
4. If the remainder is negative (it's possible in some languages add `k` to it)
5. All combinations of subarrays can be calculated by summing the counts in the circle. Do you need proof? (Write the comment below)

# Approach

So let's make an array `mem` of size `k` to count the remainders.
`mem[0] = 1;` because if the remainders is `0` we do not need to subtract anything. It means that subarrays is starting from 0 index of the array. So we set it to `1` to make sure that it's counted.

Calculate the remainder `mod` like this:
``` java
mod += val;
mod %= k;
if (mod < 0) {
    mod += k;
}
```

Add the amount of the current remainder to the answer and increment the `mem[mod]` by one.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(k)$$

# Code
``` java []
class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int[] mem = new int[k];
        int mod = 0;
        int res = 0;
        mem[0] = 1;
        for (int val : nums) {
            mod += val;
            mod %= k;
            if (mod < 0) {
                mod += k;
            }
            res += mem[mod]++;
        }

        return res;
    }
}
```
``` python []
class Solution(object):
    def subarraysDivByK(self, nums, k):
        prefSum = 0
        count = 0
        mem = [0] * k
        mem[0] = 1
        for val in nums:
            prefSum += val
            prefSum %= k
            count += mem[prefSum]            
            mem[prefSum] += 1
        return count
```
``` javascript []
var subarraysDivByK = function(nums, k) {
    var mem = Array(k).fill(0);
    var sum = 0;
    var count = 0;
    mem[0] = 1;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        var mod = sum % k;
        if (mod < 0) mod += k;
        count += mem[mod];
        mem[mod]++;
    }

    return count;
};
```
``` c []
int subarraysDivByK(int* nums, int numsSize, int k) {
    int* mem = calloc(k, sizeof(int));
    int mod = 0;
    int count = 0;
    mem[0] = 1;
    for (int i = 0; i < numsSize; i++) {
        mod += nums[i];
        mod %= k;
        if (mod < 0) mod += k;
        count += mem[mod];
        mem[mod]++;
    }
    
    return count;
}
```
``` cpp []
class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        vector<int> mem(k, 0);
        mem[0] = 1;
        int mod = 0;
        int res = 0;

        for (int i = 0; i < nums.size(); i++) {
            mod += nums[i];
            mod %= k;
            if (mod < 0) mod += k;
            res += mem[mod]++;
        }

        return res;
    }
};
```
``` php []
class Solution {
    function subarraysDivByK($nums, $k) {
        $mem = array_fill(0, $k, 0);
        $mem[0] = 1;
        $mod = 0;
        $count = 0;
        foreach ($nums as $val) {
            $mod += $val;
            $mod %= $k;
            if ($mod < 0) $mod += $k;
            $count += $mem[$mod];
            $mem[$mod]++;
        }

        return $count;
    }
}
```
``` golang []
func subarraysDivByK(nums []int, k int) int {
    mem := make([]int, k)
    mem[0] = 1
    mod := 0

    count := 0
    for _, val := range nums {
        mod += val
        mod %= k
        if mod < 0 {
            mod += k
        }
        count += mem[mod]
        mem[mod] += 1
    }

    return count
}
```
``` ruby []
def subarrays_div_by_k(nums, k)
    mem = Hash.new(0)
    mem[0] = 1
    mod = 0
    count = 0
    nums.each do |val|
        mod += val
        mod %= k
        count += mem[mod]
        mem[mod] += 1
    end
    return count
end
```
``` rust []
impl Solution {
    pub fn subarrays_div_by_k(nums: Vec<i32>, k: i32) -> i32 {
        let mut mem = vec![0; k as usize];
        mem[0] = 1;
        let mut prefSum = 0;
        let mut count = 0;
        for val in nums {
            prefSum += val;
            prefSum %= k;
            if prefSum < 0 {
                prefSum += k;
            }
            count += mem[prefSum as usize];
            mem[prefSum as usize] += 1;
        }

        return count;
    }
}
```
``` racket []
(define (subarrays-div-by-k nums k)
    (let ([mem (make-vector k)]
          [mod 0]
          [count 0])
        (begin
          (vector-set! mem 0 1)
          (for ([val nums])
            (begin
              (set! mod (remainder (+ mod val) k))
              (when (< mod 0) (set! mod (+ mod k)))
              (set! count (+ count (vector-ref mem mod)))
              (vector-set! mem mod (add1 (vector-ref mem mod)))))
          count)))

```