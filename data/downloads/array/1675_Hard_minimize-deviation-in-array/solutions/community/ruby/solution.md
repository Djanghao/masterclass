# Ruby - Working with Priority Queue in Ruby, one approach

**Author:** shhavel
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/1053053/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/1053053/)

---

### Note about Priority Queues in Ruby

There are no built in Priority Queue in Ruby. If you need one can use initialy sorted array and use method `Array#bsearch_index` to find element.

### Optimization

Change odd numbers to even initially to have one type of tranformation -- divide any even number by two.

### Algorithm

Divide maximum number by two while its even each time check for `max - min` diff. When maximum is odd we stop: cannot decrease max num.

### Implementation

Store numbers in Priority Queue - sorted array. Pop max number, divide by two, put back in priority queue.
Here used helper method to put an element in ASC sorted array (sort of a min-heap), but we `pop` element from the end of an array.

```ruby
# Insert value into ASC sorted array (min-heap). Change to `y <= x` for max-heap.
def heappush(arr, x)
  idx = arr.bsearch_index { |y| y >= x } || arr.size
  arr.insert(idx, x)
end

def minimum_deviation(nums)
  (0...nums.size).each { |i| nums[i] *= 2 if nums[i].odd? }
  nums.sort!
  res = nums.last - nums.first

  while (mx = nums.pop).even?
    heappush(nums, mx / 2)
    res = [res, nums.last - nums.first].min
  end
  res
end
```

### Same with sort of a max-heap

Now sort array nums in descending order.
Change `y => x` to `y <= x`, `nums.pop` to `nums.shift` and `nums.last - nums.first` to `nums.first - nums.last`

```ruby
# Insert value into DESC sorted array (sort of a max-heap)
def heappush(arr, x)
  idx = arr.bsearch_index { |y| y <= x } || arr.size
  arr.insert(idx, x)
end

def minimum_deviation(nums)
  (0...nums.size).each { |i| nums[i] *= 2 if nums[i].odd? }
  nums.sort_by!(&:-@) # Same as `nums.sort!.reverse!`
  res = nums.first - nums.last

  while (mx = nums.shift).even?
    heappush(nums, mx / 2)
    res = [res, nums.first - nums.last].min
  end
  res
end
```

NOTE: this version gives TLE. Apparenlty `Array#pop` is faster then `Array#shift`

### One general approach (variant) to work with Priority Queue in Ruby

Two handy helper methods to work with ascending sorted array (sort of a min-heap)

```ruby
# Insert element into ASC sorted array.
def heappush(arr, x)
  idx = arr.bsearch_index { |y| (y <=> x) >= 0 } || arr.size
  arr.insert(idx, x)
end
# Remove element from ASC sorted array if the element is present.
def heappop(arr, x)
  idx = arr.bsearch_index { |y| (y <=> x) >= 0 }
  arr.delete_at(idx) if idx && arr[idx] == x
end
```

Same for descending sorted array

```ruby
# Insert element into DESC sorted array.
def heappush(arr, x)
  idx = arr.bsearch_index { |y| (y <=> x) <= 0 } || arr.size
  arr.insert(idx, x)
end
# Remove element from DESC sorted array if the element is present.
def heappop(arr, x)
  idx = arr.bsearch_index { |y| (y <=> x) <= 0 }
  arr.delete_at(idx) if idx && arr[idx] == x
end
```

### UPDATE: Another solution without Heap

Storing extracted maximums divided by 2 in another array `q`.

```ruby
def minimum_deviation(nums)
  nums.each_with_index {|x, i| nums[i] *= 2 if x.odd? }
  nums.sort!
  res = nums.last - nums.first
  q = []

  while [nums.last, q.first].compact.max&.even?
    if nums.any? && (q.empty? || q.first < nums.last)
      m = nums.pop
    else
      m = q.shift
    end
    q << m/2
    res = [res, [nums.last, q.first].compact.max - [nums.first, q.last].compact.min].min
  end
  res
end
```

Time complexity: `O(n * log n)`