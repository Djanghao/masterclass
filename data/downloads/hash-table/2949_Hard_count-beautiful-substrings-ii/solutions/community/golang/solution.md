# Solution in Golang. Prefix sum and in-place answer calculation

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4529199/](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4529199/)

---

# Intuition & Approach

In order to understand which sub-strings have the same amount of vowels an consonants we keep a running sum of the "balance" between them.

Once we hit a case where we same the same balance before \u2014  we add all beautiful sub-strings it produces to the result.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
func beautifulSubstrings(s string, k int) int64 {
    isVowel := func(v byte) bool {
        return v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u'
    }

    var sum int
    var ans int64
    sameDiffs := map[int][]int{0: []int{-1} /* at index -1 in the origina string we have sum of 0 */}

    for i := 0; i < len(s); i++ {
        if isVowel(s[i]) {
            sum++
        } else {
            sum--
        }

        l := sameDiffs[sum]

        if len(l) > 0 {
            if k == 1 {
                ans += int64(len(l))
            } else {
                for j := 0; j < len(l); j++ {
                    vowels := (i-l[j])/2
                    if vowels * vowels % k == 0 {
                        ans++
                    }
                }
            }

        }
        sameDiffs[sum] = append(l, i)
    }
    return ans
}
