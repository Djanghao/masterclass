# ✅✅ Beats 100% || RUBY || Easy to understand || 🔥🔥 883. Projection Area of 3D Shapes

**Author:** poojalmokariya
**Votes:** 2
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3949024/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3949024/)

---

# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def projection_area(grid)
    xy = grid.flatten.select{|x| x > 0}.size
    xz = grid.map{|x| x.max}.sum
    yz = grid.transpose.map{|x| x.max}.sum
    xy+xz+yz
end
```