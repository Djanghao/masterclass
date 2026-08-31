# simple php solution

**Author:** xarchencomo
**Votes:** 0
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5821406/](https://leetcode.com/problems/report-spam-message/solutions/5821406/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String[] $message
     * @param String[] $bannedWords
     * @return Boolean
     */
    function reportSpam($message, $bannedWords) {
        $hashWordsMap = [];
        $bannedWordsCounter = 0;

        foreach($bannedWords as $word){
            $hashWordsMap[$word] = true;
        }

        foreach($message as $word){
            if(isset($hashWordsMap[$word])){
                ++$bannedWordsCounter;
            };
            if($bannedWordsCounter > 1){
                return true;
            }
        }

        // O(m + n) ~ O (m+n)
        return false;
    }
}
```