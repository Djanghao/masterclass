# beats 100%

**Author:** abhinvsinh
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/4646091/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/4646091/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxHeight(cuboids [][]int) int {
    for _,c := range cuboids{                //sort the dimensions of each cuboid
        sort.Ints(c)
    }

    sort.Slice(cuboids, func(i,j int)bool{     //sort the cuboids by their dimensions
        if cuboids[i][0]!= cuboids[j][0]{
            return cuboids[i][0]< cuboids[j][0]
        }
        if cuboids[i][1]!= cuboids[j][1]{
            return cuboids[i][1]< cuboids[j][1]
        }
        return cuboids[i][2]< cuboids[j][2]
    })

    res:=0
    table := make([]int,len(cuboids))

    for i:=0;i<len(cuboids);i++{
        table[i]=cuboids[i][2]             //base: if cuboids cannot be stacked, get the longest side of the longest cuboid
        res=max(res,table[i])

        for j:=0;j<i;j++{                  // check criteria: is j smaller than i
            if cuboids[j][0]> cuboids[i][0] ||  cuboids[j][1] > cuboids[i][1] || cuboids[j][2]>cuboids[i][2]{continue}  // j is big
            table[i]=max(table[i],table[j]+cuboids[i][2])
            res=max(res,table[i])
        }
    }
    return res
}
```