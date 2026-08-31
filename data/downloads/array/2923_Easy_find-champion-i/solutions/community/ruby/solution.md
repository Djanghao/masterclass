# Simple Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/5849879/](https://leetcode.com/problems/find-champion-i/solutions/5849879/)

---


# Code
```ruby []
# @param {Integer[][]} grid
# @return {Integer}
def find_champion(grid)
    highest = 0
    iofhighest = 0
    grid.each_with_index do |arr,i|
        arrTotal = 0
        arr.each do |n|
            arrTotal += n
            if arrTotal > highest
            highest = arrTotal 
            iofhighest = i 
            end 
        end
    end
    return iofhighest 
end
```