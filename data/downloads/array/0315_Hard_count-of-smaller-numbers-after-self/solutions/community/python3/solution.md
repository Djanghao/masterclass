# Two solutions based on MergeSort EXPLAINED

**Author:** h_cong
**Votes:** 72
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/952714/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/952714/)

---

**IDEA**: the reason that we can use merge sort to solve this problem is that merge sort always sort the array by comparing the left numbers to the right numbers. By counting how many numbers have been moved from the right half to the left half prior of the current left half number, we will know the count answer for the current number from the left half.

The basic logic of those two solutions are identical but differs in the sort() function and time complexity. 

SOLUTION 1:
```
	def countSmaller(self, nums: List[int]) -> List[int]:
        
        res  = [0] * len(nums)                                    # NOTE 1
        enum = list(enumerate(nums))                              # NOTE 2
        
        self.mergeSort(enum, 0, len(nums) - 1, res)
        return res
    
    def mergeSort(self, enum, start, end, res):
        if start >= end: return
        
        mid = start + (end - start) // 2
        self.mergeSort(enum, start, mid, res)
        self.mergeSort(enum, mid + 1, end, res)
        self.merge(enum, start, mid, end, res)
    
    def merge(self, enum, start, mid, end, res):
        p, q = start, mid + 1
        inversion_count = 0                                      # NOTE 3
        temp = []
        
        while p <= mid and q <= end:
            if enum[p][1] <= enum[q][1]:
                temp.append(enum[p])
                res[enum[p][0]] += inversion_count               # NOTE 5
                p += 1
            else:
                temp.append(enum[q])
                inversion_count += 1                             # NOTE 4
                q += 1
        
        while p <= mid:
            temp.append(enum[p])
            res[enum[p][0]] += inversion_count                  # NOTE 6
            p += 1
        
        while q <= end:         
            temp.append(enum[q])
            q += 1
        
        enum[start:end+1] = temp                                # NOTE 7
```
From the structure of the code you can see it is basically the same as the conventional mergeSort() function. But the difference lays in the following NOTES:

**NOTE 1**: we initialize a list which has the same size as our input array to store the result.

**NOTE 2**: we initialize another list of tuple to have each tuple stores the index and value as ```(index, nums[index])```. This list serves as the bridge to link the array element which is under the sorting process to the result list initialized in NOTE 1.

**NOTE 3**: we create a variable to count the how many numbers from the right half is smaller than the current number from the left half.

**NOTE 4**: when we find that ```nums[left_index] > nums[right_index]```, we add 1 to the ```inversion_count```, but we dont add the current ```inversion_count``` to the final result yet. Because it is still possible that the next number(s) in the right half is still smaller than this current left number.

**NOTE 5**: when we first find a number from the right half that is bigger than the current left number, we know that there will not be any number from the right half to be smaller than this current left number. Thus we add this ```inversion_count``` to the final result through the bridge of ```enum``` list.

**NOTE 6**: when we finish iterating the numbers in the right half but there are still numbers left in the left half, we know that the number in the remaining left half should be bigger than all numbers in the right half, thus we need to add the current ```inversion_count``` to the corresponding index of all remaining left numbers. To help you understand this better, you can also use ```end-mid``` which gives the length of the right half array instead of ```inversion_count``` in this step.

**NOTE 7**: we swap the ```start``` to ```end``` segement from the ```enum``` list with the sorted segement, to ensure the ```merge()``` function in the next level is also dealing with a sorted array. 

**NOTE 8**: Time complexity: O(nlogn). This is the same as conventional merge sort. You can google it if you want to understand why this complexity. Space complexity: O(n). This comes from the ```temp``` list that we initialized to temporarily store the sorted array segment. 

--------------------------------------------------------------------------------
SOLUTION 2: 

A small alteration can be done in the sorting part of the ```merge()``` function. Instead of implementing in the conventional way, we can use the Python built-in sort() function to save ourselves from the ```temp``` list as well as the while loop when the numbers from the right half remains while left half has been scanned to the ```mid``` point. Here is the code:
```
    def countSmaller(self, nums: List[int]) -> List[int]:
  
        res  = [0] * len(nums)
        enum = list(enumerate(nums)) 
        
        self.mergeSort(enum, 0, len(nums) - 1, res)
        return res
    
    def mergeSort(self, enum, start, end, res):
        if start >= end: return
        
        mid = start + (end - start) // 2
        self.mergeSort(enum, start, mid, res)
        self.mergeSort(enum, mid + 1, end, res)
        self.merge(enum, start, mid, end, res)
    
    def merge(self, enum, start, mid, end, res):
        p, q = start, mid + 1
        inversion_count = 0
        
        while p <= mid and q <= end:
            if enum[p][1] <= enum[q][1]:
                res[enum[p][0]] += inversion_count
                p += 1
            else:
                inversion_count += 1
                q += 1
        
        while p <= mid:
            # res[enum[p][0]] += inversion_count
            res[enum[p][0]] += end - mid
            p += 1
        
        enum[start:end+1] = sorted(enum[start:end+1], key=lambda e:e[1])    
```
**NOTE 9**: Fisrt we used the sorted function to directly sort the ```start``` to ```end``` segment of ```enum```, thus there is no more need to store the sorted numbers in a ```temp``` list. 

**NOTE 10**: As we only care about the count, we dont need to do the ```while q <= end:``` loop anymore, as this loop provides no update to the ```res``` list.

**NOTE 11**: The Time Complexity does change in this case. As we are now using a O(nlogn) sorting method instead of the previous O(n) method, the overall TC is now O(n(logn)^2) instead of O(nlogn). The worst space complexity of Python ```sort()``` or Timsort is O(n).

**AT THE END**: I spent hours to fully understand this merge sort solution. Thus I just want to write it down for myself. I will be very glad if this also helps you to any extent. Cheers.  
