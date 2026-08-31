# Golang, time O(n), space O(1)

**Author:** Aldirane
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/6123261/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/6123261/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
U must check every uniq combination of charcs with count >= k.
Using two pointers to keep current count of uniq charcs.

# Approach
<!-- Describe your approach to solving the problem. -->
1) Loop through total count of uniq charcs with count >= k.
2) Inner loop, u add every current (right pointer) charcs in s, to current uniq charcs map count, actual only for current number uniq combination charcs of outer loop.
3) If current uniq charcs map count has more than outer loop uniq combination number. We will loop through map and sum up its counts of charcs. However, if count of charc is less than k. We won't compare it with global variable of max len of substring.
4) Lastly, after we looped through map, we will loop moving left pointer, until our current number of uniq charcs even with outer curent number of uniq charcs (i).

Check the code bellow. Look up for corner cases where right pointer comes to end of len(s). Consider it as meeting the if condition of reaching needed count of uniq charcs for summing up its counts and comparing it with global variable - answer of max len of substring. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
time complexity O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity O(1). U have maximum of 26 ascii charcs letters for outer loop.

# Code
```golang []
func longestSubstring(s string, k int) int {
    charcsToCnt := make(map[int32]int)
    uniqCharcWithK := make(map[int32]struct{})
    
    for _, r := range s {
        charcsToCnt[r]++

        if cnt := charcsToCnt[r]; cnt >= k {
            uniqCharcWithK[r] = struct{}{}
        }
    }

    maxLenSubStr := 0

    for i := 1; i <= len(uniqCharcWithK); i++ {
        charcsToCnt = make(map[int32]int)
        uniqCnt, left, right := 0, 0, 0

        for right < len(s) {
            // \u0438\u0434\u0435\u043C \u043F\u0440\u0430\u0432\u043E\u0439 \u0433\u0440\u0430\u043D\u0438\u0446\u0435\u0439, \u043F\u043E\u043A\u0430 uniqCnt < i
            if _, ok := charcsToCnt[int32(s[right])]; !ok {
                uniqCnt++
            }
            
            charcsToCnt[int32(s[right])]++


            if uniqCnt > i || right == len(s)-1 {
                // \u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0432\u0441\u044E \u043C\u0430\u043F\u0443, \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043A\u043E\u043B-\u0432\u043E. \u0415\u0441\u043B\u0438 \u0445\u043E\u0442\u044C 1 \u043C\u0435\u043D\u044C\u0448\u0435 k, \u043D\u0435 \u0443\u0447\u0442\u0435\u043C \u044D\u0442\u0443 \u043F\u043E\u0434\u0441\u0442\u0440\u043E\u043A\u0443
                lenSubStr := 0

                for c, cnt := range charcsToCnt {
                    // \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0439 \u0434\u043E\u0431\u0430\u0432\u0438\u0432\u0448\u0438\u0439\u0441\u044F \u0447\u0430\u0440\u0441
                    if uniqCnt > i && c == int32(s[right]) {
                        continue
                    }
                    
                    if cnt < k {
                        lenSubStr = 0

                        break
                    }

                    lenSubStr += cnt
                }

                if lenSubStr > maxLenSubStr {
                    maxLenSubStr = lenSubStr
                }

                if right != len(s)-1 {
                    // \u0438\u0434\u0435\u043C left \u043F\u043E\u043A\u0430 \u043D\u0435\u0443\u0431\u0435\u0440\u0435\u043C \u043E\u0434\u0438\u043D \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0447\u0430\u0440\u0441, \u043F\u043E\u043F\u0443\u0442\u043D\u043E \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0432 charcsToCnt \u043A\u0430\u0443\u043D\u0442\u044B \u0447\u0430\u0440\u0441\u043E\u0432
                    for uniqCnt > i {
                        charcsToCnt[int32(s[left])]--

                        if cnt := charcsToCnt[int32(s[left])]; cnt == 0 {
                            delete(charcsToCnt, int32(s[left]))
                            uniqCnt--
                            left++

                            break
                        }

                        left++
                    }
                }
            }

            right++
        }
    }

    return maxLenSubStr
}
```