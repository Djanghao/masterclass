# Three Ruby solutions with O(n) space complexity

**Author:** divyad25
**Votes:** 3
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/389444/](https://leetcode.com/problems/shuffle-an-array/solutions/389444/)

---

```
class Solution
    def initialize(nums)
        @nums = nums
    end

	def reset()
        @nums
    end

    def shuffle()
      len = @nums.length
      shuffled_array = []
      while(shuffled_array.length != len)
        random_num = @nums.sample
        shuffled_array << random_num unless shuffled_array.include?(random_num)
      end
      shuffled_array
    end
end

```
**SWAPPING**
```
class Solution

    attr_accessor :nums, :len
    def initialize(nums)
        @nums = nums
        @len = nums.length
    end

    def reset()
        nums
    end

    def shuffle()
      shuffled_array = nums.clone
      (0...len).each { |i|
        random_idx = rand(i...len)
        shuffled_array[i], shuffled_array[random_idx] = shuffled_array[random_idx], shuffled_array[i]
      }
      shuffled_array
    end
end
```
**Without constructing shuffled array for each shuffle(To reduce time complexity)**
```
class Solution

    attr_accessor :nums, :len, :shuffled_array

    def initialize(nums)
        @nums = nums
        @len = nums.length
        @shuffled_array = @nums.clone
    end

    def reset()
        nums
    end

    def shuffle()
      (0...len).each { |i|
        random_idx = rand(i...len)
        shuffled_array[i], shuffled_array[random_idx] = shuffled_array[random_idx], shuffled_array[i]
      }
      shuffled_array
    end
end
```