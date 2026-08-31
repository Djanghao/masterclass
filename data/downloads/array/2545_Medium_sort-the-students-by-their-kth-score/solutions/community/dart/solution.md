# A sorting based approch

**Author:** naveen_r_sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5257429/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5257429/)

---

## Intuition
To solve this problem, we need to sort the students based on their scores in a particular subject. The subject is specified by the index k. We can use JavaScript's built-in sorting functionality to achieve this.

## Approach
1. **Slice the Array:** Create a copy of the input array to avoid mutating the original array.
2. **Sort the Array:** Use the `sort` method with a custom comparator function that compares the kth element of each sub-array in descending order.
3. **Return the Sorted Array:** Return the sorted array.

## Complexity
- **Time complexity:** O(n log n), where n is the number of students. This is due to the sorting operation.
- **Space complexity:** O(n), where n is the number of students. This is for the space required to store the copied array.

## Code
```javascript []
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
    return score.slice().sort((a, b) => b[k] - a[k]);
};
```
```TypeScript []
function sortTheStudents(score: number[][], k: number): number[][] {
    const sorted = score.slice().sort((a, b) => b[k] - a[k]);
    return sorted;
};
```
```Python []
class Solution:
    def sortTheStudents(self, score: List[List[int]], k: int) -> List[List[int]]:
        return sorted(score, key=lambda x: x[k], reverse=True)        
```
```Dart []
class Solution {
  List<List<int>> sortTheStudents(List<List<int>> score, int k) {
    List<List<int>> sorted = List.from(score);
    sorted.sort((a, b) => b[k].compareTo(a[k]));
    return sorted;
  }
}
```
This code creates a sorted copy of the `score` array based on the scores in the kth subject in descending order, ensuring the original array remains unchanged. The `slice` method creates a shallow copy of the array, and the `sort` method sorts this copy based on the comparator function provided.