# Typescript | Javascript | DFS | With comments

**Author:** OsidAbu-Alrub
**Votes:** 2
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/2520866/](https://leetcode.com/problems/letter-case-permutation/solutions/2520866/)

---

```
function letterCasePermutation(s: string): string[] {
  const result = [];
  dfs([...s], result, 0);
  return result;
};

function dfs(str, result, index){
  if(index === str.length){
    result.push(str.join(""));
    return;
  }
  
  if(isNaN(Number(str[index])))
  {
    // we have two options if it is a character
    // try with character being uppercase
    str[index] = str[index].toUpperCase();
    dfs(str, result, index + 1);
    
    // try with character being lowercase
    str[index] = str[index].toLowerCase();
    dfs(str, result, index + 1);
  }
  else // if it is a number
    dfs(str, result, index + 1);
}
```