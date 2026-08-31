# Ruby: All boxes have the same size.

**Author:** user9697N
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1186440/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1186440/)

---

## Leetcode: 1710. Maximum Units on a Truck.


**Ruby: All boxes have the same size.**

All boxes have the same size but contain different amount of units, need to sort boxes so ones with maximum amount of units are first, and start to pick up them into the truck saving amout of units loaded. 

Ruby code:
```Ruby
# Leetcode: 1710. Maximum Units on a Truck.
# https://leetcode.com/problems/maximum-units-on-a-truck/
# Runtime: 52 ms, faster than 100.00% of Ruby online submissions for Maximum Units on a Truck.
# Memory Usage: 210.3 MB, less than 96.30% of Ruby online submissions for Maximum Units on a Truck.
# Thanks God!
# @param {Integer[][]} box_types
# @param {Integer} truck_size
# @return {Integer}
def maximum_units(box_types, truck_size)
    x = box_types.sort_by{|(a,b)| -b}
    count = 0
    x.each do |(n,units)|
        if truck_size >= n
            truck_size -= n
            count += (n*units)
        else
            count += truck_size * units
            break
        end
    end
    count
end
```

