# Explanation + Code (TypeScript: 97%/57%)

**Author:** 206jko
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/4152057/](https://leetcode.com/problems/similar-string-groups/solutions/4152057/)

---

# Intuition
Think of each word as a node in a graph. Starting with the first node, remove all the nodes that are connected to it, recursively. Increment the group count, then repeat.

Although the initial intuition was to use nodes, in implementation, we'll be using a 2D array.

The first test case is a list of words `"tars"`, `"rats"`, `"arts"`, and `"star"`. Let's say they're in an array in that order, and they have respective indices.

| index | 0 | 1 | 2 | 3 | 
|--|--|--|--|--|
| word | `tars`| `rats` | `arts` | `star` |

As noted in the description, `tars` is similar to itself and `rats`. In other words, we can say `tars` points to indices `0` and `1`. Similarly, `rats` points to itself, `tars`, and `arts`, which correspond to indices `0`, `1`, and `2`. `arts` points to itself and `rats` (indices `1` and `2`). Lastly, `star` only points to itself.

We can organize this info in the following table.

```text
word   | 0 | 1 | 2 | 3 |
-------+---+---+---+---+
tars   | v | v |   |   |
rats   | v | v | v |   |
arts   |   | v | v |   |
star   |   |   |   | v |
```

Let's now replace the words with their indices:

```text
 i | 0 | 1 | 2 | 3 |
---+---+---+---+---+
 0 | v | v |   |   |
 1 | v | v | v |   |
 2 |   | v | v |   |
 3 |   |   |   | v |
```

You can now turn this into a 2D array (I'll use TypeScript here):
```TypeScript
const vectors: number[][] = [
  /*row 0: */ [0, 1],
  /*row 1: */ [0, 1, 2],
  /*row 2: */ [1, 2],
  /*row 3: */ [3],
]
```

## Traversing (pseudo code) 

We can now traverse this "graph" and count how many groups are in it.

```text
let `skip` be a set of indices to skip over
let `groups` be 0, the number of groups

for each index in the 2D array
    if index is in `skip`
        continue the loop

    increment `groups`

    let `row` be the `i`th row of the 2D array
    add `i` to `skip`
    let `queue` be copy of `row`

    let `visited` be a set
    while `queue` has items
        get item `j` from `queue`
        if `visited` has j,
            continue while loop
        get `j`th row from the 2D array, and add them to `queue`
        add `j` to `skip`
        add `j` to `visited`

return `groups`

```
## Comparing two strings

Only one of two criteria need to be satisfied for two strings to be "similar":
- The two strings differ by two chars
- The two strings are the same

Since all the strings are anagrams, when strings differ, they must differ by at least two chars.

So the pseudo code for comparing two string looks like this:

```text
given str1 and str2,
let `diff` 0, the number of differing characters 

for each character in str1 and str2
    if they're different
        increment `diff`
    if `diff` > 2
        return false
return true

``` 


# Complexity
## Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
This operation is largely two parts:
- Forming relations
- Traversing graph

The first one requires you to compare each word to every other, so the time complexity is $$O(n^2)$$. The second one requires you to run through each element of the 2D array, so this, too, is $$O(n^2)$$.

Together, it's $$O(n^2)$$ 

## Space complexity
You need to create an $$n \xD7 n$$ array, so that's $$O(n^2)$$ again.

# Code
```TypeScript
const areSameGroup = (s1: string, s2: string) => {
  let diff = 0
  for(let i = 0; i < s1.length; i++) {
    let c1 = s1[i]
    let c2 = s2[i]
    diff += +(c1 !== c2)
    if(diff > 2) {
      return false
    }
  }
  return true
}

function numSimilarGroups(strs: string[]): number {
  const unique = (new Set(strs))
  if(unique.size !== strs.length) {
    return numSimilarGroups([...unique])
  }
  const { length } = strs
  const vectorSets = []

  for(let i = 0; i < length; i++) {
    const row = []
    for(let j = 0; j < length; j++) {
      if(areSameGroup(strs[i], strs[j]) || i === j) {
        row.push(j)
      }
    }
    vectorSets.push(row)
  }
  let groupCount = 0
  const skip = new Set<number>()
  for(let i = 0; i < length; i++) {
    if(skip.has(i)) {
      continue
    }
    const queue = [...vectorSets[i]]
    groupCount++
    const visited = new Set<number>([i])
    search: while(queue.length) {
      const destination = queue.shift()
      if(visited.has(destination)) {
        continue search
      }
      visited.add(destination)
      queue.push(...vectorSets[destination])
      skip.add(destination)
    }
  }

  return groupCount
};
```