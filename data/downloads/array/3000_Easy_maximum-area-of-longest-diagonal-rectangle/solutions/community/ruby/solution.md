# Clean, readable & easy to understand 0(n) solution

**Author:** heccerA
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5047590/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5047590/)

---

# Code
```
# @param {Integer[][]} dimensions
# @return {Integer}
def area_of_max_diagonal(dimensions)
  max_area = 0
  max_diagonal = 0

  dimensions.each do |(side_a, side_b)|
    curr_diagonal = get_diagonal(side_a, side_b)
    curr_area = side_a * side_b

    if max_diagonal == curr_diagonal
      max_area = [max_area, curr_area].max
    end

    if max_diagonal < curr_diagonal 
      max_area = curr_area
      max_diagonal = curr_diagonal
    end
  end

  max_area
end

def get_diagonal(side_a, side_b)
  Math.sqrt((side_a ** 2) + (side_b ** 2))  
end

```