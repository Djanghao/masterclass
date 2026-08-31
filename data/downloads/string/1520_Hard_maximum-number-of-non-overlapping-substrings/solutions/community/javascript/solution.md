# Javascript Solution

**Author:** bz3
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/2653365/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/2653365/)

---

```
var maxNumOfSubstrings = function(s) {
    // gets range of each character in string
    const hashMap = getCharRanges(s);
    const hashMap2 = {};

    // updates ranges in for each char in hashMap if it contains other char
    updateOverLapped(s, hashMap);
    
    // store unique str with it's ranges in hashMap2
    Object.values(hashMap).forEach((val) => hashMap2[val.str] = val.range);
    
    return getValidSubStrs(hashMap2);
};


const getCharRanges = (s) => {
    const reverseS = s.split("").reverse().join("");
    const result = {};
     
    for (let i = 0; i < s.length; i++) {
        const key = s[i];
        if (result[key]) continue;
        else result[key];
        // start & and gives us the range each char reaches
        const start = s.indexOf(key);
        const end = s.length - reverseS.indexOf(key);
        // str stores a string containing all characters in s within our current key's start and end
        const str = s.slice(start, end)
        // updated property lets us know if the range has been modified 
        result[key] = {str, range: [start, end], updated: false};
    }
    return result;
}

const updateOverLapped = (s, hashMap) => {
    // loops through each char property 
    for (let key in hashMap) {
        const str = hashMap[key].str
        let start = hashMap[key].range[0];
        let end = hashMap[key].range[1];
        hashMap[key].updated = true;
        
        // we want to push every char we come across in this array so
        // we can update it's range including the current char we are on
        const updateRanges = [key];
        
        for (let i = 0; i < str.length; i++) {
            const key2 = str[i]
            if (key2 === key) continue;
            const range2 = hashMap[key2].range
            start = Math.min(start, range2[0]);
            end = Math.max(end, range2[1])
            if (hashMap[key2].updated) updateRanges.push(key2)
        }
        
        const newStr = s.slice(start, end);
        updateRanges.forEach((char) =>{
           hashMap[char].str = newStr;
            hashMap[char]. range = [start, end]
        })
    }
}

const getValidSubStrs = (hashMap) => {
    const arr = Object.keys(hashMap);
    // filters out invalid subStrings 
    return arr.filter((key, idx) => {
        const key2 = arr[idx + 1];
        // if the current subString's ending range is less than or equal to 
        // the next subString than it's a valid SubString
        return (!key2 || hashMap[key][1] <= hashMap[key2][0])
    });    
}
```
