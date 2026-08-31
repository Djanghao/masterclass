# Golang O(n) easy solution

**Author:** alishagupta262
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/5907107/](https://leetcode.com/problems/beautiful-towers-ii/solutions/5907107/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func maximumSumOfHeights(maxHeights []int) int64 {
    
  
    left := make([]int, len(maxHeights))
    right:= make([]int, len(maxHeights))

    for i:=0 ; i < len(maxHeights); i++ {
        left[i] = -1
        right[i] = -1
    }
    stack := make([]int, 0)
    for i:= 0 ; i < len(maxHeights) ; i++ {

        if len(stack) == 0 {
            stack = append(stack, i)
        }

        if len(stack) > 0{
            // top := stack[len(stack)-1]
            for len(stack)>0 && maxHeights[stack[len(stack)-1]] >= maxHeights[i]{

                stack = stack[:len(stack)-1]
                // top = stack[len(stack)-1]

            }

            if len(stack) > 0 {
                left[i] = stack[len(stack)-1]
            }
        }

        stack = append(stack,i)

    }

    // fmt.Println(left)


    stack = make([]int, 0)
    for i:= len(maxHeights)-1 ; i >= 0 ; i-- {

        if len(stack) == 0 {
            stack = append(stack, i)
        }

        if len(stack) > 0{
            // top := stack[len(stack)-1]
            for len(stack)>0 && maxHeights[stack[len(stack)-1]] >= maxHeights[i]{

                stack = stack[:len(stack)-1]
                // top = stack[len(stack)-1]

            }

            if len(stack) > 0 {
                right[i] = stack[len(stack)-1]
            }
        }

        stack = append(stack,i)

    }

    maxSum := -1
    leftSum := make([]int, len(maxHeights))
    rightSum := make([]int, len(maxHeights))

    for i:=0 ; i < len(maxHeights); i++ {

        prevSmaller := left[i]
    
        if prevSmaller != -1 {

            leftSum[i] = leftSum[prevSmaller] + maxHeights[i]*(i-prevSmaller)

        }else{
            leftSum[i] = maxHeights[i]*(i+1)
        }

    }

   num := len(maxHeights)
    for j:= len(maxHeights)-1 ; j>=0 ; j-- {

        nextSmaller := right[j]

        if nextSmaller != -1 {

        rightSum[j] = rightSum[nextSmaller] + maxHeights[j]*(nextSmaller-j)

        }else{
            rightSum[j] = maxHeights[j]*(num-j)
        }
    }


    for i:= 0 ; i < num ; i++ {
        sumVal := leftSum[i] + rightSum[i] - maxHeights[i]
        if sumVal > maxSum {
            maxSum = sumVal
        }
    }
    return int64(maxSum)
}
```