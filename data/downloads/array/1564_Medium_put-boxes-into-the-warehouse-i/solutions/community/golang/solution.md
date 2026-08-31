# Golang solution faster than 100% with explanation and images

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1176686/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1176686/)

---

[1564. Put Boxes Into the Warehouse I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/)

The idea of this solution is:
* We sort `boxes`.
* Then, we make an array called `minimums`, and put the minimum values of `warehouse` from left to right into the array. If you don't understand, look at the following images: ![](https://i.imgur.com/O8cQYXz.jpg)
* Then we can just look from `len(minimums) - 1` to `0` and check whether `minimums[i] >= boxes[boxCounter]` we can go to the next box, other wise we continue going through the loop until `minimums[i] >= boxes[boxCounter]`.
* Then we can return `boxCounter` because `boxCounter = the number of boxes we have boxes we have fitted in`.


``` go
func maxBoxesInWarehouse(boxes []int, warehouse []int) int {
    boxCounter := 0
    sort.Ints(boxes)
    minimums := []int{warehouse[0]}

    for i := 1; i < len(warehouse); i++ {
        if minimums[i - 1] > warehouse[i] {
            minimums = append(minimums, warehouse[i])
        } else {
            minimums = append(minimums, minimums[i - 1])
        }
    }

    for i := len(minimums) - 1; i >= 0; i-- {
        if boxCounter == len(boxes) {
            break
        }
        if minimums[i] >= boxes[boxCounter] {
            boxCounter++
        }
    }

    return boxCounter
}
```