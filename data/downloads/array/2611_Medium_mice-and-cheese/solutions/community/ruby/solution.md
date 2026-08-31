# Heap Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/4977237/](https://leetcode.com/problems/mice-and-cheese/solutions/4977237/)

---


# Code
```
# @param {Integer[]} reward1
# @param {Integer[]} reward2
# @param {Integer} k
# @return {Integer}
def mice_and_cheese(reward1, reward2, k)
    
    if k == reward1.size
        return reward1.sum
    end

    if k == 0
        return reward2.sum
    end

    i = 0

    # We want k highest diffs 
    heap = MinHeap.new
    total = reward2.sum
    while i < reward1.size
        diff = reward1[i] - reward2[i] 
        if heap.size < k
            heap.push diff
            total += diff
        elsif heap.size == k and heap.min < diff
            total -= heap.min!
            heap.push diff
            total += diff
        end
        i += 1
    end   

    total
end
```