# Intuitive Solution by using Rotate Array Algo. (Kotlin) - O(MN) / O(1)

**Author:** hdh1326
**Votes:** 0
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1795168/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/1795168/)

---

A pre-requisite to this problem has to be the rotate-array problem. I directly used my solution for rotating an array in this problem. For that explanation go here: https://leetcode.com/problems/rotate-array/discuss/1792738/A-Different-Solution-(Kotlin)-O(n)-O(1)

Once we have a solution for rotating a linear array, we can then calculate the number of cells in a layer, and map the linear array indexes to their cyclical matrix index. The trickiest part of this solution is figuring out how to map the array index for a layer to a matrix index, and compensating for the layer offset.

```
class Solution {
    
    fun rotateGrid(grid: Array<IntArray>, k: Int): Array<IntArray> {
        if(grid.size > 1 && grid[0].size > 1){
            // Loops through all layers and rotates each one k times.
            val numLayers = calcNumberOfCyclicalLayers(grid.size, grid[0].size)
            for(layer in 0..numLayers-1){
                rotateLayer(grid, layer, k)
            }
        }
        return grid
    }
    
    // Calculates how many layers there are given the width and height of a matrix.
    fun calcNumberOfCyclicalLayers(w: Int, h: Int): Int = Math.min(w / 2, h / 2)
    
    // Will rotate a matrix layer k times. Layer indexing starts at 0.
    fun rotateLayer(grid: Array<IntArray>, layer: Int, k: Int): Array<IntArray> {
        
        val w = grid[0].size
        val h = grid.size
        val length = calcCyclicalArrayLength(w, h, layer)
        
        // Rotates a layer by swapping each cell with where it's supposed to go.
        // See https://leetcode.com/problems/rotate-array/discuss/1792738/A-Different-Solution-(Kotlin)-O(n)-O(1) for explanation.
        var swapIndex = 0
        var calcIndex = 0        
        for(i in 1..length){
            calcIndex = (calcIndex + k) % length
            if(swapIndex == calcIndex){
                swapIndex++
                calcIndex++
            }else{
                // Mapping the array indexes to their matrix indexes.
                grid.swap(
                    mapToMatrixIndex(swapIndex, w, h, layer), 
                    mapToMatrixIndex(calcIndex, w, h, layer)
                )
            }
        }
        
        return grid
    }
    
    // Maps an array index to the matrix index.
    fun mapToMatrixIndex(i: Int, w: Int, h: Int, layer: Int): Pair<Int, Int> {
        val length = calcCyclicalArrayLength(w, h, layer)
        val layerWidth = calcCyclicalLayerSize(w, layer)
        val layerHeight = calcCyclicalLayerSize(h, layer)
        if(length <= 0){
            return Pair(-1, -1)
        }else{
            var index = i % length
            // Maps to an index on the left side of a layer.
            if(index < layerHeight){
                return Pair(layer + index, layer)
            // Maps to an index on the bottom side of a layer.
            }else if(index < layerHeight + layerWidth - 1){
                index = index - layerHeight + 1
                return Pair(h - layer - 1, layer + index)
            // Maps to an index on the right side of a layer.
            }else if(index < layerHeight + layerWidth + layerHeight - 2){
                index = index - layerHeight - layerWidth + 2
                return Pair(h - 1 - layer - index, w - 1 - layer)
            // Maps to an index on the top side of a layer.
            }else{
                index = index - layerHeight - layerWidth - layerHeight + 3
                return Pair(layer, w - 1 - layer - index)
            }
        }
    }
    
    // Calculates the length of a linear array for a cyclical layer.
    // This is also the number of cells in the perimeter of a layer.
    fun calcCyclicalArrayLength(w: Int, h: Int, layer: Int): Int {
        val layerWidth = calcCyclicalLayerSize(w, layer)
        val layerHeight = calcCyclicalLayerSize(h, layer)
        return (layerWidth * 2) + (layerHeight * 2) - 4
    }
    
    // Calculates a dimension of a layer. 
    // For every 1 layer deep, 2 cells are removed. (1 cell on each side.)
    fun calcCyclicalLayerSize(s: Int, layer: Int): Int = s - (layer * 2)
    
    // Will swap the values of the two matrix indexes given.
    fun Array<IntArray>.swap(i: Pair<Int, Int>, j: Pair<Int, Int>) {
        val tmp = this[i.first][i.second]
        this[i.first][i.second] = this[j.first][j.second]
        this[j.first][j.second] = tmp
    }
}
```