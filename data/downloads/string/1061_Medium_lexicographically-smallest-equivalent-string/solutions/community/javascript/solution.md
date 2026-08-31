# JavaScript - Union Find

**Author:** CarlosBalladares
**Votes:** 6
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047568/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047568/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Represent the problem as a graph problem. Each group of characters represents a connected component. To solve this use Union Find to group the characters and chose the lexicographically smallest member of each set to be the set's representative.

# Approach
<!-- Describe your approach to solving the problem. -->
Implement Union Find. Unite all `s1[i]` and `s2[i]` for all `1 <= i <n `. Then iterate through the characters of  `baseStr` and replace each with the representative of its the group (the union find implementation should chose the smallest character as representative).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n log26 + m)$$ 
Where `n` is the length of `s1` and `s2`. `Log26` comes from the complexity of union find with path compression and there's only 26 english chars. `m` is the length of `baseStr`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(26 + m)$$ 
from the `link` map and building the answer string

# Code
```
const smallestEquivalentString = (s1, s2, baseStr) => {
    const link = {};
    const find = (a)=>{
        if(link[a] == null) link[a] = a;
        while(link[a] != a){
            link[a] = link[link[a]];
            a = link[a];
        }
        return a;
    }
    const union = (a, b)=>{
        a = find(a);
        b = find(b);
        if(a > b){
            let temp = b;
            b = a;
            a = temp;
        }
        link[b] = a;
    }
    for(let i = 0; i < s1.length; i++){
        union(s1[i], s2[i]);
    }

    let ans = "";
    for(const a of baseStr){
        ans+=find(a);
    }
    return ans;
};
```