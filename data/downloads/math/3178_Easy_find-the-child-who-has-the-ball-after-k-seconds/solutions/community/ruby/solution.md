# Simple Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5691319/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5691319/)

---

First create an array of indexes at the length of n and set the starting direction. Loop k times adding or subtracting 1 from an index integer with an additional check to reverse the direction when the index reaches the array length or -1. 

Use the index value to return the correct item in your array.
# Code
```ruby []
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def number_of_child(n, k)
    array = []

    n.times do |i|
        array << i
    end
    direction = 'right'
    index = 0
    k.times do |i|
        if direction == 'right'
            index += 1
            if index == array.length
                direction = 'left'
                index -= 2
            end
        else
            index -= 1
                if index == -1
                    direction = 'right'
                    index += 2
                end
        end
    end
        return array[index]
end
```