# ✅ sliding window in java | c | python | javascript | go | php | ruby | racket

**Author:** codeninja8
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4937073/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4937073/)

---



# Code
``` java []
class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        int maxLen = 0;
        Map<Integer, Integer> countMap = new HashMap<>();
        
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            countMap.put(nums[right], countMap.getOrDefault(nums[right], 0) + 1);

            while (countMap.getOrDefault(nums[right], 0) > k) {
                countMap.put(nums[left], countMap.get(nums[left]) - 1);
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
```
``` c []
int maxSubarrayLength(int* nums, int numsSize, int k) {
    int min = 1000000000;
    int max = 0;

    for (int i = 0; i < numsSize; i++) {
        if (min > nums[i]) {
            min = nums[i];
        }
        if (max < nums[i]) {
            max = nums[i];
        }
    }

    int *countMap = calloc(max - min + 1, sizeof(int));

    int maxLen = 0;
    int left = 0;

    for (int right = 0; right < numsSize; right++) {
        countMap[nums[right] - min]++;

        while (countMap[nums[right] - min] > k) {
            countMap[nums[left++] - min]--;
        }

        if (maxLen < right - left + 1) {
            maxLen = right - left + 1;
        }
    }

    free(countMap);

    return maxLen;
}
```
``` python []
class Solution(object):
    def maxSubarrayLength(self, nums, k):
        countMap = defaultdict(int)
        maxLen = 0
        left = 0

        for right in range(len(nums)):
            countMap[nums[right]] += 1

            while countMap[nums[right]] > k:
                countMap[nums[left]] -= 1
                left += 1
            
            maxLen = max(maxLen, right - left + 1)
        
        return maxLen
```
``` javascript []
var maxSubarrayLength = function(nums, k) {
    var countMap = new Map();
    var maxLen = 0;
    var left = 0;

    for (var right = 0; right < nums.length; right++) {
        countMap.set(nums[right], (countMap.get(nums[right]) || 0) + 1);

        while (countMap.get(nums[right]) > k) {
            countMap.set(nums[left], countMap.get(nums[left]) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
```
``` php []
class Solution {
    function maxSubarrayLength($nums, $k) {
        $maxLen = 0;
        $left = 0;
        $countMap = [];

        foreach ($nums as $right => $val) {
            $countMap[$val]++;

            while ($countMap[$val] > $k) {
                $countMap[$nums[$left++]]--;
            }

            $maxLen = max($maxLen, $right - $left + 1);
        }

        return $maxLen;
    }
}
```
``` golang []
func maxSubarrayLength(nums []int, k int) int {
    countMap := make(map[int]int)
    maxLen := 0
    left := 0

    for right, val := range nums {
        countMap[val]++

        for countMap[val] > k {
            countMap[nums[left]]--
            left++
        }

        if maxLen < right - left + 1{
            maxLen = right - left + 1
        }
    }

    return maxLen
}
```
``` ruby []
def max_subarray_length(nums, k)
    countMap = Hash.new(0)
    maxLen = 0
    left = 0

    nums.each_index do |right|
        countMap[nums[right]] += 1

        while countMap[nums[right]] > k
            countMap[nums[left]] -= 1
            left += 1
        end

        maxLen = [maxLen, right - left + 1].max
    end

    return maxLen
end
```
``` racket []
(define (max-subarray-length nums k)
  (let ([countMap (make-hash)]
        [nums (list->vector nums)]
        [maxLen 0]
        [left 0])
    (begin
      (for ([right (range (vector-length nums))])
        (begin
          (hash-set! countMap (vector-ref nums right) (add1 (hash-ref countMap (vector-ref nums right) 0)))

          (let while ()
            (cond [(> (hash-ref countMap (vector-ref nums right)) k)
                   (begin
                     (hash-set! countMap (vector-ref nums left) (sub1 (hash-ref countMap (vector-ref nums left))))
                     (set! left (add1 left))
                     (while))]
                  [else (set! maxLen (max maxLen (add1 (- right left))))]))))
                  
      maxLen)))
```

and while we have some time, let's speed up the java solution
``` java
class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        int maxLen = 0;
        Map<Integer, Integer> countMap = new HashMap<>();
        
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            int count = countMap.merge(nums[right], 1, Integer::sum);

            while (count > k) {
                if (nums[left] == nums[right]) {
                    count--;
                }
                countMap.merge(nums[left], 1, (oldVal, newVal) -> oldVal - 1);
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
```

and even more
``` java
class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        int maxLen = 0;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int val : nums) {
            min = Math.min(min, val);
            max = Math.max(max, val);
        }

        int[] countMap = new int[max - min + 1];
        
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            countMap[nums[right] - min]++;

            while (countMap[nums[right] - min] > k) {
                countMap[nums[left++] - min]--;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
```

hava a nice day