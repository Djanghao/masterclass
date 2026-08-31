# Simple approve JS,TS

**Author:** huancnttuet
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5846789/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5846789/)

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
```typescript []
function countOfSubstrings(word: string, k: number): number {
    const len = 5 + k;
    
    if(word.length < len) {
        return 0;
    }

    const vovels = ['a', 'u', 'e', 'o', 'i']

    let count = 0;

    let left = 0;
    let right = len;

    while(right <= word.length) {
        let str = word.substring(left, right);

        let isA = str.indexOf('a') > -1;
        let isE = str.indexOf('e') > -1;
        let isO = str.indexOf('o') > -1;
        let isU = str.indexOf('u') > -1;
        let isI = str.indexOf('i') > -1;

        str = str.replaceAll('a', '');
        str = str.replaceAll('e', '');
        str = str.replaceAll('o', '');
        str = str.replaceAll('i', '');
        str = str.replaceAll('u', '');

        let nonVowel = str.length;

        if(!isA || !isE || !isI || !isU || !isO) {
            for(let i = right; i < word.length; i++) {
                if(!vovels.includes(word[i])) {

                    if(nonVowel === k) {
                        break;
                    } else {
                        nonVowel++;
                       
                    }
                }

                if(word[i] === 'a') {
                    isA = true;
                }

                if(word[i] === 'e') {
                    isE = true;
                }

                if(word[i] === 'o') {
                    isO = true;
                }

                if(word[i] === 'i') {
                    isI = true;
                }

                if(word[i] === 'u') {
                    isU = true;
                }

                if(isA && isE && isO && isU && isI && nonVowel === k) {
                    count++;
                }
            }
        } else {
            
            // console.log('remove', str)

            if(str.length === k) {
                count++;

                for(let i = right; i < word.length; i++) {
                    if(vovels.includes(word[i])) {
                        count++;
                    } else {
                        break;
                    }
                }
            } else {
                for(let i = right; i < word.length; i++) {
                    if(!vovels.includes(word[i])) {
                        nonVowel++;
                    }

                    if(nonVowel === k) {
                        count++;
                    }

                    if(nonVowel > k) {
                        break;
                    }
                }
            }
        }
        
        left++;
        right++;
    }

    return count;
};
```