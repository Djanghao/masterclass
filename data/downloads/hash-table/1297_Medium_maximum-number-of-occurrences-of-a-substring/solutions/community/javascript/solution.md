# JavaScript, easy to understand, only need to check minSize

**Author:** celiamacrae
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/787992/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/787992/)

---

A key part of this question is to realize that you only need to check the substrings of minSize. Every substring of maxSize wil have a substring of minSize contained within it. Therefore it is possible to find all substring combinations by only looping through once. Use a set to find all unique characters in a substring, and ```set.size``` will then tell you how many unique characters. 

```
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    
    let ht = {}
    let max = 0
    
    for(let i=0; i<=s.length - minSize; i++){
        
        let sub = s.substring(i, i+ minSize)
        
        let tempSet = new Set(sub)
        
        if(tempSet.size <= maxLetters){
            if(ht.hasOwnProperty(sub)){
                ht[sub] += 1
            }else{
                ht[sub] = 1
            }
            if(ht[sub] > max ){
                max = ht[sub]
            }    
        }       
    }
    
    return max    
};
```