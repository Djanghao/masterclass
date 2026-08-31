# Can someone tell me my time complexity? JS

**Author:** jelanah
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/1099225/](https://leetcode.com/problems/shortest-word-distance/solutions/1099225/)

---

I think my time complexity is O(n) because I:
- pass through one time to add each element's indices in map
& then separately
- pass through word 1 and word 2's indicies 1 time
so O(n+k+j) 
where n = length of word list, k is the length of word1's indices & j is the length of word2s indices..
making it O(n)

```
var shortestDistance = function(words, word1, word2) {
    
    let map = {}
    
    for (let w = 0; w < words.length; w++){
        let word = words[w];
        
        if (!map[word]){
            map[word] = [w];
        } else {
            map[word].push(w);
        }
    }
    
    return distance(map[word1], map[word2]);
};


function distance(arr1, arr2){
    
    let i = 0, j = 0, distance = Number.MAX_SAFE_INTEGER
    
    while ( i < arr1.length && j < arr2.length){
        
        if (arr1[i] < arr2[j]) {
            distance = Math.min(distance, arr2[j] - arr1[i])
            i++
        } else {
            distance = Math.min(distance, arr1[i] - arr2[j])
            j++
        }
        
        if(distance === 1) break
    }
    
    return distance;
}
```