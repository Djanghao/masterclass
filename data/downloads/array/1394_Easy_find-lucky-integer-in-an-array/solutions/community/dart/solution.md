# Find the Lucky Number: An Efficient Dart Solution

**Author:** akhilsnediyathu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5819930/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5819930/)

---

# Intuition
To find a "lucky number" in an array, we need to determine the numbers that appear exactly the same number of times as their value. For example, in an array `[2, 2, 3, 4]`, the number `2` appears twice, so `2` is a lucky number.

# Approach
1. **Frequency Map:** First, we create a frequency map to count how many times each number appears in the array. This can be done using a `Map<int, int>` in Dart.
2. **Check Lucky Numbers:** Once we have the frequency map, we iterate through it to check if the number of occurrences of each key is equal to the key itself. If so, it is a "lucky number."
3. **Track the Largest Lucky Number:** If there are multiple lucky numbers, we need to return the largest one. We can use a variable `luckyNum` to keep track of the largest lucky number found.

# Complexity
- **Time complexity:**  
  The time complexity is \\(O(n)\\), where \\(n\\) is the length of the array. This is because we perform two passes over the array:
  1. One pass to build the frequency map.
  2. One pass to find the lucky number.

- **Space complexity:**  
  The space complexity is \\(O(k)\\), where \\(k\\) is the number of unique elements in the array, since we are storing the frequency of each unique element in a map.

# Code
```dart []
class Solution {
  int findLucky(List<int> arr) {
    Map<int,int> temp ={};
    for(int num in arr){
       if(temp.containsKey(num)){
       temp[num] = temp[num]! + 1;
       }else{
     temp [num] =1;
       }
    }
    
    int luckyNum = -1;
    temp.forEach((key,val){
    if(key == val){
        if(luckyNum<key){
            luckyNum = key;
        }
    }
    });
    return luckyNum;
  }
}
```