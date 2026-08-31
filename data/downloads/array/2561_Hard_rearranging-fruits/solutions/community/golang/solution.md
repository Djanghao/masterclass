# Go/Python O(n*log(n) time | O(n) space

**Author:** vtalantsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/3148316/](https://leetcode.com/problems/rearranging-fruits/solutions/3148316/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` golang []
func minCost(basket1 []int, basket2 []int) int64 {
    c1 := make(map[int]int)
    for _,num := range(basket1){
        c1[num]+=1
    }

    c2 := make(map[int]int)
    for _,num := range(basket2){
        c2[num]+=1
    }
    
    for key,value := range(c1){
        if (value + c2[key]) % 2 == 1{
            return -1
        }
    }

    for key,value := range(c2){
        if (value + c1[key]) % 2 == 1{
            return -1
        }
    }

    b1 := []int{}
    for key,value := range(c1){
        if value > c2[key]{
            tmp := []int{}
            for i:=0;i<((value-c2[key])/2);i++{
                tmp = append(tmp,key)
            }
            b1 = append(b1,tmp...)
        }
    }
    
    b2 := []int{}
    for key,value := range(c2){
        if value > c1[key]{
            tmp := []int{}
            for i:=0;i<((value-c1[key])/2);i++{
                tmp = append(tmp,key)
            }
            b2 = append(b2,tmp...)
        }
    }

    min_item := min(min_in_array(basket1),min_in_array(basket2))
    
    sort.Ints(b1)
    sort.Ints(b2)

    cost := 0
    for len(b1) > 0{
        x := min(popleft(&b1),pop(&b2))
        cost+=min(x,min_item*2)
    }
    return int64(cost)
}

func min_in_array(array []int) int{
    min_item := array[0]
    for i:=1;i<len(array);i++{
        min_item = min(min_item,array[i])
    }
    return min_item
}

func min(a,b int) int{
    if a<b{
        return a
    }
    return b
}

func popleft(array *[]int) int{
    item := (*array)[0]
    *array = (*array)[1:]
    return item
}

func pop(array *[]int) int{
    n := len(*array)
    item := (*array)[n-1]
    *array = (*array)[:n-1]
    return item
}
```
```python []
class Solution:
    def minCost(self, basket1: List[int], basket2: List[int]) -> int:
        c1 = defaultdict(int)
        for num in basket1:
            c1[num]+=1

        c2 = defaultdict(int)
        for num in basket2:
            c2[num]+=1
        
        for key,value in c1.items():
            if (value + c2[key]) % 2:
                return -1
        
        for key,value in c1.items():
            if (value + c1[key]) % 2:
                return -1

        b1 = []
        for key,value in c1.items():
            if value > c2[key]:
                b1.extend([key]*((value-c2[key])//2))
        
        b2 = []
        for key,value in c2.items():
            if value > c1[key]:
                b2.extend([key]*((value-c1[key])//2))

        min_item = min(min(basket1),min(basket2))
        
        b1 = deque(sorted(b1))
        b2 = deque(sorted(b2))
        
        cost = 0
        while b1:
            x = min(b1.popleft(),b2.pop())
            cost+=min(x,min_item*2)
        return cost
```
