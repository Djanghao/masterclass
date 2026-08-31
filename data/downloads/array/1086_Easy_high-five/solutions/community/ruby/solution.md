# Ruby using minHeap

**Author:** tomplummer
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-five/solutions/5467268/](https://leetcode.com/problems/high-five/solutions/5467268/)

---

# Code
```
def down(nums)
  i = 0

  while i * 2 + 1 < nums.size
    smaller = i * 2 + 1
    right = i * 2 + 2

    smaller = right if right < nums.size && nums[right] < nums[smaller]

    break unless nums[i] > nums[smaller]

    nums[i], nums[smaller] = nums[smaller], nums[i]
    i = smaller
  end
end

def high_five(items)
  students = []

  items.each do |s, n|
    students[s] = [] if students[s].nil?
    if students[s].size < 5
      students[s].unshift n
    elsif n > students[s][0]
      students[s][0] = n
    end

    down students[s]
  end

  output = []

  students.each_with_index do |k, v|
    output << [v, k.sum / 5] unless k.nil?
  end

  output
end
```