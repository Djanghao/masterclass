# Ruby solution

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/4160214/](https://leetcode.com/problems/find-in-mountain-array/solutions/4160214/)

---

# Code
```ruby []
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# class MountainArray
#    def get(index):
#       
#    end
#
#    def length()
#		
#	 end
# end

# @param {int} int
# @param {MountainArray} mountain_arr
# @return {int}
def findInMountainArray(target, mountain_arr)
  @mountain_arr = mountain_arr
  @target = target
  @length = mountain_arr.length
  
  max_height_index = find_max_height_index

  check_increasing_part(max_height_index) || check_decreasing_part(max_height_index) || -1
end

def find_max_height_index
  (1...@length).bsearch do |index|
    previous_height, current_height,  = [@mountain_arr.get(index - 1), @mountain_arr.get(index)]
    previous_height > current_height
  end - 1
end

def check_increasing_part(max_height_index)
  (0..max_height_index).bsearch do |index|
    @target <=> @mountain_arr.get(index)
  end
end

def check_decreasing_part(max_height_index)
  (max_height_index...@length).bsearch do |index|
    @mountain_arr.get(index) <=> @target 
  end
end

```