# simple and easy Javascript solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/5690217/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/5690217/)

---


# if it's help, please up \u2B06 vote! \u2764\uFE0F

###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var maximumBags = function(capacity, rocks, additionalRocks) 
{
    let arr = []
    for(let i in rocks)
        arr.push(capacity[i] - rocks[i])
    
    arr.sort((a, b) => a - b)
    let ans = 0
    for (let val of arr)
    {
        additionalRocks -= val
        if(additionalRocks < 0) break
        ans += 1
    }
    return ans
};
```