# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 7
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/2564325/](https://leetcode.com/problems/optimal-partition-of-string/solutions/2564325/)

---

**Java**
```
class Solution {
    public int partitionString(String s) {
        int start_id = 0, end_id = 0, partition_count = 0;
        while(end_id < s.length()){
            if(s.substring(start_id, end_id).contains(s.charAt(end_id)+"")){
                partition_count++;
                start_id = end_id;
            }
            end_id++;
        }
        if(s.substring(start_id, end_id).contains(s.charAt(end_id-1)+"")){
            partition_count++;
        }
        return partition_count;
    }
}
```
**JavaScript**
```
var partitionString = function(s) {
    let start_id = 0, end_id = 0, partition_count = 0;
    while(end_id < s.length){
        if(s.substring(start_id, end_id).includes(s[end_id]+"")){
            partition_count++;
            start_id = end_id;
        }
        end_id++;
    }
    if(s.substring(start_id, end_id).includes(s[end_id-1]+"")){
        partition_count++;
    }
    return partition_count;
};
```
**Python**
```
class Solution(object):
    def partitionString(self, s):
        start_id = end_id = partition_count = 0
        while end_id < len(s):
            if s[end_id] in s[start_id:end_id]:
                partition_count += 1
                start_id = end_id 
            end_id += 1
        if s[end_id-1] in s[start_id:end_id]:
            partition_count += 1
        return partition_count
```