# [Time & Memory 100%] Simulate summation + Backtracking

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1702437/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1702437/)

---

As stated in hints, bruteforce from the last letters of each word; if we set last letters then we can set the corresponding letter of result.
Since trying all possible cases is prohivitive (`O(n!)`), backtrack when we find impossible mapping, such as the case that a letter should have two different digits to make equality true. I think the idea/intuition to solve the problem is simple but the implementation part is quite demanding.

```typescript
function isSolvable(words: string[], result: string): boolean {
	// this is the hashMap to store letter -> num pairs
    const hash = new Map<string, number>()
    hash.set(undefined, Infinity)
	// filter out impossible cases that length of words is longer than that of result
    if (result.length < _.max(words.map(w => w.length))) {
        return false
    }
	// collect the letters that cannot be set to 0.
    const firstLetters = [...new Set([...words.filter(w => 1 < w.length).flatMap(w => w[0]), result[0]])]
	// reverse each word so that the last letter of each word is indexed 0 (this is just for convenience)
    words = words.map(w => w.split('').reverse().join(''))
    result = result.split('').reverse().join('')
	
    return add(hash, words, result, firstLetters)
}

function add(hash: Map<string, number>, words: string[], result: string, firstLetters: string[], nums = [0,1,2,3,4,5,6,7,8,9], carry=0) {
	// base case where there is no letter to look
    if (result.length === 0) {
        return carry === 0 && firstLetters.every(c => hash.get(c) !== 0)
    }
    const unassignedLetters = [...new Set<string>(_.compact(words.map(w => w[0]).filter(c => !hash.has(c))))]
    const mappings = permutation(unassignedLetters.length, nums)
    for (const mapping of mappings) {
		// skip invalid mappings that assigned zero to firstLetters
        if (firstLetters.some(c => hash.get(c) === 0)) {
            continue
        }
        unassignedLetters.forEach((c, i) => hash.set(c, mapping[i]))
        let remain = _.difference(nums, mapping)
        const digitSum = sumFirstLetter(hash, words) + carry
        const target = digitSum % 10
		// a flag variable to decide tracking. set it to false if current mapping between letters and digits is invalid
        let exploreFurther = true 
		// a flag variable to determine if the mapping for result[0] should be restored
        let changedResult = false
        
		if (hash.has(result[0])) {
            exploreFurther = hash.get(result[0]) === target
        } else if (remain.includes(target)) {
            hash.set(result[0], target)
            changedResult = true
            remain = remain.filter(n => n !== target)
        } else {
            exploreFurther = false
        }
        if (exploreFurther) {
            if (add(hash, words.map(w => w.slice(1)), result.slice(1), firstLetters, remain, Math.floor(digitSum / 10))) {
                return true
            }
        }
		// restore mappings that are changed in current iterations so that each iteration is indepedent (no side effect) to each other
        if (changedResult) {
            hash.delete(result[0])
        }
        unassignedLetters.forEach(c => hash.delete(c))
    }
    return false
}

function sumFirstLetter(hash: Map<string, number>, words: string[]) {
    return words.map(w => 0 < w.length ? hash.get(w[0]) : 0).reduce((s, n) => s+n, 0)
}

function permutation(k: number, nums): number[][] {
    if (k === 0) {
        return [[]]
    } else {
        const res = []
        for (let i=0; i<nums.length; i+=1) {
            const back = nums.shift()
            res.push(...permutation(k-1, nums).map(p => [back, ...p]))
            nums.push(back)
        }
        return res
    }
}
```