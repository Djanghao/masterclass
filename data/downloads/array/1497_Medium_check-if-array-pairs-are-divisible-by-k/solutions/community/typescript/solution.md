# ✅💯🔥Simple Code🚀📌 🔥✔️Easy to understand🎯  🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** AnvarbekZiyodov
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854326/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854326/)

---

# Intuition
The goal is to pair elements in the array such that the sum of each pair is divisible by a given integer ( k ). For two integers ( a ) and ( b ), their sum ( (a + b) ) is divisible by ( k ) if the sum of their remainders when divided by ( k ) is either ( k ) or ( 0 ). This leads us to consider the remainders of each element when divided by ( k ).
# Approach
Calculate Remainders:

For each number in the array, calculate its remainder when divided by ( k ). If the remainder is negative, convert it to a positive remainder by adding ( k ).
Frequency Count:

Maintain a frequency array freq where freq[i] counts how many numbers in the array give a remainder of ( i ) when divided by ( k ).
Check Pairs:

Divisible by ( k ): If a number has a remainder of ( 0 ), it must be paired with another number that also has a remainder of ( 0 ). Therefore, freq[0] should be even.
Pairs of Remainders: For any remainder ( i ), it must be paired with ( k - i ). This means that freq[i] must equal freq[k - i].
Specifically, for ( i = 1 ) to ( k/2 ), check that freq[i] matches freq[k - i].
Handle the special case when ( k ) is even: when ( i = k/2 ), the numbers with this remainder must also be paired with each other, requiring that freq[k/2] be even.
Return Result:

If all conditions are satisfied, return true; otherwise, return false.
# Complexity
- Time complexity:
The algorithm iterates over the array to calculate remainders, leading to a complexity of ( O(n) ). It then checks the frequency counts, which takes ( O(k) ). Therefore, the overall time complexity is ( O(n + k) ). Given the constraints, this is efficient.



- Space complexity:
The space used for the frequency array is ( O(k) ). Since ( k ) can be at most ( 10^5 ) (as per the problem constraints), the space complexity is acceptable.
# Code
```javascript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const freq = new Array(k).fill(0);
        
        for (const num of arr) {
            let rem = num % k;
            if (rem < 0) {
                rem += k;
            }
            freq[rem]++;
        }
        
        if (freq[0] % 2 !== 0) {
            return false;
        }
        
        for (let i = 1; i <= Math.floor(k / 2); i++) {
            if (freq[i] !== freq[k - i]) {
                return false;
            }
        }
        
        return true;
};
```

![cat-requesting-upvotes-v0-nkwb9r1n7gyc1.webp](./images/0.webp)

