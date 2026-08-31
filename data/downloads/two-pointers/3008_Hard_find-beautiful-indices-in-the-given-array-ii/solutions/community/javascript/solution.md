# JS | KMP with generators

**Author:** michaelm12358
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/5112463/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/5112463/)

---

# Intuition
We want to run KMP to find the matching positions for both `a` and `b` within `s`. However, it is wasteful to find all matching positions ahead of time. We really should only need to keep track of one matching position at a time.

The obvious solution would be to simply run 2 KMP searches inside the same loop. The logic there is a bit messy and convoluted, though - instead, we can use generators and write the code as though we want to find all the matching positions.

Another trick we can use is to jump ahead in the array when either our `a` or `b` matching position gets significantly ahead of the other. Imagine that the first `a` match happens at the end of the string. There is no need to search the entire string for a match for `b`. Instead, we can communicate to the generator that we should skip ahead.

# Code
```
/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function(s, a, b, k) {
    function buildPrefixArray(prefix) {
        let arr = new Array(prefix.length).fill(0);

        let prefixLen = 0;
        for(let i = 1; i < prefix.length; ++i) {
            if(prefix[i] === prefix[prefixLen]) { ++prefixLen; }
            else { prefixLen = 0; }

            arr[i] = prefixLen;
        }

        return arr;
    }

    let prefixArrayA = buildPrefixArray(a);
    let prefixArrayB = buildPrefixArray(b);


    function* findNext(haystack, needle, prefixArray) {
        let i_p = 0;
        for(let i = 0; i < haystack.length; ++i) {
            if(haystack[i] === needle[i_p]) {
                if(++i_p === needle.length) {
                    i_p = prefixArray[i_p-1];
                    let jumpTo = yield i - (needle.length-1);
                    if(jumpTo && jumpTo > i) {
                        //completely restart the search at the new position
                        i = jumpTo-1;
                        i_p = 0;
                        continue;
                    }
                }
            } else {
                i_p = prefixArray[i_p];
                if(needle[i_p] === haystack[i]) {
                    ++i_p;
                } else {
                    i_p = 0;
                }
            }
        }
    }

    let aMatches = findNext(s, a, prefixArrayA);
    let bMatches = findNext(s, b, prefixArrayB);

    let i_a, i_b;

    //get the first matching position for a and b
    i_a = aMatches.next().value;
    if(i_a === undefined) {
        return [];
    }
    i_b = bMatches.next(Math.max(0, i_a-k)).value;
    if(i_b === undefined) {
        return [];
    }

    let result = [];
    while(true) {
        if(Math.abs(i_a-i_b) <= k) {
            result.push(i_a);
            i_a = aMatches.next().value;
            if(i_a === undefined) {
                break;
            }

            continue;
        }

        if((i_a-i_b) > k) {
            //our matching position for a is significantly ahead of b, so advance b
            i_b = bMatches.next(i_a-k).value;
            if(i_b === undefined) {
                break;
            }
        } else {
            //our matching position for b is significantly ahead of a, so advance a
            i_a = aMatches.next(i_b-k).value;
            if(i_a === undefined) {
                break;
            }
        }
    }

    return result;
};
```