# Golang & JavaScript [Bitmask+DP+DFS]

**Author:** stevenkinouye
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/961731/](https://leetcode.com/problems/minimum-incompatibility/solutions/961731/)

---

```go
type indicesAndIndex struct {
    indices []int
    index int
}

func minimumIncompatibility(nums []int, k int) int {
    // do some easy O(n) checks to see if we can return before the
    // major computation
    length := len(nums)
    
    // if there is only 1 number in each subset, we know the result is 0
    if length == k {
        return 0
    }
    
    // if the count of a value is more than the number of subsets
    // we know there will be repeating numbers in a subset so we return -1
    freqCount := make(map[int]int)
    for _, num := range nums {
        if count, ok := freqCount[num]; ok {
            if count == k {
                return -1
            } else {
                freqCount[num] = count + 1
            }
        } else {
            freqCount[num] = 1
        }
    }    
    
    // (aka memo, dp, /*python*/ @lru_cache)
    cache := make(map[int]int)
    numberOfElementsInBucket := length / k
    
    /* 
    BITWISE
    to store the number of elements used, we use bitwise which has a 0 or 1 value
    1 - means index was used
    0 - means index was not used
    */    
    // create a mask to indicate all indexes in `nums` were used
    allIndicesUsedMask := (1 << length) - 1
    // create a mask to indicate no indexes in `nums` were used
    currentUsedIndicesMask := 0
    
    return dfs(currentUsedIndicesMask, allIndicesUsedMask, numberOfElementsInBucket, &nums, &cache)
}

func dfs(currentUsedIndicesMask, allIndicesUsedMask, numberOfElementsInBucket int, nums *[]int, cache *map[int]int) int {
    // if we used all the values in nums, return 0
    if currentUsedIndicesMask == allIndicesUsedMask {
        return 0
    }
    
    // if the indicies used and unused is the same as a previous
    // DFS call, return the previous call because
    // we know we already have calculated the minimum incompatibility cost
    if val, ok := (*cache)[currentUsedIndicesMask]; ok {
        return val
    }
    
    // we add all indices to a slice for indicies that have not been used yet
    // and 'values' have not been used/seen (we only want unique values)
    // *note: we don't care which index of a value we get just as long as no 2 indices have the same value
    valsToIndices := make(map[int]bool)
    indices := make([]int, 0)
    for idx, val := range *nums {
        // if we already used the indices, skip this index
        if (currentUsedIndicesMask & (1 << idx)) != 0 {
            continue
        }
        // if we have not seen this value before, add it to the indices slice
        if _, ok := valsToIndices[val]; !ok {
            valsToIndices[val] = true
            indices = append(indices, idx)
        }
    }

    // create all different combinations of indices
    // *note: this is different from "permutations"
    combinations := createCombinations(&indices, numberOfElementsInBucket)
    
    // create a variable to store the minimum incompatibility cose
    // 99999 is just a place holder, you can replace this with MAX_INT
    minIncompatibilityCost := 99999
    
    /*
    for every combination
    - create a new mask by adding a 1 to every position of index
    - caculate the incompatibility cost by finding the max and min value
    - then call DFS again while adding the incompatibility cost to the returned value
    - compare the minimum of all the different costs
    */
    for i, _ := range combinations {
        indices := combinations[i]
        nextUsedIndicesMask := currentUsedIndicesMask
        minVal, maxVal := 9999, -9999 // values are from 0-16
        for _, index := range indices {
            val := (*nums)[index]
            minVal = minInt(minVal, val)
            maxVal = maxInt(maxVal, val)
            nextUsedIndicesMask = nextUsedIndicesMask | (1 << index)
        }
        incompatibilityCost := maxVal - minVal
        minIncompatibilityCost = minInt(minIncompatibilityCost,
                                        dfs(nextUsedIndicesMask, 
                                            allIndicesUsedMask, 
                                            numberOfElementsInBucket, 
                                            nums, 
                                            cache) + incompatibilityCost)
    }
    
    // store the cost into the cache so we don't need to compute this
    // state again
    (*cache)[currentUsedIndicesMask] = minIncompatibilityCost
    
    // return the cost
    return minIncompatibilityCost
}

func createCombinations(indices *[]int, combinationLen int) [][]int {
    n := len(*indices)
    combinations := make([][]int, 0)
    if n < combinationLen {
        return combinations
    }
    stack := []indicesAndIndex { { indices: []int{}, index: 0 } }
    m := 1
    for ; m > 0; m = len(stack) {
        idxsAndidx := stack[m - 1]
        stack = stack[:m - 1]
        idxs, i := idxsAndidx.indices, idxsAndidx.index
        o := len(idxs)
        for ; i < n; i++ {
            combination := make([]int, o, o + 1)
            copy(combination, idxs)
            combination = append(combination, (*indices)[i])
            if combinationLen == len(combination) {
                combinations = append(combinations, combination)
            } else {
                stack = append(stack, indicesAndIndex{ indices: combination, index: i + 1 })
            }
        }
    }
    return combinations
}

func minInt(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func maxInt(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

```javascript
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var minimumIncompatibility = function(nums, k) {
	////// FROM HERE TO
    if (nums.length === k) return 0;
    
    const maxInBucket = nums.length / k;
    const freqCount = {};
    for (const n of nums) {
        if (freqCount[n]) {
            if (freqCount[n] === k) {
                return -1
            } else {
                freqCount[n]++
            }
        } else {
            freqCount[n] = 1
        }
    }
	/////// HERE is just saving time
    
	// create a cache (aka memo, dp, dynamic programming, momoization)
    const cache = {}
	// create a mask to know when all the indicies are used
    const allIndiciesUsedMask = 2 ** nums.length - 1;
    
    const dfs = (usedIndicesBitMask) => {
	    // if we have used all the indicies then we return 0
        if (usedIndicesBitMask === allIndiciesUsedMask) {
            return 0;
        }
		// if we have seen this combination before, return the
		// result that was calculated before
		// otherwise do the hard work LOL
        if (cache[usedIndicesBitMask]) {
            return cache[usedIndicesBitMask];
        }
        
		// find all the indicies that are available to be used
		// skip duplicate values
        const valsToIndices = {};
        for (let i = 0; i < nums.length; i++) {
            const indexMask = 1 << i;
            if (usedIndicesBitMask & indexMask) continue;
            const value = nums[i];
            if (!valsToIndices.hasOwnProperty(value)) {
                valsToIndices[value] = i;
            }
        }
        const indicesAvailable = Object.values(valsToIndices);

        // this is hard to explain but it's basically calculating the minimum
		// cost while marking the indicies that are going to be used for each
		// combination
        let minIncompatibilityCost = Infinity;
        const combinations = createCombinations(indicesAvailable, maxInBucket);
        for (const indices of combinations) {
            let nextMask = usedIndicesBitMask;
            let minVal = Infinity;
            let maxVal = -Infinity;
            for (const index of indices) {
                minVal = Math.min(minVal, nums[index]);
                maxVal = Math.max(maxVal, nums[index]);
                nextMask = nextMask | (1 << index);
            }
            const incompatibilityCost = maxVal - minVal;
            minIncompatibilityCost = 
                Math.min(minIncompatibilityCost, dfs(nextMask) + incompatibilityCost);
        }
        return cache[usedIndicesBitMask] = minIncompatibilityCost;
    }
    return dfs(0);
};

function createCombinations(indices, len) {
    const combinations = [];
    
    if (indices.length < len) {
        return combinations;
    }
    
    const stack = [[[], 0]];
    while (stack.length > 0) {
        let [combi, i] = stack.pop();
        for (; i < indices.length; i++) {
            const combination = [...combi, indices[i]];
            if (combination.length === len) {
                combinations.push(combination);
            } else {
                stack.push([combination, i + 1]);
            }
        }
    }
    
    return combinations;
}
```