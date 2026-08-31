# JS [ Realized it can be solved by KMP after the contest ]

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788503/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788503/)

---

# Code
```javascript []
/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff ) 				                                     
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \\ ' \\/ _` | '_/ _` / _` \\ V  V / _` || |
 |___/_||_\\__,_|_| \\__,_\\__,_|\\_/\\_/\\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Portfolio:https://manu-bharadwaj-portfolio.vercel.app/  */
/* ----------------------------------------------------------- */

var findPattern = function(text, pattern) {
    let textLen = text.length;
    let patternLen = pattern.length;
    let suffixArr = new Array(patternLen).fill(0);
    for (let idx = 1; idx < patternLen; idx++) {
        let prevMatch = suffixArr[idx - 1];
        while (prevMatch > 0 && pattern[prevMatch] !== pattern[idx]) {
            prevMatch = suffixArr[prevMatch - 1];
        }
        suffixArr[idx] = prevMatch + +(pattern[prevMatch] === pattern[idx]);
    }

    let matchLengths = new Array(textLen).fill(0);
    matchLengths[0] = +(text[0] === pattern[0]);
    for (let idx = 1; idx < textLen; idx++) {
        let prevMatch = matchLengths[idx - 1];
        while (prevMatch > 0 && text[idx] !== pattern[prevMatch]) {
            prevMatch = suffixArr[prevMatch - 1];
        }
        matchLengths[idx] = prevMatch + +(text[idx] === pattern[prevMatch]);
    }
    return matchLengths;
};

var minValidStrings = function(vocab, targetStr) {
    let targetLen = targetStr.length;
    let vocabSize = vocab.length;
    let stepTracker = new Array(targetLen + 1).fill(10 ** 9);
    stepTracker[0] = 0;

    let lookupMap = Array.from({ length: targetLen }).map(_ => new Set());
    for (let word of vocab) {
        let matches = findPattern(targetStr, word);
        for (let idx = 0; idx < matches.length; idx++) {
            if (matches[idx] > 0) {
                lookupMap[idx].add(matches[idx]);
            }
        }
    }

    for (let idx = 0; idx < targetLen; idx++) {
        let matchSet = lookupMap[idx];
        for (let matchLength of matchSet) {
            stepTracker[idx + 1] = Math.min(stepTracker[idx + 1], stepTracker[idx + 1 - matchLength] + 1);
        }
    }

    return stepTracker[targetLen] === 10 ** 9 ? -1 : stepTracker[targetLen];
};

```