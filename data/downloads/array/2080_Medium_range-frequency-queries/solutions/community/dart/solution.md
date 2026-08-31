# Save Queries with the frequency in Map for repeatitive calls

**Author:** 2Math0
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/5275310/](https://leetcode.com/problems/range-frequency-queries/solutions/5275310/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
save the query with the solution in a map to reuse it in O(1) if the query is rebeated

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class RangeFreqQuery {
    List<int> arr;
    Map myMap = {};

  RangeFreqQuery(this.arr);
  
  int query(int left, int right, int value) {
    if(myMap.containsKey(value) && myMap[value][0] == left && myMap[value][1] ==right){
        return myMap[value][2];

    }else{

    List<int> newArr = arr.sublist(left, right+1);
    int frequency = 0;
    for (int i = left; i <= right; i++) {
      if (arr[i] == value) {
        frequency++;
      }
    }
    myMap[value] = [left, right, frequency];
    return frequency;
    }
  }
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * RangeFreqQuery obj = RangeFreqQuery(arr);
 * int param1 = obj.query(left,right,value);
 */
```