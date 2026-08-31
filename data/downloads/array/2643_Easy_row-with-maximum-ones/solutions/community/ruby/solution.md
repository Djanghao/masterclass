# Simple Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/5911833/](https://leetcode.com/problems/row-with-maximum-ones/solutions/5911833/)

---

# Code
```ruby []
# @param {Integer[][]} mat
# @return {Integer[]}
def row_and_maximum_ones(mat, highest=0, indexOfArray=0,numberOfOnes=0)
    mat.each_with_index do |a,i|
        numberOfOnes = a.count(1)
        if numberOfOnes > highest
        indexOfArray = i
        highest = numberOfOnes 
        end
    end
    return [indexOfArray, highest]
end
```