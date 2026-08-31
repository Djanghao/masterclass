# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551824/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551824/)

---

**Time Complexity : O(n*logn)**
**Java**
```
class Solution {
    public int numberOfWeakCharacters(int[][] properties) {
        Arrays.sort(properties, (a,b) -> (a[0] == b[0]) ? (a[1]-b[1]) : (b[0]-a[0]));
        int count = 0, max = 0;
        for(int[] arr: properties){
            if(arr[1] < max)    count++;
            max = Math.max(max, arr[1]);
        }
        return count;
    }
}
```
**JavaScript**
```
var numberOfWeakCharacters = function(properties) {
    properties.sort((a,b) => (a[0] == b[0]) ? (a[1]-b[1]) : (b[0]-a[0]))
    let count = 0, max = 0
    for(let arr of properties){
        if(arr[1] < max)    count++
        max = Math.max(max, arr[1])
    }
    return count
};
```
**Python**
```
class Solution(object):
    def numberOfWeakCharacters(self, properties):
        properties.sort(key = lambda x: (-x[0], x[1]))
        count, mx = 0, 0
        for arr in properties:
            if arr[1] < mx:
                count += 1
            mx = max(mx, arr[1])
        return count
```