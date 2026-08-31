# ruby

**Author:** feiwang1983
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/2812902/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/2812902/)

---


# Code
```
# @param {Integer[][]} grid
# @return {Integer[]}
def get_biggest_three(grid)
    m = grid.size
    n = grid[0].size
    l = [m,n].min
    i = 0
    ans = []
    while i*2+1 <= l      
        k = i
        for nn in (k...n-k)
            for mm in (k...m-k)
                temp = 0
                x = 1
                for r in (0..k*2)             
                    if r == 0 
                        temp += grid[mm-k+r][nn]                   
                    elsif r <= k and r >= 1
                        temp += grid[mm-k+r][nn-r] 
                        temp += grid[mm-k+r][nn+r]
                    
                    elsif r > k and r < k*2
                        # x = 1 if x == 0
                        temp += grid[mm-k+r][nn-k+x] 
                        temp += grid[mm-k+r][nn+k-x]
                        x += 1
                     
                    elsif r == k*2
                        temp += grid[mm-k+r][nn]
                    end 
                end 
                ans << temp
            end 
        end 
        i += 1     
    end
    ans.uniq.sort.reverse[0...3] 
end
```