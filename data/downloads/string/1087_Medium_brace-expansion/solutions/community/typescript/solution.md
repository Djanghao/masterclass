# [TypeScript] IndexMap and Backtracking

**Author:** cursive8
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/3142812/](https://leetcode.com/problems/brace-expansion/solutions/3142812/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This looks like a mess so I'll try to explain the best I can.  My thought process was to make a idx map of what strings had a length more than 1 (the ones between curly braces) and the solo chracters.  

i.e Map = {0 => 'ab', 1 => 'c', 2 => 'de', 3 => 'f'};

This way we know which map values at the current idx we can set automatically if they have a length of 1 and which ones we need to loop. 

build your string using backtracking, once it passes all constraints add it to result array.

# Approach
<!-- Describe your approach to solving the problem. -->
Detect if there are any curls, if there are not, then we can just return as a base case.


Build the idx map of strings.

Begin backtracking starting at mapIdx 0 and our candidate string being empty.

if mapIdx[0] has length of > 1 ("ab") 
    loop through each value, and continue backtracking.
else ("c")
 we have found the idx of the solo character, add to candidate string and continue backtracking.

Another useful tip about our idxMap is that the size of the map will be the size of string we need to add to our result array. Therefore, when we reach the last idx of the map, we can add the result to our result array.  After pushing the candidate string to the result array, return to continue backtracking

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) to detect curls
O(n) to build the idxMap
O(2^N) for backtracking
O(nlogn) for sorting at the end

Result: O(2^N)


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) to build the map

# Code
```
function expand(s: string): string[] {

    let curls = detectCurls(s);
    if(!curls) return [s];

    let idxMap = new Map<number, string>();
    for(let i =0; i<s.length; i++){
        let idx = idxMap.size
        if(s[i] === ","){
            i++;
            continue;
        }
        if(s[i] === "{"){
            i++;
            let temp = ""
            while(s[i] !== "}"){
                 if(s[i] === ","){
                     i++;
                     continue;
                 }   
                temp += s[i++]
            }
            idxMap.set(idx, temp);
        } else {
            idxMap.set(idx, s[i]);
        }
    }

    let result: string[] = [];
    function backTrack(mapIdx: number, current: string): void {
        if(current.length === idxMap.size){
            result.push(current);
            return;
        }

        for(let i =mapIdx; i<idxMap.size; i++){
            let str = idxMap.get(i);
            if(str.length>1){
                let currentLength = 0
                while(currentLength < str.length){
                    backTrack(mapIdx + 1, current + str[currentLength])
                    currentLength++;
                }
                return;
            } else {
                backTrack(mapIdx+1, current+str);
                return;
            }
        }
    }

    backTrack(0,"");

    return result.sort();

};


function detectCurls(str: string): boolean {
    for(const char of str){
        if(char === "{") return true
    }

    return false;
}
```