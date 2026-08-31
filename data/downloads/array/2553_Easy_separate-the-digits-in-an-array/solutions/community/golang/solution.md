# Go away Solution

**Author:** GokuUltra
**Votes:** 2
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/4385679/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/4385679/)

---


# Code
```
func separateDigits(nums []int) []int {
    var val string
    res:=[]int{} 
    for _,i:=range nums{
        val=strconv.Itoa(i)
        for j:=0;j<len(val);j++{
            int_val, _ := strconv.Atoi(val[j:j+1])
            res=append(res,int_val)
        }

    }
    return res
}
```