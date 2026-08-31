# Ruby solution O(n)-Stack-Solution

**Author:** nischay_dhiman
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-fleet-ii/solutions/1226617/](https://leetcode.com/problems/car-fleet-ii/solutions/1226617/)

---

This answer is ruby version of solution submitted by [lee215](https://leetcode.com/problems/car-fleet-ii/discuss/1085987/JavaC%2B%2BPython-O(n)-Stack-Solution)
```
def get_collision_times(cars) 
        stack = []
        n = cars.length()
        res = [-1] * n
        (n-1).step(0, -1) do |i|
            
            p, s = cars[i]
            
            while 
                stack.length > 0 && 
                (
                    s <= cars[stack[-1]][1] || 
                    ((cars[stack[-1]][0] - p) / (s - cars[stack[-1]][1]).to_f) >= res[stack[-1]] && 
                    res[stack[-1]] > 0
                ) 
                
                stack.pop()
            end
            if stack.length > 0 
                res[i] = (cars[stack[-1]][0] - p) / (s - cars[stack[-1]][1]).to_f
            end
            stack.push(i)
        end
        return res
    end
```
