# go monostack

**Author:** PatrickShawn
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5691586/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5691586/)

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
```golang []
func validSubarraySize(nums []int, threshold int) int {
    // this question can be transformed to finding the largest rectangle within the histogram
    // because we need: nums[i] > threshold/k, which can be turned into nums[i] * k > threshold
    // nums[i] * k can be considered as a rectangle's area, where nums[i] is height and k is length
    // so if we can find a rectangle's area bigger than threshold then question is done
    // \u5047\u5982\u6211\u4EEC\u8981\u4EE5nums[i]\u4F5C\u4E3A\u77E9\u5F62\u7684\u9AD8\u5EA6, \u90A3\u4E48\u53EA\u8981\u5B83\u4E24\u8FB9\u7684\u6570\u6BD4\u5B83\u5927\uFF0Clength\u5C31\u53EF\u4EE5\u4E00\u76F4\u5411\u5916\u5EF6\u4F38
    // \u6240\u4EE5\u6211\u4EEC\u7684\u76EE\u7684\u5C31\u662F\u627E\u5230\u6BCF\u4E00\u4E2Anums[i]\u5B83\u5468\u56F4\u7B2C\u4E00\u4E2A\u6BD4\u5B83\u5C0F\u7684\u5143\u7D20\u7684index
    // \u95EE\u9898\u5C31\u53D8\u6210\u4E86\u4E4B\u524D\u505A\u7684\u5929\u6C14\u6298\u7EBF\u56FE\u90A3\u9053\u9898
    // use mono stacks twice
    // first loop to find previous first smaller element for each element
    // second one to find next first smaller element for each element


    ms := make([]int, 0)

    nextSmaller := make([]int, len(nums))
    // first loop\uFF0C\u6B63\u7740\u904D\u5386\u5C31\u662F\u5148\u6B20\u7740\u4E4B\u540E\u66F4\u65B0\u7B54\u6848\uFF0C\u5355\u8C03\u9012\u51CF\u6808
    for i := 0;i<len(nums);i++{
        for len(ms) > 0 && nums[ms[len(ms)-1]] > nums[i]{
            topIndex := ms[len(ms)-1]
            ms = ms[:len(ms)-1]

            nextSmaller[topIndex] = i - topIndex
        }

        ms = append(ms, i)
    }

    ms = make([]int, 0)

    previousSmaller := make([]int, len(nums))
    // second loop\uFF0C\u5012\u7740\u904D\u5386\uFF0C\u8FD8\u662F\u5355\u8C03\u9012\u589E\u6808
    for i:= len(nums)-1; i >= 0;i--{
        for len(ms) > 0 && nums[ms[len(ms)-1]] > nums[i]{
            topIndex := ms[len(ms)-1]
            ms = ms[:len(ms)-1]

            previousSmaller[topIndex] = topIndex - i
        }

        ms = append(ms, i)
    }

    // \u904D\u5386\u6BCF\u4E2A\u5143\u7D20\uFF0C\u8BA1\u7B97\u5B83\u6240\u80FD\u5F62\u6210\u7684\u6700\u5927\u77E9\u5F62\u9762\u79EF
    for i := range nums{
        toRight, toLeft := 0,0
        if nextSmaller[i] == 0{
            toRight = len(nums) - i - 1
        } else{
            toRight = nextSmaller[i] -1
        }

        if previousSmaller[i] == 0{
            toLeft = i
        } else{
            toLeft = previousSmaller[i]-1
        }
        k := toLeft + 1 + toRight
        area := k * nums[i]
        if area > threshold{
            return k
        } 
    }

    return -1

}
```