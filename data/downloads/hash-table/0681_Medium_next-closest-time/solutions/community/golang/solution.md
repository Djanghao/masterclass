# Simply Go solution with explanation | beats 100% in time

**Author:** lixiaohelloworld
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/4909300/](https://leetcode.com/problems/next-closest-time/solutions/4909300/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. find available digits
2. use BFS to find all the possible combinations with available combinations
3. filter for any valid combination after start time but before the next day. if the start time is hh:mm, then we want any combinations hh':mm' such that hh*60+mm < hh' * 60 + mm' < 24*60
4. sort filtered combination to find the smallest one (cloest) if filtered set is not empty.
5. if filtered set is empty, we can use the smallest digit (guaranteed to be 0 or 1 or 2) to build the cloest time in the next day.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. O(4)
2. O(4^4)
3. O(4^4)
4. O(nlogn) ,n = 4^4
5. O(4)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
dominated by the possible combination
O(4^4)

# Code
```
func nextClosestTime(time string) string {
    split := strings.Split(time,  ":")
     h, _ := strconv. Atoi(split[0])
     m, _ := strconv.Atoi(split[1])
     start := h*60 + m
    digits := map[int]bool{}
    //available digits
    for i := 0; i < 5; i++{
        if i == 2{
            continue
        } else{
            d, _ := strconv.Atoi(string(time[i]))
            digits[d] = true
        }
    }
    // possible combinations
    combinations := [][]int{}
    for k, _ := range digits{
        combinations = append(combinations, []int{k})
    }
    nextC := [][]int{}
    for len(combinations) > 0 || len(nextC) > 0{
        if len(combinations) == 0{
            combinations = nextC
            nextC = [][]int{}
        }

        current := combinations[0]
        if len(current) == 4{
            break
        }
        combinations = combinations[1:]
        for k, _ := range digits{
            next := []int{}
            next  = append(next, current...)
            next = append(next, k)
            nextC = append(nextC, next)
        }
    }

    //find cominations after start time
    filtered := [][]int{}
    for _, c := range combinations{
        current := (c[0]*10+c[1])*60 + (c[2]*10+c[3])
        if current > start && current < 24*60 && c[2]<6 {
            c  = append(c, current)
            filtered = append(filtered, c)
        }
    }

    if len(filtered)> 0{
        sort.Slice(filtered, func (i, j int) bool{
            return filtered[i][4] < filtered[j][4]
        })
        f := filtered[0]
        return strconv.Itoa(f[0])+strconv.Itoa(f[1])+ ":"+strconv.Itoa(f[2])+ strconv.Itoa(f[3])
    }else {
        smallest := 10
        for k, _ := range digits{
            if k< smallest{
                smallest = k
            }
        }
        return strconv.Itoa(smallest)+strconv.Itoa(smallest)+ ":"+ strconv.Itoa(smallest)+strconv.Itoa(smallest)
    }
}
```