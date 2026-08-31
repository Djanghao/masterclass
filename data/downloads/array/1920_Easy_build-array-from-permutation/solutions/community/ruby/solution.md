# Ruby two one-liner solutions

**Author:** erichelouise
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/3285912/](https://leetcode.com/problems/build-array-from-permutation/solutions/3285912/)

---

## Better runtime
```
def build_array(nums)
    nums.map.with_index { |n, i| nums[nums[i]] }
end
```

## Better memory
```
def build_array(nums)
    nums.map { |n| nums[n] }
end
```