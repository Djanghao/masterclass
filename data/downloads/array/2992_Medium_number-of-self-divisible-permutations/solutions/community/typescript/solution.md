# Backtracking Solution

**Author:** amikudev11
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/5221169/](https://leetcode.com/problems/number-of-self-divisible-permutations/solutions/5221169/)

---

# Complexity
- Time complexity:  O(n!)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity:  O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->



# Code
```
function selfDivisiblePermutationCount(n: number): number {
    const set = new Set<number>();
    const candidate: number[] = [];
    const nextIndex: number = 0;
    const ans = {ans: 0};

    for(let i=1; i<=n; i++) {
        set.add(i);
    }

    helper(n, candidate, nextIndex, set, ans);

    return ans.ans;
};


function helper(n: number, candidate: number[], nextIndex: number, 
    set: Set<number>, ans: {ans: number}
) {
    if(nextIndex === n) {
        ans.ans++;
        return;
    }
    const arr = Array.from(set.keys());

    for(const num of arr) {
        if(gcd(num, nextIndex+1) !== 1  ){
            continue;
        }

        candidate.push(num);
        nextIndex++;
        set.delete(num);



        helper(n, candidate, nextIndex, set, ans);

        candidate.pop();
        nextIndex--;
        set.add(num);
    }

}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```