# 2 steps solution - easy understanding

**Author:** Gang-Li
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/2951485/](https://leetcode.com/problems/split-message-based-on-limit/solutions/2951485/)

---

# Intuition
  2 steps to split message

# Approach
  Step 1: calculate an array whose item is the chars     amount that can be spliited at a specific suffix length.
     Step 2: calcuate the total number of splitted message. Based on the array from step 1, copy meessage into final answer array.
 

# Complexity
- Time complexity:
  O(N)

- Space complexity:
  O(N)

# Code
```
/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function (message, limit) {
  if (limit <= 5) return [];

  const MESSAGE_LEN = message.length;
  const NINE = 9;

  /* 
  // the suffix is in format <index/total>, both index and total are number type

  When given digits value, calcuate an array.
  Item of the array is the total chars can be spliited from message, at this level the suffix is same length.
  But the next item of the array, the suffix length will be ONE more than previous. 

  digits: digit length of the [total number] of splitted message
   value 1: means range of [1, 9] messages allowed to be splitted.
   value 2: means range of [1, 99] messages allowed to be splitted.
   value 3: means range of [1, 999] messages allowed to be splitted.
   ...etc
   */
  function calcuate(digits) {
    let sum = 0;
    let charsAmountArr = [];

    // the suffix is in format <index/total>, both index and total are number type
    for (let idxLen = 1; idxLen <= digits; idxLen++) {
      let countCanSplit = NINE * Math.pow(10, idxLen - 1);
      let charsCanSplit = countCanSplit * (limit - 3 - digits - idxLen);
      charsAmountArr.push(charsCanSplit);
      sum += charsCanSplit;
    }

    if (sum < MESSAGE_LEN) return [];
    else return charsAmountArr;
  }

  let charsAmountArr = [];
  for (let i = 1; i <= limit - 5; i++) {
    charsAmountArr = calcuate(i);
    if (charsAmountArr.length > 0) break;
  }
  if (charsAmountArr.length < 1) return [];

  // the suffix is in format <index/total>, both index and total are number
  // Now, we need calcuate the total value
  let remaining = MESSAGE_LEN;
  let arrLen = charsAmountArr.length;
  for (let i = 0; i < arrLen - 1; i++) remaining -= charsAmountArr[i];
  let base = Math.pow(10, arrLen - 1) - 1;
  let chars = limit - 3 - 2 * arrLen;
  let total = base + Math.ceil(remaining / chars);

  let ans = [];
  let copyStartIndex = 0;
  let splitIndex = 1;
  for (let i = 0; i < arrLen; i++) {
    let charsAmount = charsAmountArr[i];
    let chars = limit - 3 - arrLen - (i + 1);
    for (let j = 0; j < charsAmount / chars; j++) {
      let copyEndIdx = Math.min(copyStartIndex + chars, MESSAGE_LEN);
      ans.push(
        `${message.substring(
          copyStartIndex,
          copyEndIdx
        )}<${splitIndex}/${total}>`
      );
      if (copyEndIdx === MESSAGE_LEN) return ans;

      splitIndex++;
      copyStartIndex = copyEndIdx;
    }
  }

  return ans;
};
```