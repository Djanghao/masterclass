# Javascript Binary Search

**Author:** fbecker11
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/638088/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/638088/)

---

1. First attempt
```
var search = function (reader, target) {
   let firstIndex = reader.get(0);
   //setting low and high boundaries
   let l = target >= 0 ? 0 : firstIndex
   let r = target < 0 ? 0 : target
   //if firstIndex is less than zero, but target is greater
   if(firstIndex < 0 && target >= 0){
     r+=Math.abs(firstIndex) //add negative value to high bound
   }
   if(target >= 0){
     return binarySearch(reader, target, l, r)
   }else{
     return binarySearch(reader, target, r, Math.abs(l))
   }
};

function binarySearch(reader, target, l, r){
  let mid, val;
  while(l<=r){
     mid = Math.floor((r+l)/2)
     val = reader.get(mid);
    if(val === target){
      return mid
    }else if(target > val){
      l = mid+1
    }else{
      r = mid-1
    }
   }
   return -1  
} 
```
2. Second attempt, with the help of Solution's tab
```
var search = function (reader, target) {
  let firstIndex = reader.get(0);
  if(firstIndex === target) return 0;
  let l = 0, r =1;
  //create a search window
  while(reader.get(r) < target){
    l = r;
    r*=2
  }
  return binarySearch(reader, target, l , r)
};

function binarySearch(reader, target, l, r){
  let mid, val;
  while(l<=r){
     mid = Math.floor((r+l)/2)
     val = reader.get(mid);
    if(val === target){
      return mid
    }else if(target > val){
      l = mid+1
    }else{
      r = mid-1
    }
   }
   return -1  
} 
```