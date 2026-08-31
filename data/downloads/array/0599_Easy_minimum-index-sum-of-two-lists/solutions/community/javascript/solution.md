# Faster than 99% | Easy to Understand | Simple | JavaScript Submission

**Author:** Mrmagician
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/440284/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/440284/)

---

**Please do upvote, this motivates me to write more such post**
```
var findRestaurant = function(list1, list2) {
    let out = [];
    let obj = new Map();
    list2.forEach((v, i) =>  obj.set(v, i));
    let i = 0, min = Infinity;
    while(i<list1.length){
        if(obj.has(list1[i])){
            let sum = i + obj.get(list1[i]);
            if(min===sum){
                out.push(list1[i]);
            }   
            else if(sum<min){
                out = [list1[i]];
                min = sum;
            }
        }
        i++;
    }
    
    return out;
    
};
```