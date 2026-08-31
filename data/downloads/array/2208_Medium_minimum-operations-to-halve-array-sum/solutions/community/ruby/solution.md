# Working Array Solution + MaxHeap Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/4813076/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/4813076/)

---

halves should always be in sorted order from high to low because everytime we half and append to halves, its of the highest num available.

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def halve_array(nums)
    nums.sort!
    sum = nums.sum
    goal = sum/2.to_f
    halves = []
    count = 0
    while sum > goal
        if halves.size > 0
            if nums.last > halves.first
                num = nums.pop
            else
                num = halves.shift
            end
        else
            num = nums.pop
        end

       
        num /= 2.to_f
        sum -= num
        halves.push(num)
        count += 1
    end

    count
end
```

# MaxHeap should work in theory but library is too slow

# @param {Integer[]} nums
# @return {Integer}
def halve_array(nums)
    heap = MaxHeap.new(nums)
    sum = nums.sum
    goal = sum/2.to_f
    
    count = 0
    while sum > goal
        num = heap.max!
        num /= 2.to_f
        sum -= num
        heap.push(num)
        count += 1
    end

    count
end