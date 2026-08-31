# golang, bottom up dp, 20-40ms

**Author:** mraufc
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/1840094/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/1840094/)

---

```
const mod int = 1_000_000_007
const maxWidth int = 10

func buildWall(height int, width int, bricks []int) int {
    
    // Eliminate useless bricks.
    var tmpBricks []int
    for _, b := range bricks {
        if b <= width {
            tmpBricks = append(tmpBricks, b)
        }
    }
    bricks = tmpBricks
    
    // Find all possible valid layers.
    // For a width of 4 and bricks of [1 2 3] the result should be:
    // [[1 1 1 1] [2 1 1] [1 2 1] [3 1] [1 1 2] [2 2] [1 3]]
    var m [maxWidth+1][][]int
    allPossibleLayers := brickPermutationsForWidth(width, bricks, m)
    
    
    // Find where the join points (or cracks) are for the above list of valid layers.
    // For [1 1 1 1], join points are [1 2 3];
    // Similarly, for [2 1 1], join points are [2 3];
    // and so on.
    // For simplicity, I will be using a fixed sized (of max width) array of booleans per valid layer, 
    // but feel free to denote this with just one integer per layer with bitmask
    // [1 1 1 1] -> [false true true true false false false false false false]
    // [2 1 1] -> [false false true true false false false false false false]
    // [1 2 1] -> [false true false true false false false false false false]
    // [3 1] -> [false false false true false false false false false false]
    // [1 1 2] -> [false true true false false false false false false false]
    // [2 2] -> [false false true false false false false false false false]
    // [1 3] -> [false true false false false false false false false false]
    rmap := make([][maxWidth]bool, len(allPossibleLayers))
    for i, layer := range allPossibleLayers {
        sum := 0
        for _, brick := range layer {
            sum += brick
            if sum < width {
                rmap[i][sum] = true
            }
        }
    }

    // By using the above information, construct a compatibility matrix.
    // If layer i can be on top of or under layer j then they are compatible.
    // Technically this is not a matrix, this is just bad naming since I am skipping i and j pairs that are not compatible.
    // An example of incompatible layers:
    // i: 0, [1 1 1 1] -> [false true true true false false false false false false]
    // j: 1, [2 1 1] -> [false false true true false false false false false false]
    // Layer 0 and layer 1 are incompatible since they have join points at 2 (and also 3)
    // An example of compatible layers:
    // i: 5, [2 2] -> [false false true false false false false false false false]
    // j: 6, [1 3] -> [false true false false false false false false false false]
    // Layer 5 and layer 6 are not both true at the same location, thus they are compatible
    // Overall:
    // [[] [6] [5] [4 5 6] [3] [2 3 6] [1 3 5]]
    compMatrix := make([][]int, len(allPossibleLayers))
    for i, r1 := range rmap {
        for j, r2 := range rmap {
            if isCompatible(r1, r2) {
                compMatrix[i] = append(compMatrix[i], j)
            }
        }
    }
    
    // The question is, how many times can a valid layer appear at the top row?
    // If the above question is answered per layer, then the sum of those numbers will be the answer.
    // At height of 1, each of the valid layers can appear once.
    // The data structure that I am using is just a slice that denotes for each valid layer, how many times it appears per height
    // mem[currentHeight-1] = [1 1 1 1 1 1 1] means, layer 0 through 6 can appear once at height 1
    mem := make([][]int, height)
    mem[0] = make([]int, len(allPossibleLayers))
    for i := 0; i < len(allPossibleLayers); i++ {
        mem[0][i] = 1
    }
    
    // Iterate over previous height's data and calculate number of times a valid layer can appear at this height:
    // [1 1 1 1 1 1 1] means each layer has appeared once in the previous layer.
    // Remembering the compatibility "matrix" that was built above:
    // Layer 0 is not compatible with anything, so if a wall begins with layer 0, nothing can be built on top of it.
    // Layer 1 -> appears once and compatible with [6], it will contribute to number of appearances of [6] at next layer by 1.
    // Layer 2 -> appears once and compatible with [5], it will contribute to number of appearances of [5] at next layer by 1.
    // Layer 3 -> appears once and compatible with [4 5 6], it will contribute to number of appearances of [4 5 6] at next layer by 1.
    // Layer 4 -> appears once and compatible with [3], it will contribute to number of appearances of [3] at next layer by 1.
    // Layer 5 -> appears once and compatible with [2 3 6], it will contribute to number of appearances of [2 3 6] at next layer by 1.
    // Layer 6 -> appears once and compatible with [1 3 5], it will contribute to number of appearances of [1 3 5] at next layer by 1.
    // As a result, at height 2, layer 0 will appear 0 times, layer 1 will appear once, layer 3 will appear 3 times, and so on. Hence:
    // mem[1] = [0 1 1 3 1 3 3]
    // Applying the above step again, at height 2:
    // Layer 0 is not compatible with anything, so it does not appear at height 2.
    // Layer 1 -> appears once and compatible with [6], it will contribute to number of appearances of [6] at next layer by 1.
    // Layer 2 -> appears once and compatible with [5], it will contribute to number of appearances of [5] at next layer by 1.
    // Layer 3 -> appears 3 times and compatible with [4 5 6], it will contribute to number of appearances of [4 5 6] at next layer by 3.
    // Layer 4 -> appears once and compatible with [3], it will contribute to number of appearances of [3] at next layer by 1.
    // Layer 5 -> appears 3 times and compatible with [2 3 6], it will contribute to number of appearances of [2 3 6] at next layer by 3.
    // Layer 6 -> appears 3 times and compatible with [1 3 5], it will contribute to number of appearances of [1 3 5] at next layer by 3.
    // As a result at height 3, layer 1 will appear 3 times, layer 6 appears 7 times and so on.
    // mem[2] = [0 3 3 7 3 7 7] 
    // Applying the above step for height 3:
    // Layer 0 is not compatible with anything, so it does not appear at height 3.
    // Layer 1 -> appears 3 times and compatible with [6], it will contribute to number of appearances of [6] at next layer by 3.
    // Layer 2 -> appears 3 times and compatible with [5], it will contribute to number of appearances of [5] at next layer by 3.
    // Layer 3 -> appears 7 times and compatible with [4 5 6], it will contribute to number of appearances of [4 5 6] at next layer by 7.
    // Layer 4 -> appears 3 times and compatible with [3], it will contribute to number of appearances of [3] at next layer by 3.
    // Layer 5 -> appears 7 times and compatible with [2 3 6], it will contribute to number of appearances of [2 3 6] at next layer by 7.
    // Layer 6 -> appears 7 times and compatible with [1 3 5], it will contribute to number of appearances of [1 3 5] at next layer by 7.
    // As a result at height 3, layer 1 will appear 7 times, layer 5 appears 17 times and so on.
    // mem[3] = [0 7 7 17 7 17 17]]
    for i := 1; i < height; i++ {
        mem[i] = make([]int, len(allPossibleLayers))
        for layer, count := range mem[i-1] {
            compatibleLayers := compMatrix[layer]
            for _, compatibleLayer := range compatibleLayers {
                mem[i][compatibleLayer] += count
                mem[i][compatibleLayer] %= mod
            }
        }
    }
    var ans int
    for _, v := range mem[height-1] {
        ans += v
        ans %= mod
    }
    return ans
}

func isCompatible(r1, r2 [maxWidth]bool) bool {
    for i := 0; i < maxWidth; i++ {
        if r1[i] && r2[i] {
            return false
        }
    }
    return true
}


func brickPermutationsForWidth(width int, bricks []int, m [maxWidth+1][][]int) [][]int {
    if r := m[width]; r != nil {
        rcp := make([][]int, len(r))
        for i, l := range r {
            lcp := make([]int, len(l))
            copy(lcp, l)
            rcp[i] = lcp
        }
        
        return rcp
    }
    if width == 0 {
        return [][]int{[]int{}}
    }
    var res [][]int
    for _, b := range bricks {
        if b > width {
            continue
        } 
        cp := brickPermutationsForWidth(width-b, bricks, m)
        for _, c := range cp {
            c = append(c, b)
            res = append(res, c)
        }
    }
    m[width] = res
    return res
}
```