# Seedhi baat no bakwas

**Author:** daminibhatta
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313644/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313644/)

---

# Intuition
Since it is a medium level question, we cannot have O(n2) T.c.
So to have O(N) t.c. we need to change the given condition of 
nums[i]+rev(nums[j]) to something which has only one variable instead of two.

# Approach
a + rev b =  rev a + b
a + rev b - rev a = b
a - rev a = b - rev b

with this, we can say that the difference of nums[i]- rev(nums[i]) should be equal to nums[j]- rev(nums[j]).


So we create a map to store these differences.
dictReverse:=make(map[int]int)

Now for every difference that we get, we will check if this already existing in our dictionary, which means we have encountered a pair, so we increase our pair count.

We add the entry of this diff in our dictionary or increase its value if it already exists.
 dictReverse[diff]+=1
# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
func reverseNum(num int)int{
    base:=10
    ans:=0
    for num>0{
        ans=ans*base+(num%base)
        num=num/base
    }
    return ans
}
func countNicePairs(nums []int) int {
    if(len(nums)<2){
        return 0
    }
    dictReverse:=make(map[int]int)
    countPairs:=0 
    moduloNumber := 1_000_000_007
    for i:=0;i<len(nums);i++{
        diff:= nums[i] - reverseNum(nums[i])
        if existingPairs,ok:=dictReverse[diff];ok{
            countPairs+=existingPairs
        }
        dictReverse[diff]+=1
    }
    return countPairs%moduloNumber
}
```