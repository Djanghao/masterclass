# Ruby BruteForce

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/2666044/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/2666044/)

---

```
def count_k_difference(nums, k)
    counter = 0 
    (0...nums.size-1).each do |i|
        (i+1...nums.size).each do |j|
            (nums[i] - nums[j]).abs == k ? counter += 1 : next
        end
    end
    counter
end
```