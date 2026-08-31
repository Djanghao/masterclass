# TS/JS and Python

**Author:** jitulteron9
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4611733/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4611733/)

---

# Python
```
class Solution:
    def maxLength(self, arr: List[str]) -> int:
        st = set()
        
        def overlap(s, st):
            checkForDublicate = set()

            for ch in s:
                if (ch in st) or (ch in checkForDublicate):
                    return True 
                checkForDublicate.add(ch)

            return False

        def backtrack(idx, arr):
            if idx == len(arr):
                return len(st)
            
            take = 0
            if not overlap(arr[idx], st):
                for ch in arr[idx]:
                    st.add(ch)
                take = backtrack(idx+1, arr)
                for ch in arr[idx]:
                    if ch in st:
                        st.remove(ch)

            notTake = backtrack(idx+1, arr)
            
            return max(take,notTake)
        
        return backtrack(0, arr)
```
# TS/JS

```
const set = new Set<string>()
const overlap = (set:Set<string>, s:string):boolean=>{
    const checkForDuplicate = new Set()

    for(let ch of s){
        if(set.has(ch) || checkForDuplicate.has(ch)){
            return true
        }
        checkForDuplicate.add(ch)
    }

    return false
    
}

const backtrack = (arr:string[], idx:number):number=>{
    if(idx==arr.length){
        return set.size
    }

    let take = 0
    if(!overlap(set, arr[idx])){
        for(let ch of arr[idx]){
            set.add(ch)
        }
        take = backtrack(arr,idx+1)
        for(let ch of arr[idx]){
            set.delete(ch)
        }
    }

    let notTake = backtrack(arr, idx+1)
    
    return Math.max(take, notTake)
}

function maxLength(arr: string[]): number {
    return backtrack(arr, 0)
};
```