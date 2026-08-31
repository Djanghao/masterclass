# ✅Easy to understand

**Author:** kumarnitesh88441
**Votes:** 1
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3108256/](https://leetcode.com/problems/concatenated-words/solutions/3108256/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let set=new Set(words);
    function isConcate(word){
        //base case 
        if(set.has(word)) return true;
        for(let i=0;i<word.length;i++){
            let str=word.slice(0,i+1);
            // console.log(i,str);
            if(set.has(str)){  
                let str1=word.slice(i+1);
                // console.log(i,word, str,str1)
                //recursive call;
                let res=isConcate(str1);
                if(res){ 
                    set.add(word);
                return true;
                }

            }
        }
        return false;
    }

    let con=[];
    for(let word of words){
        set.delete(word);
        if(isConcate(word)) con.push(word);
        set.add(word);
    }
    return con;
};
```