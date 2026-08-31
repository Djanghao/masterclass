# Simple Solution || Beginner Friendly || Easy to Understand ✅

**Author:** Anirban_Pramanik10
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/4158983/](https://leetcode.com/problems/find-in-mountain-array/solutions/4158983/)

---

# Approach
- The code provides a solution for finding a target element in a "MountainArray," a special type of array that is first sorted in ascending order, then reaches a peak value, and is sorted in descending order.
- The code defines a class named "Solution" with a method "findInMountainArray" to find the target element in the MountainArray.
- The "findInMountainArray" method takes two parameters: the target element to find and the MountainArray to search in.

- It first finds the peak element in the MountainArray using the "findPeakElement" method, which performs a binary search to locate the peak. The peak is the point where the array transitions from ascending to descending.

- After finding the peak, it attempts to search for the target element in both the ascending and descending portions of the MountainArray.

- It starts by performing an order-agnostic binary search in the ascending part of the array (from index 0 to the peak). The "OrderAgnosticBinarySearch" method is used for this purpose.

- If the target element is not found in the ascending part (i.e., if the "firstTry" result is -1), the code proceeds to search in the descending part. It does this by calling the "OrderAgnosticBinarySearch" method again, this time on the descending part (from peak+1 to the end of the array).

- If the target element is found in either the ascending or descending part, the method returns the index where it was found. Otherwise, it returns -1 to indicate that the target element is not present in the MountainArray.

- The "findPeakElement" method is used to find the peak of the MountainArray. It uses a binary search approach to locate the point where the array transitions from ascending to descending. This method returns the index of the peak.

- The "OrderAgnosticBinarySearch" method is used for searching in either the ascending or descending part of the MountainArray. It performs a binary search and returns the index of the target element if found, or -1 if not found.

Overall, the code efficiently utilizes binary search to find the target element in a MountainArray, taking into account its ascending and descending order characteristics.

# Complexity
- Time complexity: `O(log n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 *     public int get(int index) {}
 *     public int length() {}
 * }
 */
 
 class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int peak = findPeakElement(mountainArr);
        int firstTry = OrderAgnosticBinarySearch(mountainArr, target, 0, peak);
        if(firstTry == -1){
            return OrderAgnosticBinarySearch(mountainArr, target, peak+1, mountainArr.length()-1);
        }
        return firstTry;
    }

    static int findPeakElement(MountainArray nums) {
        int start = 0;
        int end = nums.length() - 1;
        
        while(start < end){
            int mid = start + (end - start) / 2;
            if(nums.get(mid) > nums.get(mid+1)){
                end = mid;
            }else{
                start = mid + 1;
            }
        }
        return start;
    }
    
    static int OrderAgnosticBinarySearch(MountainArray arr, int target, int start, int end){

        boolean isAsc = arr.get(start) < arr.get(end);

        while(start <= end){
            int mid = start + (end - start) / 2;

            if(arr.get(mid) == target) return mid;

            if(isAsc){
                if(arr.get(mid) < target) start = mid + 1;
                else end = mid - 1;
            }else{
                if(arr.get(mid) > target) start = mid + 1;
                else end = mid - 1;
            }
        }
        return -1;
    }
}
```
```python3 []
# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        min_index = -1
        peak = self.findpeak(mountain_arr)
        
        min_index = self.binary_search(0, peak, mountain_arr, target, 1)
        if min_index == -1:
            min_index = self.binary_search(peak+1, mountain_arr.length() - 1, mountain_arr, target, -1)
        return min_index

    def findpeak(self, mountain_arr):
        start = 0
        end = mountain_arr.length() - 1
        while start < end:
            mid = start + int((end - start)/2)
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                start = mid + 1
            else:
                end = mid
        
        return start
    
    def binary_search(self, start, end, mountain_arr, target, asc):
        while start <= end:
            mid = start + int((end - start)/2)
            mountain_arr_get_mid = mountain_arr.get(mid)
            if target == mountain_arr_get_mid:
                return mid
            if asc == 1:
                if target < mountain_arr_get_mid:
                    end = mid - 1
                elif target > mountain_arr_get_mid:
                    start = mid + 1
            else:
                if target < mountain_arr_get_mid:
                    start = mid + 1
                elif target > mountain_arr_get_mid:
                    end = mid - 1
            
        return -1
```
```Python []
# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray(object):
#    def get(self, index):
#        """
#        :type index: int
#        :rtype int
#        """
#
#    def length(self):
#        """
#        :rtype int
#        """

class Solution(object):
    def findInMountainArray(self, target, mountain_arr):
        peak = self.find_peak_element(mountain_arr)
        first_try = self.binary_search(mountain_arr, target, 0, peak, True)
        if first_try == -1:
            return self.binary_search(mountain_arr, target, peak + 1, mountain_arr.length() - 1, False)
        return first_try

    def find_peak_element(self, mountain_arr):
        start, end = 0, mountain_arr.length() - 1

        while start < end:
            mid = start + (end - start) // 2
            if mountain_arr.get(mid) > mountain_arr.get(mid + 1):
                end = mid
            else:
                start = mid + 1
        return start

    def binary_search(self, mountain_arr, target, start, end, is_ascending):
        while start <= end:
            mid = start + (end - start) // 2
            mid_value = mountain_arr.get(mid)

            if mid_value == target:
                return mid

            if (is_ascending and mid_value < target) or (not is_ascending and mid_value > target):
                start = mid + 1
            else:
                end = mid - 1
        return -1
```
```C++ []
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *   public:
 *     int get(int index);
 *     int length();
 * };
 */

int peak(MountainArray & arr, int n)
{
    int start=0,end=n-1;
    int res=-1;
    while(start<end)
    {
        int mid=start + (end-start)/2;
        if(arr.get(mid+1)>arr.get(mid)) start=mid+1,res=mid+1;
        else end=mid;
    }
    return res;
}
int bs(int s,int e, MountainArray & arr, int target, bool flag)
{
    int res=-1;
    while(s<=e)
    {
        int mid = s + (e-s)/2;
        if(target== arr.get(mid))
        {
            res=mid;
            if(flag) s=mid+1;
            else e=mid-1;
        }
        else if(target>arr.get(mid))
        {
            if(flag) e=mid-1;
            else s=mid+1;
        }
        else 
        {
            if(flag) s=mid+1;
            else e=mid-1;
        }
    }
    return res;
}
class Solution {
public:
    int findInMountainArray(int target, MountainArray &arr) {
       int n = arr.length();
       if(n<3) return -1;

       // 1. Find Peak Element.
       int part = peak(arr,n); 

       // 2. left sized search
       int l = bs(0,part,arr,target,0);


        // if element is  present at the left side array.
       if(l!=-1) return l;

        // if element is not present at left, then do right search.
       int r = bs(part,n-1,arr,target,1);
       return r;
  }
};
```
```C []
/**********************************************************
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 **********************************************************
 *
 * int get(MountainArray *, int index);
 * int length(MountainArray *);
 */

int peak(MountainArray* arr, int n) {
    int start = 0, end = n - 1;
    int res = -1;
    while (start < end) {
        int mid = start + (end - start) / 2;
        if (get(arr, mid + 1) > get(arr, mid)) {
            start = mid + 1;
            res = mid + 1;
        } else {
            end = mid;
        }
    }
    return res;
}

int bs(int s, int e, MountainArray* arr, int target, int flag) {
    int res = -1;
    while (s <= e) {
        int mid = s + (e - s) / 2;
        if (target == get(arr, mid)) {
            res = mid;
            if (flag)
                s = mid + 1;
            else
                e = mid - 1;
        } else if (target > get(arr, mid)) {
            if (flag)
                e = mid - 1;
            else
                s = mid + 1;
        } else {
            if (flag)
                s = mid + 1;
            else
                e = mid - 1;
        }
    }
    return res;
}

int findInMountainArray(int target, MountainArray* mountainArr) {
    int n = length(mountainArr);
    if (n < 3)
        return -1;

    // 1. Find Peak Element.
    int part = peak(mountainArr, n);

    // 2. Left side search.
    int l = bs(0, part, mountainArr, target, 0);

    // If the element is present on the left side array.
    if (l != -1)
        return l;

    // If the element is not present on the left, then do the right search.
    int r = bs(part, n - 1, mountainArr, target, 1);
    return r;
}

```
# If you like the solution please UPVOTE !!
![da69d522-8deb-4aa6-a4db-446363bf029f_1687283488.9528875.gif](./images/0.gif)
