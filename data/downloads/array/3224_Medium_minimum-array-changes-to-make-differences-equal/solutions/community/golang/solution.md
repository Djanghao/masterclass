# Golang Solution ||| A lot of Explanations

**Author:** https_whxyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507943/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507943/)

---

# Intuition
Calculating the difference in the number of operations already achieved for each one

# Approach
**The basic concept here: counting the number of identical differences between numbers encountered.**
I will call the counting structure **xOccurenceMp**.

Thanks to it we can instantly find out how many pairs we already have that their abs difference is equal to each other. 
Further, you may think that the answer is obvious - subtract the number of such pairs from the total number of pairs (n / 2), and we will know the answer. **But it is not so simple.**

The problem lies in the fact that here we assume that to change the difference we must always change one number. If there are scenarios where we have to change two numbers. 
Example: $$x = 4$$, $$num1 = 3$$, $$num2 = 5$$, $$k = 6$$.

**To determine whether we must change one value within a pair or not, let's determine what maximum difference we can get by changing only one number.** 
Let 
* the minimum number in the pair be minNum
* the maximum number be maxNum. 

Then the maximum difference **is equal to the maximum of** $$k - minNum$$ **and** $$maxNum - 0 = maxNum.$$

**Let's put all such maximal differences into an array and sort it later. Then we can find out in logN, using binary search, what number of pairs requires changing 2 values at once.**

# Then, by looping over x and xOccurence in xOccurenceMp, we
* **Using binary search**, find out how many pairs need to change the number 2 times
* **xOccurence** shows how many pairs we have where the difference is already equal to x
* We **subtract** from the total number of pairs (n / 2) the number of pairs that need to change 2 times, xOccurenceMp, **and get the number of pairs where we need to change just one number.**


That's All)

![Upvote Please.jpeg](./images/0.jpeg)



# Complexity
- Time complexity:
$$O(N * logN)$$

- Space complexity:
$$O(N)$$

# Code
```
func minChanges(nums []int, k int) int {
    n := len(nums)
    // Create variables
    xOccurenceMp := make(map[int]int)
    maxAbsPair := make([]int, 0, n / 2)

    // Looping for each pair
    for i := 0; i <= n / 2 - 1; i++ {
        // Determinate all variables
        num1, num2 := nums[i], nums[n - i - 1]
        minNum, maxNum := min(num1, num2), max(num1, num2)

        mxRz := max(k - minNum, maxNum)
        // Add to slice
        maxAbsPair = append(maxAbsPair, mxRz)

        // Increment map
        xOccurenceMp[maxNum - minNum]++
    }
    
    // Sort slice
    sort.Ints(maxAbsPair)


    // Bin search function
    getDoubleChangedCnt := func(refVal int) int {
        // Barriers
        l, r := 0, n / 2 - 1

        // To check, maybe all pair's mx abs's greater or 
        // equal that refVal
        if maxAbsPair[l] >= refVal {
            return 0
        }

        // We need to find count of pairs
        // Where mxRz < refVal.
        //
        // We need to find most right element
        // When el value < refVal
        // And return his index + 1.

        for l < r {
            mid := (l + r) / 2

            if maxAbsPair[mid] >= refVal {
                // Reduce the right border. 
                // the mid element is definitely not considered. 
                r = mid - 1
                continue
            }

            // In the opposite case, we want to minimize the
            // border  on the left. We want to make 
            // it equal to mid + 1.
            // 
            // Check element mid + 1.
            if maxAbsPair[mid + 1] >= refVal {
                return mid + 1
            }
            l = mid + 1
        }
        return l + 1
    }

    // Determinate answer.
    ans := n
    for revVal, occurence := range xOccurenceMp {
        // find doubled, by bin search
        doubled := getDoubleChangedCnt(revVal)
        // find oned, by substracting.
        oned := n / 2 - occurence - doubled
        // try to update answer.
        ans = min(ans, doubled * 2 + oned)
    }
    return ans
}
```