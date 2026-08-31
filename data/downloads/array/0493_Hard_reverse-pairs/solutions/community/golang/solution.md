# Golang solution using merge sort

**Author:** Sheelendar
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/4955489/](https://leetcode.com/problems/reverse-pairs/solutions/4955489/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func reversePairs(nums []int) int {
    n:=len(nums); count:=0
    nums=mergeSort(nums,0,n-1,&count))
    return count
}

// solve this question with the help of merge sort
func mergeSort(nums []int, l,r int,count *int )[]int{
    if l<r{
        mid :=(l+r)/2
        mergeSort(nums,l,mid,count)
        mergeSort(nums,mid+1,r,count)
        merge(&nums,l,mid,mid+1,r,count)
    }
    return nums
}

func merge(nums *[]int, l1,l2 ,r1,r2 int,count *int){
    arr1:=make([]int,l2-l1+1); arr2:=make([]int,r2-r1+1)
    k:=0
    for i:=l1; i<=l2; i++{
        arr1[k]=(*nums)[i]
        k++
    }
    k=0
    for i:=r1; i<=r2; i++{
        arr2[k]=(*nums)[i]
        k++
    }
    // calculate Actual count here if condition satisfied 
    i:=0; j:=0 
    for i<len(arr1) && j<len(arr2){
        if arr1[i] > arr2[j]*2{
            *count=*count+(len(arr1)-i)
            j++
        }else{
            i++
        }
    }
    // this is merge sort logic we are merging two sorted array here
    k=l1; i=0; j=0
    for i<len(arr1) && j<len(arr2) {
        if arr1[i]<arr2[j]{
            (*nums)[k]=arr1[i]
            i++
        }else{
            (*nums)[k]=arr2[j]
            j++
        }
        k++
    }
    for i<len(arr1)  {
        (*nums)[k]=arr1[i]
        i++; k++
    }
    for  j<len(arr2) {
        (*nums)[k]=arr2[j]
        j++; k++
    }
}
```