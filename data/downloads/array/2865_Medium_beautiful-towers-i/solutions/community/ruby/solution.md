# Stack Solution, O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/5441111/](https://leetcode.com/problems/beautiful-towers-i/solutions/5441111/)

---

Precompute left and right sum using stack and then add left and right vals by index in inverted index fashion.

# Code
```
# @param {Integer[]} heights
# @return {Integer}
def maximum_sum_of_heights(heights)

    l = find_peaks heights
    r = find_peaks heights.reverse

    l.prepend(0)
    max = 0
    i = 0
    j = r.size - 1
    while i < l.size - 1
        sum = l[i] + r[j]
        max = [sum, max].max
        i += 1
        j -= 1
    end
    max
end

def find_peaks heights
    peaks = []
    stack = []
    i = 0
    
    sum = 0
    while i < heights.size
        height = heights[i]
        count = 1
        while stack[-1] and height <= stack[-1][0]
            old_height, old_count = stack.pop
            sum -= old_height * old_count
            count += old_count
        end

        stack << [height, count]
        sum += height * count
        peaks << sum
        i += 1
    end
    peaks
end
```