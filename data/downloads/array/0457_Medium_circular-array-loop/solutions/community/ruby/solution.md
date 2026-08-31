# Slow and fast pointers approach

**Author:** ChengSeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/3040001/](https://leetcode.com/problems/circular-array-loop/solutions/3040001/)

---

For every num, go through the path until a cycle / different direction had been meet. If there is cycle and no change in direction, we find our answer.
```ruby
def circular_array_loop(nums)
  nums.each_with_index do |num, i|
    slow = i
    fast = i
    is_forward = (num > 0)
    
    loop do
      slow = next_index(slow, nums, is_forward)
      fast = next_index(fast, nums, is_forward)
      fast = next_index(fast, nums, is_forward) unless fast == -1
    
      break if slow == -1 || fast == -1 || slow == fast
    end
    
    return true if slow == fast && fast != -1
  end

  false
end

def next_index(index, nums, is_forward)
  curr_direction = (nums[index] > 0)

  return -1 unless curr_direction == is_forward

  next_index = index + nums[index]
  next_index += nums.length while next_index.negative?
  next_index %= nums.length

  return -1 if next_index == index

  next_index
end
```

Optimization?
If there is no cycle for this path, walk through it again and mark those as 0.
I don't see any improvement on performance though..
```ruby
def circular_array_loop(nums)
  nums.each_with_index do |num, i|
    next if num == 0

    slow = i
    fast = i
    is_forward = (num > 0)
    
    loop do
      slow = next_index(slow, nums, is_forward)
      fast = next_index(fast, nums, is_forward)
      fast = next_index(fast, nums, is_forward) unless fast == -1
    
      break if slow == -1 || fast == -1 || slow == fast
    end
    
    return true if slow == fast && fast != -1
    
    slow = i
    
    until next_index(slow, nums, is_forward) == -1
      temp_next = next_index(slow, nums, is_forward)
      nums[slow] = 0
      slow = temp_next
    end
  end

  false
end
```