# Ruby Small, and Easy to Understand Solution, faster than 92.00%

**Author:** alexandrenog
**Votes:** 1
**Link:** [https://leetcode.com/problems/triangle/solutions/2451806/](https://leetcode.com/problems/triangle/solutions/2451806/)

---

```
def minimum_total(triangle)
    cost,last_cost=nil,nil
    triangle.size.times do |i|
        cost = triangle[triangle.size - i -1] # take each line from bottom-up
        cost.size.times{|j| cost[j]+=[last_cost[j],last_cost[j+1]].min} if( i > 0)
        last_cost=cost
    end
    cost.first
end
```