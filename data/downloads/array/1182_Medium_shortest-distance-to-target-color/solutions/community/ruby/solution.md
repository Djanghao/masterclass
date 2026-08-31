# pre calc shortest distances for all positions

**Author:** phahX0ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/3293666/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/3293666/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Pre calculate shortest distances. Trade time with space
# Approach
<!-- Describe your approach to solving the problem. -->
build a hash map for each possible queries

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} colors
# @param {Integer[][]} queries
# @return {Integer[]}
def shortest_distance_color(colors, queries)
    color_info={}
    colors.each_with_index do |c, i|
        color_info[c] ||= { i:[], d:{}  }
        color_info[c][:i] << i
    end

    #pre-calc distances from :i array
    color_info.each_pair do |c, info|
        info[:i].each_with_index do |i, idx|
            color_info[c][:d][i]=0
            if idx > 0
                last=info[:i][idx-1]
                #fill the distance from last to current
                (last+1..i-1).each do |j|
                     color_info[c][:d][j]=[(j-last),(i-j)].min
                end
            end
        end
    end

    queries.map do |q|
        index=q.first
        color=q.last
        if color_info[color].nil?
            -1
        elsif  color_info[color][:d][index]
            color_info[color][:d][index]
        elsif  index > color_info[color][:i].last
            index - color_info[color][:i].last
        elsif  index < color_info[color][:i].first
             color_info[color][:i].first - index
        else
            raise "somthing is wrong, can not handle #{q}"
        end    
    end
    
end


```