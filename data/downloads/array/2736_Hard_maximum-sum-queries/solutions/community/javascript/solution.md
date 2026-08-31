# [JS] 330ms, 105mb desc sort sum, cache result

**Author:** dandice9
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-queries/solutions/4265154/](https://leetcode.com/problems/maximum-sum-queries/solutions/4265154/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
descending sort based on sum, realized that sort based on x or y will fail

# Approach
<!-- Describe your approach to solving the problem. -->
- eliminate queries that exceed max x or y
- search starting from highest max sum
- cache result, so next query dont have to search again

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumSumQueries = function(nums1, nums2, queries) {
    const result = []
    const maxs = []
    const memc = {}
    for(let i = 0; i < nums1.length; i++){
        let x = nums1[i], y = nums2[i]
        maxs.push({x, y})
    }
    maxs.sort((a, b) => (b.x + b.y) - (a.x + a.y))
    nums1.sort((a, b) => b-a)
    nums2.sort((a, b) => b-a)

    const mx = nums1[0]
    const my = nums2[0]

    for(let j = 0; j < queries.length; j++){
        const q = queries[j]
        const qx = q[0], qy = q[1]
        const ck = qx + "," + qy

        if(qx > mx || qy > my){
            memc[ck] = -1
            result.push(-1)
            continue;
        }

        if(memc[ck]){
            result.push(memc[ck])
            continue
        }

        result.push(-1)
        
        for(let i = 0; i < maxs.length; i++){
            const cs = maxs[i]
            if(qx <= cs.x && qy <= cs.y){
                memc[ck] = cs.x + cs.y
                result[result.length-1] = cs.x + cs.y
                break;
            }
        }
    }


    return result
};
```