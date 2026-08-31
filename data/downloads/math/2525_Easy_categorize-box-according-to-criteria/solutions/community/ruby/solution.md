# Simple logical statements

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4864830/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/4864830/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer} length
# @param {Integer} width
# @param {Integer} height
# @param {Integer} mass
# @return {String}
def categorize_box(length, width, height, mass)
    bulky_dimension = 10000
    bulky_volume = 1000000000
    heavy = mass >= 100 ? true : false
    volume = length * width * height 

    if length >= bulky_dimension || width >= bulky_dimension || height >= bulky_dimension || volume >= bulky_volume
        if heavy 
            return "Both"
        else
            return "Bulky"
        end
    else
        if heavy
            return "Heavy"
        else
            return "Neither"
        end
    end


end
```