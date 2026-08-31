# Javascript DFS + Memo with explanation

**Author:** ponyoyoyo
**Votes:** 2
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/1433995/](https://leetcode.com/problems/loud-and-rich/solutions/1433995/)

---

From the richer array [[a,b]], create a map with key and adjacency list
* key = person index (b)
* adjacency list = list of people directly richer than person (push a into map.get(b))

Create answer array. From person 0 to person n - 1 (0 indexed), find the quietest person and fill it into answer array.
* getQuietest(person) method finds the quiestest person richer or equal to the given person. 
* It does so by comparing the quiet value of the given person and everyone in the person's adj list, and if the adjacent people have their own adj list, do a DFS search through it. This will cover all richer/equal to ppl. Find the min quiet value from all these people and return the index of the quietest person.
* Before every return value, store the return value into the memo map. This prevents searching through the same person again.
 
```
var loudAndRich = function(richer, quiet) {
    const map = new Map();
    for (const [rich, poor] of richer) {
        map.set(poor, (map.get(poor) || new Set()).add(rich));        
    }
    
    const memo = new Map();
    const getQuietest = (person) => {
        if (memo.has(person)) return memo.get(person);
        const richerList = map.get(person);
        let min = quiet[person];
        let quietest = person;
        if (!richerList) {
            memo.set(person, quietest);
            return quietest;
        }
        for (const rich of richerList) {         
            if (quiet[getQuietest(rich)] < min) {
                min = quiet[getQuietest(rich)];
                quietest = getQuietest(rich);
            }            
        }
        memo.set(person, quietest);
        return quietest;
    }
    const answer = [];
    for (let i=0; i<quiet.length; i++) {
        answer.push(getQuietest(i));
    }
    return answer;
};
```