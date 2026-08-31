# Hashmap Solution O(M+N) - Easy Implementation !!!

**Author:** du32cy
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/5912838/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/5912838/)

---

# Code
```golang []
func findRestaurant(list1 []string, list2 []string) []string {
    smallerList := list1
    largerList := list2
    if min(len(list1), len(list2)) == len(list2){
        smallerList = list2
        largerList = list1
    }

    m := make(map[string]int)
    for i, str := range smallerList{
        m[str] = i 
    }

    res := make([]string, 0)
    minVal := len(largerList) + len(smallerList)
    for i, str := range largerList{
        if idx, exists := m[str]; exists{
            if idx+i < minVal{
                minVal = idx+i
                res = []string{str}
            } else if idx+i == minVal{
                res = append(res, str)
            }
        }
    }
    
    return res
}

func min(a, b int) int{
    if a < b{
        return a
    }
    return b
}
```