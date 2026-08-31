# O(n) for k != 1

**Author:** oqq
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4967951/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/4967951/)

---

```
function gcd(a: number, b: number ): number {
    let t = 0
    while (b!=0) {
        t = b
        b = a % b
        a = t
    }
    return a
}

function subarrayGCD(nums: number[], k: number): number {
    let result = 0
    
    if (k==1) {
        for (let i=0; i<nums.length; i++) { 
            for (let j=i; j<nums.length; j++) {
                nums[i] = gcd(nums[i], nums[j])
                if (nums[i] < k) {
                    break
                }
                if (nums[i] == k) {
                    result += nums.length - j
                    break
                }
            }
        }
    } else {
        let tail = 0
        let lastGCD = nums[0]

        for (let num of nums) {
            if (num % k == 0) {
                lastGCD = tail == 0 ? num : gcd(lastGCD, num)
                if (lastGCD == k) {
                    result += tail
                }
                if (num == k) {
                    result += 1
                }
                tail += 1
            } else {
                tail = 0
                lastGCD = num
            }
        }
    }

    return result
}
```