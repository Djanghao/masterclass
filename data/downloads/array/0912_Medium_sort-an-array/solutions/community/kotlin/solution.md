# [Kotlin] - QuickSort, MergeSort, InsertionSort, BubbleSort & Selection Sort

**Author:** ashokkumarkiit
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/1541220/](https://leetcode.com/problems/sort-an-array/solutions/1541220/)

---

QuickSort - O(nlogn) - In-Space Algorithm
 MergeSort - O(nlogn) - O(n) Aux space
 InsertionSort - O(n^2) 
 BubbleSort - O(n^2) - TIME LIMIT EXCEEDED
 Selection Sort - O(n^2) - TIME LIMIT EXCEEDED
 
 ```
 // Selection Sort- Time Limit Exceeded O(n2)
    fun selectionSort(nums: IntArray): IntArray {
        var minIndex = -1
        
        for(i in 0..nums.size-1) {
            minIndex = i
            
            for(j in i+1..nums.size-1) {
                if(nums[j] < nums[minIndex]) {
                    minIndex = j
                }
            }
            var temp = nums[i]
            nums[i] = nums[minIndex]
            nums[minIndex] = temp
        }
        return nums
    }
    
    // Bubble Sort - Time Limit Exceeded O(n2)
    fun bubbleSort(nums: IntArray): IntArray {
        for(i in 0..nums.size-1) {
            for(j in nums.size-1 downTo i+1) {
                if(nums[j-1] > nums[j]) {
                    nums[j-1] = nums[j].also{ nums[j] = nums[j-1]}
                }
            }
        }
        return nums
    }
    
    //Insertion Sort - Accepted O(n2)
    fun insertionSort(nums: IntArray): IntArray
    {
        for(i in 1..nums.size-1) {
            var temp = nums[i]
            var j = i-1
            while(j >=0 && nums[j] > temp)
            {
                nums[j+1] = nums[j]
                j = j-1
            }
            nums[j+1] = temp
        }
        return nums
    }
    
    //MergeSort - Accepted - O(nlogn)
    fun mergeSort(arr: IntArray) : IntArray{
        helper(arr, 0, arr.size-1)
        return arr
    }
    
    fun helper(arr: IntArray, start: Int, end: Int) {
        if(start >= end) return
        
        var mid = start +((end-start)/2).toInt()
        helper(arr,start,mid)
        helper(arr,mid+1,end)
        
        //merging the array
        var i = start
        var j = mid+1
        var auxArr = mutableListOf<Int>()
        while(i <= mid && j <= end) {
            if(arr[i] <= arr[j]) {
                auxArr.add(arr[i])
                i+=1
            } else{
                auxArr.add(arr[j])
                j+=1
            }
        }
        
        // If element remaining in left array
        while(i <= mid){
            auxArr.add(arr[i])
            i+=1
        }
        
        // If elements remaining in right array
        while(j <= end) {
            auxArr.add(arr[j])
            j+=1
        }
        
        // Copying Temp array to Arr
        var k = 0
        for(i in start..end) {
            arr[i] = auxArr[k]
            k+=1
        }
        return
    }
    
    //QucikSort - Accepted - O(nlogn)
    fun quickSort(arr: IntArray): IntArray {
        quickSortHelper(arr,0,arr.size-1)
        return arr
    }

    fun quickSortHelper(arr: IntArray, start: Int, end: Int) {
        if(start >= end) return

        var pos = findMedian(arr,start,end)

        quickSortHelper(arr, start, pos-1)
        quickSortHelper(arr,pos+1, end)
        return
    }

    fun findMedian(arr: IntArray, start: Int, end: Int) : Int{
        var pivot = start
        var smaller = start
        var bigger = start

        for(i in start+1..end) {
            if(arr[i]<= arr[pivot]){
                smaller +=1
                arr[i] = arr[smaller].also{arr[smaller] = arr[i]}
                bigger +=1
            } else {
                bigger +=1
            }
        }

        arr[pivot] = arr[smaller].also { arr[smaller] = arr[pivot]}

        return smaller
    }
 ```