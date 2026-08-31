# Ruby Short, Simple, Fast with Explanation (Dynamic programming)

**Author:** kenhufford
**Votes:** 2
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/620823/](https://leetcode.com/problems/trapping-rain-water/solutions/620823/)

---

1. What do we need to solve the depth for each index? We need to know it's left boundary, right boundary and it's own height.
2. We can solve this problem in O(n) time if we take one pass from left to right and one from right to left.  
3. We can find the left boundary by iterating across and saving the index's leftMax in an array.  Then we set a new leftMax using the height at that index.
4. When we go from right to left, we can do the same thing for the rightMax, but instead of making a third pass, we have all the info we need.  We can take the minimum of the left and right max at that position and the depth to find the trapped water.
5. Note: I tried doing reverse_each.with_index for the right-to-left loop but was sadly disappointed that it doesn't work.  You can do an index loop for each as it looks cleaner but I just wanted to point it out.  

```
def trap(height)
    maxes = Array.new(height.length)
    leftMax = 0
    rightMax = 0
    total = 0
    height.each.with_index do |h,i|
        maxes[i] = leftMax
        leftMax = [leftMax,h].max
    end
    (0...height.length).reverse_each do |i|
        depth = [maxes[i], rightMax].min - height[i]
        if depth > 0
            total+=depth
        end
        rightMax = [rightMax, height[i]].max
    end
    total
end
```