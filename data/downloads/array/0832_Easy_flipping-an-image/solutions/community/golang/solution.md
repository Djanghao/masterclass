# One pass with Go

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/2469608/](https://leetcode.com/problems/flipping-an-image/solutions/2469608/)

---

```
func flipAndInvertImage(image [][]int) [][]int {
    flip := func(a int) int {
        if a == 0 {
            return 1
        }
        
        return 0
    }
    
    for row := 0; row < len(image); row++ {
        l, r := 0, len(image[row])-1
        
        for l < r {
            image[row][l], image[row][r] = flip(image[row][r]), flip(image[row][l])
            l++
            r--
        }
        
        if l == r {
            image[row][r] = flip(image[row][r])
        }
    }
    
    return image
}
```