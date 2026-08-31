# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2456360/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2456360/)

---

**Time Complexity : O(n*n)**
**Java**
```
class Solution {
    public int minimumRecolors(String blocks, int k) {
        int min_count = Integer.MAX_VALUE;
        for(int i=0; i<blocks.length(); i++){
            int black_count = 0, count = 0;
            for(int j=i; j<blocks.length(); j++){
                if(blocks.charAt(j) == 'B') black_count++;
                else{
                    black_count++;
                    count++;
                }
                if(black_count == k){
                    min_count = Math.min(min_count, count);
                    break;
                }
            }
        }
        return min_count;
    }
}
```
**JavaScript**
```
var minimumRecolors = function(blocks, k) {
    let min_count = Number.MAX_VALUE
    for(let i=0; i<blocks.length; i++){
        let black_count = 0, count = 0
        for(let j=i; j<blocks.length; j++){
            if(blocks.charAt(j) == 'B') black_count++
            else{
                black_count++
                count++
            }
            if(black_count == k){
                min_count = Math.min(min_count, count)
                break
            }
        }
    }
    return min_count
};
```
**Python**
```
class Solution(object):
    def minimumRecolors(self, blocks, k):
        min_count = sys.maxsize
        for i in range(len(blocks)):
            black_count, count = 0, 0
            for j in range(i, len(blocks)):
                if blocks[j] == 'B':
                    black_count += 1
                else:
                    black_count += 1
                    count += 1
                if black_count == k:
                    min_count = min(min_count, count)
                    break
        return min_count
```