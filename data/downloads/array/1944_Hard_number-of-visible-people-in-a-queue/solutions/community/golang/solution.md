# MonoStack Solution In Go

**Author:** CharryLee0426
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/4508252/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/4508252/)

---

# Intuition
For these questions related to comparision relationship in a sequence, we should consider monostack first.

# Approach
1. Because everyone looks at his right side. For the last person, it is easy to know he can see 0 human on his right side. We should know we need to iterate the heights array from the last one to the first.
2. Everytime, u push one height into the stack. If the height u put is greater than the top element, then u pop this element until the top element is higher.
3. In the second process, u need a variable to keep the number of elements u pop because these elements are people u can see.
4. If the monostack after the process 2 and 3 is greater than 0, u need to add 1 to ur temp variable as the number this ppl can see.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func canSeePersonsCount(heights []int) []int {
    monoStack := []int{}
    res := make([]int, len(heights))

    for i := len(heights)-1; i >= 0; i-- {
        if len(monoStack) == 0 {
            // push
            monoStack = append(monoStack, heights[i])
            res[i] = 0
            continue
        }

        tmp := 0
        for len(monoStack) > 0 && monoStack[len(monoStack)-1] < heights[i] {
            // pop
            monoStack = monoStack[:len(monoStack)-1]
            tmp++
        }

        if len(monoStack) > 0 {
            tmp += 1
        }

        // push
        monoStack = append(monoStack, heights[i])
        res[i] = tmp
    }

    return res
}
```