# Ruby DFS/recursion, beats 90% with explanation (and a question for others!)

**Author:** kenhufford
**Votes:** 4
**Link:** [https://leetcode.com/problems/flood-fill/solutions/626776/](https://leetcode.com/problems/flood-fill/solutions/626776/)

---

1. This is a perfect problem to solve recursively/use DFS.  We know we want to take any adj pixels and change their colors if the color of that pixel matches the first pixel's color.
2. The first base case (image[sr][sc] == new_color) exists to make sure we skip any case where our first click is on a "new_color" pixel. We can just return since it's already correctly filled.
3. When we fill, we want to check to make sure the pixel is the right color, then change the color.  
4. The conditionals check if the location for up, down, left and right are in bounds.  I've used a dirs array and helper method for checking in bounds before and for some reason, this seems to have the best performance.  Last week, I had a HackerRank tech screen and this implementation passed but the in-bounds helper method had a stack overflow on the super long test case.  To be honest, I'm not entirely sure why it should make a difference so if anyone knows, I'd love to hear it.

```
def flood_fill(image, sr, sc, new_color)
    return image if image[sr][sc] == new_color 
    fill(image, sr, sc, new_color, image[sr][sc])
    return image
end

def fill(image, sr, sc, new_color, old_color)
    return if image[sr][sc] != old_color
    image[sr][sc] = new_color
    fill(image, sr-1, sc, new_color, old_color) if sr > 0 
    fill(image, sr, sc-1, new_color, old_color) if sc > 0 
    fill(image, sr+1, sc, new_color, old_color) if sr < image.length-1
    fill(image, sr, sc+1, new_color, old_color) if sc < image[0].length-1
end
```