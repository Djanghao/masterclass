# easy to understand code

**Author:** gvsrahul
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4844954/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4844954/)

---

# Intuition
Part 1
alterating values to be equal. so there is no relation between values next to each other. think of two arrays now. and goal is to make all elements in the array equal value.
So now just need to calculate the mode and identify number of values to change.(len(nums) - countOfModeValues)

Part 2
What if values of mode array 1 and mode of array 2 are same?
Then just get second max count of array 1, and second max count of array 2.
and get min value of (mode of array 1, second max mode of array 2) and (mode of array 2, second max mode of array 1)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n) iterating to array 5 times

- Space complexity:
O(n) storing whole array count sum

# Code
```
func minimumOperations(nums []int) int {
    oddCountMap := make(map[int]int)
    evenCountMap := make(map[int]int)
    for index, num := range nums {
        if index % 2 == 0 {
            evenCountMap[num]++
        } else {
            oddCountMap[num]++
        }
    }


    evenIndexMaxNum, evenIndexMaxCount := getMaxNumAndCount(evenCountMap)
    oddIndexMaxNum, oddIndexMaxCount := getMaxNumAndCount(oddCountMap)

    if evenIndexMaxNum != oddIndexMaxNum {
        return len(nums) - evenIndexMaxCount - oddIndexMaxCount
    }

    delete(evenCountMap, evenIndexMaxNum)
    delete(oddCountMap, oddIndexMaxNum)

    _, evenIndexMaxCount2 := getMaxNumAndCount(evenCountMap)
    _, oddIndexMaxCount2 := getMaxNumAndCount(oddCountMap)

    // keep odd, even2
    count1 := len(nums) - oddIndexMaxCount - evenIndexMaxCount2

    // keep odd2, even
    count2 := len(nums) - oddIndexMaxCount2 - evenIndexMaxCount
    if count1 < count2 {
        return count1
    }
    return count2
}

func getMaxNumAndCount(countMap map[int]int) (num int, count int) {
    for n, c := range countMap {
        if count < c {
            num, count = n, c
        }
    }
    return num, count
}
```