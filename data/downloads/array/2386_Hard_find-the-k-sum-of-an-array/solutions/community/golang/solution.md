# Rudimentary explanation for any language / code in go

**Author:** no3371
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/5089337/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/5089337/)

---

# Code
```
type Item struct  {
    Sum int64
    Index int
}

func kSum(nums []int, k int) int64 {

    // ===========================================================================================

    // I have never really worked on LeetCode before, yet somehow stumbled on this problem and I decided to figure this out
    // I got pretty close, but failed to find a algo that works for all testcase (my primitive solution got up to 12)
    // After severals days I decided to look at people's solutions and they are mostly consonant with my findings
    // ...Except they are extremyly clean! There is clearly some knowledge gap here
    // I'm the type of people that when learning stuff I can not move on if I don't understand how things works
    // So I digged in more and eventually sorted it out
    // And I decided to write a explanation that can be understand by anyone with rudimentary knowledege
    
    // Given [1,-2,3,4,-10,12]
    // The sum of this consequense is 8, but if we ignore negative numbers, it would be 20, which is 8 -(-2) -(-10), which means we are excluding -2 and -10
    // So we know that the max possible sum is always the sum of all positive numbers
    // What could be the next largest sum, apparently, if we exclude the smallest positive number (1), we get 19
    // Then... what could be the next?
    // A) Excluding 3 we get 17
    // B) Re-including the excluded -2, we get 18
    // C) Excluding 1 and Re-including the excluded -2, we get 17
    // It turns out, because our max sum comes from excluding negative numbers and including positive ones
    // Picking a positive number means removing it from our max sum, and pick a negative number means adding it to our max sum
    // In other words, picking a number means subtracting its absolute value from our max sum
    // [1,-2,3,4,-10,12] is not much differnt from [1,2,3,4,10,12] in this case

    // We are looking for Kth largest sum
    // This means we are repeating K times the process of finding the next number combination that gives the smallest sum to exclude
    
    // How do we find the next combination which gives the smallest sum?
    // If we sort the absolute numbers consequence from smallest to largest
    // Say [1, 2, 3, 4, 10, 12]
    // It's easy to notice that, the fewer numbers to the right included, the sum will be smaller
    // For example: [1, 2] is smaller than [1, 2, 3]
    // For example: [2, 3] is smaller than [3, 4]
    
    // But because the numbers can be anything as long as they are bigger than their left neighbours
    // Combinations of more amount of numbers are not guaranteed to sum bigger than combinations of fewer amount of numbers
    // Say [1, 2, 3, 4], [1, 2] >= [3] but not [4], [1, 2, 3] >= [2,4] but < [3, 4]

    // Before we continue, we need to know how do we iterate through all possible combinations
    // To iterate all subconsequences of a given consequence of N numbers, Say [1, 2, 3] (N=3)
    // We can break it down to iterations of all N=1, N=2 and N=3 subconsequences
    // How do we iterate through all subconsequences of a given N?
    // We swap the tail!
    // In the subconsequences of single number: [1], [2], [3], the numbers are tails, and the head is []-- yes, an empty head.
    // In the subconsequences of 2 number: [1, 2] [1, 3], Here 2 and 3 are the tails, [1,] is the head.

    // So we iterate through all subconsequences of 1 numbers
    // then 2 numbers, then 3... all the way to the final combination of absolute of all given numbers (ex: [1,2,3] of [1,2,3])
    // This way we can iterate through all possible combinations

    // However, it's not practical to simply iterate through all possible combinations and sort the sums
    // For any given consequence, every number is either included or not included
    // This means there would be 2^N possible consequences, it's unacceptable both cpu and memory wise

    // Therefore, we'll need a way to step through combinations while always picking the next one that gives the smallest sum
    // This is NOT possible without keeping track of all combinations we've iterated through

    // Luckily, we've got everything we need to get this solved.

    // Because the absolute numbers consequence from smallest to largest
    // The next combination of smallest sum TO THE CURRENT COMBINATION ALWAYs comes from either:
    // A) Swapping the tail of current combination to the next larger number
    // B) Increase N (the numbers of combinations) and include the next larger number to current combination 

    // Any other combination would be definitely bigger than these 2 possibilities

    // Say we're given a 6-nums consequence
    // Say [1, 2, 3, 4, 10, 12] (Which is sorted absolute of [1,-2,3,4,-10,12])
    // We already know that the max sum if [1,-2,3,4,-10,12] is 20
    // Which is the sum of only positive numbers
    // Which actually means we are excluding an empty combination []

    // Now, we are looking for the next combination of smallest sum
    // Because we got an empty combination [] and got not tail to swap
    // We'll try B: Increase N (the numbers of combinations) and include the next larger number
    // This will give us [1]
    // We can now go A or B for the next possibility
    // Route A gives us [2] (which is the result of 1 getting swapped out)
    // Route B gives us [1,2]
    
    // Of course we pick [2] because it sums smaller than [1,2] (1+2=3)

    // What now? We got [2] as our current combination
    // Route A gives us [3] (which is the result of 2 getting swapped out)
    // Route B gives us [2,3]

    // We should just pick [3] because it sums smaller than [2,3] (2+3=5), right?
    // NO, because while [3] sums smaller than [2,3]
    // It sums equal to [1,2], which is left in previous comparison

    // That's where priority queue or min/max heap comes in
    // They are just a storage of all combinations we've iterated through and it's eaasy to access the max or min

    // In this case it's a equal, so we can pick either one, but this would not always be true

    // Let's pick [1,2] this time
    // Route A gives us [1,3] (which is the result of 2 getting swapped out)
    // Route B gives us [1,2,3]

    // We'll going to pick [1,3] because it sums smaller than [1,2,3] and [2,3]
    // And then we continue...

    // But we'll not continue the simulation here
    // The above is enough to demonstrate the idea and explain people's solutions

    // ===========================================================================================

    maxSum := int64(0) // The biggest sum of subsequences (all positive)
    for i := 0; i < len(nums); i++ { // sort by absolute values
        if (nums[i] > 0) {
            maxSum += int64(nums[i])
        }
        if (nums[i] < 0) {
            nums[i] *= -1
        }
    }

    // Inefficient sorting will results in exceeding time limit
    mergeSort(nums, 0, len(nums))

    // Dumb array storage and operation also causes timeout
    dumbHeap := make([]Item, 0, k)
    dumbHeap = minHeapInsert(dumbHeap, Item{Sum: int64(nums[0]), Index: 0})
    k -= 1 // We've got 0th sum (max sum)

    var taking Item

    for x := 0; x < k; x++ {
        dumbHeap, taking = minHeapTake(dumbHeap)

        if taking.Index < len(nums) - 1 {
            a := Item { Sum: taking.Sum + int64(-nums[taking.Index] + nums[taking.Index + 1]), Index: taking.Index + 1 } // Route A (Swapping the tail)
            b := Item { Sum: taking.Sum + int64(nums[taking.Index + 1]), Index: taking.Index + 1 } // Route B (Include more number)

            dumbHeap = minHeapInsert(dumbHeap, a)
            dumbHeap = minHeapInsert(dumbHeap, b)

            if len(dumbHeap) > k*2+1 {
                dumbHeap = dumbHeap[:k*2+1]
            }
        }
    }

    return maxSum - taking.Sum
}

func mergeSort(array []int, left, right int) {
	if left >= right-1 {
		return
	}

	if right-left == 2 {
		if array[left] > array[right-1] {
			array[left], array[right-1] = array[right-1], array[left]
			return
		}
	}

	mid := (right + left) / 2
	mergeSort(array, left, mid)
	mergeSort(array, mid, right)

	cache := make([]int, right-left)
	copy(cache, array[left:])
	leftSub := cache[:mid-left]
	rightSub := cache[mid-left : right-left]

	merged := left
	idLeft, idRight := 0, 0
	for idLeft < len(leftSub) && idRight < len(rightSub) {
		if leftSub[idLeft] <= rightSub[idRight] {
			array[merged] = leftSub[idLeft]
			idLeft++
		} else {
			array[merged] = rightSub[idRight]
			idRight++
		}
		merged++
	}

	for idLeft < len(leftSub) {
		array[merged] = leftSub[idLeft]
		idLeft++
		merged++
	}

	for idLeft < len(leftSub) {
		array[merged] = leftSub[idLeft]
		idLeft++
		merged++
	}
}


func minHeapInsert (heap []Item, item Item) []Item {
    // In complete binary trees stored as an array
    // For any element at index N, its parent is at index (N-1)/2 and its children are at index 2N+1 and 2N+2

    heap = append(heap, item)

    for cursor := len(heap) -1;cursor > 0;{
        parentId := (cursor-1)/2
        if heap[parentId].Sum > heap[cursor].Sum {
            heap[parentId], heap[cursor] = heap[cursor], heap[parentId]
        } else {
            break
        }
        cursor = parentId
    }

    return heap
}

func minHeapTake (heap []Item) ([]Item, Item) {
    taking := heap[0]
    heap[0], heap[len(heap)-1] = heap[len(heap)-1], heap[0]
    heap = heap[:len(heap)-1]
    for cursor := 0;; {
        leftChildId := cursor*2+1
        rightChildId := cursor*2+2
        swapping := leftChildId
        if rightChildId < len(heap) && heap[rightChildId].Sum < heap[leftChildId].Sum {
            swapping = rightChildId
        }
        if swapping >= len(heap) {
            break
        }
        if heap[swapping].Sum < heap[cursor].Sum {
            heap[swapping], heap[cursor] = heap[cursor], heap[swapping]
            cursor = swapping
        } else {
            break
        }
    }
    return heap, taking
}
```